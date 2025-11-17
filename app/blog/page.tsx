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
  ArrowRight,
  Clock,
  Calendar,
  Search,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Benefits Blog & Expert Insights | Benefits Resource Group LLC',
  description:
    'Expert articles and guides on employee benefits, Medicare, retirement planning, and healthcare. Get insights from 30+ years of industry experience.',
};

const blogPosts = [
  {
    slug: 'complete-guide-medicare-enrollment',
    title: 'The Complete Guide to Medicare Enrollment',
    category: 'Medicare & Healthcare',
    excerpt:
      'Everything you need to know about Medicare Parts A, B, C, and D, including enrollment periods, costs, and coverage options.',
    readTime: '10 min read',
    date: '2024-01-15',
    featured: true,
  },
  {
    slug: '401k-vs-profit-sharing',
    title: '401(k) vs. Profit Sharing: Which is Right for Your Business?',
    category: 'Retirement Planning',
    excerpt:
      'Compare different retirement plan options and learn which one offers the best benefits for your company size and goals.',
    readTime: '8 min read',
    date: '2024-01-12',
    featured: true,
  },
  {
    slug: 'hsa-vs-fsa-guide',
    title: 'HSA vs FSA: Understanding Health Savings Accounts and Flexible Spending Accounts',
    category: 'Employee Benefits',
    excerpt:
      'A comprehensive comparison of Health Savings Accounts and Flexible Spending Accounts, including contribution limits, eligibility, tax benefits, and rollover rules.',
    readTime: '6 min read',
    date: '2024-01-10',
    featured: true,
  },
  {
    slug: 'small-business-benefits-guide',
    title: 'Small Business Employee Benefits: Complete Getting Started Guide',
    category: 'Employee Benefits',
    excerpt:
      'Everything small business owners (2-50 employees) need to know about offering competitive benefits packages, including costs, implementation, and common mistakes to avoid.',
    readTime: '7 min read',
    date: '2024-01-08',
    featured: false,
  },
  {
    slug: 'medicare-supplement-plans',
    title: 'Medicare Supplement Plans: A Complete Comparison',
    category: 'Medicare & Healthcare',
    excerpt:
      'Explore Medigap Plan F, G, and N to find the best Medicare supplement for your needs. Compare premiums, coverage gaps, and out-of-pocket costs.',
    readTime: '8 min read',
    date: '2024-01-05',
    featured: false,
  },
];

const categories = [
  { name: 'All Articles', count: blogPosts.length, color: 'blue' },
  {
    name: 'Medicare & Healthcare',
    count: blogPosts.filter((p) => p.category === 'Medicare & Healthcare').length,
    color: 'red',
  },
  {
    name: 'Retirement Planning',
    count: blogPosts.filter((p) => p.category === 'Retirement Planning').length,
    color: 'green',
  },
  {
    name: 'Employee Benefits',
    count: blogPosts.filter((p) => p.category === 'Employee Benefits').length,
    color: 'purple',
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Benefits Blog & Expert Insights
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              In-depth articles and guides on employee benefits, Medicare, retirement planning, and
              more. Written by experts with over 30 years of industry experience.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                variant="bordered"
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-600">Our most comprehensive guides</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card variant="elevated" className="hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <Badge variant="primary" className="mb-3 w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Recent Articles
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card variant="bordered" className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Badge variant="info" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
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
                <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
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
