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
  Heart,
  TrendingUp,
  Shield,
  Briefcase,
  Activity,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Benefits Resource Group LLC',
  description:
    'Comprehensive employee benefits, Medicare enrollment, retirement planning, estate planning, and business insurance services. Over 30 years of experience serving 5 states.',
};

const services = [
  {
    icon: Users,
    title: 'Business Benefits',
    href: '/services/business-benefits',
    description:
      'Comprehensive employee benefits packages that attract and retain top talent while managing costs.',
    features: [
      'Group health, dental, and vision insurance',
      '401(k) and retirement plans',
      'Life and disability coverage',
      'FSA and HSA administration',
    ],
  },
  {
    icon: Heart,
    title: 'Medicare Enrollment',
    href: '/services/medicare-enrollment',
    description:
      'Expert guidance through Medicare options to find the best coverage for your unique situation.',
    features: [
      'Medicare Parts A, B, C, and D guidance',
      'Medigap supplement plans',
      'Medicare Advantage comparisons',
      'Enrollment period assistance',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Retirement Planning',
    href: '/services/retirement-planning',
    description:
      '401(k) and retirement solutions designed to help your employees secure their financial future.',
    features: [
      '401(k) plan design and administration',
      'SIMPLE IRA and SEP IRA options',
      'Profit sharing plans',
      'Fiduciary support',
    ],
  },
  {
    icon: Shield,
    title: 'Estate Planning',
    href: '/services/estate-planning',
    description:
      'Protect your legacy and ensure your assets are distributed according to your wishes.',
    features: [
      'Wills and trusts',
      'Power of attorney',
      'Healthcare directives',
      'Beneficiary designations',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Insurance',
    href: '/services/business-insurance',
    description:
      'Comprehensive business protection including liability, property, and specialty coverage.',
    features: [
      'General liability insurance',
      'Professional liability (E&O)',
      'Commercial property coverage',
      'Workers compensation',
    ],
  },
  {
    icon: Activity,
    title: 'Health & Wellness',
    href: '/services/health-wellness',
    description:
      'Employee wellness programs that reduce healthcare costs and improve productivity.',
    features: [
      'Wellness program design',
      'Health risk assessments',
      'Biometric screenings',
      'Fitness and nutrition programs',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Comprehensive Benefits Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              From employee benefits to retirement planning, we provide expert guidance
              tailored to your unique needs. Serving Hawaii, California, Nevada, Utah, and
              Washington since 2017.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.href}
                variant="bordered"
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Benefits Resource Group?
            </h2>
            <p className="text-xl text-gray-600">
              Over 30 years of experience delivering personalized benefits solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="bordered">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-sm text-gray-600">
                  30+ years of benefits consulting experience across multiple industries
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-sm text-gray-600">
                  Customized solutions tailored to your specific business needs and goals
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Licensed in 5 States</h3>
                <p className="text-sm text-gray-600">
                  Serving businesses and individuals in HI, CA, NV, UT, and WA
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-sm text-gray-600">
                  Clients save an average of 20% on benefits costs while improving coverage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation with our benefits experts and discover how we can
            help you save money while improving coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/tools/benefits-calculator">Calculate Costs</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            No obligation. No pressure. Just expert advice.
          </p>
        </div>
      </section>
    </div>
  );
}
