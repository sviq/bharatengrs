import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // ------------------------
    // SEND EMAIL ONLY
    // ------------------------
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
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Inquiry:</strong> ${data.inquiry}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail Error:', error);
    return NextResponse.json({ success: false, message: 'Email failed' }, { status: 500 });
  }
}
