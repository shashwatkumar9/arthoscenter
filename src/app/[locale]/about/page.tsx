import { Award, Briefcase, GraduationCap, Heart, Shield, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Arthoscenter</h1>
            <p className="text-xl text-blue-100">
              Bihar's leading orthopaedic center providing world-class care with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Arthoscenter was founded with a vision to bring world-class orthopaedic care to Bihar. Under the leadership of Dr. Gurudeo Kumar, we have grown to become the region's most trusted destination for joint replacement, spine surgery, sports medicine, and trauma care.
              </p>
              <p>
                With over two decades of experience and more than 5,000 successful surgeries, Dr. Kumar and his team have transformed the lives of thousands of patients. Our state-of-the-art facility combines advanced medical technology with personalized care, ensuring the best possible outcomes for every patient.
              </p>
              <p>
                We believe that everyone deserves access to quality orthopaedic care. That's why we've invested in cutting-edge equipment, continuous staff training, and patient-centered protocols that put your health and comfort first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Gurudeo Kumar Profile */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800">Dr. Gurudeo Kumar</div>
                    <div className="text-xl text-blue-600 font-medium mt-2">MBBS, MS (Orthopaedics)</div>
                    <div className="text-gray-600 mt-1">Senior Orthopaedic Surgeon</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Dr. Gurudeo Kumar
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dr. Gurudeo Kumar is a highly respected orthopaedic surgeon with over 20 years of clinical experience. After completing his MBBS and MS in Orthopaedics from prestigious institutions, he pursued advanced training in joint replacement surgery and minimally invasive spine procedures.
                  </p>
                  <p>
                    Dr. Kumar is known for his patient-centric approach, taking time to understand each patient's unique needs and concerns. His expertise spans across all major orthopaedic subspecialties, with special focus on:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Total Joint Replacement (Knee, Hip, Shoulder)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Minimally Invasive Spine Surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Sports Injury Management & Arthroscopy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Trauma & Fracture Care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Pediatric Orthopaedic Conditions</span>
                    </li>
                  </ul>
                  <p className="pt-4">
                    Dr. Kumar regularly attends national and international conferences to stay updated with the latest advancements in orthopaedic surgery. He is a member of several prestigious medical associations and has published research in peer-reviewed journals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  Every patient is unique. We create personalized treatment plans that consider your specific needs, lifestyle, and goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in Surgery</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in surgical techniques, using evidence-based practices and cutting-edge technology.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
                <p className="text-gray-600">
                  Patient safety is our top priority. We follow strict protocols and hygiene standards to ensure the best outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  We stay at the forefront of orthopaedic advances through ongoing education, research, and training.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compassionate Team</h3>
                <p className="text-gray-600">
                  Our dedicated team of surgeons, nurses, and support staff work together to provide caring, respectful service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Care</h3>
                <p className="text-gray-600">
                  From diagnosis to rehabilitation, we provide complete orthopaedic care under one roof for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Technology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              State-of-the-Art Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>High-resolution digital X-ray and imaging systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Modern arthroscopy equipment for minimally invasive surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Computer-assisted navigation for precise joint replacement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Advanced physiotherapy and rehabilitation equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Well-equipped operation theaters with laminar flow</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Amenities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Comfortable private and semi-private rooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>24/7 nursing care and emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>In-house pharmacy for convenient medication access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Spacious waiting areas for family members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">✓</span>
                    <span>Ample parking and wheelchair accessibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey to Recovery?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule an online consultation with Dr. Gurudeo Kumar today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/consultation"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Book Online Consultation - ₹999
              </Link>
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition shadow-lg border-2 border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
