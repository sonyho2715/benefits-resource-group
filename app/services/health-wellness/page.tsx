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
  Activity,
  Apple,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Dumbbell,
  Brain,
  Stethoscope,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health & Wellness Programs | Benefits Resource Group LLC',
  description:
    'Comprehensive employee health and wellness programs that improve productivity, reduce healthcare costs, and boost morale. Serving businesses across Hawaii, California, Nevada, Utah, and Washington.',
};

const wellnessPrograms = [
  {
    icon: Dumbbell,
    title: 'Fitness & Exercise Programs',
    description:
      'Gym memberships, onsite fitness classes, walking challenges, and activity tracking programs to promote physical health.',
  },
  {
    icon: Apple,
    title: 'Nutrition & Healthy Eating',
    description:
      'Nutritional counseling, healthy meal options, cooking classes, and personalized diet planning services.',
  },
  {
    icon: Brain,
    title: 'Mental Health Support',
    description:
      'Employee Assistance Programs (EAP), stress management, counseling services, and mindfulness training.',
  },
  {
    icon: Stethoscope,
    title: 'Preventive Health Screenings',
    description:
      'Biometric screenings, health risk assessments, flu shots, and annual wellness checkups.',
  },
  {
    icon: Heart,
    title: 'Chronic Disease Management',
    description:
      'Support for diabetes, hypertension, heart disease, and other chronic conditions through coaching and education.',
  },
  {
    icon: Activity,
    title: 'Lifestyle & Behavior Change',
    description:
      'Smoking cessation programs, weight management, sleep improvement, and healthy habit formation.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description:
      'Healthy employees are more engaged, focused, and productive at work.',
  },
  {
    icon: DollarSign,
    title: 'Reduced Healthcare Costs',
    description:
      'Preventive wellness programs can reduce medical claims and insurance premiums by up to 25%.',
  },
  {
    icon: Users,
    title: 'Improved Employee Retention',
    description:
      'Wellness benefits demonstrate you care about employee wellbeing, improving loyalty and retention.',
  },
  {
    icon: Shield,
    title: 'Lower Absenteeism',
    description:
      'Healthier employees take fewer sick days and are less likely to experience chronic health issues.',
  },
];

const programComponents = [
  {
    title: 'Health Risk Assessments',
    description:
      'Comprehensive questionnaires that identify individual health risks and provide personalized recommendations.',
  },
  {
    title: 'Biometric Screenings',
    description:
      'Onsite or virtual screenings measuring blood pressure, cholesterol, glucose, BMI, and other health indicators.',
  },
  {
    title: 'Health Coaching',
    description:
      'One-on-one coaching sessions with certified health professionals to set and achieve wellness goals.',
  },
  {
    title: 'Wellness Challenges',
    description:
      'Team-based competitions and individual challenges to promote healthy behaviors and build camaraderie.',
  },
  {
    title: 'Educational Resources',
    description:
      'Workshops, webinars, newsletters, and digital content on nutrition, fitness, stress management, and more.',
  },
  {
    title: 'Incentive Programs',
    description:
      'Reward systems including gift cards, premium discounts, PTO, and prizes for participation and goal achievement.',
  },
];

const roi = [
  {
    stat: '$3.27',
    label: 'Medical cost savings for every $1 spent on wellness programs',
  },
  {
    stat: '$2.73',
    label: 'Absenteeism cost savings for every $1 spent on wellness programs',
  },
  {
    stat: '25%',
    label: 'Average reduction in healthcare and disability costs',
  },
  {
    stat: '90%',
    label: 'Of employees say wellness programs improve their health',
  },
];

const process = [
  {
    step: '1',
    title: 'Needs Assessment',
    description:
      'We evaluate your workforce demographics, health trends, and organizational goals to design a custom program.',
  },
  {
    step: '2',
    title: 'Program Design',
    description:
      'We create a comprehensive wellness strategy with activities, incentives, and measurable objectives.',
  },
  {
    step: '3',
    title: 'Implementation',
    description:
      'We launch your program with employee communications, vendor coordination, and technology setup.',
  },
  {
    step: '4',
    title: 'Measurement & Optimization',
    description:
      'We track participation, health outcomes, and ROI, continuously improving the program based on results.',
  },
];

export default function HealthWellnessPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Health & Wellness</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Build a Healthier, More Engaged Workforce
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive employee wellness programs that improve health outcomes, reduce
                costs, and create a culture of wellbeing in your organization.
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
                  <Link href="/tools/benefits-calculator">Calculate ROI</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Program Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Reduce healthcare costs by up to 25%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Boost employee morale and engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Lower absenteeism and disability claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Attract and retain top talent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our wellness programs address all aspects of employee health and wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessPrograms.map((program) => (
              <Card key={program.title} variant="bordered">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
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
              Why Invest in Wellness?
            </h2>
            <p className="text-xl text-gray-600">
              Employee wellness programs deliver measurable business results.
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

      {/* ROI Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The ROI of Wellness Programs
            </h2>
            <p className="text-xl text-blue-100">
              Research-backed results from workplace wellness initiatives
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roi.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.stat}</div>
                <div className="text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-blue-200 mt-8">
            Source: American Journal of Health Promotion & Harvard Business Review
          </p>
        </div>
      </section>

      {/* Program Components Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Wellness Programs
            </h2>
            <p className="text-xl text-gray-600">
              Customizable components to fit your organization's needs and culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programComponents.map((component) => (
              <Card key={component.title} variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {component.title}
                  </h3>
                  <p className="text-gray-700">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              We make launching a wellness program simple and effective.
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

      {/* Success Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Real Results from Real Businesses
              </h2>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "After implementing a comprehensive wellness program with Benefits Resource
                Group, we saw a 30% reduction in health insurance claims and a significant
                improvement in employee satisfaction scores. The program paid for itself
                within the first year."
              </blockquote>
              <div className="text-gray-900 font-semibold">Sarah Johnson</div>
              <div className="text-gray-600">CEO, Pacific Tech Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Activity className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build a Healthier Workplace?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's design a wellness program that fits your organization's culture, budget,
            and goals. Schedule a free consultation to get started.
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
              <Link href="/about">Learn About Our Team</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            Serving businesses across Hawaii, California, Nevada, Utah, and Washington
          </p>
        </div>
      </section>
    </div>
  );
}
