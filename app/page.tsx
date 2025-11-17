import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Shield,
  Users,
  TrendingUp,
  Heart,
  Calculator,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
} from 'lucide-react';
import { StructuredData } from '@/components/seo/structured-data';
import { localBusinessSchema } from '@/lib/structured-data';

const services = [
  {
    icon: Users,
    title: 'Business Benefits',
    description:
      'Comprehensive employee benefits packages that attract and retain top talent while managing costs.',
    href: '/services/business-benefits',
  },
  {
    icon: Heart,
    title: 'Medicare Enrollment',
    description:
      'Expert guidance through Medicare options to find the best coverage for your unique situation.',
    href: '/services/medicare-enrollment',
  },
  {
    icon: TrendingUp,
    title: 'Retirement Planning',
    description:
      '401(k) and retirement solutions designed to help your employees secure their financial future.',
    href: '/services/retirement-planning',
  },
  {
    icon: Shield,
    title: 'Estate Planning',
    description:
      'Protect your legacy and ensure your assets are distributed according to your wishes.',
    href: '/services/estate-planning',
  },
];

const tools = [
  {
    title: 'Benefits Calculator',
    description: 'Estimate costs and ROI for employee benefits packages',
    href: '/tools/benefits-calculator',
  },
  {
    title: 'Medicare Checker',
    description: 'Check eligibility and compare Medicare plan options',
    href: '/tools/medicare-checker',
  },
  {
    title: 'Retirement Calculator',
    description: 'Plan your retirement savings and investment strategy',
    href: '/tools/retirement-calculator',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Pacific Tech Solutions',
    content:
      'Benefits Resource Group transformed our employee benefits program. Their expertise helped us reduce costs by 20% while improving coverage. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'HR Director, Island Hospitality Group',
    content:
      'The team at BRG made Medicare enrollment so easy for our retiring employees. Their personalized guidance and support are unmatched.',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Owner, Martinez Family Restaurant',
    content:
      'As a small business owner, I was overwhelmed by benefits options. BRG simplified everything and found solutions that fit our budget perfectly.',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Businesses Served' },
  { value: '30+ Years', label: 'Of Experience' },
  { value: '5 States', label: 'Service Coverage' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Expert Benefits Consulting for Your Business & Future
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Serving Hawaii, California, Nevada, Utah, and Washington with comprehensive
                benefits solutions since 2017.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link href="/tools/benefits-calculator">Try Our Calculator</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Licensed in 5 States</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>30+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/teL0paRFOTg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
            </div>
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Benefits Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From employee benefits to retirement planning, we provide expert guidance
              tailored to your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                variant="bordered"
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <Link href={service.href}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Professional team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Benefits Resource Group?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                With over 30 years of experience serving businesses and individuals across 5 states,
                we bring expertise, dedication, and personalized service to every client relationship.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed & Trusted</h3>
                    <p className="text-gray-600">
                      Fully licensed in Hawaii, California, Nevada, Utah, and Washington with a proven track record.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">
                      We take time to understand your unique needs and provide customized solutions, not one-size-fits-all packages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">
                      Our clients save an average of 20% on benefits costs while improving coverage quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Free Interactive Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make informed decisions with our suite of free calculators and planning tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card key={tool.title} variant="elevated">
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={tool.href}>Try It Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses and individuals across 5 states.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} variant="bordered">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.content}</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
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
            Ready to Optimize Your Benefits?
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
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            No obligation. No pressure. Just expert advice.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
