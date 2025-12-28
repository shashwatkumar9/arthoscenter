import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';
import { getAllSurgeries } from '@/data/surgeries';
import { menuCategories } from '@/constants/navigation';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isHindi = locale === 'hi';

  return {
    title: isHindi
      ? 'सभी आर्थोपेडिक सर्जरी | डॉ. गुरुदेव कुमार | अर्थोसेंटर पटना'
      : 'All Orthopaedic Surgeries | Dr. Gurudeo Kumar | Arthoscenter Patna',
    description: isHindi
      ? 'डॉ. गुरुदेव कुमार द्वारा पटना, बिहार में प्रदान की जाने वाली सभी 90+ आर्थोपेडिक सर्जरी देखें। जोड़ प्रतिस्थापन, रीढ़ सर्जरी, खेल चिकित्सा, ट्रॉमा केयर और अधिक।'
      : 'Explore all 90+ orthopaedic surgeries offered by Dr. Gurudeo Kumar in Patna, Bihar. Joint replacement, spine surgery, sports medicine, trauma care, and more.',
  };
}

export default async function AllSurgeriesPage({ params }: Props) {
  const { locale } = await params;
  const lang = locale === 'hi' ? 'hi' : 'en';
  const allSurgeries = getAllSurgeries();

  // Group surgeries by category
  const surgeriesByCategory = menuCategories.map(category => ({
    category,
    surgeries: allSurgeries.filter(s => s.category === category.id)
  }));

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Activity className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {lang === 'hi'
                ? 'सभी आर्थोपेडिक सर्जरी'
                : 'All Orthopaedic Surgeries'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {lang === 'hi'
                ? 'डॉ. गुरुदेव कुमार द्वारा अर्थोसेंटर, पटना में प्रदान की जाने वाली 6 विशेषज्ञताओं में 90+ उन्नत सर्जिकल प्रक्रियाएं'
                : '90+ Advanced Surgical Procedures Across 6 Specialties Offered by Dr. Gurudeo Kumar at Arthoscenter, Patna'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories and Surgeries */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {surgeriesByCategory.map((item, index) => (
            <div key={item.category.id} className={index > 0 ? 'mt-16' : ''}>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {lang === 'hi' ? item.category.titleHi : item.category.title}
                  </h2>
                </div>
                <div className="ml-16 mt-2 text-sm text-blue-600 font-medium">
                  {item.surgeries.length} {lang === 'hi' ? 'सर्जरी उपलब्ध' : 'Surgeries Available'}
                </div>
              </div>

              {/* Surgeries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.surgeries.map((surgery) => (
                  <Link
                    key={surgery.id}
                    href={`/${locale}/surgeries/${item.category.id}/${surgery.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {surgery.title[lang]}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {surgery.shortDesc[lang]}
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <span>{lang === 'hi' ? 'और जानें' : 'Learn More'}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === 'hi'
              ? 'अपनी सर्जरी के बारे में विशेषज्ञ सलाह चाहिए?'
              : 'Need Expert Advice About Your Surgery?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {lang === 'hi'
              ? 'डॉ. गुरुदेव कुमार के साथ परामर्श बुक करें - बिहार में सबसे भरोसेमंद आर्थोपेडिक सर्जन'
              : 'Book a Consultation with Dr. Gurudeo Kumar - Bihar\'s Most Trusted Orthopaedic Surgeon'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              {lang === 'hi' ? 'अभी कॉल करें: +91 98765 43210' : 'Call Now: +91 98765 43210'}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              {lang === 'hi' ? 'ऑनलाइन बुक करें' : 'Book Online'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
