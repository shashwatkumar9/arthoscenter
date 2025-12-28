'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown, Search } from 'lucide-react';
import { menuCategories } from '@/constants/navigation';

export function SimpleHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const pathname = usePathname();

  const locale = pathname?.split('/')[1] || 'en';
  const isHindi = locale === 'hi';

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setShowSearchResults(false);
    };
    if (activeDropdown || showSearchResults) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown, showSearchResults]);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const allSurgeries = menuCategories.flatMap(cat =>
        cat.surgeries.map(surgery => ({
          ...surgery,
          category: cat.id,
          categoryTitle: isHindi ? cat.titleHi : cat.title
        }))
      );

      const filtered = allSurgeries.filter(surgery => {
        const title = isHindi ? surgery.titleHi : surgery.title;
        return title.toLowerCase().includes(searchQuery.toLowerCase());
      }).slice(0, 8);

      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery, isHindi]);

  const getSurgeryColumns = (surgeries: any[]) => {
    const perColumn = Math.ceil(surgeries.length / 3);
    return [
      surgeries.slice(0, perColumn),
      surgeries.slice(perColumn, perColumn * 2),
      surgeries.slice(perColumn * 2)
    ];
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+917258065424" className="flex items-center gap-1 hover:text-blue-100">
                <Phone className="h-4 w-4" />
                <span>+91 72580 65424</span>
              </a>
              <span className="hidden md:inline">
                {isHindi ? 'सोम-शनि: सुबह 9:00 - शाम 6:00' : 'Mon-Sat: 9:00 AM - 6:00 PM'}
              </span>
            </div>
            <div className="text-sm hidden sm:inline">
              {isHindi ? 'बिहार का अग्रणी हड्डी रोग केंद्र' : "Bihar's Leading Orthopaedic Center"}
            </div>
          </div>
        </div>
      </div>

      {/* First Main Bar - Logo, Search, About, Contact, Language, CTA */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                Arthoscenter
              </h1>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md relative" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={isHindi ? 'सर्जरी खोजें...' : 'Search surgeries...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                    {searchResults.map((surgery) => (
                      <Link
                        key={surgery.id}
                        href={`/${locale}${surgery.url}`}
                        className="block px-4 py-3 hover:bg-blue-50 border-b last:border-b-0"
                        onClick={() => {
                          setSearchQuery('');
                          setShowSearchResults(false);
                        }}
                      >
                        <div className="font-medium text-gray-900">
                          {isHindi ? surgery.titleHi : surgery.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {surgery.categoryTitle}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <Link
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition font-medium"
              >
                {isHindi ? 'हमारे बारे में' : 'About'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition font-medium"
              >
                {isHindi ? 'संपर्क करें' : 'Contact'}
              </Link>

              {/* Language Switcher */}
              <div className="flex gap-1 ml-2">
                <Link
                  href="/en"
                  className={`px-3 py-1.5 rounded text-sm font-medium ${locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  EN
                </Link>
                <Link
                  href="/hi"
                  className={`px-3 py-1.5 rounded text-sm font-medium ${locale === 'hi' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  HI
                </Link>
              </div>

              {/* CTA Button */}
              <Link
                href={`/${locale}/consultation`}
                className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {isHindi ? 'परामर्श बुक करें' : 'Book Consultation'}
              </Link>
            </nav>

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
      </div>

      {/* Second Bar - Surgery Categories */}
      <div className="bg-gray-50 border-b hidden lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-1 h-12">
            {menuCategories.map((category, index) => {
              const columns = getSurgeryColumns(category.surgeries);
              const isActive = activeDropdown === category.id;
              // Position last 2 dropdowns to the right to prevent overflow
              const isLastTwo = index >= menuCategories.length - 2;

              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={`/${locale}/surgeries/${category.id}`}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition font-medium flex items-center gap-1 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(isActive ? null : category.id);
                    }}
                  >
                    {isHindi ? category.titleHi : category.title}
                    <ChevronDown className="h-4 w-4" />
                  </Link>

                  {/* Mega Dropdown */}
                  {isActive && (
                    <div className={`absolute ${isLastTwo ? 'right-0' : 'left-1/2 -translate-x-1/2'} top-full mt-0 bg-white border rounded-lg shadow-2xl w-[800px] p-6 z-50`}>
                      <div className="mb-4 pb-3 border-b">
                        <h3 className="text-lg font-bold text-gray-900">
                          {isHindi ? category.titleHi : category.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {isHindi
                            ? `${category.surgeries.length} प्रकार की सर्जरी उपलब्ध`
                            : `${category.surgeries.length} surgical procedures available`}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {columns.map((column, colIndex) => (
                          <div key={colIndex} className="space-y-2">
                            {column.map((surgery) => (
                              <Link
                                key={surgery.id}
                                href={`/${locale}${surgery.url}`}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {isHindi ? surgery.titleHi : surgery.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t">
                        <Link
                          href={`/${locale}/surgeries/${category.id}`}
                          className="text-blue-600 font-semibold text-sm hover:text-blue-700 inline-flex items-center gap-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {isHindi ? 'सभी देखें' : 'View All'} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4 relative" onClick={(e) => e.stopPropagation()}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={isHindi ? 'सर्जरी खोजें...' : 'Search surgeries...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-xl max-h-64 overflow-y-auto z-50">
                  {searchResults.map((surgery) => (
                    <Link
                      key={surgery.id}
                      href={`/${locale}${surgery.url}`}
                      className="block px-4 py-3 hover:bg-blue-50 border-b last:border-b-0"
                      onClick={() => {
                        setSearchQuery('');
                        setShowSearchResults(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <div className="font-medium text-gray-900 text-sm">
                        {isHindi ? surgery.titleHi : surgery.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {surgery.categoryTitle}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex flex-col space-y-2">
              {menuCategories.map((category) => (
                <div key={category.id} className="border-b pb-2 mb-2">
                  <Link
                    href={`/${locale}/surgeries/${category.id}`}
                    className="block px-4 py-2 text-gray-900 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {isHindi ? category.titleHi : category.title}
                  </Link>
                  <div className="ml-4 mt-2 space-y-1">
                    {category.surgeries.slice(0, 5).map((surgery) => (
                      <Link
                        key={surgery.id}
                        href={`/${locale}${surgery.url}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {isHindi ? surgery.titleHi : surgery.title}
                      </Link>
                    ))}
                    <Link
                      href={`/${locale}/surgeries/${category.id}`}
                      className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-md transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {isHindi ? `+${category.surgeries.length - 5} और देखें` : `+${category.surgeries.length - 5} more`}
                    </Link>
                  </div>
                </div>
              ))}

              <Link
                href={`/${locale}/about`}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isHindi ? 'हमारे बारे में' : 'About'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isHindi ? 'संपर्क करें' : 'Contact'}
              </Link>
              <Link
                href={`/${locale}/consultation`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isHindi ? 'परामर्श बुक करें - ₹999' : 'Book Consultation - ₹999'}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
