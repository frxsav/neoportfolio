'use server';
import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({ email, sendTo, subject, message }) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Errore di verifica del server SMTP:', error);
    return;
  }

  const info = await transporter.sendMail({
    from: email,
    to: sendTo || SITE_MAIL_RECEIVER,
    subject: subject,
    text: message,
  });
  return info;
}
