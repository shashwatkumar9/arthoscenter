import nodemailer from 'nodemailer';

// Create SMTP transporter
export const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn('SMTP credentials not configured. Email functionality disabled.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export const EMAIL_FROM = process.env.SMTP_FROM || 'Arthoscenter <noreply@arthoscenter.com>';
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@arthoscenter.com';
