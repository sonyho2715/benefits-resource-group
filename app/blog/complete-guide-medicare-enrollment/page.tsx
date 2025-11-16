import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Clock,
  Shield,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Complete Guide to Medicare Enrollment | Benefits Resource Group',
  description:
    'Everything you need to know about Medicare Parts A, B, C, and D, including enrollment periods, costs, and coverage options. Expert guidance from Benefits Resource Group.',
};

export default function MedicareEnrollmentGuidePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="primary" className="mb-4">
            Medicare & Healthcare
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The Complete Guide to Medicare Enrollment
          </h1>
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 15, 2024</span>
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
              Turning 65 is a major milestone, and with it comes important decisions about
              Medicare coverage. With multiple parts, enrollment periods, and coverage options
              to consider, Medicare can feel overwhelming. This comprehensive guide will walk
              you through everything you need to know to make informed decisions about your
              Medicare coverage.
            </p>
          </div>

          {/* Quick Summary Card */}
          <Card variant="elevated" className="mb-12 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                Quick Summary: Key Takeaways
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Start planning 3 months before your 65th birthday to avoid penalties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Original Medicare includes Part A (hospital) and Part B (medical)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Medicare Advantage (Part C) is an all-in-one alternative to Original Medicare</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Part D provides prescription drug coverage and is highly recommended</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Medigap supplements can help cover Original Medicare's out-of-pocket costs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 1: Understanding Medicare Parts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding the Four Parts of Medicare
            </h2>

            <div className="space-y-8">
              {/* Part A */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Medicare Part A: Hospital Insurance
                </h3>
                <p className="text-gray-700 mb-4">
                  Part A covers inpatient hospital stays, skilled nursing facility care, hospice
                  care, and some home health care. Most people don't pay a premium for Part A
                  because they or their spouse paid Medicare taxes while working.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">What Part A Covers:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Inpatient hospital stays (semi-private room, meals, nursing care)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Skilled nursing facility care (after a 3-day hospital stay)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Hospice care for terminal illness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Home health care (part-time skilled nursing or therapy)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-900">2024 Costs:</strong> $0 premium for most
                    people. $1,632 deductible per benefit period. Days 1-60: $0 coinsurance.
                    Days 61-90: $408/day coinsurance.
                  </p>
                </div>
              </div>

              {/* Part B */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  Medicare Part B: Medical Insurance
                </h3>
                <p className="text-gray-700 mb-4">
                  Part B covers doctor visits, outpatient care, preventive services, medical
                  equipment, and some home health care. Unlike Part A, Part B requires a monthly
                  premium that varies based on your income.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">What Part B Covers:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Doctor visits and outpatient care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Preventive services (flu shots, screenings, wellness visits)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Durable medical equipment (wheelchairs, walkers, hospital beds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Ambulance services and mental health care</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-green-900">2024 Costs:</strong> Standard premium is
                    $174.70/month. Annual deductible of $240. After deductible, you typically
                    pay 20% coinsurance for most services.
                  </p>
                </div>
              </div>

              {/* Part C */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-purple-600" />
                  Medicare Part C: Medicare Advantage
                </h3>
                <p className="text-gray-700 mb-4">
                  Medicare Advantage plans are offered by private insurance companies approved by
                  Medicare. These plans provide all Part A and Part B coverage, and often include
                  prescription drug coverage (Part D) and extra benefits like dental, vision, and
                  hearing.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Medicare Advantage Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>All Part A and Part B coverage in one plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Often includes prescription drug coverage (Part D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>May include dental, vision, and hearing coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Annual out-of-pocket maximum for cost protection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-purple-900">Important:</strong> You must have both
                    Part A and Part B to enroll in a Medicare Advantage plan. You'll still pay
                    your Part B premium plus any additional plan premium.
                  </p>
                </div>
              </div>

              {/* Part D */}
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                  Medicare Part D: Prescription Drug Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  Part D helps cover the cost of prescription drugs. These plans are offered by
                  private insurance companies. Even if you don't take many medications now,
                  enrolling when first eligible helps you avoid late enrollment penalties.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Part D Coverage Includes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Brand-name and generic prescription drugs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Coverage at retail pharmacies and mail-order pharmacies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Protection from high drug costs with catastrophic coverage</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="text-sm text-gray-700">
                    <strong className="text-orange-900">2024 Update:</strong> The Inflation
                    Reduction Act caps out-of-pocket costs at $2,000 annually starting in 2025,
                    providing significant savings for people with high drug costs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Enrollment Periods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Critical Medicare Enrollment Periods
            </h2>
            <p className="text-gray-700 mb-6">
              Understanding when you can enroll in Medicare is crucial to avoid coverage gaps and
              late enrollment penalties that last a lifetime.
            </p>

            <div className="space-y-6">
              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Initial Enrollment Period (IEP)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Your Initial Enrollment Period is a 7-month window that begins 3 months
                    before the month you turn 65, includes your birthday month, and extends 3
                    months after.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Example:</p>
                    <p className="text-sm text-gray-700">
                      If you turn 65 in July, your IEP runs from April 1 through October 31.
                      Enrolling during the first 3 months ensures coverage starts on your birthday.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    General Enrollment Period (GEP)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you missed your Initial Enrollment Period, you can enroll during the
                    General Enrollment Period from January 1 to March 31 each year. Coverage
                    starts July 1.
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <p className="text-sm text-gray-700">
                      <strong className="text-red-900">Warning:</strong> You may face late
                      enrollment penalties that increase your Part B premium by 10% for each
                      12-month period you were eligible but didn't enroll.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Special Enrollment Period (SEP)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You may qualify for a Special Enrollment Period if you have certain life
                    events, such as:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Losing employer or union coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Moving outside your plan's service area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Qualifying for Medicaid or Extra Help</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Medigap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Medicare Supplement (Medigap) Insurance
            </h2>
            <p className="text-gray-700 mb-6">
              Medigap policies are sold by private insurance companies to help pay some of the
              out-of-pocket costs that Original Medicare doesn't cover, such as copayments,
              coinsurance, and deductibles.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Most Popular Medigap Plans:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Plan G</h4>
                  <p className="text-sm text-gray-700">
                    Comprehensive coverage. Covers everything except the Part B deductible. Most
                    popular choice for new enrollees.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-600 mb-2">Plan N</h4>
                  <p className="text-sm text-gray-700">
                    Lower premiums with small copays. Good balance of coverage and cost for
                    healthy individuals.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-600 mb-2">High-Deductible Plan G</h4>
                  <p className="text-sm text-gray-700">
                    Lowest premiums but high deductible. Best for those who rarely need medical
                    care.
                  </p>
                </div>
              </div>
            </div>

            <Card variant="elevated" className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Important: Medigap Open Enrollment Period
                    </h4>
                    <p className="text-gray-700">
                      The best time to buy a Medigap policy is during your 6-month Medigap Open
                      Enrollment Period, which starts the month you're 65 or older and enrolled
                      in Part B. During this time, you can't be denied coverage or charged more
                      due to health problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5 Common Medicare Enrollment Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Missing Your Initial Enrollment Period
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Failing to enroll during your IEP can result in permanent late enrollment
                    penalties and gaps in coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Assuming You're Automatically Enrolled
                  </h4>
                  <p className="text-gray-700 text-sm">
                    While Part A enrollment is automatic if you're receiving Social Security,
                    Part B requires action. Don't assume you're covered.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Not Comparing Plans Annually
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Medicare Advantage and Part D plans change every year. Review your coverage
                    during Annual Enrollment Period (Oct 15 - Dec 7).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Choosing Based on Premium Alone
                  </h4>
                  <p className="text-gray-700 text-sm">
                    A low premium plan may have higher deductibles, copays, or limited provider
                    networks. Consider total out-of-pocket costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Skipping Part D if You Don't Take Medications
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Even if you're healthy now, you'll face a late enrollment penalty if you
                    need drug coverage later. Enroll when first eligible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Next Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Medicare Enrollment Checklist
            </h2>
            <Card variant="bordered">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Mark your calendar 3 months before your 65th birthday
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Review your current health coverage and determine if you need to enroll
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Compare Original Medicare vs Medicare Advantage options
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Research Part D prescription drug plans or confirm your Advantage plan
                      includes drug coverage
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      If choosing Original Medicare, shop for Medigap plans during your Open
                      Enrollment Period
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Verify your doctors and preferred hospitals accept your chosen plan
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">
                      Complete enrollment before your coverage needs to begin
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 mb-4">
                Medicare enrollment doesn't have to be overwhelming. By understanding the different
                parts of Medicare, knowing when to enroll, and carefully comparing your options,
                you can find coverage that meets your healthcare needs and budget.
              </p>
              <p className="text-gray-700 mb-4">
                Remember, the most important thing is to start planning early. Don't wait until
                the last minute to make these crucial healthcare decisions. If you're feeling
                uncertain about which options are right for you, consider working with a licensed
                Medicare advisor who can provide personalized guidance at no cost to you.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <Card variant="elevated" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Heart className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Need Help with Medicare Enrollment?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our Medicare specialists are here to help you navigate your options and find
                  the right coverage. Schedule a free consultation today.
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
                    <Link href="/tools/medicare-checker">Check Your Eligibility</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/medicare-supplement-plans-comparison">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="secondary" className="mb-3">Medicare & Healthcare</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Medicare Supplement Plans: A Complete Comparison
                    </h4>
                    <p className="text-sm text-gray-600">
                      Compare Medigap plans to find the best supplement for your needs.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/medicare-part-d-prescription-coverage">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Badge variant="secondary" className="mb-3">Medicare & Healthcare</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Medicare Part D: Understanding Prescription Drug Coverage
                    </h4>
                    <p className="text-sm text-gray-600">
                      Navigate prescription drug plans and save on medications.
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
