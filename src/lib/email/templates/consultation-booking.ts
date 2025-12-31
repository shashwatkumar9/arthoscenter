export interface ConsultationEmailData {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  meetingLink?: string;
  orderId: string;
  amount: number;
}

export function generateConsultationConfirmationEmail(data: ConsultationEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Consultation Confirmed!</h1>
              <p style="color: #e0e7ff; margin: 10px 0 0; font-size: 16px;">Your online consultation with Dr. Gurudeo Kumar</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
                Dear ${data.patientName},
              </p>
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Thank you for booking an online consultation with Arthoscenter. Your appointment has been confirmed.
              </p>

              <!-- Appointment Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; border-radius: 8px; margin: 30px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 15px;">Appointment Details</h2>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Date:</td>
                        <td style="color: #1f2937; font-weight: bold; font-size: 14px; padding: 8px 0;">${data.appointmentDate}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Time:</td>
                        <td style="color: #1f2937; font-weight: bold; font-size: 14px; padding: 8px 0;">${data.appointmentTime}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Doctor:</td>
                        <td style="color: #1f2937; font-weight: bold; font-size: 14px; padding: 8px 0;">Dr. Gurudeo Kumar</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Order ID:</td>
                        <td style="color: #1f2937; font-weight: bold; font-size: 14px; padding: 8px 0;">${data.orderId}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; padding: 8px 0;">Amount Paid:</td>
                        <td style="color: #059669; font-weight: bold; font-size: 14px; padding: 8px 0;">₹${data.amount / 100}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${data.meetingLink ? `
              <!-- Meeting Link -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${data.meetingLink}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                      Join Video Consultation
                    </a>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Preparation Instructions -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 30px 0;">
                <h3 style="color: #92400e; font-size: 16px; margin: 0 0 10px;">Before Your Consultation:</h3>
                <ul style="color: #78350f; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Keep your medical records and test reports ready</li>
                  <li>List down all your symptoms and concerns</li>
                  <li>Ensure stable internet connection and webcam access</li>
                  <li>Join 5 minutes before the scheduled time</li>
                </ul>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                If you need to reschedule or have any questions, please contact us at:
              </p>
              <p style="color: #2563eb; font-size: 16px; line-height: 1.6; margin: 10px 0;">
                📞 +91 98765 43210<br>
                ✉️ info@arthoscenter.com
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                We look forward to helping you on your journey to better health.
              </p>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
                Best regards,<br>
                <strong>Team Arthoscenter</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px;">
                Arthoscenter - Bihar's Leading Orthopaedic Center
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Near AIIMS, Patna, Bihar 800001
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function generateAdminNotificationEmail(data: ConsultationEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Booking</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2>New Consultation Booking</h2>
  <p>A new online consultation has been booked.</p>

  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Patient Name:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${data.patientName}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Email:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${data.patientEmail}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Phone:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${data.patientPhone}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Date & Time:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${data.appointmentDate} at ${data.appointmentTime}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Order ID:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${data.orderId}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;"><strong>Amount:</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">₹${data.amount / 100}</td>
    </tr>
  </table>

  <p>Please ensure the consultation is scheduled in Calendly.</p>
</body>
</html>
  `;
}
