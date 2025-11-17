import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ArrowLeft, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Catch-Up Contributions for 50+ | 401(k) & IRA Guide | Benefits Resource Group',
  description:
    'Learn how catch-up contributions for employees 50 and older can boost retirement savings in 401(k) plans and IRAs.',
};

export default function CatchUpContributionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Catch-Up Contributions: Maximizing Retirement Savings After 50
          </h1>
          <div className="flex items-center gap-4 text-blue-100">
            <span>Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card variant="elevated" className="text-center py-16">
          <CardContent>
            <FileText className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Article Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're developing a comprehensive guide on catch-up contributions for
              employees age 50 and older. Learn about contribution limits, tax benefits,
              and strategies to maximize your retirement savings in the final years before
              retirement.
            </p>
            <div className="bg-blue-50 rounded-lg p-8 max-w-xl mx-auto mb-8">
              <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Notified When Published
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to be notified when this article and other
                retirement planning resources are published.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">Browse All Articles</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card variant="bordered">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  401(k) vs. Profit Sharing
                </h4>
                <p className="text-gray-600 mb-4">
                  Compare different retirement plan options and learn which one offers the
                  best benefits for your goals.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/blog/401k-vs-profit-sharing">Read Article</Link>
                </Button>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Retirement Savings Calculator
                </h4>
                <p className="text-gray-600 mb-4">
                  Plan your retirement savings and see how catch-up contributions can
                  impact your nest egg.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/tools/retirement-calculator">Try the Calculator</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
}
