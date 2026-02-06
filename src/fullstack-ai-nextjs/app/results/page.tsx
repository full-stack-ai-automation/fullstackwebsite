"use client";

import { CTAButton } from "@/components/ui/cta-button";

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              Client <span className="text-primary">Outcomes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We measure our work by what it produces — recovered revenue, eliminated bottlenecks, and operations that scale without adding headcount. These are representative engagements.
            </p>
          </div>
        </div>
      </section>

      {/* TODO: Add actual client testimonial quotes and video content when available */}

      {/* CASE STUDIES */}
      <section id="case-study-1" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">$1M to $10M in 3 Years</h2>
            <h3 className="text-primary mb-6">Elev808 Designs — Marketing &amp; E-Commerce</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Elev808 Designs came to us as a $1M company with ambitious growth targets but manual marketing processes that couldn&apos;t scale. We implemented marketing automation and customer journey streamlining systems that transformed how they acquired and retained customers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">$10M</p>
                <p className="text-muted-foreground">Revenue milestone</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">10X</p>
                <p className="text-muted-foreground">Growth in 3 years</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">Marketing Automation</p>
                <p className="text-muted-foreground">Core system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-2" className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">70% Revenue Growth for a 50-Year Legacy Business</h2>
            <h3 className="text-primary mb-6">Source 4 Industries — Service &amp; Manufacturing</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Source 4 Industries is a 50-year-old family-owned company that needed to modernize operations without disrupting what made them successful. Our automation systems integrated with their existing workflows, driving 70% revenue growth over 3 years while preserving the operational discipline built over five decades.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">70%</p>
                <p className="text-muted-foreground">Revenue growth</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">50 Years</p>
                <p className="text-muted-foreground">Business legacy</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">3 Years</p>
                <p className="text-muted-foreground">Growth timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-3" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">54% Client Growth in 3 Months</h2>
            <h3 className="text-primary mb-6">Hydr8 Consulting — Professional Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Hydr8 Consulting was growing but constrained by manual client acquisition and onboarding. Within 3 months of implementing our systems, they scaled from 26 to 40 consulting clients. The partnership has since expanded — we&apos;re now building a SaaS product together for their offer.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">54%</p>
                <p className="text-muted-foreground">Client growth</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">3 Months</p>
                <p className="text-muted-foreground">Time to results</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">SaaS</p>
                <p className="text-muted-foreground">Product partnership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-4" className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">78% Revenue Increase by Month 4</h2>
            <h3 className="text-primary mb-6">Huge Capital — Financial Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Huge Capital partnered with us to systematize their revenue operations. By month 4, they achieved a 78% revenue increase and reached their highest-revenue month to date — a direct result of automation systems designed to compound results over time.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">78%</p>
                <p className="text-muted-foreground">Revenue increase</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">Month 4</p>
                <p className="text-muted-foreground">Breakout point</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary mb-2">Highest Month</p>
                <p className="text-muted-foreground">On record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Explore What This Could Look Like For Your Business</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our audit identifies the highest-leverage automation opportunities specific to your operation and builds a preliminary case for ROI.
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
