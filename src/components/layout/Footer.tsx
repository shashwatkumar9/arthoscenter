'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { menuCategories } from '@/constants/navigation';

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('common');
  const locale = useLocale();

  // Get 5 featured surgeries for the footer
  const featuredSurgeries = [
    menuCategories[0].surgeries[4], // Total Knee Replacement
    menuCategories[2].surgeries[0], // ACL Reconstruction
    menuCategories[1].surgeries[2], // Spinal Fusion
    menuCategories[5].surgeries[0], // Knee Arthroscopy
    menuCategories[0].surgeries[0], // Total Hip Replacement
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Related Surgeries Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {t('surgeries')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {featuredSurgeries.map((surgery) => (
              <Link
                key={surgery.id}
                href={surgery.url}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition group"
              >
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">+</span>
                  </div>
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                  {surgery.title}
                </h4>
                <span className="text-sm text-blue-400 hover:underline">
                  {tc('learnMore')} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Arthoscenter</h3>
            <p className="text-sm mb-4">
              Expert orthopaedic care led by Dr. Gurudeo Kumar with 20+ years of experience in joint replacement, spine surgery, and sports medicine.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {tn('about')}
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  {tn('doctors')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/surgeries`} className="hover:text-white transition">
                  {locale === 'hi' ? 'आर्थोपेडिक सर्जरी' : 'Orthopaedic Surgeries'}
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-white transition">
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  {tn('blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {tn('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Surgery Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('surgeries')}</h4>
            <ul className="space-y-2 text-sm">
              {menuCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link href={`/surgeries/${category.id}`} className="hover:text-white transition">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  Arthoscenter Hospital<br />
                  Main Road, Patna<br />
                  Bihar 800001, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+917258065424" className="hover:text-white transition">
                  +91 72580 65424
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@arthoscenter.com" className="hover:text-white transition">
                  info@arthoscenter.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  Mon-Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
            <Link
              href="/consultation"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {tc('bookConsultation')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>
              &copy; 2025 Arthoscenter. {t('allRightsReserved')}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                {t('terms')}
              </Link>
              <Link href="/sitemap" className="hover:text-white transition">
                {t('sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
