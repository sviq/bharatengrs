import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactFormSchema, sanitizeForEmail, sanitizeHtmlForEmail } from '@/lib/validations';

// ========================================
// RATE LIMITING (In-Memory)
// ========================================
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 submissions per minute per IP

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
    const validationResult = contactFormSchema.safeParse(data);

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
      phone: sanitizeForEmail(validatedData.phone),
      inquiry: sanitizeForEmail(validatedData.inquiry),
      message: sanitizeHtmlForEmail(validatedData.message),
    };

    // 6. VERIFY ENVIRONMENT VARIABLES
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // 7. SEND EMAIL
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: 'evoting0007@gmail.com',
      replyTo: sanitizedData.email,
      subject: `New Contact Form: ${sanitizedData.inquiry}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #050f47; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Name:</strong> 
              ${sanitizedData.firstName} ${sanitizedData.lastName}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Phone:</strong> 
              ${sanitizedData.phone}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Inquiry Type:</strong> 
              ${sanitizedData.inquiry}
            </p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${sanitizedData.message}</p>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
            Sent from Bharat Engineers website contact form
          </p>
        </div>
      `,
    });

    // 8. SUCCESS RESPONSE
    return NextResponse.json({ success: true });
  } catch (error) {
    // 9. ERROR HANDLING
    console.error('Contact form error:', error);

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
