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
  FileText,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Scale,
  Home,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Estate Planning Services | Benefits Resource Group LLC',
  description:
    'Comprehensive estate planning coordination services. Protect your legacy, ensure your assets are distributed according to your wishes, and provide for your loved ones.',
};

const services = [
  {
    icon: FileText,
    title: 'Will & Trust Preparation',
    description:
      'Work with qualified attorneys to create wills, living trusts, and other essential documents.',
  },
  {
    icon: Users,
    title: 'Beneficiary Coordination',
    description:
      'Ensure all your accounts, policies, and assets have proper beneficiary designations.',
  },
  {
    icon: Shield,
    title: 'Asset Protection',
    description:
      'Strategies to protect your assets from creditors, lawsuits, and estate taxes.',
  },
  {
    icon: Heart,
    title: 'Healthcare Directives',
    description:
      'Advance directives, living wills, and healthcare power of attorney documents.',
  },
  {
    icon: Scale,
    title: 'Tax Minimization',
    description:
      'Work with tax professionals to minimize estate and inheritance taxes for your heirs.',
  },
  {
    icon: Briefcase,
    title: 'Business Succession',
    description:
      'Plan for the smooth transition of your business to the next generation or new owners.',
  },
];

const documents = [
  {
    title: 'Last Will and Testament',
    description:
      'Specifies how your assets will be distributed and who will care for minor children.',
    important: true,
  },
  {
    title: 'Revocable Living Trust',
    description:
      'Allows assets to pass to heirs without probate, providing privacy and efficiency.',
    important: true,
  },
  {
    title: 'Power of Attorney',
    description:
      'Authorizes someone to manage your financial affairs if you become incapacitated.',
    important: true,
  },
  {
    title: 'Healthcare Power of Attorney',
    description:
      'Designates someone to make medical decisions on your behalf if you cannot.',
    important: true,
  },
  {
    title: 'Living Will (Advance Directive)',
    description:
      'Documents your wishes for end-of-life medical care and life-sustaining treatments.',
    important: false,
  },
  {
    title: 'Beneficiary Designations',
    description:
      'Forms that specify who will receive your retirement accounts, life insurance, and other assets.',
    important: false,
  },
];

const benefits = [
  'Avoid family conflicts and legal disputes',
  'Minimize estate taxes and probate costs',
  'Protect assets for future generations',
  'Ensure business continuity',
  'Provide for children and dependents',
  'Maintain privacy of your affairs',
  'Control distribution of assets',
  'Plan for incapacity or disability',
];

const process = [
  {
    step: '1',
    title: 'Initial Consultation',
    description:
      'We discuss your goals, family situation, assets, and concerns to understand your needs.',
  },
  {
    step: '2',
    title: 'Coordination',
    description:
      'We connect you with qualified estate planning attorneys and financial professionals.',
  },
  {
    step: '3',
    title: 'Document Preparation',
    description:
      'Working with your legal team, we help ensure all documents are properly prepared.',
  },
  {
    step: '4',
    title: 'Implementation',
    description:
      'We assist with beneficiary designations, asset transfers, and other implementation steps.',
  },
  {
    step: '5',
    title: 'Regular Reviews',
    description:
      'We recommend reviewing your estate plan every 3-5 years or after major life events.',
  },
];

export default function EstatePlanningPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Estate Planning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Protect Your Legacy and Provide for Your Loved Ones
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive estate planning coordination services to ensure your assets
                are protected and distributed according to your wishes.
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
                  <Link href="#documents">View Essential Documents</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Estate Planning Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Protect your family from difficult decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Minimize taxes and avoid probate delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Ensure assets go to intended beneficiaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Plan for incapacity and end-of-life care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Estate Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We coordinate with qualified professionals to provide comprehensive estate
              planning solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Documents Section */}
      <section id="documents" className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Essential Estate Planning Documents
            </h2>
            <p className="text-xl text-gray-600">
              These are the key documents everyone should have in place
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <Card key={doc.title} variant="elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                    {doc.important && (
                      <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                        Essential
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{doc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Proper Estate Planning
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                A well-designed estate plan provides peace of mind and protects your family's
                future. Without proper planning, your estate may face unnecessary taxes,
                delays, and family disputes.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-4">Did You Know?</h3>
                <p className="text-gray-700">
                  Without a will, state laws determine how your assets are distributed,
                  which may not align with your wishes. The probate process can take
                  months or even years, leaving your family in uncertainty.
                </p>
              </div>
            </div>
            <div>
              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-6">
                    What Estate Planning Accomplishes
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
              Our Estate Planning Process
            </h2>
            <p className="text-xl text-gray-600">
              We guide you through every step of the estate planning journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item) => (
              <Card key={item.step} variant="bordered">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Update Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              When to Review Your Estate Plan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your estate plan should be reviewed and updated after major life events
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Marriage or divorce',
              'Birth or adoption',
              'Death of beneficiary',
              'Significant asset changes',
              'Moving to another state',
              'Business ownership changes',
              'Changes in tax laws',
              'Every 3-5 years minimum',
            ].map((event) => (
              <Card
                key={event}
                variant="bordered"
                padding="sm"
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent>
                  <p className="font-medium text-gray-900">{event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Planning Your Legacy Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't leave your family's future to chance. Contact us for a free consultation
            to discuss your estate planning needs.
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
              <Link href="/about">Learn About Us</Link>
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
