'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, PiggyBank, Target, ArrowRight, DollarSign, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, LineChart } from 'recharts';

export default function RetirementCalculatorPage() {
  const [formData, setFormData] = useState({
    currentAge: '',
    retirementAge: '65',
    currentSavings: '',
    monthlyContribution: '',
    employerMatch: '3',
    annualReturn: '7',
    inflationRate: '3',
    desiredRetirementIncome: '',
  });

  const [results, setResults] = useState<{
    projectedSavings: number;
    totalContributions: number;
    totalEmployerMatch: number;
    investmentGrowth: number;
    monthlyRetirementIncome: number;
    savingsGoal: number;
    shortfall: number;
    chartData: Array<{ age: number; balance: number; contributions: number }>;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateRetirement = () => {
    const currentAge = parseInt(formData.currentAge) || 0;
    const retirementAge = parseInt(formData.retirementAge) || 65;
    const currentSavings = parseFloat(formData.currentSavings) || 0;
    const monthlyContribution = parseFloat(formData.monthlyContribution) || 0;
    const employerMatch = parseFloat(formData.employerMatch) / 100;
    const annualReturn = parseFloat(formData.annualReturn) / 100;
    const desiredIncome = parseFloat(formData.desiredRetirementIncome) || 0;

    const yearsToRetirement = retirementAge - currentAge;
    const monthlyReturn = annualReturn / 12;
    const totalMonths = yearsToRetirement * 12;

    // Calculate employer match
    const monthlyEmployerMatch = monthlyContribution * employerMatch;
    const totalMonthlyContribution = monthlyContribution + monthlyEmployerMatch;

    // Future Value of current savings
    const futureValueCurrentSavings = currentSavings * Math.pow(1 + annualReturn, yearsToRetirement);

    // Future Value of monthly contributions
    const futureValueContributions =
      totalMonthlyContribution * ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);

    const projectedSavings = futureValueCurrentSavings + futureValueContributions;

    // Total contributions breakdown
    const totalContributions = monthlyContribution * totalMonths;
    const totalEmployerMatch = monthlyEmployerMatch * totalMonths;
    const investmentGrowth = projectedSavings - currentSavings - totalContributions - totalEmployerMatch;

    // Monthly retirement income (4% withdrawal rule)
    const monthlyRetirementIncome = (projectedSavings * 0.04) / 12;

    // Savings goal (25x desired annual income)
    const savingsGoal = desiredIncome * 25;
    const shortfall = savingsGoal - projectedSavings;

    // Generate chart data
    const chartData = [];
    let balance = currentSavings;
    let cumulativeContributions = currentSavings;

    for (let year = 0; year <= yearsToRetirement; year++) {
      chartData.push({
        age: currentAge + year,
        balance: Math.round(balance),
        contributions: Math.round(cumulativeContributions),
      });

      if (year < yearsToRetirement) {
        // Add annual contributions
        const annualContributions = totalMonthlyContribution * 12;
        balance = balance * (1 + annualReturn) + annualContributions;
        cumulativeContributions += annualContributions;
      }
    }

    setResults({
      projectedSavings,
      totalContributions,
      totalEmployerMatch,
      investmentGrowth,
      monthlyRetirementIncome,
      savingsGoal,
      shortfall,
      chartData,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PiggyBank className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Retirement Savings Calculator
          </h1>
          <p className="text-xl text-blue-100">
            Plan your retirement with confidence. See how your savings will grow over time and
            determine if you're on track to meet your retirement goals.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Retirement Plan</CardTitle>
                  <CardDescription>
                    Enter your information to see your retirement projections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Current Age"
                        name="currentAge"
                        type="number"
                        value={formData.currentAge}
                        onChange={handleChange}
                        placeholder="35"
                        required
                      />
                      <Select
                        label="Retirement Age"
                        name="retirementAge"
                        value={formData.retirementAge}
                        onChange={handleChange}
                        options={[
                          { value: '62', label: '62' },
                          { value: '65', label: '65' },
                          { value: '67', label: '67' },
                          { value: '70', label: '70' },
                        ]}
                      />
                    </div>

                    <Input
                      label="Current Retirement Savings"
                      name="currentSavings"
                      type="number"
                      value={formData.currentSavings}
                      onChange={handleChange}
                      placeholder="50000"
                      helperText="Total in 401(k), IRA, and other retirement accounts"
                    />

                    <Input
                      label="Monthly Contribution"
                      name="monthlyContribution"
                      type="number"
                      value={formData.monthlyContribution}
                      onChange={handleChange}
                      placeholder="500"
                      helperText="How much you plan to save each month"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employer Match: {formData.employerMatch}%
                      </label>
                      <input
                        type="range"
                        name="employerMatch"
                        min="0"
                        max="10"
                        step="0.5"
                        value={formData.employerMatch}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>5%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Annual Return: {formData.annualReturn}%
                      </label>
                      <input
                        type="range"
                        name="annualReturn"
                        min="4"
                        max="12"
                        step="0.5"
                        value={formData.annualReturn}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4% (Conservative)</span>
                        <span>8% (Moderate)</span>
                        <span>12% (Aggressive)</span>
                      </div>
                    </div>

                    <Input
                      label="Desired Monthly Retirement Income"
                      name="desiredRetirementIncome"
                      type="number"
                      value={formData.desiredRetirementIncome}
                      onChange={handleChange}
                      placeholder="5000"
                      helperText="How much you want to live on each month in retirement"
                    />

                    <Button
                      size="lg"
                      onClick={calculateRetirement}
                      disabled={!formData.currentAge || !formData.currentSavings}
                      className="w-full"
                    >
                      Calculate Retirement Plan
                      <TrendingUp className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="space-y-6">
                  <Card variant="elevated" className="bg-gradient-to-br from-green-600 to-green-800 text-white">
                    <CardContent className="pt-8 pb-8">
                      <div className="text-center">
                        <p className="text-green-100 mb-2">Projected Savings at Retirement</p>
                        <h2 className="text-5xl font-bold mb-4">
                          {formatCurrency(results.projectedSavings)}
                        </h2>
                        <p className="text-green-100">
                          Monthly income: {formatCurrency(results.monthlyRetirementIncome)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card variant="bordered">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Your Contributions</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(results.totalContributions)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card variant="bordered">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Employer Match</p>
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(results.totalEmployerMatch)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card variant="bordered">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-1">Investment Growth</p>
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(results.investmentGrowth)}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            This is the power of compound interest over time
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Savings Goal Comparison */}
                  {formData.desiredRetirementIncome && (
                    <Card variant="bordered" className={results.shortfall > 0 ? 'bg-yellow-50' : 'bg-green-50'}>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-gray-900 mb-4">
                          Retirement Goal Analysis
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Desired Monthly Income:</span>
                            <span className="font-semibold">
                              {formatCurrency(parseFloat(formData.desiredRetirementIncome))}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Required Savings (25x annual):</span>
                            <span className="font-semibold">
                              {formatCurrency(results.savingsGoal)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Projected Savings:</span>
                            <span className="font-semibold">
                              {formatCurrency(results.projectedSavings)}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-gray-200">
                            {results.shortfall > 0 ? (
                              <div className="flex items-start gap-2">
                                <Calendar className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-semibold text-yellow-800">
                                    Shortfall: {formatCurrency(results.shortfall)}
                                  </p>
                                  <p className="text-sm text-gray-700 mt-1">
                                    Consider increasing contributions or retirement age to meet your goal
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-start gap-2">
                                <Target className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-semibold text-green-800">
                                    On Track! Surplus: {formatCurrency(Math.abs(results.shortfall))}
                                  </p>
                                  <p className="text-sm text-gray-700 mt-1">
                                    You're projected to exceed your retirement income goal
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Growth Chart */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Savings Growth Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={results.chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                          <Tooltip
                            formatter={(value: number) => formatCurrency(value)}
                            labelFormatter={(label) => `Age ${label}`}
                          />
                          <Line
                            type="monotone"
                            dataKey="balance"
                            stroke="#2563eb"
                            strokeWidth={2}
                            name="Total Balance"
                          />
                          <Line
                            type="monotone"
                            dataKey="contributions"
                            stroke="#10b981"
                            strokeWidth={2}
                            name="Total Contributions"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <div className="mt-4 flex justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          <span>Total Balance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-600 rounded"></div>
                          <span>Your Contributions</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card variant="bordered" className="bg-blue-50">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Get Professional Guidance
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Schedule a free consultation to discuss your retirement strategy and
                        optimize your savings plan.
                      </p>
                      <Button size="lg" asChild className="w-full">
                        <Link href="/contact">
                          Schedule Consultation
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card variant="elevated" className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Plan Your Retirement?
                    </h3>
                    <p className="text-gray-600">
                      Fill in your information to see your personalized retirement projections
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
