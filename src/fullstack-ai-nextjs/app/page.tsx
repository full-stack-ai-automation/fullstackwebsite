"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import Image from "next/image";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // ROI Calculator state - Full version
  const [inputs, setInputs] = useState({
    hoursPerWeek: 20,
    hourlyRate: 50,
    employeeCount: 5,
    leadsPerMonth: 100,
    leadConversionRate: 10,
    averageSaleValue: 5000,
  });

  // Calculate ROI metrics
  const calculateROI = () => {
    // Time savings calculation
    const weeklyTimeCost = inputs.hoursPerWeek * inputs.hourlyRate * inputs.employeeCount;
    const annualTimeSavings = weeklyTimeCost * 52;
    const timeAutomated = inputs.hoursPerWeek * 0.7; // 70% automation efficiency

    // Lead conversion improvement (assume 85% increase based on case studies)
    const currentConversions = (inputs.leadsPerMonth * inputs.leadConversionRate) / 100;
    const improvedConversions = currentConversions * 1.85;
    const additionalConversions = improvedConversions - currentConversions;
    const additionalRevenue = additionalConversions * inputs.averageSaleValue * 12;

    // Total ROI
    const totalAnnualSavings = annualTimeSavings + additionalRevenue;

    // Estimated investment (mid-range)
    const estimatedInvestment = 27500; // $15K-$40K midpoint
    const roi = ((totalAnnualSavings - estimatedInvestment) / estimatedInvestment) * 100;
    const paybackMonths = (estimatedInvestment / (totalAnnualSavings / 12)).toFixed(1);

    return {
      weeklyTimeSavings: timeAutomated.toFixed(1),
      annualTimeSavings: Math.round(annualTimeSavings),
      additionalConversions: Math.round(additionalConversions * 12), // Annual
      additionalRevenue: Math.round(additionalRevenue),
      totalAnnualSavings: Math.round(totalAnnualSavings),
      roi: Math.round(roi),
      paybackMonths,
      estimatedInvestment,
    };
  };

  const results = calculateROI();

  const handleSliderChange = (name: string, value: number[]) => {
    setInputs(prev => ({ ...prev, [name]: value[0] }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              We Build{" "}
              <span className="text-primary">Systems</span>, Not Tools
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Most companies are collecting AI tools that work in isolation. We design the
              connective tissue — integrated automation systems that compound across your entire
              operation. The difference between a tool and a system is the difference between
              incremental improvement and structural advantage.
            </p>
            <div className="flex justify-center">
              <CTAButton>
                SCHEDULE YOUR AUDIT
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Human Expertise. <span className="text-primary">Engineered Outcomes.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              AI implementation fails when it is treated as a technology problem. It is a business
              architecture problem — and it requires consultants who understand both. Our team brings
              deep operational experience across industries, combining strategic insight with hands-on
              engineering to build systems that do not just work on day one, but compound in value
              over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Embedded Partnership</h3>
              <p className="text-muted-foreground">
                We embed with your team as consultants, architects, and builders — designing systems
                around how your business actually operates, not how a software vendor thinks it should.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Measurable Outcomes</h3>
              <p className="text-muted-foreground">
                Every system we build is measured by the value it delivers — recovered revenue,
                eliminated bottlenecks, and operations that scale without adding headcount.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="mb-3">Compounding Returns</h3>
              <p className="text-muted-foreground">
                Our engagements are designed to compound results over time. Ongoing refinement
                ensures your systems grow more valuable with every quarter, not less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Tools Help Individuals. <span className="text-primary">Systems</span> Help Businesses.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every solution we architect is designed as an integrated system — connecting your
              sales pipeline, operations, and customer experience into automation that compounds
              across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Enabled CRM Automation",
                description: "Automatically capture leads, follow up with prospects, and manage your sales pipeline without lifting a finger. Increase follow-up rates by 85%.",
                link: "/solutions#crm-automation"
              },
              {
                title: "Workflow Automation",
                description: "Eliminate repetitive tasks like data entry, scheduling, and reporting. Save 20+ hours per week for your team to focus on high-value work.",
                link: "/solutions#workflow-automation"
              },
              {
                title: "Customer Communication Systems",
                description: "Intelligent chatbots and automated follow-up systems that keep customers engaged while reducing response time by 70%.",
                link: "/solutions#customer-communication"
              },
              {
                title: "AI-Powered Analytics",
                description: "Transform raw data into actionable insights. Get real-time dashboards and predictive analytics to make smarter business decisions.",
                link: "/solutions#data-analytics"
              },
              {
                title: "Operations Optimization",
                description: "Streamline your entire operation from scheduling to invoicing. Refined across industries we've mastered — plumbing, landscaping, roofing, spray foam, and beyond.",
                link: "/solutions#operations"
              },
              {
                title: "Custom AI Solutions",
                description: "Every business is unique. We design and build custom automation systems tailored specifically to your industry and workflow.",
                link: "/solutions#custom"
              }
            ].map((solution, index) => (
              <Link key={index} href={solution.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <h3 className="mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <span className="text-primary font-medium">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Client <span className="text-primary">Outcomes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We measure our work by what it produces — recovered revenue, eliminated bottlenecks,
              and operations that scale without adding headcount.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                iconSrc: "/icons/85-percent.svg",
                iconAlt: "10X Growth",
                title: "$1M to $10M in 3 Years",
                description: "Elev808 Designs scaled from $1M to $10M in 3 years through marketing automation and customer journey streamlining.",
                link: "/results#case-study-1"
              },
              {
                iconSrc: "/icons/20-plus.svg",
                iconAlt: "70% Growth",
                title: "70% Revenue Growth Over 3 Years",
                description: "Source 4 Industries, a 50-year-old family company, achieved 70% revenue growth over 3 years with our automation systems.",
                link: "/results#case-study-2"
              },
              {
                iconSrc: "/icons/50k.svg",
                iconAlt: "78% Increase",
                title: "78% Revenue Increase by Month 4",
                description: "Huge Capital saw 78% revenue increase by month 4 of working together, reaching their highest month to date.",
                link: "/results#case-study-3"
              }
            ].map((result, index) => (
              <Link key={index} href={result.link}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all cursor-pointer h-full">
                  <div className="mb-4 w-16 h-16 relative">
                    <Image
                      src={result.iconSrc}
                      alt={result.iconAlt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="mb-3">{result.title}</h3>
                  <p className="text-muted-foreground mb-4">{result.description}</p>
                  <span className="text-primary font-medium">Read Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="roi-calculator" className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                AI Automation <span className="text-primary">ROI Calculator</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how much time and money AI automation could save your business
              </p>
            </div>

            {/* INPUT SLIDERS - NOW FIRST */}
            <div className="bg-card p-4 md:p-8 rounded-lg border border-border mb-12">
              <h3 className="mb-6 md:mb-8 text-center">Adjust Your Inputs</h3>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4">
                {/* Hours per week */}
                <div>
                  <Label htmlFor="hoursPerWeek" className="text-xs md:text-sm mb-2 block">
                    Hours on repeated tasks per week
                  </Label>
                  <Badge variant="secondary" className="text-xs md:text-sm px-2 py-1 w-full justify-center mb-2">
                    {inputs.hoursPerWeek} hours
                  </Badge>
                  <Slider
                    id="hoursPerWeek"
                    min={1}
                    max={60}
                    step={1}
                    value={[inputs.hoursPerWeek]}
                    onValueChange={(value) => handleSliderChange("hoursPerWeek", value)}
                    className="touch-manipulation"
                  />
                </div>

                {/* Employee count */}
                <div>
                  <Label htmlFor="employeeCount" className="text-xs md:text-sm mb-2 block">
                    Number of employees affected
                  </Label>
                  <Badge variant="secondary" className="text-xs md:text-sm px-2 py-1 w-full justify-center mb-2">
                    {inputs.employeeCount} people
                  </Badge>
                  <Slider
                    id="employeeCount"
                    min={1}
                    max={50}
                    step={1}
                    value={[inputs.employeeCount]}
                    onValueChange={(value) => handleSliderChange("employeeCount", value)}
                    className="touch-manipulation"
                  />
                </div>

                {/* Conversion rate */}
                <div>
                  <Label htmlFor="leadConversionRate" className="text-xs md:text-sm mb-2 block">
                    Current lead conversion rate (%)
                  </Label>
                  <Badge variant="secondary" className="text-xs md:text-sm px-2 py-1 w-full justify-center mb-2">
                    {inputs.leadConversionRate}%
                  </Badge>
                  <Slider
                    id="leadConversionRate"
                    min={1}
                    max={50}
                    step={1}
                    value={[inputs.leadConversionRate]}
                    onValueChange={(value) => handleSliderChange("leadConversionRate", value)}
                    className="touch-manipulation"
                  />
                </div>

                {/* Hourly rate */}
                <div>
                  <Label htmlFor="hourlyRate" className="text-xs md:text-sm mb-2 block">
                    Average hourly rate ($/hour)
                  </Label>
                  <Input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={handleInputChange}
                    className="text-sm h-10 md:h-12 touch-manipulation"
                    min={0}
                  />
                </div>

                {/* Leads per month */}
                <div>
                  <Label htmlFor="leadsPerMonth" className="text-xs md:text-sm mb-2 block">
                    Leads received per month
                  </Label>
                  <Input
                    id="leadsPerMonth"
                    name="leadsPerMonth"
                    type="number"
                    value={inputs.leadsPerMonth}
                    onChange={handleInputChange}
                    className="text-sm h-10 md:h-12 touch-manipulation"
                    min={0}
                  />
                </div>

                {/* Average sale value */}
                <div>
                  <Label htmlFor="averageSaleValue" className="text-xs md:text-sm mb-2 block">
                    Average sale value ($)
                  </Label>
                  <Input
                    id="averageSaleValue"
                    name="averageSaleValue"
                    type="number"
                    value={inputs.averageSaleValue}
                    onChange={handleInputChange}
                    className="text-sm h-10 md:h-12 touch-manipulation"
                    min={0}
                  />
                </div>
              </div>
            </div>

            {/* OUTPUT CARDS - NOW SECOND */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Time Savings Card */}
              <Card className="border-primary">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Time Savings</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Week</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {results.weeklyTimeSavings} hours
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Automated tasks free up your team
                  </p>
                </CardContent>
              </Card>

              {/* Annual Cost Savings Card */}
              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Annual Cost Savings</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Year</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ${results.annualTimeSavings.toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Value of time saved
                  </p>
                </CardContent>
              </Card>

              {/* Additional Revenue Card */}
              <Card>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Additional Revenue</CardTitle>
                  <Badge className="bg-secondary text-secondary-foreground w-fit text-xs md:text-sm">Per Year</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ${results.additionalRevenue.toLocaleString()}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    From {results.additionalConversions} more conversions
                  </p>
                </CardContent>
              </Card>

              {/* Total Annual Value Card - KEY OUTPUT */}
              <Card className="bg-primary text-primary-foreground border-primary md:row-span-1">
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-sm md:text-base">Total Annual Value</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl md:text-4xl font-bold mb-3">
                    ${results.totalAnnualSavings.toLocaleString()}
                  </p>
                  <div className="space-y-1.5 text-xs md:text-sm">
                    <div className="flex justify-between items-center">
                      <span>Investment:</span>
                      <span className="font-semibold">${results.estimatedInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ROI:</span>
                      <span className="font-semibold text-lg md:text-xl">{results.roi}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Payback:</span>
                      <span className="font-semibold">{results.paybackMonths} mo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From discovery to deployment, here's how we transform your business with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                number: "1",
                title: "Strategic Assessment",
                description: "Every engagement begins with a comprehensive review of your operations, technology stack, and growth objectives to identify the highest-impact automation opportunities."
              },
              {
                number: "2",
                title: "Strategy & Planning",
                description: "Our team designs a custom automation roadmap tailored to your workflow, with clear ROI projections and timelines."
              },
              {
                number: "3",
                title: "Implementation",
                description: "We build, test, and deploy your AI systems with minimal disruption to your operations. Your team gets full training and support."
              },
              {
                number: "4",
                title: "Optimization & Support",
                description: "We continuously monitor performance, gather feedback, and refine your systems to ensure maximum value and efficiency."
              }
            ].map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/process">
              <Button variant="secondary" size="lg">
                View Detailed Timeline
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TODO: Replace with actual client testimonial quotes when available */}
            {[
              {
                text: "Full Stack AI Automation didn't just give us tools — they built a system that our entire team relies on daily. The results compound with every month.",
                author: "Source 4 Industries",
                role: "Service & Manufacturing"
              },
              {
                text: "We went from $1M to $10M. That doesn't happen with another SaaS subscription. It happens with the right team building the right systems.",
                author: "Elev808 Designs",
                role: "Marketing & E-Commerce"
              },
              {
                text: "Within 3 months we grew from 26 to 40 consulting clients. Now we're building a SaaS product with the same team.",
                author: "Hydr8 Consulting",
                role: "Professional Services"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">See Where the Leverage Is</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our audit identifies the highest-leverage automation opportunities specific to your
              operation and builds a preliminary case for ROI.
            </p>
            <CTAButton>
              SCHEDULE YOUR AUDIT
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
