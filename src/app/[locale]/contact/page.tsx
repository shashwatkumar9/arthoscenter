'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              We're here to help. Reach out to us for appointments, inquiries, or any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                  +91 98765 43210
                </a>
                <p className="text-gray-600 mt-2 text-sm">Mon-Sat, 9:00 AM - 6:00 PM</p>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                <a href="mailto:info@arthoscenter.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  info@arthoscenter.com
                </a>
                <p className="text-gray-600 mt-2 text-sm">We'll respond within 24 hours</p>
              </div>

              {/* Location */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-700">
                  Near AIIMS<br />
                  Patna, Bihar 800001
                </p>
                <a
                  href="https://maps.google.com/?q=Patna,Bihar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="consultation">Online Consultation</option>
                      <option value="surgery">Surgery Information</option>
                      <option value="billing">Billing Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Center</h2>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Patna,Bihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition flex flex-col items-center gap-2"
                  >
                    <MapPin className="w-12 h-12" />
                    <span className="font-semibold">View on Google Maps</span>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-blue-200 mt-3">
                      <p className="text-sm text-gray-600">
                        <strong>Emergency Services:</strong> Available 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/arthoscenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
                    >
                      <Facebook className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="https://instagram.com/arthoscenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition"
                    >
                      <Instagram className="w-6 h-6 text-pink-600" />
                    </a>
                    <a
                      href="https://youtube.com/@arthoscenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition"
                    >
                      <Youtube className="w-6 h-6 text-red-600" />
                    </a>
                    <a
                      href="https://twitter.com/arthoscenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-200 transition"
                    >
                      <Twitter className="w-6 h-6 text-sky-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Check out our FAQ page for quick answers to common questions
            </p>
            <a
              href="/en/faq"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
