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
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Shield,
  TrendingUp,
  DollarSign,
  Award,
  AlertCircle,
  Briefcase,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Small Business Employee Benefits Guide 2024 | Benefits Resource Group',
  description:
    'Complete guide for small business owners (2-50 employees) on offering competitive employee benefits packages. Learn about health insurance, retirement plans, costs, and strategies.',
};

export default function SmallBusinessBenefitsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="primary" className="mb-4 bg-white/20 text-white">
              Employee Benefits
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Small Business Employee Benefits: Complete Getting Started Guide
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Everything you need to know about offering competitive benefits packages with 2-50 employees
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>7 min read</span>
              <span>•</span>
              <span>Updated January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Offering employee benefits is one of the most important decisions you'll make as a small
              business owner. Benefits help you attract and retain talented employees, boost morale and
              productivity, and in many cases, provide significant tax advantages for your business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But navigating the world of employee benefits can be overwhelming, especially when you're
              running a small business with limited HR resources. This comprehensive guide breaks down
              everything you need to know to create a competitive benefits package that fits your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Why Offer Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Small Businesses Should Offer Employee Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card variant="bordered" className="border-blue-200 bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 text-lg">Attract Top Talent</h3>
                </div>
                <p className="text-gray-700">
                  78% of employees consider benefits a major factor when choosing a job. Offering competitive
                  benefits helps you compete with larger companies for the best candidates.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 text-lg">Reduce Turnover</h3>
                </div>
                <p className="text-gray-700">
                  Employees with good benefits are 5x more likely to stay with their employer. Reducing
                  turnover saves money on recruiting and training costs.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-purple-200 bg-purple-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 text-lg">Tax Advantages</h3>
                </div>
                <p className="text-gray-700">
                  Employer contributions to health insurance and retirement plans are tax-deductible business
                  expenses, reducing your company's taxable income.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 text-lg">Boost Productivity</h3>
                </div>
                <p className="text-gray-700">
                  Healthy, financially secure employees are more engaged and productive. Benefits demonstrate
                  that you value your team's wellbeing.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Important Note About the ACA</h3>
                  <p className="text-gray-700">
                    If you have 50+ full-time equivalent employees, the Affordable Care Act requires you to
                    offer affordable health insurance or face penalties. Businesses with fewer than 50 employees
                    are not required to offer health insurance, but many choose to for competitive advantages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Benefits Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Employee Benefits for Small Businesses
          </h2>

          {/* Health Insurance */}
          <div className="mb-12">
            <Card variant="bordered">
              <CardHeader className="bg-red-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Group Health Insurance</CardTitle>
                    <CardDescription>The #1 most valued employee benefit</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What It Is</h4>
                    <p className="text-gray-700">
                      Group health insurance provides medical coverage for you and your employees at lower
                      rates than individual plans. Most carriers require at least 2-5 participating employees.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Typical Costs (2024)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Individual Coverage</p>
                        <p className="text-2xl font-bold text-gray-900">$600-$800<span className="text-lg font-normal text-gray-600">/month</span></p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Family Coverage</p>
                        <p className="text-2xl font-bold text-gray-900">$1,800-$2,400<span className="text-lg font-normal text-gray-600">/month</span></p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Employer Contribution Strategies</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">100% Employee-Only Coverage</p>
                          <p className="text-sm text-gray-600">Most common: Employer pays 100% of employee premium, employee pays for dependents</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">50/50 Split</p>
                          <p className="text-sm text-gray-600">Employer pays 50%, employee pays 50% (for employee and/or dependents)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">Defined Contribution</p>
                          <p className="text-sm text-gray-600">Employer contributes fixed dollar amount per employee (e.g., $400/month)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Small Business Health Options (SHOP)</h4>
                    <p className="text-blue-800 text-sm">
                      Businesses with 1-50 employees may qualify for SHOP marketplace plans and potential tax
                      credits if you contribute at least 50% of employee premiums and have average wages below $60,000.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Retirement Plans */}
          <div className="mb-12">
            <Card variant="bordered">
              <CardHeader className="bg-green-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Retirement Plans</CardTitle>
                    <CardDescription>Help employees save for their future</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">SIMPLE IRA</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>For businesses with &lt;100 employees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Easy to administer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Employer match required (2% or 3%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>2024 limit: $16,000</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">SEP IRA</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Any size business</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Minimal paperwork</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Employer contributions only</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>2024 limit: 25% of comp or $69,000</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">401(k)</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Any size business</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Most flexible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Optional employer match</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>2024 limit: $23,000 employee</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Startup Tax Credits</h4>
                    <p className="text-green-800 text-sm">
                      Small businesses (under 100 employees) may be eligible for a tax credit covering up to 50%
                      of startup costs for the first 3 years when establishing a new retirement plan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Benefits to Consider</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">Dental & Vision Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Affordable add-ons that employees highly value. Typically $30-50/month per employee.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Average Cost</p>
                    <p className="font-semibold text-gray-900">$30-50/month per employee</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">Life & Disability Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Basic life insurance (1-2x salary) and short/long-term disability coverage.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Average Cost</p>
                    <p className="font-semibold text-gray-900">$50-100/month per employee</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">Paid Time Off (PTO)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Competitive PTO packages include 10-15 vacation days, 5-7 sick days, and 6-10 holidays.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Industry Standard</p>
                    <p className="font-semibold text-gray-900">15-25 total days per year</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">Flexible Spending Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Healthcare FSAs and Dependent Care FSAs help employees save on taxes for eligible expenses.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-xs text-gray-600 mb-1">Employer Cost</p>
                    <p className="font-semibold text-gray-900">Minimal - mostly admin fees</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sample Benefits Package Costs
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card variant="bordered" className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center">Starter Package</CardTitle>
                <CardDescription className="text-center">2-10 Employees</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-blue-600">$500-700</p>
                  <p className="text-gray-600 text-sm">per employee/month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Group health insurance (50% employer paid)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SIMPLE IRA with 3% match</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic PTO policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-green-200 bg-green-50">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-center">Competitive Package</CardTitle>
                <CardDescription className="text-center">10-30 Employees</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-green-600">$800-1,100</p>
                  <p className="text-gray-600 text-sm">per employee/month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Group health (100% employee, 50% dependent)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dental & vision insurance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">401(k) with 4% match</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic life & disability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Healthcare FSA</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-center">Premium Package</CardTitle>
                <CardDescription className="text-center">30-50 Employees</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-purple-600">$1,200-1,500</p>
                  <p className="text-gray-600 text-sm">per employee/month</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium health (100% employee & dependents)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dental, vision, life, disability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">401(k) with 6% match + profit sharing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">FSAs and supplemental benefits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Generous PTO and wellness programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card variant="elevated" className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Budget Planning Tip</h3>
                  <p className="text-gray-700">
                    As a rule of thumb, budget 20-30% of total payroll costs for employee benefits. A company
                    with $500,000 in annual payroll should expect to spend $100,000-$150,000 on benefits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Steps to Implement Employee Benefits
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Assess Your Budget</h3>
                    <p className="text-gray-700">
                      Determine how much you can afford to spend on benefits. Consider both the immediate costs
                      and the long-term ROI of attracting and retaining quality employees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Survey Your Employees</h3>
                    <p className="text-gray-700">
                      Ask current employees what benefits matter most to them. Priorities vary by demographics
                      (younger workers may value student loan assistance, parents want childcare support, etc.).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Work with a Benefits Broker</h3>
                    <p className="text-gray-700">
                      A benefits broker (like Benefits Resource Group) can shop multiple carriers, negotiate
                      rates, handle paperwork, and provide ongoing support at no cost to you - they're paid by
                      insurance carriers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compare Plan Options</h3>
                    <p className="text-gray-700">
                      Review proposals from multiple carriers. Consider premiums, deductibles, network coverage,
                      prescription drug coverage, and out-of-pocket maximums.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Communicate Clearly</h3>
                    <p className="text-gray-700">
                      Host enrollment meetings, create easy-to-understand guides, and ensure employees know the
                      value of their benefits package (including employer contributions).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Set Up Administration</h3>
                    <p className="text-gray-700">
                      Establish payroll deductions, enrollment systems, and processes for adding/removing
                      employees. Consider using benefits administration software for companies with 15+ employees.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Review Annually</h3>
                    <p className="text-gray-700">
                      Benefit costs and employee needs change. Review your package annually, ideally 60-90 days
                      before renewal, to shop for better rates or adjust coverage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            5 Common Benefits Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <Card variant="bordered" className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Not Shopping Around</h4>
                    <p className="text-gray-700 text-sm">
                      Many small businesses stick with the same carrier year after year, missing out on better
                      rates and coverage. Always get quotes from at least 3 carriers at renewal time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Underestimating Total Costs</h4>
                    <p className="text-gray-700 text-sm">
                      Don't forget to budget for administrative costs, payroll taxes on benefits, and annual
                      premium increases (typically 5-15% per year for health insurance).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Poor Communication</h4>
                    <p className="text-gray-700 text-sm">
                      Employees don't always understand the value of their benefits. Clearly communicate what
                      the company pays (e.g., "We contribute $600/month toward your health insurance").
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ignoring Compliance</h4>
                    <p className="text-gray-700 text-sm">
                      Benefits come with legal requirements: COBRA, ERISA, ACA reporting, HIPAA, etc. Work with
                      professionals who understand compliance to avoid costly penalties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered" className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">One-Size-Fits-All Approach</h4>
                    <p className="text-gray-700 text-sm">
                      Different employees value different benefits. Consider offering options (HSA vs PPO plans,
                      voluntary benefits) to appeal to diverse needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build Your Benefits Package?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free, customized benefits proposal designed for your small business. We'll shop multiple
            carriers and find the best coverage at competitive rates.
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
              <Link href="/tools/benefits-calculator">Estimate Costs</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            No-obligation consultation • 30+ years of experience • Serving businesses across 5 states
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/hsa-vs-fsa-guide">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Employee Benefits</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    HSA vs FSA: Which is Right for You?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Understand the differences between Health Savings Accounts and Flexible Spending Accounts.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/401k-vs-profit-sharing">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Retirement Planning</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    401(k) vs. Profit Sharing Plans
                  </h4>
                  <p className="text-sm text-gray-600">
                    Compare retirement plan options to find the best fit for your business.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/complete-guide-medicare-enrollment">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Medicare & Healthcare</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Complete Guide to Medicare Enrollment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Everything you need to know about Medicare Parts A, B, C, and D.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
