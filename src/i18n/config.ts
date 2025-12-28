export const locales = ['en', 'hi', 'bn', 'ne', 'as', 'or', 'mai', 'bho'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  bn: 'বাংলা',
  ne: 'नेपाली',
  as: 'অসমীয়া',
  or: 'ଓଡ଼ିଆ',
  mai: 'मैथिली',
  bho: 'भोजपुरी'
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  hi: '🇮🇳',
  bn: '🇧🇩',
  ne: '🇳🇵',
  as: '🇮🇳',
  or: '🇮🇳',
  mai: '🇮🇳',
  bho: '🇮🇳'
};
