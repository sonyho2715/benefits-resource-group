import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ArrowLeft, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medicare Part D Prescription Drug Coverage Guide | Benefits Resource Group',
  description:
    'Everything you need to know about Medicare Part D prescription drug coverage, including enrollment, costs, and choosing the right plan.',
};

export default function MedicarePartDPage() {
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
            Medicare Part D: Complete Prescription Drug Coverage Guide
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
              We're creating a comprehensive guide to Medicare Part D prescription drug
              coverage. This article will cover enrollment periods, coverage phases,
              formularies, and how to choose the best Part D plan for your medications.
            </p>
            <div className="bg-blue-50 rounded-lg p-8 max-w-xl mx-auto mb-8">
              <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Notified When Published
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to be notified when this article and other
                Medicare resources are published.
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
                  Medicare Enrollment Guide
                </h4>
                <p className="text-gray-600 mb-4">
                  Learn about all Medicare parts including Part D, enrollment periods,
                  and coverage options.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/blog/complete-guide-medicare-enrollment">Read Article</Link>
                </Button>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardContent className="pt-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Medicare Services
                </h4>
                <p className="text-gray-600 mb-4">
                  Get expert guidance navigating Medicare options and finding the best
                  coverage for your needs.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/medicare-enrollment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
}
