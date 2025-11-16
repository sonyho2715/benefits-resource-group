'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building,
  Heart,
  Shield,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const stateOptions = [
  { value: '', label: 'Select state...' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'CA', label: 'California' },
  { value: 'NV', label: 'Nevada' },
  { value: 'UT', label: 'Utah' },
  { value: 'WA', label: 'Washington' },
];

const planTypeOptions = [
  { value: '', label: 'Select plan type...' },
  { value: 'HMO', label: 'HMO (Health Maintenance Organization)' },
  { value: 'PPO', label: 'PPO (Preferred Provider Organization)' },
  { value: 'EPO', label: 'EPO (Exclusive Provider Organization)' },
  { value: 'HDHP', label: 'HDHP (High Deductible Health Plan)' },
];

const industrySizeOptions = [
  { value: '', label: 'Select company size...' },
  { value: '2-9', label: '2-9 employees' },
  { value: '10-24', label: '10-24 employees' },
  { value: '25-49', label: '25-49 employees' },
  { value: '50-99', label: '50-99 employees' },
  { value: '100+', label: '100+ employees' },
];

export default function GroupHealthEstimatorPage() {
  const [formData, setFormData] = useState({
    state: '',
    companySize: '',
    employeeCount: '',
    planType: '',
    individualCount: '',
    employeePlusOneCount: '',
    familyCount: '',
    employerContribution: '75',
  });

  const [results, setResults] = useState<{
    employerMonthlyCost: number;
    employeeMonthlyCost: number;
    totalMonthlyCost: number;
    employerAnnualCost: number;
    employeeAnnualCost: number;
    totalAnnualCost: number;
    costPerEmployee: number;
    taxSavings: number;
    breakdown: {
      individual: { count: number; employerCost: number; employeeCost: number };
      employeePlusOne: { count: number; employerCost: number; employeeCost: number };
      family: { count: number; employerCost: number; employeeCost: number };
    };
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateEstimate = () => {
    const individualCount = parseInt(formData.individualCount) || 0;
    const employeePlusOneCount = parseInt(formData.employeePlusOneCount) || 0;
    const familyCount = parseInt(formData.familyCount) || 0;
    const employerContributionPercent = parseFloat(formData.employerContribution) / 100;

    // Base rates vary by state and plan type
    const stateMultiplier: { [key: string]: number } = {
      HI: 1.2,
      CA: 1.3,
      NV: 1.0,
      UT: 0.95,
      WA: 1.15,
    };

    const planMultiplier: { [key: string]: number } = {
      HMO: 1.0,
      PPO: 1.2,
      EPO: 1.1,
      HDHP: 0.85,
    };

    const baseIndividualRate = 600;
    const stateAdj = stateMultiplier[formData.state] || 1.0;
    const planAdj = planMultiplier[formData.planType] || 1.0;

    // Calculate tier rates
    const individualRate = baseIndividualRate * stateAdj * planAdj;
    const employeePlusOneRate = individualRate * 2.0;
    const familyRate = individualRate * 2.5;

    // Calculate costs by tier
    const individualTotalCost = individualCount * individualRate;
    const employeePlusOneTotalCost = employeePlusOneCount * employeePlusOneRate;
    const familyTotalCost = familyCount * familyRate;

    const totalMonthlyCost = individualTotalCost + employeePlusOneTotalCost + familyTotalCost;

    const employerMonthlyCost = totalMonthlyCost * employerContributionPercent;
    const employeeMonthlyCost = totalMonthlyCost - employerMonthlyCost;

    const totalEmployees = individualCount + employeePlusOneCount + familyCount;
    const costPerEmployee = totalEmployees > 0 ? employerMonthlyCost / totalEmployees : 0;

    // Calculate tax savings (employer contributions are tax-deductible)
    const taxSavings = employerMonthlyCost * 12 * 0.25; // Approximate 25% tax rate

    setResults({
      employerMonthlyCost,
      employeeMonthlyCost,
      totalMonthlyCost,
      employerAnnualCost: employerMonthlyCost * 12,
      employeeAnnualCost: employeeMonthlyCost * 12,
      totalAnnualCost: totalMonthlyCost * 12,
      costPerEmployee,
      taxSavings,
      breakdown: {
        individual: {
          count: individualCount,
          employerCost: individualTotalCost * employerContributionPercent,
          employeeCost: individualTotalCost * (1 - employerContributionPercent),
        },
        employeePlusOne: {
          count: employeePlusOneCount,
          employerCost: employeePlusOneTotalCost * employerContributionPercent,
          employeeCost: employeePlusOneTotalCost * (1 - employerContributionPercent),
        },
        family: {
          count: familyCount,
          employerCost: familyTotalCost * employerContributionPercent,
          employeeCost: familyTotalCost * (1 - employerContributionPercent),
        },
      },
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Group Health Cost Estimator
          </h1>
          <p className="text-xl text-blue-100">
            Get an instant estimate of group health insurance costs for your business. Compare plan
            types and coverage options to find the best fit.
          </p>
        </div>
      </section>

      {/* Estimator Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Company Information</CardTitle>
                  <CardDescription>
                    Enter your company details to get a personalized cost estimate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Select
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      options={stateOptions}
                      required
                    />

                    <Select
                      label="Company Size"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      options={industrySizeOptions}
                      required
                    />

                    <Select
                      label="Plan Type"
                      name="planType"
                      value={formData.planType}
                      onChange={handleChange}
                      options={planTypeOptions}
                      required
                      helperText="HMO is typically lowest cost, PPO offers most flexibility"
                    />

                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Coverage Tiers (Number of Employees)
                      </h3>

                      <div className="space-y-4">
                        <Input
                          label="Individual Coverage"
                          name="individualCount"
                          type="number"
                          value={formData.individualCount}
                          onChange={handleChange}
                          placeholder="0"
                          min="0"
                          helperText="Employee only"
                        />

                        <Input
                          label="Employee + Spouse/Partner"
                          name="employeePlusOneCount"
                          type="number"
                          value={formData.employeePlusOneCount}
                          onChange={handleChange}
                          placeholder="0"
                          min="0"
                        />

                        <Input
                          label="Family Coverage"
                          name="familyCount"
                          type="number"
                          value={formData.familyCount}
                          onChange={handleChange}
                          placeholder="0"
                          min="0"
                          helperText="Employee + spouse + dependents"
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Employer Contribution Percentage
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          name="employerContribution"
                          min="0"
                          max="100"
                          step="5"
                          value={formData.employerContribution}
                          onChange={handleChange}
                          className="flex-1"
                        />
                        <span className="text-2xl font-bold text-blue-600 min-w-[4rem] text-right">
                          {formData.employerContribution}%
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Typical employer contributions range from 50% to 100%
                      </p>
                    </div>

                    <Button
                      size="lg"
                      onClick={calculateEstimate}
                      disabled={
                        !formData.state ||
                        !formData.companySize ||
                        !formData.planType ||
                        (!formData.individualCount &&
                          !formData.employeePlusOneCount &&
                          !formData.familyCount)
                      }
                      className="w-full"
                    >
                      Calculate Costs
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="space-y-6">
                  {/* Monthly Cost Summary */}
                  <Card variant="elevated" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    <CardContent className="pt-8 pb-8">
                      <div className="text-center">
                        <p className="text-blue-100 mb-2">Estimated Monthly Cost</p>
                        <h2 className="text-5xl font-bold mb-2">
                          {formatCurrency(results.employerMonthlyCost)}
                        </h2>
                        <p className="text-blue-100">Employer Contribution</p>
                        <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                          <div>
                            <p className="text-sm text-blue-100">Employee Share</p>
                            <p className="text-xl font-bold">
                              {formatCurrency(results.employeeMonthlyCost)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-blue-100">Total Premium</p>
                            <p className="text-xl font-bold">
                              {formatCurrency(results.totalMonthlyCost)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Annual Cost Breakdown */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Annual Cost Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Employer Annual Cost</span>
                          <span className="text-xl font-bold text-gray-900">
                            {formatCurrency(results.employerAnnualCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Employee Annual Cost</span>
                          <span className="text-xl font-bold text-gray-900">
                            {formatCurrency(results.employeeAnnualCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Total Annual Premium</span>
                          <span className="text-xl font-bold text-blue-600">
                            {formatCurrency(results.totalAnnualCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 bg-green-50 rounded-lg px-4">
                          <span className="text-gray-700 font-medium">
                            Estimated Tax Savings
                          </span>
                          <span className="text-xl font-bold text-green-600">
                            {formatCurrency(results.taxSavings)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cost Per Employee */}
                  <Card variant="bordered">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 mb-2">Average Cost Per Employee</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {formatCurrency(results.costPerEmployee)}
                          <span className="text-lg text-gray-600">/month</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tier Breakdown */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Coverage Tier Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.breakdown.individual.count > 0 && (
                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">
                                Individual Coverage
                              </span>
                              <Badge variant="secondary">
                                {results.breakdown.individual.count} employees
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Employer Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.individual.employerCost)}/mo
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Employee Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.individual.employeeCost)}/mo
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {results.breakdown.employeePlusOne.count > 0 && (
                          <div className="border-b border-gray-200 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">
                                Employee + Spouse/Partner
                              </span>
                              <Badge variant="secondary">
                                {results.breakdown.employeePlusOne.count} employees
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Employer Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.employeePlusOne.employerCost)}/mo
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Employee Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.employeePlusOne.employeeCost)}/mo
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {results.breakdown.family.count > 0 && (
                          <div className="pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-900">Family Coverage</span>
                              <Badge variant="secondary">
                                {results.breakdown.family.count} employees
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Employer Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.family.employerCost)}/mo
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Employee Cost</p>
                                <p className="font-semibold text-gray-900">
                                  {formatCurrency(results.breakdown.family.employeeCost)}/mo
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card variant="elevated" className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Estimate?
                    </h3>
                    <p className="text-gray-600">
                      Fill in your company information to see estimated costs
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Plan Type Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Plan Types
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="bordered">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">HMO</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Lowest cost option. Requires primary care physician and referrals for
                    specialists.
                  </p>
                  <Badge variant="success">Most Affordable</Badge>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">EPO</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Mid-range cost. No referrals needed but must stay in-network for coverage.
                  </p>
                  <Badge variant="secondary">Moderate Cost</Badge>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">PPO</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Higher cost. Maximum flexibility with in-network and out-of-network coverage.
                  </p>
                  <Badge variant="secondary">Most Flexible</Badge>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">HDHP</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Lower premiums, higher deductibles. Pairs with HSA for tax-advantaged savings.
                  </p>
                  <Badge variant="success">HSA Eligible</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <Card variant="bordered" className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-xl">
                      Why Offer Group Health Insurance?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Attract and retain top talent
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Tax advantages for your business
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Improve employee health and productivity
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Competitive advantage in hiring
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-xl">
                      Get Expert Guidance
                    </h3>
                    <p className="text-gray-700 mb-6">
                      This estimator provides ballpark figures. Actual costs vary based on
                      demographics, industry, claims history, and specific plan details. Our
                      benefits experts can provide accurate quotes from multiple carriers.
                    </p>
                    <Button size="lg" asChild>
                      <Link href="/contact">
                        Request Custom Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
