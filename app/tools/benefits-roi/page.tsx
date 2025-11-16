'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Award,
  Shield,
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const industrySizeOptions = [
  { value: '', label: 'Select company size...' },
  { value: '2-9', label: '2-9 employees' },
  { value: '10-24', label: '10-24 employees' },
  { value: '25-49', label: '25-49 employees' },
  { value: '50-99', label: '50-99 employees' },
  { value: '100+', label: '100+ employees' },
];

const industryOptions = [
  { value: '', label: 'Select industry...' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'tech', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail', label: 'Retail' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];

export default function BenefitsROIPage() {
  const [formData, setFormData] = useState({
    employees: '',
    avgSalary: '',
    companySize: '',
    industry: '',
    currentTurnover: '15',
    offerBenefits: 'no',
    annualRevenue: '',
  });

  const [results, setResults] = useState<{
    currentTurnoverCost: number;
    expectedTurnoverReduction: number;
    newTurnoverRate: number;
    annualTurnoverSavings: number;
    productivityGain: number;
    recruitmentImprovement: number;
    taxSavings: number;
    totalBenefitsCost: number;
    netROI: number;
    roiPercentage: number;
    paybackMonths: number;
    benefits: {
      name: string;
      impact: string;
      value: number;
    }[];
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateROI = () => {
    const employees = parseInt(formData.employees) || 0;
    const avgSalary = parseFloat(formData.avgSalary) || 0;
    const turnoverRate = parseFloat(formData.currentTurnover) / 100;
    const annualRevenue = parseFloat(formData.annualRevenue) || 0;

    // Cost to replace an employee (typically 50-200% of salary)
    const replacementCostMultiplier = 1.0; // Conservative 100% of salary
    const costPerReplacement = avgSalary * replacementCostMultiplier;
    const currentTurnoverCost = employees * turnoverRate * costPerReplacement;

    // Benefits reduce turnover by 25-50%
    const turnoverReductionRate = formData.offerBenefits === 'yes' ? 0.25 : 0.40;
    const newTurnoverRate = turnoverRate * (1 - turnoverReductionRate);
    const annualTurnoverSavings = currentTurnoverCost * turnoverReductionRate;

    // Productivity gains (3-5% increase with good benefits)
    const productivityIncreaseRate = 0.04; // 4%
    const productivityGain = (annualRevenue / employees) * employees * productivityIncreaseRate;

    // Recruitment improvements (20% faster hiring, 30% better candidate quality)
    const avgTimeToHire = 42; // days
    const avgCostPerHire = 4000;
    const hiringSpeedImprovement = 0.20;
    const recruitmentImprovement =
      (employees * turnoverRate) * (avgCostPerHire * 0.15); // 15% savings on hiring costs

    // Tax savings (employer contributions are tax-deductible)
    const healthBenefitCostPerEmployee = 600; // monthly per employee
    const retirementMatchRate = 0.03; // 3% of salary
    const otherBenefits = 150; // monthly per employee

    const monthlyBenefitsCost =
      employees * healthBenefitCostPerEmployee +
      (employees * avgSalary * retirementMatchRate) / 12 +
      employees * otherBenefits;

    const annualBenefitsCost = monthlyBenefitsCost * 12;
    const taxSavings = annualBenefitsCost * 0.25; // 25% tax rate

    // Calculate total ROI
    const totalSavings =
      annualTurnoverSavings + productivityGain + recruitmentImprovement + taxSavings;
    const netROI = totalSavings - annualBenefitsCost;
    const roiPercentage = (netROI / annualBenefitsCost) * 100;
    const paybackMonths = annualBenefitsCost / (totalSavings / 12);

    const benefits = [
      {
        name: 'Reduced Turnover Costs',
        impact: `${(turnoverReductionRate * 100).toFixed(0)}% reduction in turnover`,
        value: annualTurnoverSavings,
      },
      {
        name: 'Increased Productivity',
        impact: `${(productivityIncreaseRate * 100).toFixed(0)}% productivity gain`,
        value: productivityGain,
      },
      {
        name: 'Recruitment Savings',
        impact: '20% faster hiring, better candidates',
        value: recruitmentImprovement,
      },
      {
        name: 'Tax Savings',
        impact: 'Employer contributions are tax-deductible',
        value: taxSavings,
      },
    ];

    setResults({
      currentTurnoverCost,
      expectedTurnoverReduction: turnoverReductionRate * 100,
      newTurnoverRate: newTurnoverRate * 100,
      annualTurnoverSavings,
      productivityGain,
      recruitmentImprovement,
      taxSavings,
      totalBenefitsCost: annualBenefitsCost,
      netROI,
      roiPercentage,
      paybackMonths: Math.max(paybackMonths, 0),
      benefits,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Benefits ROI Calculator
          </h1>
          <p className="text-xl text-blue-100">
            Discover the true return on investment from offering competitive employee benefits.
            Calculate cost savings, productivity gains, and long-term value.
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
                  <CardTitle className="text-2xl">Company Metrics</CardTitle>
                  <CardDescription>
                    Enter your company information to calculate benefits ROI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <Input
                      label="Number of Employees"
                      name="employees"
                      type="number"
                      value={formData.employees}
                      onChange={handleChange}
                      placeholder="25"
                      required
                    />

                    <Input
                      label="Average Annual Salary"
                      name="avgSalary"
                      type="number"
                      value={formData.avgSalary}
                      onChange={handleChange}
                      placeholder="60000"
                      required
                      helperText="Average salary across all employees"
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
                      label="Industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      options={industryOptions}
                      required
                    />

                    <Input
                      label="Estimated Annual Revenue"
                      name="annualRevenue"
                      type="number"
                      value={formData.annualRevenue}
                      onChange={handleChange}
                      placeholder="2000000"
                      required
                      helperText="Used to calculate productivity gains"
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-3">
                        Current Annual Turnover Rate: {formData.currentTurnover}%
                      </label>
                      <input
                        type="range"
                        name="currentTurnover"
                        min="0"
                        max="50"
                        step="1"
                        value={formData.currentTurnover}
                        onChange={handleChange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Industry average is typically 10-20%
                      </p>
                    </div>

                    <Select
                      label="Do you currently offer competitive benefits?"
                      name="offerBenefits"
                      value={formData.offerBenefits}
                      onChange={handleChange}
                      options={[
                        { value: 'yes', label: 'Yes, we offer competitive benefits' },
                        { value: 'no', label: 'No, or benefits are minimal' },
                      ]}
                      helperText="This affects the potential improvement rate"
                    />

                    <Button
                      size="lg"
                      onClick={calculateROI}
                      disabled={
                        !formData.employees ||
                        !formData.avgSalary ||
                        !formData.companySize ||
                        !formData.industry ||
                        !formData.annualRevenue
                      }
                      className="w-full"
                    >
                      Calculate ROI
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
                  {/* ROI Summary */}
                  <Card
                    variant="elevated"
                    className={
                      results.netROI > 0
                        ? 'bg-gradient-to-br from-green-600 to-green-800 text-white'
                        : 'bg-gradient-to-br from-blue-600 to-blue-800 text-white'
                    }
                  >
                    <CardContent className="pt-8 pb-8">
                      <div className="text-center">
                        <p className="text-green-100 mb-2">Estimated Annual ROI</p>
                        <h2 className="text-5xl font-bold mb-2">
                          {formatCurrency(Math.abs(results.netROI))}
                        </h2>
                        <Badge
                          size="lg"
                          variant={results.netROI > 0 ? 'success' : 'secondary'}
                          className="bg-white/20 text-white"
                        >
                          {results.roiPercentage > 0 ? '+' : ''}
                          {results.roiPercentage.toFixed(0)}% ROI
                        </Badge>
                        {results.paybackMonths > 0 && results.paybackMonths < 24 && (
                          <p className="mt-4 text-green-100">
                            Payback period: {results.paybackMonths.toFixed(1)} months
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cost Breakdown */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Annual Cost Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Current Turnover Cost</span>
                          <span className="text-xl font-bold text-red-600">
                            {formatCurrency(results.currentTurnoverCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Total Benefits Cost</span>
                          <span className="text-xl font-bold text-gray-900">
                            {formatCurrency(results.totalBenefitsCost)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-3 bg-green-50 rounded-lg px-4">
                          <span className="text-gray-700 font-medium">Net Annual Savings</span>
                          <span className="text-xl font-bold text-green-600">
                            {formatCurrency(results.netROI)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Benefits Breakdown */}
                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle>Value Breakdown</CardTitle>
                      <CardDescription>
                        How benefits create value for your business
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {results.benefits.map((benefit, index) => (
                          <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{benefit.name}</h4>
                                <p className="text-sm text-gray-600">{benefit.impact}</p>
                              </div>
                              <span className="text-lg font-bold text-green-600 ml-4">
                                {formatCurrency(benefit.value)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Turnover Impact */}
                  <Card variant="bordered" className="bg-blue-50">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Turnover Rate Improvement
                        </h3>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Current Rate</p>
                            <p className="text-3xl font-bold text-red-600">
                              {formData.currentTurnover}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Projected Rate</p>
                            <p className="text-3xl font-bold text-green-600">
                              {results.newTurnoverRate.toFixed(1)}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card variant="elevated" className="h-full flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Calculate?
                    </h3>
                    <p className="text-gray-600">
                      Enter your company metrics to see the ROI of offering benefits
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Beyond the Numbers
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              While ROI is important, many benefits of a strong benefits package can't be easily
              quantified but are equally valuable to your business success.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="bordered">
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Employer Brand</h3>
                  <p className="text-sm text-gray-600">
                    Enhanced reputation as an employer of choice in your industry
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6 text-center">
                  <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Employee Morale</h3>
                  <p className="text-sm text-gray-600">
                    Higher job satisfaction and employee engagement across your team
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
                  <p className="text-sm text-gray-600">
                    Healthier workforce with fewer sick days and disability claims
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Culture Building</h3>
                  <p className="text-sm text-gray-600">
                    Demonstrates investment in employees, fostering loyalty and trust
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-16">
            <Card variant="bordered" className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Key Insights About Benefits ROI
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Turnover is Expensive
                      </h4>
                      <p className="text-sm text-gray-700">
                        The cost to replace an employee typically ranges from 50% to 200% of their
                        annual salary when you factor in recruiting, training, and lost productivity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Benefits Retain Talent</h4>
                      <p className="text-sm text-gray-700">
                        Companies with strong benefits packages experience 25-50% lower turnover
                        rates compared to those with minimal or no benefits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Productivity Increases
                      </h4>
                      <p className="text-sm text-gray-700">
                        Employees with good health benefits take fewer sick days and are more
                        focused and productive, leading to 3-5% productivity gains.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tax Advantages</h4>
                      <p className="text-sm text-gray-700">
                        Employer contributions to health insurance and retirement plans are
                        tax-deductible, reducing the true cost by 20-30%.
                      </p>
                    </div>
                  </div>
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
                    Ready to Optimize Your Benefits Package?
                  </h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Our benefits experts can help you design a cost-effective benefits package that
                    delivers maximum ROI for your business while providing excellent value to your
                    employees.
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
