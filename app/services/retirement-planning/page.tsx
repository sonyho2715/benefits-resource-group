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
  TrendingUp,
  DollarSign,
  PiggyBank,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  BarChart3,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retirement Planning & 401(k) Services | Benefits Resource Group LLC',
  description:
    'Expert retirement planning services including 401(k) plans, profit sharing, and retirement income strategies for businesses and individuals across 5 states.',
};

const retirementPlans = [
  {
    icon: Briefcase,
    title: '401(k) Plans',
    description:
      'Traditional and Roth 401(k) plans with flexible contribution options and employer matching programs.',
  },
  {
    icon: DollarSign,
    title: 'Profit Sharing',
    description:
      'Tax-advantaged profit sharing plans that reward employees while reducing your tax liability.',
  },
  {
    icon: Shield,
    title: 'Safe Harbor Plans',
    description:
      'Safe Harbor 401(k) plans that automatically pass IRS nondiscrimination tests.',
  },
  {
    icon: Target,
    title: 'Simple IRA',
    description:
      'Cost-effective retirement savings option for small businesses with fewer than 100 employees.',
  },
  {
    icon: TrendingUp,
    title: 'SEP IRA',
    description:
      'Simplified Employee Pension plans ideal for self-employed individuals and small business owners.',
  },
  {
    icon: PiggyBank,
    title: 'Pension Plans',
    description:
      'Defined benefit pension plans that provide guaranteed retirement income for key employees.',
  },
];

const benefits = [
  {
    title: 'Tax Benefits',
    description:
      'Employer contributions are tax-deductible, and employees enjoy tax-deferred growth on their investments.',
  },
  {
    title: 'Attract & Retain Talent',
    description:
      'Competitive retirement benefits help you recruit top talent and reduce employee turnover.',
  },
  {
    title: 'Flexible Contributions',
    description:
      'Choose from various contribution structures including matching, profit sharing, and discretionary contributions.',
  },
  {
    title: 'Employee Education',
    description:
      'We provide financial wellness programs and retirement planning education for your employees.',
  },
];

const process = [
  {
    step: '1',
    title: 'Plan Design',
    description:
      'We assess your business goals and design a retirement plan that meets your needs and budget.',
  },
  {
    step: '2',
    title: 'Provider Selection',
    description:
      'We help you choose from top-tier providers with competitive fees and strong investment options.',
  },
  {
    step: '3',
    title: 'Implementation',
    description:
      'We handle all setup, documentation, and employee enrollment to ensure a smooth launch.',
  },
  {
    step: '4',
    title: 'Ongoing Management',
    description:
      'We provide continuous support including compliance monitoring, investment reviews, and employee education.',
  },
];

const individualServices = [
  {
    icon: Target,
    title: 'Retirement Income Planning',
    description:
      'Create sustainable income streams for retirement using Social Security, pensions, and investment accounts.',
  },
  {
    icon: BarChart3,
    title: 'Investment Strategy',
    description:
      'Develop diversified investment portfolios aligned with your risk tolerance and retirement timeline.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description:
      'Protect your retirement savings with proper insurance coverage and tax-efficient strategies.',
  },
  {
    icon: Users,
    title: 'Legacy Planning',
    description:
      'Coordinate retirement and estate planning to ensure your wealth is preserved for future generations.',
  },
];

export default function RetirementPlanningPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Retirement Planning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Build a Secure Financial Future
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive retirement planning services for businesses and individuals.
                From 401(k) plans to retirement income strategies, we help you achieve
                your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link href="/tools/retirement-calculator">Calculate Savings</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Retirement Planning Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Tax-deferred growth on investments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Employer tax deductions for contributions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Attract and retain top employees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Expert guidance and ongoing support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business Retirement Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of retirement plan options to meet your business needs
              and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retirementPlans.map((plan) => (
              <Card key={plan.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Offer a Retirement Plan?
            </h2>
            <p className="text-xl text-gray-600">
              Retirement benefits provide significant advantages for your business and
              employees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="elevated">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              We make setting up your retirement plan simple and hassle-free.
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

      {/* Individual Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Individual Retirement Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized retirement planning services to help you achieve financial
              independence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {individualServices.map((service) => (
              <Card key={service.title} variant="bordered">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PiggyBank className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Planning Your Retirement Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're a business owner looking to set up a retirement plan or an
            individual planning for retirement, we're here to help.
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
              <Link href="/tools/retirement-calculator">Try Our Calculator</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Serving businesses and individuals across 5 states
          </p>
        </div>
      </section>
    </div>
  );
}
