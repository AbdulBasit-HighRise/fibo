import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, subject } = body;

    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailPassword) {
      return NextResponse.json(
        { success: false, error: "SMTP Email Password is missing on the server configuration." },
        { status: 500 }
      );
    }

    // 🎯 Hostinger SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", 
      port: 465,                  // Secure SSL port
      secure: true,               
      auth: {
        user: "info@highrisedigital.io", 
        pass: emailPassword,      // 👈 Environment variable se secure connect ho raha hai
      },
    });

    // 🚀 Email Payload Setup
    const mailOptions = {
      from: `"High Rise Contact" <info@highrisedigital.io>`, 
      to: "info@highrisedigital.io",                         
      subject: subject || `Sticky Sticker Inquiry: ${service}`,
      html: `
        <div style="font-family: sans-serif; padding: 25px; color: #1c1917; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 16px;">
          <h2 style="color: #2563eb; font-size: 20px; margin-bottom: 20px; border-b: 1px solid #f4f4f5; padding-bottom: 10px;">🚀 New Lead Captured</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #71717a; width: 140px;">Client Name:</td>
              <td style="padding: 6px 0; color: #09090b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #71717a;">Client Email:</td>
              <td style="padding: 6px 0; color: #09090b;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #71717a;">Phone Number:</td>
              <td style="padding: 6px 0; color: #09090b;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #71717a;">Service Interest:</td>
              <td style="padding: 6px 0; color: #09090b;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #71717a; margin-bottom: 8px;">Message:</p>
            <div style="background: #f4f4f5; padding: 15px; border-radius: 12px; color: #27272a; font-size: 14px; line-height: 1.6;">
              ${message}
            </div>
          </div>
        </div>
      `,
    };

    // Send execution
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}