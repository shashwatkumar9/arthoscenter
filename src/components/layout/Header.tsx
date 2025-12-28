'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { menuCategories } from '@/constants/navigation';
import { MegaMenu } from './MegaMenu';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';

export function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-blue-100">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <span className="hidden md:inline">Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              Arthoscenter
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveMenu(category.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition font-medium">
                  {category.title}
                </button>
                {activeMenu === category.id && (
                  <MegaMenu category={category} />
                )}
              </div>
            ))}
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition font-medium"
            >
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition font-medium"
            >
              {t('contact')}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/consultation"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {tc('bookConsultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/surgeries/${category.id}`}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.title}
                </Link>
              ))}
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                href="/consultation"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {tc('bookConsultation')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
