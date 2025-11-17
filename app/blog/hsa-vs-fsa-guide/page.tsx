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
  XCircle,
  DollarSign,
  Calendar,
  CreditCard,
  TrendingUp,
  AlertCircle,
  Users,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'HSA vs FSA: Complete Guide to Health Savings Accounts | Benefits Resource Group',
  description:
    'Understand the key differences between Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). Learn about contribution limits, tax benefits, rollover rules, and which account is right for you.',
};

export default function HSAFSAGuidePage() {
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
              HSA vs FSA: Understanding Health Savings Accounts and Flexible Spending Accounts
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              A comprehensive guide to choosing the right tax-advantaged healthcare account for your needs
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>6 min read</span>
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
              Both Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs) offer valuable
              tax advantages for healthcare expenses, but they work very differently. Understanding these
              differences is crucial for maximizing your healthcare savings and making informed decisions
              during open enrollment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This guide breaks down everything you need to know about HSAs and FSAs, including eligibility
              requirements, contribution limits, tax benefits, and practical strategies for choosing the
              right account for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Quick Comparison: HSA vs FSA
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">HSA</th>
                  <th className="px-6 py-4 text-left font-semibold">FSA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Eligibility</td>
                  <td className="px-6 py-4 text-gray-700">High-Deductible Health Plan required</td>
                  <td className="px-6 py-4 text-gray-700">Any health plan (employer-sponsored)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">2024 Contribution Limit</td>
                  <td className="px-6 py-4 text-gray-700">Individual: $4,150<br />Family: $8,300</td>
                  <td className="px-6 py-4 text-gray-700">$3,200 per year</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Rollover</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">✓ Unlimited rollover</td>
                  <td className="px-6 py-4 text-red-700 font-semibold">✗ Use-it-or-lose-it (with exceptions)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Ownership</td>
                  <td className="px-6 py-4 text-gray-700">You own the account</td>
                  <td className="px-6 py-4 text-gray-700">Employer owns the account</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Portability</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">✓ Stays with you if you change jobs</td>
                  <td className="px-6 py-4 text-red-700 font-semibold">✗ Typically lose when you leave</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Investment Options</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">✓ Can invest like retirement account</td>
                  <td className="px-6 py-4 text-red-700 font-semibold">✗ No investment options</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Tax Benefit</td>
                  <td className="px-6 py-4 text-gray-700">Triple tax advantage</td>
                  <td className="px-6 py-4 text-gray-700">Pre-tax contributions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HSA Deep Dive */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Health Savings Accounts (HSA) - The Long-Term Winner
              </h2>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700">
                An HSA is a tax-advantaged savings account designed for people with High-Deductible Health
                Plans (HDHPs). It offers the most powerful tax benefits of any healthcare savings vehicle.
              </p>
            </div>

            {/* HSA Eligibility */}
            <Card variant="bordered" className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">HSA Eligibility Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Enrolled in a High-Deductible Health Plan (HDHP)</p>
                      <p className="text-gray-600 text-sm mt-1">
                        2024 minimums: $1,600 deductible (individual) or $3,200 (family)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">NOT enrolled in Medicare</p>
                      <p className="text-gray-600 text-sm mt-1">
                        You cannot contribute to an HSA once enrolled in Medicare (typically age 65)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">NOT claimed as a dependent</p>
                      <p className="text-gray-600 text-sm mt-1">
                        You cannot be claimed as a dependent on someone else's tax return
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">No other health coverage</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Cannot have additional health coverage that pays before your HDHP deductible
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HSA Triple Tax Advantage */}
            <Card variant="elevated" className="mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">The Triple Tax Advantage</CardTitle>
                <CardDescription className="text-green-700">
                  HSAs offer three unique tax benefits that no other account provides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax-Deductible Contributions</h4>
                    <p className="text-sm text-gray-600">
                      Contributions reduce your taxable income (above-the-line deduction)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax-Free Growth</h4>
                    <p className="text-sm text-gray-600">
                      Investment earnings and interest grow completely tax-free
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax-Free Withdrawals</h4>
                    <p className="text-sm text-gray-600">
                      Withdrawals for qualified medical expenses are never taxed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* HSA Advantages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key HSA Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card variant="bordered" className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Unlimited Rollover</h4>
                        <p className="text-sm text-gray-600">
                          Unused funds roll over year after year with no limits. Build a healthcare nest egg.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">You Own It</h4>
                        <p className="text-sm text-gray-600">
                          The account belongs to you, not your employer. Keep it forever, even if you change jobs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Investment Options</h4>
                        <p className="text-sm text-gray-600">
                          Invest HSA funds in mutual funds, ETFs, or stocks for long-term growth potential.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Retirement Backup</h4>
                        <p className="text-sm text-gray-600">
                          After age 65, withdraw for any reason (taxed like traditional IRA, no penalty).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* HSA Drawbacks */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">HSA Considerations</h3>
              <div className="space-y-4">
                <Card variant="bordered" className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">High-Deductible Requirement</h4>
                        <p className="text-sm text-gray-600">
                          Must be enrolled in an HDHP, which means higher out-of-pocket costs before insurance kicks in.
                          Not ideal if you have significant ongoing medical expenses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Requires Discipline</h4>
                        <p className="text-sm text-gray-600">
                          Best results come from not touching the HSA and paying medical expenses out-of-pocket,
                          allowing the account to grow tax-free for retirement healthcare costs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Non-Medical Withdrawals Penalized</h4>
                        <p className="text-sm text-gray-600">
                          Before age 65, non-qualified withdrawals face a 20% penalty plus income tax. After 65,
                          just income tax applies (like a traditional IRA).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FSA Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Flexible Spending Accounts (FSA) - Short-Term Savings
              </h2>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700">
                An FSA is an employer-sponsored benefit that lets you set aside pre-tax dollars for qualified
                healthcare or dependent care expenses. It's available with any health plan and provides
                immediate tax savings.
              </p>
            </div>

            {/* FSA Types */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-xl">Healthcare FSA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>2024 limit: $3,200</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Covers medical, dental, vision expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Available with any health plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Full amount available on day 1</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-xl">Dependent Care FSA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>2024 limit: $5,000 per household</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Covers childcare, preschool, after-school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Adult day care for disabled dependents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Reimbursement after expense incurred</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* FSA Advantages */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key FSA Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card variant="bordered" className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Immediate Access</h4>
                        <p className="text-sm text-gray-600">
                          Your full annual election is available on day 1, even though you contribute via payroll
                          throughout the year.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">No Health Plan Restrictions</h4>
                        <p className="text-sm text-gray-600">
                          Available with any employer health plan. No requirement for high-deductible coverage.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Simple to Use</h4>
                        <p className="text-sm text-gray-600">
                          Straightforward process: contribute, incur expenses, submit receipts, get reimbursed.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Predictable Expenses</h4>
                        <p className="text-sm text-gray-600">
                          Perfect for planned medical procedures, orthodontia, or regular dependent care costs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FSA Drawbacks */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">FSA Limitations</h3>
              <div className="space-y-4">
                <Card variant="bordered" className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Use-It-Or-Lose-It Rule</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Unused funds generally don't roll over. You must use the money by year-end or lose it.
                          Some employers offer a grace period (2.5 months) or allow up to $640 rollover (2024).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Employer Ownership</h4>
                        <p className="text-sm text-gray-600">
                          The FSA belongs to your employer, not you. If you leave your job, you typically lose
                          access to remaining funds (though you may have a short claims runout period).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Annual Election Lock-In</h4>
                        <p className="text-sm text-gray-600">
                          Must elect contribution amount during open enrollment. Cannot change unless you have a
                          qualifying life event (marriage, birth, job change, etc.).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">No Investment Growth</h4>
                        <p className="text-sm text-gray-600">
                          FSA funds cannot be invested. They sit in the account earning little or no interest.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Which Account is Right for You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="elevated" className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900">Choose HSA If You...</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Have a high-deductible health plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Are generally healthy with low medical expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Can afford to pay medical expenses out-of-pocket</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Want long-term savings for retirement healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Like the idea of investing healthcare dollars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Want maximum flexibility and portability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">Choose FSA If You...</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Don't have a high-deductible health plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Have predictable annual medical expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Need immediate access to full contribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Have ongoing prescriptions or regular treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Have dependent care expenses (childcare, eldercare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Want a simple, short-term savings tool</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Can You Have Both? */}
          <Card variant="elevated" className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-xl text-purple-900">Can You Have Both?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Generally, <strong>you cannot contribute to both a Healthcare FSA and an HSA</strong> in the
                same year. However, there are some exceptions:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Limited-Purpose FSA + HSA</p>
                    <p className="text-sm text-gray-600">
                      A limited-purpose FSA covers only dental and vision expenses, allowing you to also
                      contribute to an HSA for medical expenses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Dependent Care FSA + HSA</p>
                    <p className="text-sm text-gray-600">
                      You can contribute to a dependent care FSA and an HSA simultaneously since they cover
                      different expense categories.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Expert Tips for Maximizing Your Benefits
          </h2>

          <div className="space-y-6">
            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Max Out HSA if Possible</h3>
                    <p className="text-gray-700">
                      An HSA is one of the best retirement savings vehicles available. Consider maxing it out
                      before fully funding a Roth IRA, especially if you can pay medical expenses from other sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Don't Over-Contribute to FSA</h3>
                    <p className="text-gray-700">
                      Only contribute what you're confident you'll spend. Review last year's healthcare receipts
                      to estimate. It's better to contribute too little than lose money to the use-it-or-lose-it rule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Save HSA Receipts Forever</h3>
                    <p className="text-gray-700">
                      Pay medical expenses out-of-pocket and save receipts. You can reimburse yourself from your
                      HSA tax-free at any time in the future, even years later. This lets your HSA grow tax-free.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Spend FSA Funds Strategically</h3>
                    <p className="text-gray-700">
                      As year-end approaches, use remaining FSA funds for eligible expenses: stock up on contacts,
                      glasses, OTC medications, sunscreen, first aid supplies, or schedule that dental cleaning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Invest Your HSA</h3>
                    <p className="text-gray-700">
                      Once your HSA balance reaches $1,000-$2,000, consider investing the excess in low-cost
                      index funds. Your HSA can become a powerful retirement healthcare fund.
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
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help Choosing the Right Account?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our benefits experts can help you analyze your healthcare needs and select the optimal
            savings strategy for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/tools/hsa-fsa-comparison">Try Our HSA/FSA Calculator</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/small-business-benefits-guide">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Employee Benefits</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Small Business Employee Benefits: Getting Started
                  </h4>
                  <p className="text-sm text-gray-600">
                    A comprehensive guide for small business owners on offering competitive benefits.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/401k-vs-profit-sharing">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Retirement Planning</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    401(k) vs. Profit Sharing: Which is Right for Your Business?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Compare retirement plan options for your company size and goals.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/complete-guide-medicare-enrollment">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="primary" className="mb-3">Medicare & Healthcare</Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    The Complete Guide to Medicare Enrollment
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
