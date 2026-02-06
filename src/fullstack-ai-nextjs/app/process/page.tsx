"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";

export default function Process() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              <span className="text-primary">Pricing</span> & Process
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Transparent pricing and a proven process that delivers results.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING - NOW FIRST */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center">Investment Ranges</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Focused Engagement",
                  description: "Single workflow transformation with training and 30-day optimization. Ideal for businesses ready to automate their highest-impact process.",
                  features: [
                    "Single automation workflow",
                    "CRM setup or basic workflow",
                    "Team training",
                    "30 days support"
                  ]
                },
                {
                  name: "Integrated Systems",
                  description: "Multiple connected automation systems with custom integrations and 60-day optimization. For operations ready to scale through systematic automation.",
                  features: [
                    "Multiple integrated automations",
                    "Full CRM + workflow systems",
                    "Custom integrations",
                    "60 days optimization"
                  ],
                  featured: true
                },
                {
                  name: "Full Transformation",
                  description: "Comprehensive AI architecture across your entire operation with advanced analytics and ongoing strategic partnership.",
                  features: [
                    "Fully custom AI solutions",
                    "Enterprise integrations",
                    "Advanced analytics",
                    "Ongoing partnership"
                  ]
                }
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-lg border-2 ${
                    tier.featured ? 'border-primary' : 'border-border'
                  }`}
                >
                  <h3 className="mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary" role="img" aria-label="Checkmark">✓</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Investment is scoped during the Strategy phase based on your specific objectives,
              operational complexity, and desired timeline. Every engagement is designed to deliver
              measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY BRAND */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">
              The Full Stack <span className="text-primary">Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proprietary Full Stack Framework has been refined across dozens of engagements to ensure every implementation delivers maximum impact with minimum disruption.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS - NOW SECOND */}
      {[
        {
          number: "1",
          title: "Strategic Assessment (Week 1)",
          description: "Every engagement begins with a comprehensive review of your operations, technology stack, and growth objectives to identify the highest-impact automation opportunities.",
          details: [
            "Deep-dive into your current workflows",
            "Identify repetitive tasks and pain points",
            "Discuss your goals and growth challenges",
            "Explore potential automation opportunities",
            "Preliminary automation opportunity mapping"
          ]
        },
        {
          number: "2",
          title: "Strategy & Planning (Week 2-3)",
          description: "Our team designs a custom automation roadmap tailored to your workflow, with clear ROI projections and implementation timelines.",
          details: [
            "Custom automation strategy document",
            "ROI projections and cost-benefit analysis",
            "Detailed implementation timeline",
            "Technology recommendations",
            "Transparent pricing and project scope"
          ]
        },
        {
          number: "3",
          title: "Implementation (Week 4-12)",
          description: "We build, test, and deploy your AI systems with minimal disruption to your operations. Your team gets full training and support throughout.",
          details: [
            "Agile development with weekly check-ins",
            "Thorough testing before deployment",
            "Minimal disruption to daily operations",
            "Comprehensive team training",
            "Documentation and knowledge transfer",
            "Timeline varies based on project complexity"
          ]
        },
        {
          number: "4",
          title: "Optimization & Support (Ongoing)",
          description: "We continuously monitor performance, gather feedback, and refine your systems to ensure maximum value and efficiency over time.",
          details: [
            "Performance monitoring and analytics",
            "Regular optimization and improvements",
            "Priority technical support",
            "Quarterly strategy consultations",
            "System updates and new feature rollout"
          ]
        }
      ].map((step, index) => (
        <section
          key={step.number}
          className={`py-20 ${index % 2 === 0 ? 'bg-section-alt' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                <div className="text-4xl sm:text-5xl font-bold text-primary flex-shrink-0">{step.number}</div>
                <div className="flex-1">
                  <h2 className="mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <h3 className="mb-4">What We Deliver:</h3>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary text-xl" role="img" aria-label="Checkmark">✓</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SOFT CONVERSION BRIDGE */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Ready to Learn More?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              See what results you could achieve or explore how we've helped other businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#roi-calculator">
                <Button size="lg" className="w-full sm:w-auto">
                  Calculate Your Potential ROI
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
