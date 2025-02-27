import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, userId, company } = await req.json();

    if (!email || !userId || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true, // Log detailed email output
      logger: true, // Enable Nodemailer logging
    });

    const confirmLink = `https://iconicminds.pt/confirm?user=${userId}&company=${company}`;

    const mailOptions = {
      from: `"Iconic Minds" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirm Your Registration",
      html: `
        <p>Hello,</p>
        <p>Thank you for registering! Please confirm your email by clicking the link below:</p>
        <a href="${confirmLink}">Confirm Email</a>
        <p>If you didn’t request this, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${email}`);

    return NextResponse.json(
      { success: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
