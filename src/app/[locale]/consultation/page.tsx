'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  User, Mail, Phone, MapPin, Calendar as CalendarIcon,
  FileText, Upload, CheckCircle2, ArrowRight, ArrowLeft
} from 'lucide-react';

// Validation schema
const patientFormSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, 'Full name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['male', 'female', 'other'], { message: 'Please select gender' }),
  bloodGroup: z.string().optional(),

  // Contact Information
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  whatsapp: z.string().regex(/^[0-9]{10}$/, 'WhatsApp number must be 10 digits').optional().or(z.literal('')),
  address: z.string().min(10, 'Please provide complete address'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().regex(/^[0-9]{6}$/, 'Pincode must be 6 digits'),

  // Medical History
  existingConditions: z.string().optional(),
  currentMedications: z.string().optional(),
  allergies: z.string().optional(),
  previousSurgeries: z.string().optional(),

  // Current Condition
  chiefComplaint: z.string().min(10, 'Please describe your condition (at least 10 characters)'),
  symptomDuration: z.string().min(1, 'Please specify symptom duration'),
  painLevel: z.string().min(1, 'Please select pain level'),
  preferredDate: z.string().min(1, 'Please select preferred consultation date'),
  preferredTime: z.string().min(1, 'Please select preferred time slot'),
});

type FormData = z.infer<typeof patientFormSchema>;

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Contact Details', icon: Phone },
  { id: 3, title: 'Medical History', icon: FileText },
  { id: 4, title: 'Current Condition', icon: CalendarIcon },
];

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(patientFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Integrate with backend API
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'dateOfBirth', 'gender', 'bloodGroup'];
      case 2:
        return ['email', 'phone', 'whatsapp', 'address', 'city', 'state', 'pincode'];
      case 3:
        return ['existingConditions', 'currentMedications', 'allergies', 'previousSurgeries'];
      case 4:
        return ['chiefComplaint', 'symptomDuration', 'painLevel', 'preferredDate', 'preferredTime'];
      default:
        return [];
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Consultation Request Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Arthoscenter. Our team will contact you within 24 hours to confirm your consultation appointment.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700">
              You will receive a confirmation email and WhatsApp message with your consultation details and payment link.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Online Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Consult with Dr. Gurudeo Kumar via Google Meet - ₹999 for 30 minutes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-green-600 text-white'
                          : isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                    <span
                      className={`text-sm mt-2 hidden md:block ${
                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 ${
                        currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    {...register('dateOfBirth')}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    {...register('gender')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group (Optional)
                  </label>
                  <select
                    {...register('bloodGroup')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number (Optional)
                  </label>
                  <input
                    {...register('whatsapp')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="9876543210"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="House no., Street, Locality"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      {...register('city')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Patna"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      {...register('state')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Bihar"
                    />
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      {...register('pincode')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="800001"
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Medical History */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical History</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Existing Medical Conditions (Optional)
                  </label>
                  <textarea
                    {...register('existingConditions')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Diabetes, Hypertension, Heart disease"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Medications (Optional)
                  </label>
                  <textarea
                    {...register('currentMedications')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List all medications you are currently taking"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Allergies (Optional)
                  </label>
                  <textarea
                    {...register('allergies')}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Penicillin, Aspirin, Food allergies"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Surgeries (Optional)
                  </label>
                  <textarea
                    {...register('previousSurgeries')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List any previous surgeries with approximate dates"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Current Condition */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Condition</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chief Complaint *
                  </label>
                  <textarea
                    {...register('chiefComplaint')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your current symptoms and concerns in detail"
                  />
                  {errors.chiefComplaint && (
                    <p className="mt-1 text-sm text-red-600">{errors.chiefComplaint.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Symptom Duration *
                  </label>
                  <select
                    {...register('symptomDuration')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="less-than-week">Less than a week</option>
                    <option value="1-4-weeks">1-4 weeks</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="more-than-6-months">More than 6 months</option>
                  </select>
                  {errors.symptomDuration && (
                    <p className="mt-1 text-sm text-red-600">{errors.symptomDuration.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pain Level (0-10) *
                  </label>
                  <select
                    {...register('painLevel')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select pain level</option>
                    {[...Array(11)].map((_, i) => (
                      <option key={i} value={i}>
                        {i} - {i === 0 ? 'No pain' : i <= 3 ? 'Mild' : i <= 6 ? 'Moderate' : i <= 9 ? 'Severe' : 'Worst possible'}
                      </option>
                    ))}
                  </select>
                  {errors.painLevel && (
                    <p className="mt-1 text-sm text-red-600">{errors.painLevel.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Consultation Date *
                  </label>
                  <input
                    {...register('preferredDate')}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time Slot *
                  </label>
                  <select
                    {...register('preferredTime')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    <option value="09:00-10:00">9:00 AM - 10:00 AM</option>
                    <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                    <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                    <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
                    <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                    <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                    <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
                    <option value="17:00-18:00">5:00 PM - 6:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Previous
                </button>
              )}

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition ml-auto"
                >
                  Next
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Consultation Request
                      <CheckCircle2 className="h-5 w-5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Our team will review your request and confirm your appointment within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>You will receive a payment link for the ₹999 consultation fee</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>After payment, you'll receive the Google Meet link for your consultation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Dr. Gurudeo Kumar will review your medical history before the call</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
