'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SimpleFooter() {
  const categories = [
    { title: 'Joint Replacement', href: '/surgeries/joint-replacement' },
    { title: 'Spine Surgery', href: '/surgeries/spine-surgery' },
    { title: 'Sports Medicine', href: '/surgeries/sports-medicine' },
    { title: 'Trauma Care', href: '/surgeries/trauma-care' },
    { title: 'Pediatric Ortho', href: '/surgeries/pediatric-ortho' },
    { title: 'Arthroscopy', href: '/surgeries/arthroscopy' },
  ];

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Our Doctors', href: '/doctors' },
    { title: 'Book Consultation', href: '/consultation' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Blog', href: '/blog' },
    { title: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Arthoscenter</h3>
            <p className="mb-4 text-sm">
              Bihar's leading orthopaedic hospital providing world-class care in joint replacement, spine surgery, sports medicine, and trauma care.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Specialties</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href} className="hover:text-blue-400 transition">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Main Road, Patna, Bihar 800001, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+917258065424" className="hover:text-blue-400 transition">
                  +91 72580 65424
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@arthoscenter.com" className="hover:text-blue-400 transition">
                  info@arthoscenter.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon-Sat: 9:00 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 Arthoscenter. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
