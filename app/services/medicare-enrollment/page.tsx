import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Heart,
  Shield,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Phone,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medicare Enrollment Services | Benefits Resource Group LLC',
  description:
    'Expert Medicare enrollment guidance in Hawaii and across 5 states. Navigate Medicare Parts A, B, C, D, and Medigap with confidence. Free consultations available.',
};

const medicareParts = [
  {
    icon: Heart,
    title: 'Medicare Part A',
    subtitle: 'Hospital Insurance',
    description:
      'Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care.',
  },
  {
    icon: FileText,
    title: 'Medicare Part B',
    subtitle: 'Medical Insurance',
    description:
      'Covers doctor visits, outpatient care, preventive services, and medical equipment.',
  },
  {
    icon: Shield,
    title: 'Medicare Part C',
    subtitle: 'Medicare Advantage',
    description:
      'All-in-one alternative to Original Medicare offered by private insurance companies, often includes prescription drug coverage.',
  },
  {
    icon: DollarSign,
    title: 'Medicare Part D',
    subtitle: 'Prescription Drug Coverage',
    description:
      'Helps cover the cost of prescription drugs, available as standalone plans or included in Medicare Advantage.',
  },
];

const supplementPlans = [
  'Plan A - Basic Coverage',
  'Plan B - Extended Coverage',
  'Plan G - Comprehensive (Most Popular)',
  'Plan N - Cost-Effective Option',
  'High Deductible Plans',
];

const enrollmentPeriods = [
  {
    period: 'Initial Enrollment Period',
    description:
      '7-month period that begins 3 months before your 65th birthday month, includes your birthday month, and ends 3 months after.',
  },
  {
    period: 'General Enrollment Period',
    description:
      'January 1 to March 31 each year for those who missed their Initial Enrollment Period.',
  },
  {
    period: 'Special Enrollment Period',
    description:
      'Available when you have certain life events, such as losing employer coverage or moving to a new area.',
  },
  {
    period: 'Annual Enrollment Period',
    description:
      'October 15 to December 7 each year to make changes to your Medicare Advantage or Part D coverage.',
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: 'Personalized Guidance',
    description:
      'We take time to understand your health needs, budget, and preferences to recommend the best options.',
  },
  {
    icon: FileText,
    title: 'Plan Comparison',
    description:
      'We compare multiple carriers and plans side-by-side so you can make informed decisions.',
  },
  {
    icon: CheckCircle,
    title: 'Enrollment Support',
    description:
      'We handle all paperwork and ensure your enrollment is completed correctly and on time.',
  },
  {
    icon: Phone,
    title: 'Ongoing Assistance',
    description:
      'We provide year-round support for claims, coverage questions, and annual reviews.',
  },
];

export default function MedicareEnrollmentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Medicare Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Navigate Medicare with Confidence
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert guidance through Medicare enrollment and plan selection. We help you
                understand your options and find the coverage that fits your needs and
                budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/tools/medicare-checker">Check Eligibility</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Turning 65 Soon?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Start planning 3 months before your 65th birthday</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Avoid late enrollment penalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Compare plans from top carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Get expert, no-cost guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Parts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Understanding Medicare Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Medicare has different parts that cover specific services. We help you
              understand what you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {medicareParts.map((part) => (
              <Card key={part.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <part.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{part.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-blue-600">
                    {part.subtitle}
                  </CardDescription>
                  <CardDescription>{part.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medigap Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Medicare Supplement Insurance (Medigap)
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Medigap policies help pay some of the health care costs that Original
                Medicare doesn't cover, like copayments, coinsurance, and deductibles.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Popular Medigap Plans:</h3>
                <ul className="space-y-3">
                  {supplementPlans.map((plan) => (
                    <li key={plan} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Important to Know</h3>
                      <p className="text-gray-700">
                        The best time to buy a Medigap policy is during your 6-month
                        Medigap Open Enrollment Period, which starts the month you turn
                        65 and are enrolled in Medicare Part B.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      During this period, you can buy any Medigap policy sold in your
                      state, even if you have health problems, and you cannot be charged
                      more due to past or present health issues.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Periods Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medicare Enrollment Periods
            </h2>
            <p className="text-xl text-gray-600">
              Understanding when you can enroll is critical to avoid penalties and gaps in
              coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {enrollmentPeriods.map((item) => (
              <Card key={item.period} variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.period}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Medicare Services
            </h2>
            <p className="text-xl text-gray-600">
              We make Medicare enrollment simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <Card key={item.title} variant="elevated">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Enroll in Medicare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation with our Medicare experts. We'll help you
            understand your options and enroll in the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/tools/medicare-checker">Check Your Eligibility</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Serving Hawaii, California, Nevada, Utah, and Washington
          </p>
        </div>
      </section>
    </div>
  );
}
