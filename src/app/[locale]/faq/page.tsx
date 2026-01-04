'use client';

import { useState } from 'react';
import { ChevronDown, Phone, Calendar, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // General Questions
  {
    category: 'General',
    question: 'What is Arthoscenter?',
    answer: 'Arthoscenter is Bihar\'s leading orthopaedic care center, specializing in joint replacement, spine surgery, sports medicine, trauma care, and pediatric orthopaedics. Led by Dr. Gurudeo Kumar with over 20 years of experience, we provide world-class treatment with state-of-the-art facilities.'
  },
  {
    category: 'General',
    question: 'Where is Arthoscenter located?',
    answer: 'We are located near AIIMS in Patna, Bihar 800001. You can find detailed directions on our Contact page or call us at +91 72580 65424 for assistance.'
  },
  {
    category: 'General',
    question: 'What are your operating hours?',
    answer: 'We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays. However, emergency services are available 24/7.'
  },

  // Appointments & Consultations
  {
    category: 'Appointments',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment in three ways: (1) Book an online consultation through our website for ₹999, (2) Call us directly at +91 72580 65424, or (3) Visit our center in person. Online consultations are conducted via Google Meet and can be scheduled at your convenience.'
  },
  {
    category: 'Appointments',
    question: 'How much does an online consultation cost?',
    answer: 'Our online consultation fee is ₹999. This includes a 30-minute video consultation with Dr. Gurudeo Kumar, review of your medical history and reports, and personalized treatment recommendations.'
  },
  {
    category: 'Appointments',
    question: 'Can I get a refund if I need to cancel my appointment?',
    answer: 'Yes, you can request a refund if you cancel at least 24 hours before your scheduled appointment. Cancellations made within 24 hours are subject to a 50% cancellation fee. Please contact us to process your cancellation.'
  },
  {
    category: 'Appointments',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring: (1) All previous medical records and test results, (2) X-rays, MRI scans, or CT scans if available, (3) List of current medications, (4) Any relevant medical history documents, (5) Valid ID proof, and (6) Insurance card if applicable.'
  },

  // Surgeries & Procedures
  {
    category: 'Surgery',
    question: 'What types of surgeries does Arthoscenter perform?',
    answer: 'We specialize in joint replacement (knee, hip, shoulder), spine surgery (fusion, discectomy, laminectomy), sports medicine (ACL reconstruction, meniscus repair), arthroscopy, trauma and fracture fixation, and pediatric orthopaedic procedures. Dr. Kumar has performed over 5,000 successful surgeries.'
  },
  {
    category: 'Surgery',
    question: 'How do I know if I need surgery?',
    answer: 'Surgery is typically recommended when conservative treatments (medication, physiotherapy) haven\'t provided relief, pain significantly affects daily activities, joint damage is severe, or there\'s risk of further complications. Dr. Kumar will thoroughly evaluate your condition and discuss all treatment options before recommending surgery.'
  },
  {
    category: 'Surgery',
    question: 'What is the recovery time after joint replacement surgery?',
    answer: 'Recovery varies by individual and procedure type. Generally, patients can walk with assistance within 24-48 hours, resume light activities in 2-4 weeks, and return to normal daily activities in 6-12 weeks. Complete recovery with full strength can take 3-6 months. Physiotherapy is crucial for optimal recovery.'
  },
  {
    category: 'Surgery',
    question: 'Are minimally invasive surgeries available?',
    answer: 'Yes, we offer minimally invasive techniques including arthroscopy and minimally invasive spine surgery. These procedures result in smaller incisions, less pain, shorter hospital stays, and faster recovery compared to traditional open surgery.'
  },

  // Insurance & Payment
  {
    category: 'Payment',
    question: 'Do you accept health insurance?',
    answer: 'Yes, we work with most major insurance providers in India. Please bring your insurance card to your appointment. Our billing team will help you understand your coverage and process claims. It\'s recommended to check with your insurance provider beforehand about coverage specifics.'
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit/debit cards, UPI, bank transfers, and online payments through Razorpay. For surgery payments, we also offer EMI options through select credit cards and financing partners.'
  },
  {
    category: 'Payment',
    question: 'Can I get a cost estimate before surgery?',
    answer: 'Yes, we provide detailed cost estimates after your consultation when the treatment plan is finalized. The estimate includes surgery fees, anesthesia, hospital stay, medications, and post-operative care. Actual costs may vary based on your specific condition and recovery needs.'
  },

  // Post-Surgery Care
  {
    category: 'Recovery',
    question: 'What kind of post-surgery care do you provide?',
    answer: 'We provide comprehensive post-surgery care including regular follow-up consultations, physiotherapy sessions, pain management, wound care guidance, and 24/7 access to our medical team for any concerns. We monitor your recovery closely to ensure optimal outcomes.'
  },
  {
    category: 'Recovery',
    question: 'When should I start physiotherapy after surgery?',
    answer: 'Physiotherapy typically begins within 24-48 hours after surgery with gentle exercises. Your physiotherapist will create a personalized rehabilitation program based on your surgery type and recovery progress. Consistent physiotherapy is essential for regaining strength and mobility.'
  },
  {
    category: 'Recovery',
    question: 'How do I manage pain after surgery?',
    answer: 'Pain management includes prescribed medications, ice therapy, elevation of the operated area, and proper rest. We provide detailed pain management instructions and are available 24/7 for any concerns. Most patients experience significant pain relief within the first few weeks.'
  },

  // Specific Conditions
  {
    category: 'Conditions',
    question: 'What is arthroscopy and when is it needed?',
    answer: 'Arthroscopy is a minimally invasive surgical procedure using a small camera to diagnose and treat joint problems. It\'s used for meniscus tears, ACL injuries, rotator cuff repairs, and joint damage assessment. Benefits include smaller incisions, less pain, and quicker recovery.'
  },
  {
    category: 'Conditions',
    question: 'Can children be treated at Arthoscenter?',
    answer: 'Yes, Dr. Kumar specializes in pediatric orthopaedics and treats conditions like clubfoot, bow legs, knock knees, developmental dysplasia, and growth plate injuries. We provide child-friendly care and work closely with parents to ensure the best outcomes.'
  },
  {
    category: 'Conditions',
    question: 'What should I do in case of a fracture or sports injury?',
    answer: 'For emergencies, call us immediately at +91 72580 65424 or visit our center. We provide 24/7 emergency orthopaedic care. For fractures, immobilize the area, apply ice, and avoid movement until medical help arrives. For sports injuries, follow the R.I.C.E. protocol (Rest, Ice, Compression, Elevation) and seek medical attention promptly.'
  },

  // Technology & Safety
  {
    category: 'Safety',
    question: 'What safety measures do you follow during surgery?',
    answer: 'We maintain the highest safety standards including sterile operation theaters with laminar airflow, international infection control protocols, pre-surgical screening, experienced anesthesia team, continuous patient monitoring, and use of high-quality implants and equipment.'
  },
  {
    category: 'Technology',
    question: 'Do you use robotic or computer-assisted surgery?',
    answer: 'Yes, we offer computer-assisted joint replacement surgery that provides precise alignment and positioning of implants. This technology helps achieve better outcomes, improved implant longevity, and faster recovery. Dr. Kumar is trained in the latest surgical techniques and technologies.'
  },
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

function FAQItem({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between gap-4"
      >
        <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our services, procedures, and patient care
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Questions
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-0">
              {filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No questions found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help. Contact us directly or schedule a consultation with Dr. Gurudeo Kumar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917258065424"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +91 72580 65424
                </a>
                <Link
                  href="/en/consultation"
                  className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition shadow-lg border-2 border-blue-600"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation - ₹999
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  href="/en/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Or send us a message →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/en/surgeries"
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Surgeries</h3>
                <p className="text-gray-600 mb-4">Browse all orthopaedic procedures we offer</p>
                <span className="text-blue-600 font-semibold">Learn More →</span>
              </Link>
              <Link
                href="/en/about"
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600 mb-4">Learn about our center and medical team</p>
                <span className="text-blue-600 font-semibold">Learn More →</span>
              </Link>
              <Link
                href="/en/doctors"
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Doctors</h3>
                <p className="text-gray-600 mb-4">Meet Dr. Gurudeo Kumar and our team</p>
                <span className="text-blue-600 font-semibold">Learn More →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
