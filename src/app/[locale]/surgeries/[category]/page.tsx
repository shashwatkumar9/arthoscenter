import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Phone, CheckCircle } from 'lucide-react';
import { menuCategories } from '@/constants/navigation';
import { surgeriesData } from '@/data/surgeries';
import { getCategoryContent } from '@/data/categories';

type Props = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = menuCategories.find((cat) => cat.id === category);
  const categoryContent = getCategoryContent(category);
  const lang = locale === 'hi' ? 'hi' : 'en';

  if (!categoryData || !categoryContent) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: categoryContent.meta[lang].title,
    description: categoryContent.meta[lang].description,
    keywords: categoryContent.meta[lang].keywords.join(', '),
  };
}

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];
  const locales = ['en', 'hi', 'bn', 'ne', 'as', 'or', 'mai', 'bho'];

  for (const locale of locales) {
    for (const category of menuCategories) {
      params.push({
        locale,
        category: category.id,
      });
    }
  }

  return params;
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  const categoryData = menuCategories.find((cat) => cat.id === category);
  const categoryContent = getCategoryContent(category);

  if (!categoryData || !categoryContent) {
    notFound();
  }

  const lang = locale === 'hi' ? 'hi' : 'en';
  const title = categoryContent.title[lang];

  // Get all surgeries in this category
  const categorySurgeries = Object.values(surgeriesData).filter(
    (surgery) => surgery.category === category
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {lang === 'hi'
                ? 'बिहार में विशेषज्ञ देखभाल | डॉ. गुरुदेव कुमार के साथ 20+ वर्ष का अनुभव'
                : 'Expert Care in Bihar | 20+ Years Experience with Dr. Gurudeo Kumar'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/${locale}/consultation`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2 text-lg"
              >
                <Calendar className="h-5 w-5" />
                {lang === 'hi' ? '₹999 में परामर्श बुक करें' : 'Book Consultation - ₹999'}
              </Link>
              <a
                href="tel:+917258065424"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition inline-flex items-center gap-2 text-lg"
              >
                <Phone className="h-5 w-5" />
                {lang === 'hi' ? 'कॉल करें' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'hi' ? 'अवलोकन' : 'Comprehensive Overview'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {categoryContent.overview[lang]}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {categoryContent.whyChoose[lang].title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categoryContent.whyChoose[lang].points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedures List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'hi' ? 'हमारी प्रक्रियाएं' : 'Our Procedures'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {categoryContent.proceduresIntro[lang]}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {categoryData.surgeries.map((surgery) => (
                <Link
                  key={surgery.id}
                  href={`/${locale}${surgery.url}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-400 transition-all group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {lang === 'hi' ? surgery.titleHi : surgery.title}
                  </h3>
                  <div className="flex items-center text-blue-600 font-medium mt-4">
                    <span>{lang === 'hi' ? 'और जानें' : 'Learn More'}</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {categoryContent.commonConditions[lang].title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categoryContent.commonConditions[lang].conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-0.5">{condition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'hi' ? 'उपचार दृष्टिकोण' : 'Our Treatment Approach'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line bg-blue-50 p-8 rounded-lg">
              {categoryContent.treatmentApproach[lang]}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {lang === 'hi' ? 'अपने उपचार पर चर्चा करने के लिए तैयार हैं?' : 'Ready to Discuss Your Treatment?'}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {lang === 'hi'
              ? 'केवल ₹999 में डॉ. गुरुदेव कुमार के साथ ऑनलाइन वीडियो परामर्श बुक करें'
              : 'Book an online video consultation with Dr. Gurudeo Kumar for just ₹999'}
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
