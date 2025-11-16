'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  DollarSign,
  TrendingUp,
  CheckCircle,
  X,
  ArrowRight,
  AlertCircle,
  Shield,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const coverageOptions = [
  { value: '', label: 'Select coverage type...' },
  { value: 'individual', label: 'Individual Coverage' },
  { value: 'family', label: 'Family Coverage' },
];

const taxBracketOptions = [
  { value: '', label: 'Select tax bracket...' },
  { value: '10', label: '10%' },
  { value: '12', label: '12%' },
  { value: '22', label: '22%' },
  { value: '24', label: '24%' },
  { value: '32', label: '32%' },
  { value: '35', label: '35%' },
  { value: '37', label: '37%' },
];

export default function HSAFSAComparisonPage() {
  const [formData, setFormData] = useState({
    coverageType: '',
    annualIncome: '',
    taxBracket: '',
    expectedMedicalExpenses: '',
    planToSwitchJobs: 'no',
    wantInvestmentGrowth: 'yes',
  });

  const [results, setResults] = useState<{
    hsaContributionLimit: number;
    fsaContributionLimit: number;
    hsaTaxSavings: number;
    fsaTaxSavings: number;
    hsaInvestmentGrowth: number;
    recommendation: 'HSA' | 'FSA' | 'BOTH';
    reasons: string[];
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateComparison = () => {
    const taxRate = parseFloat(formData.taxBracket) / 100;
    const expectedExpenses = parseFloat(formData.expectedMedicalExpenses) || 0;

    // 2024 contribution limits
    const hsaLimit = formData.coverageType === 'family' ? 8300 : 4150;
    const fsaLimit = 3200;

    // Tax savings
    const hsaContribution = Math.min(expectedExpenses, hsaLimit);
    const fsaContribution = Math.min(expectedExpenses, fsaLimit);

    const hsaTaxSavings = hsaContribution * taxRate;
    const fsaTaxSavings = fsaContribution * taxRate;

    // Potential investment growth (7% annual return over 20 years)
    const hsaInvestmentGrowth = hsaContribution * Math.pow(1.07, 20);

    // Determine recommendation
    let recommendation: 'HSA' | 'FSA' | 'BOTH' = 'HSA';
    const reasons: string[] = [];

    if (formData.wantInvestmentGrowth === 'yes') {
      recommendation = 'HSA';
      reasons.push('HSA funds can be invested and grow tax-free over time');
      reasons.push('HSA has no "use it or lose it" rule - funds roll over indefinitely');
    }

    if (formData.planToSwitchJobs === 'yes') {
      recommendation = 'HSA';
      reasons.push('HSA is portable - you can take it with you if you change jobs');
    }

    if (expectedExpenses > hsaLimit && formData.planToSwitchJobs === 'no') {
      recommendation = 'BOTH';
      reasons.push('Consider maxing out HSA first, then use FSA for additional expenses');
    }

    if (expectedExpenses < 2000 && formData.planToSwitchJobs === 'no' && formData.wantInvestmentGrowth === 'no') {
      recommendation = 'FSA';
      reasons.push('FSA may be simpler for small, predictable medical expenses');
    }

    setResults({
      hsaContributionLimit: hsaLimit,
      fsaContributionLimit: fsaLimit,
      hsaTaxSavings,
      fsaTaxSavings,
      hsaInvestmentGrowth,
      recommendation,
      reasons,
    });
  };

  const hsaFeatures = [
    { feature: 'Contribution Limit (2024)', hsa: true, value: 'Individual: $4,150\nFamily: $8,300' },
    { feature: 'Funds Roll Over', hsa: true, fsa: false },
    { feature: 'Portable (Keep if Change Jobs)', hsa: true, fsa: false },
    { feature: 'Can Invest Funds', hsa: true, fsa: false },
    { feature: 'Tax-Free Withdrawals for Medical', hsa: true, fsa: true },
    { feature: 'Covers Dependents', hsa: true, fsa: true },
    { feature: 'Available Without HDHP', hsa: false, fsa: true },
    { feature: 'Use It or Lose It', hsa: false, fsa: true },
    { feature: 'Employer Contributions Allowed', hsa: true, fsa: true },
    { feature: 'Can Pay Medicare Premiums', hsa: true, fsa: false },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            HSA vs FSA Comparison Tool
          </h1>
          <p className="text-xl text-blue-100">
            Not sure which tax-advantaged health account is right for you? Compare HSAs and FSAs
            side-by-side to make an informed decision.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Information</CardTitle>
                  <CardDescription>
                    Answer a few questions to get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Select
                      label="Coverage Type"
                      name="coverageType"
                      value={formData.coverageType}
                      onChange={handleChange}
                      options={coverageOptions}
                      required
                    />

                    <Select
                      label="Tax Bracket"
                      name="taxBracket"
                      value={formData.taxBracket}
                      onChange={handleChange}
                      options={taxBracketOptions}
                      required
                    />

                    <Input
                      label="Expected Annual Medical Expenses"
                      name="expectedMedicalExpenses"
                      type="number"
                      value={formData.expectedMedicalExpenses}
                      onChange={handleChange}
                      placeholder="3000"
                      helperText="Include prescriptions, copays, and other eligible expenses"
                      required
                    />

                    <Select
                      label="Do you plan to switch jobs in the next year?"
                      name="planToSwitchJobs"
                      value={formData.planToSwitchJobs}
                      onChange={handleChange}
                      options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                        { value: 'maybe', label: 'Maybe' },
                      ]}
                    />

                    <Select
                      label="Are you interested in long-term investment growth?"
                      name="wantInvestmentGrowth"
                      value={formData.wantInvestmentGrowth}
                      onChange={handleChange}
                      options={[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' },
                      ]}
                    />

                    <Button
                      size="lg"
                      onClick={calculateComparison}
                      disabled={
                        !formData.coverageType ||
                        !formData.taxBracket ||
                        !formData.expectedMedicalExpenses
                      }
                      className="w-full"
                    >
                      Compare HSA vs FSA
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
                  {/* Recommendation Card */}
                  <Card variant="elevated" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                    <CardContent className="pt-8 pb-8">
                      <div className="text-center">
                        <p className="text-blue-100 mb-2">Our Recommendation</p>
                        <h2 className="text-5xl font-bold mb-4">
                          {results.recommendation === 'BOTH' ? 'HSA + FSA' : results.recommendation}
                        </h2>
                        <Badge size="lg" variant="success" className="bg-white/20 text-white">
                          Best for Your Situation
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reasons */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Why We Recommend This</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {results.reasons.map((reason, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Tax Savings */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card variant="bordered">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-gray-900 mb-4">HSA Details</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600">Annual Contribution Limit</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(results.hsaContributionLimit)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Est. Tax Savings (Year 1)</p>
                            <p className="text-xl font-bold text-green-600">
                              {formatCurrency(results.hsaTaxSavings)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Potential Value After 20 Years</p>
                            <p className="text-xl font-bold text-blue-600">
                              {formatCurrency(results.hsaInvestmentGrowth)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card variant="bordered">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-gray-900 mb-4">FSA Details</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600">Annual Contribution Limit</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(results.fsaContributionLimit)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Est. Tax Savings</p>
                            <p className="text-xl font-bold text-green-600">
                              {formatCurrency(results.fsaTaxSavings)}
                            </p>
                          </div>
                          <div className="bg-yellow-50 rounded-lg p-3 text-sm text-gray-700">
                            <AlertCircle className="w-4 h-4 text-yellow-600 inline mr-2" />
                            FSA funds must be used by year-end or you may lose them
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : (
                <Card variant="elevated" className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Compare?
                    </h3>
                    <p className="text-gray-600">
                      Fill in your information to see which option is best for you
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Feature-by-Feature Comparison
            </h2>
            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">
                          Feature
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">
                          HSA
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">
                          FSA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hsaFeatures.map((row, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                          <td className="py-4 px-4 text-center">
                            {row.value && row.hsa ? (
                              <span className="text-sm text-gray-700 whitespace-pre-line">
                                {row.value}
                              </span>
                            ) : row.hsa ? (
                              <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {row.fsa ? (
                              <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-gray-300 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Card variant="bordered" className="bg-blue-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Need Help Deciding?
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Our benefits experts can help you understand your options and choose the
                    right account for your situation. Schedule a free consultation today.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
