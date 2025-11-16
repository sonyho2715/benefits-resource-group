import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Users,
  PiggyBank,
  Shield,
  Target,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '401(k) vs. Profit Sharing: Which is Right for Your Business? | BRG',
  description:
    'Compare 401(k) and profit sharing plans to determine the best retirement solution for your business. Expert analysis from Benefits Resource Group with over 30 years of experience.',
};

export default function Article401kVsProfitSharingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" className="mb-4">
            Retirement Planning
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            401(k) vs. Profit Sharing: Which is Right for Your Business?
          </h1>
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 12, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As a business owner, offering a retirement plan is one of the most powerful tools
              you have to attract and retain talented employees. But with multiple retirement
              plan options available, how do you choose the right one? Two of the most popular
              choices are 401(k) plans and profit sharing plans. While both offer tax advantages
              and help employees save for retirement, they work very differently.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In this comprehensive guide, we'll break down the key differences between these
              plans, explore the benefits and drawbacks of each, and help you determine which
              option (or combination of both) makes the most sense for your business.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <Card variant="elevated" className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Quick Comparison: 401(k) vs. Profit Sharing
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600">401(k) Plan</th>
                      <th className="text-left py-3 px-4 font-semibold text-green-600">Profit Sharing</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Employee Contributions</td>
                      <td className="py-3 px-4">Yes (voluntary)</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Employer Contributions</td>
                      <td className="py-3 px-4">Optional (matching)</td>
                      <td className="py-3 px-4">Required (discretionary amount)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">2024 Employee Limit</td>
                      <td className="py-3 px-4">$23,000 ($30,500 age 50+)</td>
                      <td className="py-3 px-4">N/A</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Total Contribution Limit</td>
                      <td className="py-3 px-4">$69,000 ($76,500 age 50+)</td>
                      <td className="py-3 px-4">25% of comp or $69,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Contribution Timing</td>
                      <td className="py-3 px-4">Year-round</td>
                      <td className="py-3 px-4">Typically annual</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Flexibility</td>
                      <td className="py-3 px-4">Employees control amount</td>
                      <td className="py-3 px-4">Employer controls amount</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Best For</td>
                      <td className="py-3 px-4">Consistent contributions</td>
                      <td className="py-3 px-4">Variable profitability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 1: Understanding 401(k) Plans */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
              Understanding 401(k) Plans
            </h2>

            <p className="text-gray-700 mb-6">
              A 401(k) plan is a qualified retirement plan that allows employees to contribute a
              portion of their salary on a pre-tax or Roth (after-tax) basis. Employers can
              choose to match employee contributions, providing an additional incentive for
              participation.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How 401(k) Plans Work:
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    1
                  </div>
                  <span>
                    Employees elect to defer a percentage of their salary (up to annual limits)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    2
                  </div>
                  <span>
                    Contributions are deducted from each paycheck and deposited into individual
                    accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    3
                  </div>
                  <span>
                    Employers may match a portion of employee contributions (e.g., 50% of the
                    first 6%)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    4
                  </div>
                  <span>
                    Funds grow tax-deferred until withdrawal (or tax-free with Roth 401(k))
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    5
                  </div>
                  <span>
                    Employees direct how funds are invested from plan options
                  </span>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Advantages of 401(k) Plans:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Employee Control</h4>
                  <p className="text-sm text-gray-700">
                    Employees choose how much to contribute and can adjust amounts throughout
                    the year
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">High Contribution Limits</h4>
                  <p className="text-sm text-gray-700">
                    2024 limits of $23,000 plus catch-up contributions for those 50+
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tax Advantages</h4>
                  <p className="text-sm text-gray-700">
                    Reduces employee taxable income; employer contributions are tax-deductible
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Predictable Costs</h4>
                  <p className="text-sm text-gray-700">
                    Employer match formulas make costs predictable and controllable
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Potential Drawbacks:
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Nondiscrimination Testing
                  </h4>
                  <p className="text-sm text-gray-700">
                    Plans must pass annual tests to ensure they don't favor highly compensated
                    employees
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Administrative Complexity</h4>
                  <p className="text-sm text-gray-700">
                    Requires ongoing administration, compliance testing, and employee
                    communication
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Participation Challenges</h4>
                  <p className="text-sm text-gray-700">
                    Low employee participation can limit owners' ability to contribute
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Understanding Profit Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              Understanding Profit Sharing Plans
            </h2>

            <p className="text-gray-700 mb-6">
              A profit sharing plan is an employer-funded retirement plan where the company makes
              discretionary contributions to employee accounts. Unlike 401(k) plans, employees
              don't contribute their own money. Instead, the employer determines each year how
              much to contribute based on company profitability.
            </p>

            <div className="bg-green-50 rounded-lg p-6 mb-6 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Profit Sharing Works:
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    1
                  </div>
                  <span>
                    Company determines annual contribution amount (can be $0 in unprofitable
                    years)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    2
                  </div>
                  <span>
                    Contributions are allocated to eligible employees based on a predetermined
                    formula
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    3
                  </div>
                  <span>Common allocation methods: pro-rata (by compensation) or age-weighted</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    4
                  </div>
                  <span>
                    Contributions grow tax-deferred until retirement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                    5
                  </div>
                  <span>
                    Vesting schedules determine when employees own contributions
                  </span>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Advantages of Profit Sharing:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Contribution Flexibility</h4>
                  <p className="text-sm text-gray-700">
                    Contribute more in profitable years, less (or nothing) in lean years
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No Testing Required</h4>
                  <p className="text-sm text-gray-700">
                    Simpler compliance if integrated with 401(k) Safe Harbor
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Retention Tool</h4>
                  <p className="text-sm text-gray-700">
                    Vesting schedules encourage employee retention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tax Deductible</h4>
                  <p className="text-sm text-gray-700">
                    Employer contributions reduce taxable income
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Potential Drawbacks:
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    No Employee Contributions
                  </h4>
                  <p className="text-sm text-gray-700">
                    Employees can't boost retirement savings with their own deferrals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Unpredictable Benefits</h4>
                  <p className="text-sm text-gray-700">
                    Employees don't know what they'll receive until contributions are made
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lower Total Contributions</h4>
                  <p className="text-sm text-gray-700">
                    Without employee deferrals, total retirement savings may be less
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: The Best of Both Worlds */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              The Best of Both Worlds: Combining Plans
            </h2>

            <Card variant="elevated" className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 mb-6">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-4">
                  Many businesses find that combining a 401(k) plan with a profit sharing
                  component provides the best of both worlds. This approach offers:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Employee Empowerment
                    </h4>
                    <p className="text-sm text-gray-700">
                      Employees can make their own contributions and control their retirement
                      savings
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Employer Flexibility
                    </h4>
                    <p className="text-sm text-gray-700">
                      Variable profit sharing contributions adjust with business performance
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      Maximum Contributions
                    </h4>
                    <p className="text-sm text-gray-700">
                      Combination allows for higher total retirement savings
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Safe Harbor Option
                    </h4>
                    <p className="text-sm text-gray-700">
                      Safe Harbor 401(k) with profit sharing avoids nondiscrimination testing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Combination:</h3>
              <p className="text-gray-700 mb-4">
                A typical combined plan might include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Safe Harbor 401(k)</strong> with 3% nonelective contribution or
                    dollar-for-dollar match up to 3% plus 50% match on next 2%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Discretionary profit sharing</strong> contribution based on annual
                    profitability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Age-weighted allocation</strong> for profit sharing to benefit
                    older employees and owners
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Decision Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Which Plan is Right for Your Business?
            </h2>

            <div className="space-y-6">
              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    Choose a 401(k) Plan if:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want employees to have control over their retirement savings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Your business has stable, predictable cash flow
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want a competitive benefit to attract talent
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You're comfortable with ongoing plan administration
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">
                    Choose Profit Sharing if:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Your business has variable profitability year-to-year
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want complete control over contribution amounts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want to use vesting to encourage employee retention
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You prefer simpler plan administration
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="bordered" className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    Consider Both Plans if:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want to maximize retirement contributions for owners and key employees
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You have good profitability but want contribution flexibility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You want to avoid nondiscrimination testing with Safe Harbor
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        You're willing to invest in proper plan design and administration
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Choosing between a 401(k) plan, profit sharing plan, or combination of both is one
                of the most important decisions you'll make for your business and employees. The
                right choice depends on your company's financial situation, cash flow predictability,
                employee demographics, and retirement planning goals.
              </p>
              <p className="text-gray-700 mb-4">
                Many businesses find that a combined approach offers the best balance of employee
                engagement, contribution flexibility, and tax advantages. However, every business is
                unique, and what works for one company may not be the best fit for another.
              </p>
              <p className="text-gray-700">
                Working with an experienced retirement plan consultant can help you evaluate your
                options, design a plan that meets your specific needs, and ensure compliance with
                all regulations. The investment in proper plan design pays dividends in employee
                satisfaction, retention, and your own retirement security.
              </p>
            </div>
          </section>

          {/* CTA */}
          <Card variant="elevated" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <PiggyBank className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Design Your Retirement Plan?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our retirement planning experts can help you design a 401(k), profit sharing, or
                  combined plan that fits your business goals and budget.
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
                    <Link href="/tools/retirement-calculator">Calculate Savings</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/catch-up-contributions-50-plus">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="primary" className="mb-3">Retirement Planning</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Catch-Up Contributions: Maximize Your Retirement Savings at 50+
                    </h4>
                    <p className="text-sm text-gray-600">
                      How to boost your retirement nest egg with catch-up contributions.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/roth-vs-traditional-401k">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="primary" className="mb-3">Retirement Planning</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Roth vs Traditional 401(k): Which is Better?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Compare tax treatment and choose the right 401(k) option.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/resources">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="primary" className="mb-3">View All</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Browse All Resources
                    </h4>
                    <p className="text-sm text-gray-600">
                      Explore our complete library of guides and articles.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
