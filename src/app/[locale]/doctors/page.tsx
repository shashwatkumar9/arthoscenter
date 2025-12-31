import { Award, GraduationCap, Users, Stethoscope, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Team</h1>
            <p className="text-xl text-blue-100">
              Expert orthopaedic surgeons dedicated to your health and recovery
            </p>
          </div>
        </div>
      </section>

      {/* Lead Surgeon - Dr. Gurudeo Kumar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Doctor Image */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-20 h-20 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">Dr. Gurudeo Kumar</div>
                      <div className="text-blue-600 font-medium mt-1">Lead Surgeon</div>
                    </div>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dr. Gurudeo Kumar</h2>
                    <p className="text-xl text-blue-600 font-semibold">MBBS, MS (Orthopaedics)</p>
                    <p className="text-gray-600 mt-1">Senior Orthopaedic Surgeon & Founder</p>
                  </div>

                  <div className="space-y-4 text-gray-700 mb-6">
                    <p>
                      Dr. Gurudeo Kumar is a distinguished orthopaedic surgeon with over 20 years of experience in joint replacement, spine surgery, and sports medicine. He has performed more than 5,000 successful surgeries and is renowned for his patient-centric approach and exceptional surgical outcomes.
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Specializations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Total Joint Replacement</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Spine Surgery</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Sports Medicine</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Arthroscopy</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Trauma & Fracture Care</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Pediatric Orthopaedics</span>
                      </div>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Qualifications & Training</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <GraduationCap className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>MBBS - Medical College, Patna</span>
                      </li>
                      <li className="flex items-start">
                        <GraduationCap className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>MS (Orthopaedics) - AIIMS, New Delhi</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Advanced Training in Joint Replacement - Hospital for Special Surgery, USA</span>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Fellowship in Minimally Invasive Spine Surgery</span>
                      </li>
                    </ul>
                  </div>

                  {/* Book Appointment Button */}
                  <Link
                    href="/en/consultation"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Consultation - ₹999
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Supporting Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A dedicated team of specialists, nurses, and healthcare professionals working together to provide comprehensive orthopaedic care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Anaesthesiology Team */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Anaesthesiology</h3>
                <p className="text-gray-600 mb-4">
                  Expert anaesthesiologists ensuring safe and comfortable surgical procedures with modern anaesthesia techniques.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 3 specialists
                </div>
              </div>

              {/* Physiotherapy Team */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Physiotherapy</h3>
                <p className="text-gray-600 mb-4">
                  Certified physiotherapists specializing in orthopaedic rehabilitation and post-surgical recovery programs.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 5 therapists
                </div>
              </div>

              {/* Nursing Staff */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nursing Care</h3>
                <p className="text-gray-600 mb-4">
                  Experienced nursing staff providing 24/7 compassionate care and monitoring for all patients.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 12 nurses
                </div>
              </div>

              {/* Radiology */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Radiology</h3>
                <p className="text-gray-600 mb-4">
                  Advanced imaging specialists with expertise in X-ray, MRI, CT scan, and ultrasound for accurate diagnosis.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 4 technicians
                </div>
              </div>

              {/* Laboratory */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratory</h3>
                <p className="text-gray-600 mb-4">
                  Fully equipped laboratory for blood tests, tissue analysis, and diagnostic procedures with quick turnaround.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 3 technologists
                </div>
              </div>

              {/* Administration */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support Staff</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated administrative and support staff ensuring smooth operations and excellent patient experience.
                </p>
                <div className="text-sm text-gray-500">
                  Team of 8 members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Medical Team?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Extensive Experience</h3>
                  <p className="text-gray-600">
                    Combined experience of over 100 years in orthopaedic care and patient management
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Patient-Centered</h3>
                  <p className="text-gray-600">
                    Every team member is committed to providing compassionate, individualized care
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    Regular training and education to stay updated with latest medical advancements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600">
                    Multidisciplinary team working together for comprehensive treatment plans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule your consultation with Dr. Gurudeo Kumar today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/consultation"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
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
