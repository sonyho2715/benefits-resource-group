import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Benefits Resource Group LLC',
  description:
    'Learn about Benefits Resource Group LLC, founded in 2017 by Larry Santiago. Serving Hawaii, California, Nevada, Utah, and Washington with expert benefits consulting.',
};

const values = [
  {
    icon: Heart,
    title: 'Client-Centered',
    description:
      'We put our clients first, taking time to understand their unique needs and providing personalized solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with honesty and transparency, always acting in the best interest of our clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from plan design to ongoing support and service.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We view our relationships as long-term partnerships, supporting clients through every stage of their journey.',
  },
];

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '500+', label: 'Businesses Served' },
  { value: '5', label: 'States Covered' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  'Employee Benefits Consulting',
  'Medicare Enrollment Assistance',
  'Retirement Plan Design & Management',
  'Estate Planning Coordination',
  'Business Insurance Solutions',
  'Health & Wellness Programs',
];

const statesServed = [
  { name: 'Hawaii', description: 'Honolulu Headquarters' },
  { name: 'California', description: 'Full-Service Coverage' },
  { name: 'Nevada', description: 'Full-Service Coverage' },
  { name: 'Utah', description: 'Full-Service Coverage' },
  { name: 'Washington', description: 'Full-Service Coverage' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Trusted Benefits Partner Since 2017
            </h1>
            <p className="text-xl text-blue-100">
              Benefits Resource Group LLC was founded with a simple mission: to provide
              businesses and individuals with expert benefits guidance and personalized
              service that makes a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/larry-santiago.png"
                  alt="Larry Santiago, Founder of Benefits Resource Group LLC"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Larry Santiago
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                With over 30 years of experience in the benefits industry, Larry Santiago
                founded Benefits Resource Group LLC in 2017 to provide comprehensive,
                client-focused benefits solutions across the Pacific and Western United
                States.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Larry's expertise spans employee benefits, Medicare enrollment, retirement
                planning, and estate planning coordination. His commitment to personalized
                service and deep understanding of the benefits landscape has helped hundreds
                of businesses and individuals make informed decisions about their coverage
                and financial future.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Licensed benefits consultant in Hawaii, California, Nevada, Utah, and
                    Washington
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Specialized expertise in Medicare enrollment and retirement planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Committed to providing personalized, white-glove service to every client
                  </span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower businesses and individuals with expert benefits guidance,
              personalized service, and innovative solutions that protect their health,
              wealth, and future. We are committed to being a trusted partner, providing
              clarity in a complex industry and delivering exceptional value to every client
              we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} variant="bordered">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Benefits Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We offer a full range of benefits consulting services to meet the diverse
                needs of businesses and individuals across our service areas.
              </p>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/services/business-benefits">Explore Our Services</Link>
                </Button>
              </div>
            </div>
            <div>
              <Card variant="elevated">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    What Sets Us Apart
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Personalized Approach</h4>
                        <p className="text-sm text-gray-600">
                          We take time to understand your unique situation and goals before
                          recommending solutions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Expert Guidance</h4>
                        <p className="text-sm text-gray-600">
                          Decades of combined experience navigating the complex benefits
                          landscape.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Long-Term Partnership</h4>
                        <p className="text-sm text-gray-600">
                          We provide ongoing support and guidance, not just one-time
                          transactions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* States Served Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Licensed and ready to serve clients across 5 states
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {statesServed.map((state) => (
              <Card key={state.name} variant="bordered" className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{state.name}</h3>
                  <p className="text-sm text-gray-600">{state.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your benefits and retirement goals.
            Schedule a free, no-obligation consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/tools/benefits-calculator">Try Our Free Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
