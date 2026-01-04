'use client';

import { CalendlyWidget } from '@/components/calendly/CalendlyWidget';
import { CheckCircle2, Video, Clock, CreditCard, FileText } from 'lucide-react';

export default function BookAppointmentPage() {
  // TODO: Replace with your actual Calendly URL
  const calendlyUrl = 'https://calendly.com/your-username/30min';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Online Consultation
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Schedule a 15-minute video consultation with Dr. Gurudeo Kumar
            </p>
            <div className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-2xl">
              ₹999 for 15 minutes
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What's Included in Your Consultation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Video Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Face-to-face consultation via Google Meet
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">30 Minutes</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated time to discuss your condition
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Prescription</h3>
                <p className="text-gray-600 text-sm">
                  Digital prescription if needed
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Follow-up Plan</h3>
                <p className="text-gray-600 text-sm">
                  Detailed treatment recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Preferred Date & Time
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <CalendlyWidget url={calendlyUrl} styles={{ height: '750px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Select Date & Time</h3>
                  <p className="text-gray-600">
                    Choose a convenient slot from Dr. Kumar's available schedule
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fill Your Details</h3>
                  <p className="text-gray-600">
                    Provide your contact information and describe your medical concern
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Make Payment</h3>
                  <p className="text-gray-600">
                    Pay securely via Razorpay (₹999) to confirm your booking
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Receive Confirmation</h3>
                  <p className="text-gray-600">
                    Get email and WhatsApp confirmation with Google Meet link
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Join Your Consultation</h3>
                  <p className="text-gray-600">
                    Click the Google Meet link at your scheduled time to meet Dr. Kumar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Important Notes:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Please ensure you have a stable internet connection and a device with camera and microphone
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Have your medical reports, X-rays, and MRI scans ready (if applicable)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Join the call 5 minutes before your scheduled time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Cancellations must be made at least 24 hours in advance for a full refund
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    For emergency cases, please call +91 72580 65424 directly
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
