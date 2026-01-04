import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  Activity,
  AlertCircle,
  ChevronRight,
  Heart
} from 'lucide-react';
import { menuCategories } from '@/constants/navigation';
import { surgeriesData } from '@/data/surgeries';

// Force dynamic rendering to avoid build-time errors with surgery data
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{
    locale: string;
    category: string;
    surgery: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, surgery } = await params;
  const surgeryData = surgeriesData[surgery];
  const lang = locale === 'hi' ? 'hi' : 'en';

  if (!surgeryData) {
    return {
      title: 'Surgery Not Found',
    };
  }

  return {
    title: surgeryData.meta[lang].title,
    description: surgeryData.meta[lang].description,
    keywords: surgeryData.meta[lang].keywords.join(', '),
  };
}

export async function generateStaticParams() {
  const params: { locale: string; category: string; surgery: string }[] = [];

  const locales = ['en', 'hi', 'bn', 'ne', 'as', 'or', 'mai', 'bho'];

  for (const locale of locales) {
    for (const surgery of Object.values(surgeriesData)) {
      params.push({
        locale,
        category: surgery.category,
        surgery: surgery.slug,
      });
    }
  }

  return params;
}

export default async function SurgeryPage({ params }: Props) {
  const { locale, category, surgery } = await params;
  const surgeryData = surgeriesData[surgery];
  const categoryData = menuCategories.find((cat) => cat.id === category);

  if (!surgeryData || !categoryData) {
    notFound();
  }

  const lang = locale === 'hi' ? 'hi' : 'en';
  const title = surgeryData.title[lang];
  const categoryTitle = lang === 'hi' ? categoryData.titleHi : categoryData.title;

  // Get related surgeries
  const relatedSurgeries = surgeryData.relatedSurgeries
    .map(id => surgeriesData[id])
    .filter(Boolean)
    .slice(0, 4);

  // Handle both recovery data structures (temporary fix for backward compatibility)
  const recoveryData = (surgeryData.recovery as any);
  const timeline = recoveryData[lang]?.timeline || recoveryData?.timeline?.[lang] || [];
  const tips = recoveryData[lang]?.tips || [];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href={`/${locale}`} className="text-blue-600 hover:text-blue-700">
              {lang === 'hi' ? 'होम' : 'Home'}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link
              href={`/${locale}/surgeries/${category}`}
              className="text-blue-600 hover:text-blue-700"
            >
              {categoryTitle}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/${locale}/surgeries/${category}`}
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              {lang === 'hi' ? 'सभी प्रक्रियाएं देखें' : 'Back to All Procedures'}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-blue-100 mb-8">
              {surgeryData.shortDesc[lang]}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/consultation`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                {lang === 'hi' ? '₹999 में परामर्श बुक करें' : 'Book Consultation - ₹999'}
              </Link>
              <a
                href="tel:+917258065424"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'hi' ? 'अवलोकन' : 'Overview'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {surgeryData.overview[lang]}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms/Indications Section */}
      {surgeryData.symptoms[lang].length > 0 && (
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {lang === 'hi' ? 'लक्षण और संकेत' : 'Symptoms & Indications'}
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                {lang === 'hi'
                  ? 'यदि आप इन लक्षणों का अनुभव करते हैं तो यह सर्जरी अनुशंसित हो सकती है:'
                  : 'This surgery may be recommended if you experience:'}
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {surgeryData.symptoms[lang].map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Procedure Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Activity className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {lang === 'hi' ? 'प्रक्रिया विवरण' : 'Procedure Details'}
              </h2>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    {lang === 'hi' ? 'अवधि' : 'Duration'}
                  </h3>
                </div>
                <p className="text-gray-700">{surgeryData.procedure[lang].duration}</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    {lang === 'hi' ? 'एनेस्थीसिया' : 'Anesthesia'}
                  </h3>
                </div>
                <p className="text-gray-700">{surgeryData.procedure[lang].anesthesia}</p>
              </div>
            </div>

            {/* Preparation */}
            {surgeryData.procedure[lang].preparation && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === 'hi' ? 'सर्जरी की तैयारी' : 'Preparation for Surgery'}
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {surgeryData.procedure[lang].preparation}
                  </p>
                </div>
              </div>
            )}

            {/* Procedure Steps */}
            {surgeryData.procedure[lang].steps.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {lang === 'hi' ? 'सर्जरी के चरण' : 'Surgical Steps'}
                </h3>
                <div className="space-y-4">
                  {surgeryData.procedure[lang].steps.map((step, index) => (
                    <div key={index} className="flex gap-4 bg-white border-l-4 border-blue-600 p-4 rounded-r-lg shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 mt-2">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recovery Timeline Section */}
      {timeline.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {lang === 'hi' ? 'पुनर्प्राप्ति समयरेखा' : 'Recovery Timeline'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {lang === 'hi'
                  ? 'आपकी पुनर्प्राप्ति यात्रा में क्या अपेक्षा करें'
                  : 'What to expect during your recovery journey'}
              </p>
              <div className="space-y-4">
                {timeline.map((item: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
                        {item.week || item.phase}
                      </div>
                      <div className="flex-1">
                        {item.activity && <h3 className="font-bold text-gray-900 text-lg mb-2">{item.activity}</h3>}
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recovery Tips */}
              {tips.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {lang === 'hi' ? 'तेजी से ठीक होने के टिप्स' : 'Tips for Faster Recovery'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {surgeryData.faqs[lang].length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {lang === 'hi'
                  ? 'इस प्रक्रिया के बारे में सामान्य प्रश्न'
                  : 'Common questions about this procedure'}
              </p>
              <div className="space-y-6">
                {surgeryData.faqs[lang].map((faq, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-400 transition">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                      <span className="text-blue-600 flex-shrink-0">Q{index + 1}.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <div className="ml-9 text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Surgeries Section */}
      {relatedSurgeries.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {lang === 'hi' ? 'संबंधित सर्जरी' : 'Related Procedures'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedSurgeries.map((related) => {
                  // Find the category for this surgery
                  const relatedCategory = menuCategories.find(cat =>
                    cat.surgeries.some(s => s.id === related.id)
                  );

                  return (
                    <Link
                      key={related.id}
                      href={`/${locale}/surgeries/${relatedCategory?.id}/${related.id}`}
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-400 transition-all group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {related.title[lang]}
                      </h3>
                      <p className="text-gray-600 mb-4">{related.shortDesc[lang]}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        <span>{lang === 'hi' ? 'और जानें' : 'Learn More'}</span>
                        <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {lang === 'hi'
              ? 'क्या आप इस सर्जरी पर विचार कर रहे हैं?'
              : 'Considering This Surgery?'}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {lang === 'hi'
              ? 'डॉ. गुरुदेव कुमार के साथ केवल ₹999 में ऑनलाइन वीडियो परामर्श बुक करें और अपने सभी प्रश्नों के उत्तर प्राप्त करें'
              : 'Book an online video consultation with Dr. Gurudeo Kumar for just ₹999 and get all your questions answered'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/consultation`}
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-flex items-center gap-2 text-lg shadow-lg"
            >
              <Calendar className="h-6 w-6" />
              {lang === 'hi' ? 'अभी परामर्श बुक करें' : 'Book Consultation Now'}
            </Link>
            <a
              href="tel:+917258065424"
              className="bg-blue-800 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-900 transition inline-flex items-center gap-2 text-lg shadow-lg"
            >
              <Phone className="h-6 w-6" />
              +91 72580 65424
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
