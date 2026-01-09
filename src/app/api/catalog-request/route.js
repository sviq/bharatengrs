import { catalogRequestSchema, sanitizeForEmail } from '@/lib/validations';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ========================================
// RATE LIMITING (In-Memory)
// ========================================
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 catalog requests per minute per IP

function getRateLimitKey(req) {
  // Try to get real IP from headers (for production behind proxies)
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIp || 'unknown';
}

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(identifier) || [];

  // Filter out old requests outside the time window
  const recentRequests = userRequests.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfter: Math.ceil((recentRequests[0] + RATE_LIMIT_WINDOW - now) / 1000),
    };
  }

  // Add current request and update map
  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);

  // Cleanup old entries periodically
  if (Math.random() < 0.01) {
    cleanupRateLimitMap();
  }

  return { allowed: true };
}

function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, timestamps] of rateLimitMap.entries()) {
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
    if (recent.length === 0) {
      rateLimitMap.delete(key);
    } else {
      rateLimitMap.set(key, recent);
    }
  }
}

// ========================================
// POST HANDLER
// ========================================
export async function POST(req) {
  try {
    // 1. RATE LIMITING CHECK
    const rateLimitKey = getRateLimitKey(req);
    const rateLimitResult = checkRateLimit(rateLimitKey);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
          retryAfter: rateLimitResult.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString(),
          },
        }
      );
    }

    // 2. PARSE REQUEST BODY
    let data;
    try {
      data = await req.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    // 3. HONEYPOT CHECK (bot detection)
    // If 'website' field is filled, it's likely a bot
    if (data.website && data.website.trim().length > 0) {
      console.log('Bot detected via honeypot');
      // Return success to fool the bot, but don't send email
      return NextResponse.json({ success: true });
    }

    // 4. SERVER-SIDE VALIDATION with Zod
    const validationResult = catalogRequestSchema.safeParse(data);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // 5. SANITIZE DATA (prevent email header injection)
    const sanitizedData = {
      firstName: sanitizeForEmail(validatedData.firstName),
      lastName: sanitizeForEmail(validatedData.lastName),
      email: sanitizeForEmail(validatedData.email),
      phone: validatedData.phone ? sanitizeForEmail(validatedData.phone) : '',
    };

    // 6. VERIFY ENVIRONMENT VARIABLES
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // 7. SEND EMAIL WITH CATALOG/BROCHURE
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email to admin/company
    await transporter.sendMail({
      from: {
        name: 'Bharat Engineers Website',
        address: process.env.MAIL_USER,
      },
      to: 'evoting0007@gmail.com',
      replyTo: sanitizedData.email,
      subject: '📘 New Product Catalog Request',

      html: `
  <div style="
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f6f8;
    padding: 30px 15px;
  ">
    <div style="
      max-width: 620px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    ">

      <!-- HEADER -->
      <div style="
        
        padding: 20px 24px;
        color: #000000;
      ">
        <h1 style="
          margin: 0;
          font-size: 20px;
          font-weight: bold;
        ">
          Bharat Engineers
        </h1>
        <p style="
          margin: 4px 0 0;
          font-size: 13px;
          opacity: 0.9;
        ">
          New Product Catalog Request
        </p>
      </div>

      <!-- BODY -->
      <div style="padding: 24px;">
        <p style="
          margin: 0 0 16px;
          font-size: 14px;
          color: #333333;
        ">
          A visitor has requested the product catalog via the website.
          Below are the submitted details:
        </p>

        <!-- DATA TABLE -->
        <table width="100%" cellpadding="0" cellspacing="0" style="
          border-collapse: collapse;
          font-size: 14px;
          color: #333333;
        ">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; width: 140px;">
              Name
            </td>
            <td style="padding: 10px 0;">
              ${sanitizedData.firstName} ${sanitizedData.lastName}
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 0; font-weight: bold;">
              Email
            </td>
            <td style="padding: 10px 0;">
              <a href="mailto:${
                sanitizedData.email
              }" style="color: #f97316; text-decoration: none;">
                ${sanitizedData.email}
              </a>
            </td>
          </tr>

          ${
            sanitizedData.phone
              ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold;">
              Phone
            </td>
            <td style="padding: 10px 0;">
              ${sanitizedData.phone}
            </td>
          </tr>
          `
              : ''
          }
        </table>

        <!-- ACTION NOTE -->
        <div style="
          margin-top: 24px;
          padding: 16px;
          background-color: #f9fafb;
          border-left: 4px solid #f97316;
          font-size: 13px;
          color: #444444;
        ">
          👉 <strong>Action Required:</strong><br/>
          Please send the latest product catalog PDF to the customer’s email address.
        </div>
      </div>

      <!-- FOOTER -->
      <div style="
        background-color: #f4f6f8;
        padding: 16px 24px;
        font-size: 12px;
        color: #777777;
        text-align: center;
      ">
        <p style="margin: 0;">
          This email was generated automatically from the
          <strong>Bharat Engineers</strong> website.
        </p>
        <p style="margin: 6px 0 0;">
          Do not reply to this email directly.
        </p>
      </div>

    </div>
  </div>
  `,
    });

    // Email to user with catalog/brochure
    await transporter.sendMail({
      from: `"Bharat Engineers" <${process.env.MAIL_USER}>`,
      to: sanitizedData.email,
      subject: 'Your Bharat Engineers Catalog',

      attachments: [
        {
          filename: 'Bharat_Engineers_Catalog.pdf',
          path: `https://bharatengrs.netlify.app/assets/Bharat_profile.pdf`,
          contentType: 'application/pdf',
        },
      ],

      html: `
<div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">

  <!-- HEADER -->
  <h2 style="color: #1f2937; border-bottom: 3px solid #f97316; padding-bottom: 12px; margin-top: 0;">
    ${sanitizedData.firstName}, your product catalog is ready 🚀
  </h2>

  <!-- INTRO -->
  <p style="color: #374151; line-height: 1.7; margin: 20px 0;">
    Thank you for your interest in <strong>Bharat Engineers</strong>.
    We’ve attached our complete product catalog so you can explore
    <strong>industrial-grade engineering solutions</strong> designed for performance,
    reliability, and long-term value.
  </p>

  <!-- VALUE SECTION -->
  <div style="background-color: #fff7ed; padding: 16px; border-radius: 8px; margin: 24px 0;">
    <p style="margin: 0; color: #9a3412; font-weight: bold;">
      🔍 What you’ll find inside the catalog:
    </p>
    <ul style="margin: 12px 0 0; padding-left: 20px; color: #7c2d12; line-height: 1.6;">
      <li>Detailed technical specifications</li>
      <li>Product dimensions & performance data</li>
      <li>Application use-cases</li>
      <li>Manufacturing & quality standards</li>
    </ul>
  </div>

  <!-- CUSTOMER DETAILS -->
  <div style="background-color: #f9fafb; padding: 14px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 6px 0; color: #374151;">
      <strong>📧 Email:</strong> ${sanitizedData.email}
    </p>
    ${
      sanitizedData.phone
        ? `<p style="margin: 6px 0; color: #374151;"><strong>📞 Phone:</strong> ${sanitizedData.phone}</p>`
        : ''
    }
  </div>

  <!-- CTA -->
  <p style="color: #374151; line-height: 1.7; margin: 20px 0;">
    If you’d like:
    <br>✔ pricing details
    <br>✔ custom solutions
    <br>✔ technical consultation
    <br><br>
    Simply <strong>reply to this email</strong> and our engineering team will assist you.
  </p>

  <!-- TRUST / BRAND -->
  <div style="margin: 30px 0; padding: 16px; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 6px;">
    <p style="margin: 0; color: #1e3a8a; font-weight: bold;">
      Why Bharat Engineers?
    </p>
    <p style="margin: 8px 0 0; color: #1e40af; line-height: 1.6;">
      Trusted by industries for precision engineering, robust manufacturing,
      and dependable after-sales support.
    </p>
  </div>

  <!-- SIGNATURE -->
  <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    <p style="margin: 4px 0; color: #1f2937;"><strong>Warm regards,</strong></p>
    <p style="margin: 4px 0; color: #1f2937;"><strong>Bharat Engineers Pvt. Ltd.</strong></p>
    <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Vadodara, Gujarat, India</p>
  </div>

  <!-- FOOTER -->
  <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center;">
    <p style="margin: 0;">
      This email was sent because you requested our product catalog via our website.
    </p>
  </div>

</div>
`,
    });

    // 8. SUCCESS RESPONSE
    return NextResponse.json({
      success: true,
      message: 'Catalog request received. Check your email!',
    });
  } catch (error) {
    // 9. ERROR HANDLING
    console.error('Catalog request error:', error);

    // Don't expose detailed error messages to client
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
