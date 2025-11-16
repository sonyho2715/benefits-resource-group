'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, Users, DollarSign, TrendingUp, ArrowRight, Download } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const industryOptions = [
  { value: '', label: 'Select industry...' },
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail', label: 'Retail' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'construction', label: 'Construction' },
  { value: 'other', label: 'Other' },
];

const stateOptions = [
  { value: '', label: 'Select state...' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'CA', label: 'California' },
  { value: 'NV', label: 'Nevada' },
  { value: 'UT', label: 'Utah' },
  { value: 'WA', label: 'Washington' },
];

export default function BenefitsCalculatorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    employees: '',
    state: '',
    industry: '',
    avgSalary: '',
    healthCoverage: '80',
    dentalVision: 'yes',
    lifeInsurance: 'yes',
    retirement401k: 'yes',
    matchPercent: '3',
  });

  const [results, setResults] = useState({
    monthlyHealthCost: 0,
    monthlyDentalVision: 0,
    monthlyLife: 0,
    monthlyRetirement: 0,
    totalMonthlyCost: 0,
    totalAnnualCost: 0,
    perEmployeeMonthlyCost: 0,
    perEmployeeAnnualCost: 0,
    taxSavings: 0,
    netCost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateResults = () => {
    const employees = parseInt(formData.employees) || 0;
    const avgSalary = parseFloat(formData.avgSalary) || 0;
    const healthPercent = parseFloat(formData.healthCoverage) / 100;
    const matchPercent = parseFloat(formData.matchPercent) / 100;

    // Health insurance cost (varies by state)
    const baseHealthCost = formData.state === 'HI' ? 650 : formData.state === 'CA' ? 700 : 600;
    const monthlyHealthCost = employees * baseHealthCost * healthPercent;

    // Dental & Vision
    const monthlyDentalVision = formData.dentalVision === 'yes' ? employees * 75 : 0;

    // Life Insurance
    const monthlyLife = formData.lifeInsurance === 'yes' ? employees * 25 : 0;

    // 401(k) Matching
    const monthlyRetirement =
      formData.retirement401k === 'yes' ? (employees * (avgSalary / 12) * matchPercent) : 0;

    const totalMonthlyCost =
      monthlyHealthCost + monthlyDentalVision + monthlyLife + monthlyRetirement;
    const totalAnnualCost = totalMonthlyCost * 12;

    // Tax savings (approx 25% of contributions)
    const taxSavings = totalAnnualCost * 0.25;
    const netCost = totalAnnualCost - taxSavings;

    setResults({
      monthlyHealthCost,
      monthlyDentalVision,
      monthlyLife,
      monthlyRetirement,
      totalMonthlyCost,
      totalAnnualCost,
      perEmployeeMonthlyCost: totalMonthlyCost / employees,
      perEmployeeAnnualCost: totalAnnualCost / employees,
      taxSavings,
      netCost,
    });

    setStep(3);
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      employees: '',
      state: '',
      industry: '',
      avgSalary: '',
      healthCoverage: '80',
      dentalVision: 'yes',
      lifeInsurance: 'yes',
      retirement401k: 'yes',
      matchPercent: '3',
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Benefits Cost Calculator
          </h1>
          <p className="text-xl text-blue-100">
            Estimate the cost of employee benefits for your business. Get instant
            calculations for health insurance, retirement plans, and more.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Company Info
                </span>
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Benefits Selection
                </span>
              </div>
              <div className="w-12 h-1 bg-gray-200"></div>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Results</span>
              </div>
            </div>
          </div>

          {/* Step 1: Company Information */}
          {step === 1 && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Company Information</CardTitle>
                <CardDescription>
                  Tell us about your business to get accurate cost estimates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Number of Employees"
                      name="employees"
                      type="number"
                      value={formData.employees}
                      onChange={handleChange}
                      placeholder="25"
                      required
                      helperText="Full-time employees eligible for benefits"
                    />
                    <Select
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      options={stateOptions}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      options={industryOptions}
                      required
                    />
                    <Input
                      label="Average Annual Salary"
                      name="avgSalary"
                      type="number"
                      value={formData.avgSalary}
                      onChange={handleChange}
                      placeholder="50000"
                      required
                      helperText="Used for 401(k) matching calculations"
                    />
                  </div>

                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={
                      !formData.employees ||
                      !formData.state ||
                      !formData.industry ||
                      !formData.avgSalary
                    }
                    className="w-full"
                  >
                    Continue to Benefits Selection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Benefits Selection */}
          {step === 2 && (
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Select Benefits</CardTitle>
                <CardDescription>
                  Choose which benefits you want to offer and customize coverage levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Health Insurance */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Group Health Insurance
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employer Coverage Percentage: {formData.healthCoverage}%
                      </label>
                      <input
                        type="range"
                        name="healthCoverage"
                        min="50"
                        max="100"
                        step="5"
                        value={formData.healthCoverage}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Dental & Vision */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Dental & Vision Insurance
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Estimated cost: ~$75/employee/month
                        </p>
                      </div>
                      <Select
                        name="dentalVision"
                        value={formData.dentalVision}
                        onChange={handleChange}
                        options={[
                          { value: 'yes', label: 'Include' },
                          { value: 'no', label: 'Skip' },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Life Insurance */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Group Life Insurance
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Estimated cost: ~$25/employee/month
                        </p>
                      </div>
                      <Select
                        name="lifeInsurance"
                        value={formData.lifeInsurance}
                        onChange={handleChange}
                        options={[
                          { value: 'yes', label: 'Include' },
                          { value: 'no', label: 'Skip' },
                        ]}
                      />
                    </div>
                  </div>

                  {/* 401(k) */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          401(k) Retirement Plan
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          With employer matching
                        </p>
                      </div>
                      <Select
                        name="retirement401k"
                        value={formData.retirement401k}
                        onChange={handleChange}
                        options={[
                          { value: 'yes', label: 'Include' },
                          { value: 'no', label: 'Skip' },
                        ]}
                      />
                    </div>
                    {formData.retirement401k === 'yes' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Employer Match Percentage: {formData.matchPercent}%
                        </label>
                        <input
                          type="range"
                          name="matchPercent"
                          min="0"
                          max="6"
                          step="0.5"
                          value={formData.matchPercent}
                          onChange={handleChange}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>3%</span>
                          <span>6%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button size="lg" onClick={calculateResults} className="flex-1">
                      Calculate Costs
                      <Calculator className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Results */}
          {step === 3 && (
            <div className="space-y-6">
              <Card variant="elevated" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <p className="text-blue-100 mb-2">Total Estimated Annual Cost</p>
                    <h2 className="text-5xl font-bold mb-4">
                      {formatCurrency(results.totalAnnualCost)}
                    </h2>
                    <p className="text-blue-100">
                      {formatCurrency(results.totalMonthlyCost)} per month
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card variant="bordered">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Cost Per Employee</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(results.perEmployeeMonthlyCost)}
                          <span className="text-sm font-normal text-gray-600">/mo</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {formatCurrency(results.perEmployeeAnnualCost)} annually
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Estimated Tax Savings</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formatCurrency(results.taxSavings)}
                          <span className="text-sm font-normal text-gray-600">/yr</span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Net cost: {formatCurrency(results.netCost)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <span className="text-gray-700">Health Insurance</span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(results.monthlyHealthCost)}/mo
                      </span>
                    </div>
                    {results.monthlyDentalVision > 0 && (
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-700">Dental & Vision</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(results.monthlyDentalVision)}/mo
                        </span>
                      </div>
                    )}
                    {results.monthlyLife > 0 && (
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-700">Life Insurance</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(results.monthlyLife)}/mo
                        </span>
                      </div>
                    )}
                    {results.monthlyRetirement > 0 && (
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <span className="text-gray-700">401(k) Matching</span>
                        <span className="font-semibold text-gray-900">
                          {formatCurrency(results.monthlyRetirement)}/mo
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered" className="bg-blue-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Next Steps</h3>
                  <p className="text-gray-700 mb-4">
                    These are estimated costs based on industry averages. Get a personalized
                    quote with actual rates from top carriers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="flex-1">
                      <Link href="/contact">
                        Get Personalized Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetCalculator}
                      className="flex-1"
                    >
                      Start Over
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
