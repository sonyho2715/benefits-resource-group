'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  FileText,
} from 'lucide-react';

const workStatusOptions = [
  { value: '', label: 'Select work status...' },
  { value: 'working', label: 'Currently Working with Group Coverage' },
  { value: 'retired', label: 'Retired or Not Working' },
  { value: 'self-employed', label: 'Self-Employed' },
  { value: 'cobra', label: 'On COBRA' },
];

const healthConditionOptions = [
  { value: '', label: 'Select health status...' },
  { value: 'excellent', label: 'Excellent - No ongoing conditions' },
  { value: 'good', label: 'Good - Minor conditions managed' },
  { value: 'fair', label: 'Fair - Some ongoing health issues' },
  { value: 'poor', label: 'Poor - Multiple health conditions' },
];

export default function MedicareCheckerPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    birthMonth: '',
    birthYear: '',
    workStatus: '',
    healthCondition: '',
    hasPartA: '',
    hasPartB: '',
    needsPrescriptions: '',
  });

  const [results, setResults] = useState({
    isEligible: false,
    age: 0,
    monthsUntilEligible: 0,
    enrollmentWindow: '',
    recommendations: [] as string[],
    nextSteps: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateEligibility = () => {
    const currentDate = new Date();
    const birthYear = parseInt(formData.birthYear);
    const birthMonth = parseInt(formData.birthMonth);
    const birthDate = new Date(birthYear, birthMonth - 1, 1);

    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsUntilEligible = age >= 65 ? 0 : (65 - age) * 12;

    const isEligible = age >= 65;

    // Calculate enrollment window
    const enrollmentWindowStart = new Date(birthYear + 65, birthMonth - 4, 1);
    const enrollmentWindowEnd = new Date(birthYear + 65, birthMonth + 2, 28);

    const recommendations = [];
    const nextSteps = [];

    // Generate recommendations based on inputs
    if (isEligible) {
      if (formData.workStatus === 'working') {
        recommendations.push(
          'You may be able to delay Medicare enrollment if you have creditable group coverage through your employer (20+ employees).'
        );
        nextSteps.push(
          'Verify your group coverage is creditable with your HR department',
          'Consider enrolling in Part A (usually premium-free) and delaying Part B'
        );
      } else {
        recommendations.push(
          'You are eligible for Medicare and should enroll to avoid late enrollment penalties.'
        );
        nextSteps.push(
          'Enroll in Medicare Parts A and B',
          'Compare Medicare Advantage vs. Original Medicare + Medigap',
          'Select a Part D prescription drug plan'
        );
      }

      if (formData.needsPrescriptions === 'yes') {
        recommendations.push(
          'Medicare Part D prescription drug coverage is highly recommended to avoid penalties and reduce costs.'
        );
      }

      if (
        formData.healthCondition === 'fair' ||
        formData.healthCondition === 'poor'
      ) {
        recommendations.push(
          'Consider a Medicare Advantage plan with comprehensive coverage or a Medigap Plan G for maximum protection.'
        );
      } else {
        recommendations.push(
          'A Medicare Advantage plan or Medigap Plan N could provide good coverage at a lower cost.'
        );
      }
    } else {
      recommendations.push(
        `You will become eligible for Medicare in approximately ${monthsUntilEligible} months when you turn 65.`
        );
      nextSteps.push(
        'Mark your calendar for 3 months before your 65th birthday',
        'Start researching Medicare options 6 months in advance',
        'Schedule a consultation with us 3-4 months before enrollment'
      );
    }

    setResults({
      isEligible,
      age,
      monthsUntilEligible,
      enrollmentWindow: `${enrollmentWindowStart.toLocaleDateString()} - ${enrollmentWindowEnd.toLocaleDateString()}`,
      recommendations,
      nextSteps,
    });

    setStep(3);
  };

  const resetChecker = () => {
    setStep(1);
    setFormData({
      birthMonth: '',
      birthYear: '',
      workStatus: '',
      healthCondition: '',
      hasPartA: '',
      hasPartB: '',
      needsPrescriptions: '',
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Medicare Eligibility Checker
          </h1>
          <p className="text-xl text-blue-100">
            Find out if you're eligible for Medicare and get personalized recommendations
            for your coverage needs.
          </p>
        </div>
      </section>

      {/* Checker Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Basic Info
                </span>
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Coverage Details
                </span>
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Results</span>
              </div>
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Information</CardTitle>
                <CardDescription>
                  Let's start with some basic information about you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Birth Month"
                      name="birthMonth"
                      value={formData.birthMonth}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select month...' },
                        { value: '1', label: 'January' },
                        { value: '2', label: 'February' },
                        { value: '3', label: 'March' },
                        { value: '4', label: 'April' },
                        { value: '5', label: 'May' },
                        { value: '6', label: 'June' },
                        { value: '7', label: 'July' },
                        { value: '8', label: 'August' },
                        { value: '9', label: 'September' },
                        { value: '10', label: 'October' },
                        { value: '11', label: 'November' },
                        { value: '12', label: 'December' },
                      ]}
                      required
                    />
                    <Input
                      label="Birth Year"
                      name="birthYear"
                      type="number"
                      value={formData.birthYear}
                      onChange={handleChange}
                      placeholder="1959"
                      required
                    />
                  </div>

                  <Select
                    label="Employment Status"
                    name="workStatus"
                    value={formData.workStatus}
                    onChange={handleChange}
                    options={workStatusOptions}
                    required
                  />

                  <Select
                    label="Overall Health Status"
                    name="healthCondition"
                    value={formData.healthCondition}
                    onChange={handleChange}
                    options={healthConditionOptions}
                    required
                  />

                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={
                      !formData.birthMonth ||
                      !formData.birthYear ||
                      !formData.workStatus ||
                      !formData.healthCondition
                    }
                    className="w-full"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Coverage Details */}
          {step === 2 && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Coverage Details</CardTitle>
                <CardDescription>
                  Help us understand your current Medicare coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Do you have Medicare Part A?"
                      name="hasPartA"
                      value={formData.hasPartA}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                        { value: 'not-sure', label: 'Not Sure' },
                      ]}
                      required
                    />
                    <Select
                      label="Do you have Medicare Part B?"
                      name="hasPartB"
                      value={formData.hasPartB}
                      onChange={handleChange}
                      options={[
                        { value: '', label: 'Select...' },
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                        { value: 'not-sure', label: 'Not Sure' },
                      ]}
                      required
                    />
                  </div>

                  <Select
                    label="Do you take prescription medications regularly?"
                    name="needsPrescriptions"
                    value={formData.needsPrescriptions}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select...' },
                      { value: 'yes', label: 'Yes, regularly' },
                      { value: 'occasionally', label: 'Occasionally' },
                      { value: 'no', label: 'No' },
                    ]}
                    required
                  />

                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      size="lg"
                      onClick={calculateEligibility}
                      disabled={
                        !formData.hasPartA ||
                        !formData.hasPartB ||
                        !formData.needsPrescriptions
                      }
                      className="flex-1"
                    >
                      Check Eligibility
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Results */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Eligibility Status */}
              <Card
                variant="elevated"
                className={
                  results.isEligible
                    ? 'bg-gradient-to-br from-green-600 to-green-800 text-white'
                    : 'bg-gradient-to-br from-blue-600 to-blue-800 text-white'
                }
              >
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    {results.isEligible ? (
                      <>
                        <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-2">You're Eligible!</h2>
                        <p className="text-lg opacity-90">
                          You are eligible for Medicare coverage
                        </p>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-2">Not Yet Eligible</h2>
                        <p className="text-lg opacity-90">
                          You'll be eligible in {results.monthsUntilEligible} months
                        </p>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Enrollment Window */}
              {results.isEligible && (
                <Card variant="bordered">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Your Initial Enrollment Period
                        </h3>
                        <p className="text-gray-700 mb-2">{results.enrollmentWindow}</p>
                        <p className="text-sm text-gray-600">
                          This is your 7-month window to enroll in Medicare without
                          penalties.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recommendations */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {results.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Your Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {results.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card variant="bordered" className="bg-blue-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Schedule a free consultation with our Medicare experts. We'll help you
                    compare plans and enroll in the coverage that's right for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="flex-1">
                      <Link href="/contact">
                        Schedule Consultation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetChecker}
                      className="flex-1"
                    >
                      Check Again
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Disclaimer:</strong> This tool provides general guidance based
                    on the information you provided. Medicare eligibility and coverage
                    options can vary based on individual circumstances. Contact us for a
                    personalized assessment.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
