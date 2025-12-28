'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLocale = (): Locale => {
    const pathSegments = pathname.split('/');
    const localeSegment = pathSegments[1];
    return (locales.includes(localeSegment as Locale) ? localeSegment : 'en') as Locale;
  };

  const switchLocale = (newLocale: Locale) => {
    const currentLocale = getCurrentLocale();
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-blue-100 transition">
        <Globe className="h-4 w-4" />
        <span className="text-sm uppercase">{currentLocale}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 bg-white text-gray-700 rounded-lg shadow-lg border py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            className={`w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition ${
              currentLocale === locale ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`}
          >
            {localeNames[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
