import { createTransporter, EMAIL_FROM, ADMIN_EMAIL } from './config';
import {
  generateConsultationConfirmationEmail,
  generateAdminNotificationEmail,
  type ConsultationEmailData,
} from './templates/consultation-booking';

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send an email using SMTP
 */
export async function sendEmail({ to, subject, html, text }: SendEmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();

    if (!transporter) {
      console.warn('Email not sent: SMTP not configured');
      return false;
    }

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for plain text
    });

    console.log(`Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Send consultation booking confirmation emails
 */
export async function sendConsultationBookingEmails(data: ConsultationEmailData): Promise<{
  patientEmailSent: boolean;
  adminEmailSent: boolean;
}> {
  const results = {
    patientEmailSent: false,
    adminEmailSent: false,
  };

  // Send confirmation to patient
  results.patientEmailSent = await sendEmail({
    to: data.patientEmail,
    subject: 'Consultation Confirmed - Arthoscenter',
    html: generateConsultationConfirmationEmail(data),
  });

  // Send notification to admin
  results.adminEmailSent = await sendEmail({
    to: ADMIN_EMAIL,
    subject: `New Consultation Booking - ${data.patientName}`,
    html: generateAdminNotificationEmail(data),
  });

  return results;
}

/**
 * Send contact form submission email
 */
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
  `;

  return await sendEmail({
    to: ADMIN_EMAIL,
    subject: `Contact Form: ${data.subject}`,
    html,
  });
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(email: string, resetToken: string): Promise<boolean> {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

  const html = `
    <h2>Password Reset Request</h2>
    <p>You requested to reset your password for your Arthoscenter account.</p>
    <p>Click the link below to reset your password:</p>
    <p><a href="${resetUrl}" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Reset Password</a></p>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request this, please ignore this email.</p>
    <p>Best regards,<br>Team Arthoscenter</p>
  `;

  return await sendEmail({
    to: email,
    subject: 'Password Reset Request - Arthoscenter',
    html,
  });
}
