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
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  FileText,
  TrendingUp,
  Users,
  Heart,
  Shield,
  DollarSign,
  Calendar,
  Download,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources & Guides | Benefits Resource Group LLC',
  description:
    'Expert guides, articles, and resources on employee benefits, Medicare, retirement planning, and more. Stay informed with Benefits Resource Group LLC.',
};

const categories = [
  {
    name: 'Employee Benefits',
    icon: Users,
    color: 'blue',
    count: 18,
  },
  {
    name: 'Medicare & Healthcare',
    icon: Heart,
    color: 'red',
    count: 12,
  },
  {
    name: 'Retirement Planning',
    icon: TrendingUp,
    color: 'green',
    count: 14,
  },
  {
    name: 'Tax Strategies',
    icon: DollarSign,
    color: 'purple',
    count: 9,
  },
];

const featuredArticles = [
  {
    title: 'The Complete Guide to Medicare Enrollment',
    category: 'Medicare & Healthcare',
    excerpt:
      'Everything you need to know about Medicare Parts A, B, C, and D, including enrollment periods, costs, and coverage options.',
    readTime: '10 min read',
    date: '2024-01-15',
    featured: true,
  },
  {
    title: '401(k) vs. Profit Sharing: Which is Right for Your Business?',
    category: 'Retirement Planning',
    excerpt:
      'Compare different retirement plan options and learn which one offers the best benefits for your company size and goals.',
    readTime: '8 min read',
    date: '2024-01-12',
    featured: true,
  },
  {
    title: 'How to Reduce Your Group Health Insurance Costs',
    category: 'Employee Benefits',
    excerpt:
      'Practical strategies to lower your health insurance premiums while maintaining quality coverage for your employees.',
    readTime: '7 min read',
    date: '2024-01-10',
    featured: true,
  },
];

const allArticles = [
  {
    title: 'Understanding HSAs and FSAs: Which One is Right for You?',
    category: 'Employee Benefits',
    excerpt:
      'A detailed comparison of Health Savings Accounts and Flexible Spending Accounts, including contribution limits, eligibility requirements, tax benefits, and rollover rules to help you make the best choice for your healthcare needs.',
    readTime: '6 min read',
    date: '2024-01-08',
  },
  {
    title: 'Estate Planning Essentials: Protecting Your Legacy',
    category: 'Tax Strategies',
    excerpt:
      'Learn about wills, trusts, powers of attorney, healthcare directives, and beneficiary designations. Discover how proper estate planning can minimize taxes, avoid probate, and ensure your wishes are carried out.',
    readTime: '9 min read',
    date: '2024-01-05',
  },
  {
    title: 'Medicare Supplement Plans: A Complete Comparison',
    category: 'Medicare & Healthcare',
    excerpt:
      'Explore Medigap Plan F, G, and N to find the best Medicare supplement for your needs. Compare premiums, coverage gaps, and out-of-pocket costs across different plan types and carriers.',
    readTime: '8 min read',
    date: '2024-01-03',
  },
  {
    title: 'Small Business Employee Benefits: Getting Started',
    category: 'Employee Benefits',
    excerpt:
      'A comprehensive guide for small business owners on offering competitive benefits packages. Learn about health insurance options, retirement plans, voluntary benefits, and cost-effective strategies for companies with 2-50 employees.',
    readTime: '7 min read',
    date: '2023-12-28',
  },
  {
    title: 'Catch-Up Contributions: Maximize Your Retirement Savings at 50+',
    category: 'Retirement Planning',
    excerpt:
      'How to take advantage of catch-up contributions to boost your retirement nest egg. Discover the 2024 contribution limits for 401(k)s, IRAs, and HSAs for those age 50 and older, plus strategies to accelerate your savings.',
    readTime: '5 min read',
    date: '2023-12-22',
  },
  {
    title: 'ACA Compliance for Small Businesses in 2024',
    category: 'Employee Benefits',
    excerpt:
      'Stay compliant with the Affordable Care Act and avoid penalties. Understand employer mandate requirements, reporting obligations, affordability standards, and penalties for businesses with 50+ full-time equivalent employees.',
    readTime: '10 min read',
    date: '2023-12-18',
  },
  {
    title: 'The Hidden Costs of High Deductible Health Plans',
    category: 'Employee Benefits',
    excerpt:
      'While HDHPs offer lower premiums, they come with trade-offs. Learn how high deductibles affect employee utilization, delayed care, financial stress, and overall healthcare costs. Includes strategies to help employees manage HDHP expenses.',
    readTime: '7 min read',
    date: '2023-12-15',
  },
  {
    title: 'Medicare Part D: Understanding Prescription Drug Coverage',
    category: 'Medicare & Healthcare',
    excerpt:
      'Navigate the complexities of Medicare Part D prescription drug plans. Learn about coverage phases, formularies, donut holes, and Extra Help programs. Plus, tips for comparing plans during Annual Enrollment Period.',
    readTime: '8 min read',
    date: '2023-12-10',
  },
  {
    title: 'Business Succession Planning: Protecting Your Company\'s Future',
    category: 'Tax Strategies',
    excerpt:
      'Ensure business continuity with proper succession planning. Explore buy-sell agreements, key person insurance, family transition strategies, and tax-efficient exit planning for business owners approaching retirement.',
    readTime: '11 min read',
    date: '2023-12-05',
  },
  {
    title: 'Wellness Programs That Actually Work: ROI and Best Practices',
    category: 'Employee Benefits',
    excerpt:
      'Not all wellness programs deliver results. Discover evidence-based strategies that reduce healthcare costs, improve productivity, and boost employee engagement. Includes case studies showing 3:1 ROI and implementation tips.',
    readTime: '9 min read',
    date: '2023-11-28',
  },
  {
    title: 'Roth vs Traditional 401(k): Which is Better for Your Employees?',
    category: 'Retirement Planning',
    excerpt:
      'Help your employees make informed decisions about Roth vs Traditional 401(k) contributions. Compare tax treatment, income limits, withdrawal rules, and strategies for different age groups and income levels.',
    readTime: '6 min read',
    date: '2023-11-20',
  },
  {
    title: 'Cyber Insurance: Why Every Business Needs It in 2024',
    category: 'Employee Benefits',
    excerpt:
      'Cyber threats are rising. Learn why cyber liability insurance is essential, what it covers (data breaches, ransomware, business interruption), policy costs, and how to choose the right coverage limits for your business.',
    readTime: '8 min read',
    date: '2023-11-15',
  },
];

const downloadableGuides = [
  {
    title: '2024 Medicare Enrollment Checklist',
    description: 'Step-by-step checklist for enrolling in Medicare',
    icon: CheckCircle,
  },
  {
    title: 'Employee Benefits Comparison Chart',
    description: 'Compare different benefit options side-by-side',
    icon: FileText,
  },
  {
    title: 'Retirement Planning Timeline',
    description: 'Age-based milestones for retirement planning',
    icon: Calendar,
  },
  {
    title: 'Small Business Benefits Guide',
    description: 'Complete guide to offering employee benefits',
    icon: BookOpen,
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Resources & Expert Guides
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay informed with our comprehensive library of articles, guides, and resources on
              employee benefits, Medicare, retirement planning, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.name} variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.count} articles</p>
                      </div>
                      <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 text-${category.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.title} variant="elevated" className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge variant="primary" className="mb-3 w-fit">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{article.readTime}</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Free Downloadable Guides
            </h2>
            <p className="text-xl text-gray-600">
              Get our expert guides delivered straight to your inbox
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadableGuides.map((guide) => {
              const IconComponent = guide.icon;
              return (
                <Card key={guide.title} variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <IconComponent className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Download PDF
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Recent Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {allArticles.map((article) => (
              <Card key={article.title} variant="bordered" className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{article.readTime}</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <Button variant="ghost" className="w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest insights, industry updates, and expert tips
            on employee benefits and financial planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button size="lg" variant="secondary">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="bordered" className="bg-blue-50">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Have Questions? We're Here to Help
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our benefits experts are ready to answer
                  your questions and provide personalized guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Contact an Expert
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/tools/benefits-calculator">Explore Our Tools</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
