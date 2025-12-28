import Link from 'next/link';
import { Phone, Calendar, Shield, Award, Users, Clock, CheckCircle2, Star } from 'lucide-react';

export default async function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Orthopaedic Care in Bihar
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Led by Dr. Gurudeo Kumar - 20+ Years of Excellence in Joint Replacement & Spine Surgery
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Over 5,000 successful surgeries performed with state-of-the-art technology and compassionate care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Online Consultation - ₹999
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-700 font-medium">Successful Surgeries</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">10000+</div>
              <div className="text-gray-700 font-medium">Happy Patients</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Gurudeo Kumar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">Dr. Gurudeo Kumar</div>
                    <div className="text-blue-600 font-medium">Senior Orthopaedic Surgeon</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Dr. Gurudeo Kumar
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Dr. Gurudeo Kumar is a highly experienced orthopaedic surgeon with over 20 years of expertise in joint replacement, spine surgery, and sports medicine. He has performed more than 5,000 successful surgeries and is renowned for his patient-centric approach and excellent outcomes.
                  </p>
                  <p>
                    After completing his MBBS and MS in Orthopaedics from prestigious institutions, Dr. Kumar pursued advanced training in joint replacement and minimally invasive spine surgery. He regularly attends international conferences and stays updated with the latest advancements in orthopaedic care.
                  </p>
                  <p>
                    His dedication to providing world-class orthopaedic care in Bihar has transformed the lives of thousands of patients suffering from joint pain, spine disorders, and sports injuries. Dr. Kumar believes in combining cutting-edge technology with compassionate care to ensure the best possible outcomes for his patients.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-700">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">MBBS, MS (Orthopaedics)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Fellowship in Joint Replacement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Arthoscenter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Arthoscenter?
            </h2>
            <p className="text-xl text-gray-600">
              We combine expertise, technology, and compassion to deliver exceptional orthopaedic care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Surgeon</h3>
              <p className="text-gray-600">
                Dr. Gurudeo Kumar brings over 20 years of experience and has successfully performed 5,000+ complex orthopaedic surgeries with a 98% success rate.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art operation theatres equipped with latest surgical tools, imaging systems, and modern prosthetic implants for best outcomes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centric Care</h3>
              <p className="text-gray-600">
                Personalized treatment plans, multilingual support in 8+ languages, and comprehensive pre and post-operative care for every patient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Consultations</h3>
              <p className="text-gray-600">
                Convenient video consultations via Google Meet at just ₹999. Get expert advice from the comfort of your home with instant appointment booking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Recovery</h3>
              <p className="text-gray-600">
                Minimally invasive surgical techniques ensure faster healing, reduced pain, shorter hospital stays, and quicker return to normal activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of 10,000+ satisfied patients, numerous successful complex surgeries, and consistently high patient satisfaction ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Orthopaedic Specialties
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive treatment for all types of bone, joint, and spine conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/surgeries/joint-replacement" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  Joint Replacement
                </h3>
                <p className="text-gray-700 mb-4">
                  Total and partial hip, knee, and shoulder replacements using advanced prosthetics. Specialized revision surgery for failed implants.
                </p>
                <div className="text-blue-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
            <Link href="/surgeries/spine-surgery" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  Spine Surgery
                </h3>
                <p className="text-gray-700 mb-4">
                  Minimally invasive spine procedures for disc problems, spinal fusion, scoliosis correction, and vertebral fractures.
                </p>
                <div className="text-green-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
            <Link href="/surgeries/sports-medicine" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  Sports Medicine
                </h3>
                <p className="text-gray-700 mb-4">
                  ACL/PCL reconstruction, meniscus repair, rotator cuff surgery, and advanced treatments like PRP therapy for athletes.
                </p>
                <div className="text-orange-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
            <Link href="/surgeries/trauma-care" className="group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                  Trauma & Fracture Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Emergency fracture management, complex trauma surgery, bone grafting, and treatment for non-union and malunion.
                </p>
                <div className="text-red-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
            <Link href="/surgeries/pediatric-ortho" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                  Pediatric Orthopaedics
                </h3>
                <p className="text-gray-700 mb-4">
                  Specialized care for children including clubfoot correction, hip dysplasia, growth plate injuries, and limb deformities.
                </p>
                <div className="text-purple-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
            <Link href="/surgeries/arthroscopy" className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition">
                  Arthroscopy
                </h3>
                <p className="text-gray-700 mb-4">
                  Minimally invasive keyhole surgery for knee, shoulder, hip, ankle, and wrist with faster recovery and minimal scarring.
                </p>
                <div className="text-cyan-600 font-semibold group-hover:underline">
                  10+ Procedures →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How Online Consultation Works */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Online Consultation Works
            </h2>
            <p className="text-xl text-blue-100">
              Get expert orthopaedic advice in 4 simple steps - all from your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Fill Form</h3>
              <p className="text-blue-100">
                Complete your medical history and upload reports through our secure online form
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Pay ₹999</h3>
              <p className="text-blue-100">
                Make secure payment via Razorpay and choose your preferred consultation time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Video Call</h3>
              <p className="text-blue-100">
                Join 30-minute video consultation with Dr. Gurudeo Kumar via Google Meet
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Get Treatment Plan</h3>
              <p className="text-blue-100">
                Receive personalized treatment plan, prescription, and follow-up guidance
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/consultation"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Book Your Consultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from patients who got their lives back
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "After 5 years of knee pain, I can finally walk without discomfort. Dr. Kumar's expertise in knee replacement surgery gave me my life back. The entire team was caring and professional."
              </p>
              <div className="font-semibold text-gray-900">Rajesh Sharma</div>
              <div className="text-gray-600 text-sm">Total Knee Replacement Patient</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I traveled from Nepal for my spine surgery. Dr. Kumar's minimally invasive technique meant I was walking the next day and back home in a week. Truly exceptional care!"
              </p>
              <div className="font-semibold text-gray-900">Sita Devi</div>
              <div className="text-gray-600 text-sm">Lumbar Disc Surgery Patient</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As an athlete, I needed the best for my ACL injury. Dr. Kumar's sports medicine expertise got me back on the field in 6 months. Highly recommended for sports injuries!"
              </p>
              <div className="font-semibold text-gray-900">Amit Kumar</div>
              <div className="text-gray-600 text-sm">ACL Reconstruction Patient</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What is included in the ₹999 online consultation?
                </h3>
                <p className="text-gray-700">
                  The online consultation includes a 30-minute video call with Dr. Gurudeo Kumar via Google Meet, review of your medical reports, detailed diagnosis, personalized treatment recommendations, prescription if needed, and follow-up guidance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How long does recovery take after joint replacement surgery?
                </h3>
                <p className="text-gray-700">
                  Recovery timeline varies by individual and procedure. Generally, patients can walk with support within 24-48 hours, return to light activities in 6-12 weeks, and achieve full recovery in 3-6 months with proper physiotherapy and follow-up care.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do you accept health insurance?
                </h3>
                <p className="text-gray-700">
                  Yes, we work with most major health insurance providers. Our team will help you with insurance paperwork and claims processing. Please bring your insurance details during consultation for verification.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What languages do you support for consultations?
                </h3>
                <p className="text-gray-700">
                  We provide multilingual support in 8+ languages including English, Hindi, Bengali, Nepali, Assamese, Odia, Maithili, and Bhojpuri to ensure comfortable communication for all patients from Bihar and neighboring regions.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How experienced is Dr. Gurudeo Kumar?
                </h3>
                <p className="text-gray-700">
                  Dr. Gurudeo Kumar has over 20 years of orthopaedic surgery experience and has successfully performed 5,000+ surgeries including complex joint replacements, spine procedures, and sports medicine treatments with a 98% success rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let pain hold you back. Book your consultation with Dr. Gurudeo Kumar today and take the first step towards a pain-free life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
              >
                Book Online Consultation - ₹999
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
