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
  Shield,
  Building2,
  Users,
  Zap,
  Lock,
  FileText,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Heart,
  Car,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Insurance Solutions | Benefits Resource Group LLC',
  description:
    'Comprehensive business insurance solutions including general liability, property, workers comp, and cyber insurance. Protect your business across Hawaii, California, Nevada, Utah, and Washington.',
};

const insuranceTypes = [
  {
    icon: Shield,
    title: 'General Liability Insurance',
    description:
      'Protects your business from claims of bodily injury, property damage, and advertising injury.',
  },
  {
    icon: Building2,
    title: 'Commercial Property Insurance',
    description:
      'Covers your business property including buildings, equipment, inventory, and furniture against damage or loss.',
  },
  {
    icon: Users,
    title: 'Workers Compensation',
    description:
      'Required coverage that protects employees injured on the job and shields your business from liability.',
  },
  {
    icon: Lock,
    title: 'Cyber Liability Insurance',
    description:
      'Protects against data breaches, cyberattacks, and digital security incidents that could compromise customer information.',
  },
  {
    icon: FileText,
    title: 'Professional Liability (E&O)',
    description:
      'Covers claims of negligence, errors, or omissions in professional services provided to clients.',
  },
  {
    icon: Car,
    title: 'Commercial Auto Insurance',
    description:
      'Protects company vehicles and drivers for accidents, injuries, and property damage.',
  },
  {
    icon: Heart,
    title: 'Key Person Insurance',
    description:
      'Life insurance on critical executives or owners to protect the business from financial loss.',
  },
  {
    icon: TrendingUp,
    title: 'Business Interruption Insurance',
    description:
      'Covers lost income and operating expenses when business operations are disrupted by covered events.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description:
      'Safeguard your business assets, employees, and operations against unexpected risks and liabilities.',
  },
  {
    icon: DollarSign,
    title: 'Financial Security',
    description:
      'Avoid devastating financial losses that could threaten your business continuity and growth.',
  },
  {
    icon: CheckCircle,
    title: 'Legal Compliance',
    description:
      'Meet state and federal insurance requirements to operate legally and avoid penalties.',
  },
  {
    icon: Users,
    title: 'Employee Protection',
    description:
      'Demonstrate commitment to employee safety and wellbeing with proper coverage.',
  },
];

const process = [
  {
    step: '1',
    title: 'Risk Assessment',
    description:
      'We analyze your business operations, industry, and specific risks to identify coverage needs.',
  },
  {
    step: '2',
    title: 'Coverage Design',
    description:
      'We design a comprehensive insurance package tailored to your business and budget.',
  },
  {
    step: '3',
    title: 'Carrier Selection',
    description:
      'We compare quotes from multiple top-rated carriers to find the best coverage at competitive rates.',
  },
  {
    step: '4',
    title: 'Ongoing Support',
    description:
      'We provide continuous claims assistance, policy reviews, and coverage updates as your business grows.',
  },
];

const whyChooseUs = [
  'Independent broker representing multiple carriers',
  'Customized solutions, not one-size-fits-all packages',
  'Claims advocacy and support when you need it most',
  'Annual policy reviews to ensure optimal coverage',
  'Bundle policies for maximum savings',
  'Risk management consulting included',
];

export default function BusinessInsurancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Business Insurance</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Protect Your Business with Comprehensive Insurance
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                From general liability to cyber insurance, we provide the coverage your
                business needs to operate with confidence and peace of mind.
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
                <h3 className="text-2xl font-bold mb-6">Why Business Insurance?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Protect against lawsuits and liability claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Cover property damage and business interruption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Meet legal and contractual requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Build credibility with clients and partners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Types of Business Insurance We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage solutions to protect every aspect of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceTypes.map((type) => (
              <Card key={type.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
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
              Benefits of Business Insurance
            </h2>
            <p className="text-xl text-gray-600">
              Protect your investment and ensure business continuity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="elevated">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Risks Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common Business Risks We Help You Manage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every business faces unique risks. Our comprehensive insurance solutions
                help you mitigate potential threats and protect your bottom line.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Customer Injury or Property Damage
                    </h3>
                    <p className="text-gray-600">
                      Slip and fall accidents, property damage claims, and third-party injuries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Employee Workplace Injuries
                    </h3>
                    <p className="text-gray-600">
                      On-the-job accidents, repetitive stress injuries, and occupational illnesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Data Breaches and Cyberattacks
                    </h3>
                    <p className="text-gray-600">
                      Ransomware, hacking, customer data theft, and cyber extortion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Professional Errors and Omissions
                    </h3>
                    <p className="text-gray-600">
                      Mistakes in services, missed deadlines, and negligence claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why Choose Benefits Resource Group
                  </h3>
                  <ul className="space-y-3">
                    {whyChooseUs.map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{reason}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      With over 30 years of experience, we understand the unique insurance
                      needs of businesses across multiple industries.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Insurance Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              We make finding the right business insurance simple and straightforward.
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, no-obligation insurance quote tailored to your business needs.
            We'll compare multiple carriers to find you the best coverage at the best price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Serving businesses in Hawaii, California, Nevada, Utah, and Washington
          </p>
        </div>
      </section>
    </div>
  );
}
