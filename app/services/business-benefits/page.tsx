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
  Users,
  Shield,
  TrendingUp,
  Heart,
  Briefcase,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Award,
  FileText,
} from 'lucide-react';
import { StructuredData } from '@/components/seo/structured-data';
import { createServiceSchema, createFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Business Benefits Solutions | Benefits Resource Group LLC',
  description:
    'Comprehensive employee benefits packages designed to attract and retain top talent while managing costs. Group health, dental, vision, life insurance, and more.',
};

const benefits = [
  {
    icon: Heart,
    title: 'Group Health Insurance',
    description:
      'Comprehensive medical coverage from top carriers with competitive rates and extensive provider networks.',
  },
  {
    icon: Shield,
    title: 'Dental & Vision',
    description:
      'Complete dental and vision coverage to keep your team healthy and productive.',
  },
  {
    icon: Briefcase,
    title: 'Life & Disability Insurance',
    description:
      'Protect your employees and their families with group life and disability coverage.',
  },
  {
    icon: TrendingUp,
    title: '401(k) Plans',
    description:
      'Retirement savings plans that help employees build their financial future.',
  },
  {
    icon: DollarSign,
    title: 'HSA & FSA Programs',
    description:
      'Tax-advantaged savings accounts for healthcare and dependent care expenses.',
  },
  {
    icon: Award,
    title: 'Supplemental Benefits',
    description:
      'Additional coverage options including accident, critical illness, and hospital indemnity.',
  },
];

const advantages = [
  {
    title: 'Attract Top Talent',
    description:
      'Competitive benefits packages help you recruit and retain the best employees in your industry.',
  },
  {
    title: 'Reduce Turnover',
    description:
      'Employees with comprehensive benefits are more likely to stay with your company long-term.',
  },
  {
    title: 'Tax Advantages',
    description:
      'Many benefit contributions are tax-deductible for your business and tax-free for employees.',
  },
  {
    title: 'Increased Productivity',
    description:
      'Healthy, secure employees are more engaged and productive in their work.',
  },
];

const process = [
  {
    step: '1',
    title: 'Consultation',
    description:
      'We assess your business needs, budget, and employee demographics to understand your goals.',
  },
  {
    step: '2',
    title: 'Plan Design',
    description:
      'We design customized benefits packages with options from multiple carriers.',
  },
  {
    step: '3',
    title: 'Implementation',
    description:
      'We handle enrollment, communication, and all administrative details.',
  },
  {
    step: '4',
    title: 'Ongoing Support',
    description:
      'We provide year-round support for you and your employees, including annual renewals.',
  },
];

const faqData = [
  {
    question: 'What size businesses do you work with?',
    answer: 'We work with businesses of all sizes, from small startups with just a few employees to large corporations. Our solutions are customized to fit your company size, budget, and specific needs.',
  },
  {
    question: 'How much do employee benefits typically cost?',
    answer: 'The cost varies based on company size, coverage levels, and employee demographics. On average, small businesses spend $500-1,500 per employee per month. We help you find the most cost-effective options while maintaining quality coverage.',
  },
  {
    question: 'Can I offer different benefits to different employees?',
    answer: 'Generally, you must offer the same core benefits to all full-time employees in the same class. However, employees can choose different coverage levels, and you can offer additional voluntary benefits that employees pay for themselves.',
  },
  {
    question: 'What is the difference between fully-insured and self-funded plans?',
    answer: 'Fully-insured plans have fixed monthly premiums paid to an insurance carrier who assumes all risk. Self-funded plans involve the employer paying claims directly, offering more control and potential savings but with more financial risk. We help you determine which is right for your business.',
  },
  {
    question: 'Do you provide ongoing support after implementation?',
    answer: 'Yes! We provide year-round support including employee enrollment assistance, claims support, annual plan reviews, renewal negotiations, and compliance updates. You\'ll have a dedicated account manager available whenever you need help.',
  },
];

const serviceSchema = createServiceSchema(
  'Employee Benefits Consulting',
  'Comprehensive employee benefits packages including group health, dental, vision, life insurance, disability, retirement plans, and wellness programs for businesses in Hawaii, California, Nevada, Utah, and Washington.'
);

const faqSchema = createFAQSchema(faqData);

export default function BusinessBenefitsPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">For Businesses</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Comprehensive Employee Benefits Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Attract and retain top talent with benefits packages that balance coverage,
                cost, and flexibility for your unique business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/tools/benefits-calculator">Calculate Costs</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>30+ years serving businesses across 5 states</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Access to top carriers and competitive rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>White-glove service and ongoing support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>No-cost consultations and plan comparisons</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Benefits Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From health insurance to retirement plans, we offer comprehensive solutions
              tailored to your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Business Advantage
            </h2>
            <p className="text-xl text-gray-600">
              Investing in employee benefits delivers measurable returns for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage) => (
              <Card key={advantage.title} variant="elevated">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              We make implementing employee benefits simple and stress-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across diverse industries and business sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Technology',
              'Healthcare',
              'Hospitality',
              'Retail',
              'Manufacturing',
              'Professional Services',
              'Construction',
              'Non-Profit',
              'Education',
              'Finance',
            ].map((industry) => (
              <Card
                key={industry}
                variant="bordered"
                padding="sm"
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent>
                  <p className="font-medium text-gray-900">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build Your Benefits Package?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation consultation and customized benefits proposal for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/tools/benefits-calculator">Estimate Costs</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Serving businesses in Hawaii, California, Nevada, Utah, and Washington
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
