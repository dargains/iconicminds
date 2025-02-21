"use server";

import nodemailer from "nodemailer";

export async function sendEmail(to: string, subject: string, message: string) {
  if (!to || !subject || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Your Name" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return { success: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { error: "Failed to send email" };
  }
}
