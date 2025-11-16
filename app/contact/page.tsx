'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const serviceInterests = [
  { value: '', label: 'Select a service...' },
  { value: 'BUSINESS_BENEFITS', label: 'Business Benefits' },
  { value: 'MEDICARE_ENROLLMENT', label: 'Medicare Enrollment' },
  { value: 'RETIREMENT_PLANNING', label: 'Retirement Planning' },
  { value: 'ESTATE_PLANNING', label: 'Estate Planning' },
  { value: 'BUSINESS_INSURANCE', label: 'Business Insurance' },
  { value: 'HEALTH_WELLNESS', label: 'Health & Wellness Programs' },
  { value: 'OTHER', label: 'Other / Not Sure' },
];

const companySize = [
  { value: '', label: 'Select company size...' },
  { value: 'INDIVIDUAL', label: 'Individual (No Employees)' },
  { value: 'SMALL', label: 'Small (1-50 Employees)' },
  { value: 'MEDIUM', label: 'Medium (51-200 Employees)' },
  { value: 'LARGE', label: 'Large (201+ Employees)' },
];

const stateOptions = [
  { value: '', label: 'Select your state...' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'CA', label: 'California' },
  { value: 'NV', label: 'Nevada' },
  { value: 'UT', label: 'Utah' },
  { value: 'WA', label: 'Washington' },
  { value: 'OTHER', label: 'Other' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    companySize: '',
    serviceInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        companySize: '',
        serviceInterest: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              Ready to optimize your benefits? Schedule a free consultation with our
              experts. We're here to answer your questions and help you find the right
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+18082862323"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      (808) 286-2323
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@benefitsresourcegroupllc.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                    >
                      info@benefitsresourcegroupllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      1708 Nuuanu Avenue, Suite 104
                      <br />
                      Honolulu, HI 96817
                      <br />
                      <span className="text-sm">Serving HI, CA, NV, UT, WA</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM HST
                      <br />
                      Saturday - Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>We'll respond within 24 business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Free, no-obligation consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>No pressure, just expert advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600">
                        We've received your message and will get back to you within 24
                        business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(808) 555-1234"
                        />
                        <Input
                          label="Company Name (Optional)"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Select
                          label="State"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          options={stateOptions}
                          required
                        />
                        <Select
                          label="Company Size"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          options={companySize}
                        />
                      </div>

                      <Select
                        label="Service Interest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        options={serviceInterests}
                        required
                      />

                      <Textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your needs and how we can help..."
                        rows={6}
                      />

                      <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
                        <p>
                          By submitting this form, you agree to be contacted by Benefits
                          Resource Group LLC regarding your inquiry. We respect your
                          privacy and will never share your information with third parties.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600">
              Proudly serving clients across Hawaii, California, Nevada, Utah, and
              Washington
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm">Headquartered in Honolulu, Hawaii</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
