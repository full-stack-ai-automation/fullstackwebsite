"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* HEADER SECTION - GRADIENT */}
      <section className="py-20 md:py-32 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-center">
              We're Humans Building <span className="text-primary">AI Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              Full Stack AI Automation was founded on a single conviction: that AI implementation fails when it is disconnected from real business operations. Our team brings deep expertise in both technology and business strategy to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION - BLACK (Our Story, Mission, Values) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Having led technology transformation initiatives across service businesses and enterprise organizations, our team understands both sides of the AI implementation challenge: the strategic vision and the operational reality.
                </p>
                <p className="text-muted-foreground">
                  That insight is what drives every engagement. We are not here to deploy the latest trend. We are here to architect systems that produce measurable, compounding results — and to stay accountable for those results over time.
                </p>
              </div>
              <div>
                <h2 className="mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To deliver enterprise-grade AI automation to growth-oriented businesses — from service trades scaling their first million to corporations optimizing across departments. We believe technology should amplify human capability, not replace it.
                </p>
                <p className="text-muted-foreground">
                  Every system we build is designed to amplify your team's capabilities, eliminate operational drag, and create compounding value — so you can focus on growth, strategy, and serving your customers at the highest level.
                </p>
              </div>
            </div>

            <h2 className="mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Human-Centered",
                  description: "We build AI that enhances human capabilities, not replaces them."
                },
                {
                  title: "Results-Driven",
                  description: "Every solution we create must deliver measurable ROI and value."
                },
                {
                  title: "Partnership",
                  description: "We become an extension of your team, committed to your long-term success."
                }
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Our <span className="text-primary">Leadership</span></h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card p-8 rounded-lg border border-border text-center">
                {/* TODO: Replace placeholder with actual headshot when available */}
                <div className="w-28 h-28 rounded-full bg-muted border-2 border-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">TG</span>
                </div>
                <h3 className="mb-1">Taylor Grassmick</h3>
                <p className="text-primary font-medium mb-4">Founder</p>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Taylor Grassmick founded Full Stack AI Automation on a single conviction: AI only
                  delivers when it is engineered into the way a business actually operates, not bolted
                  on as an afterthought. With deep expertise spanning both technical architecture and
                  day-to-day business operations, Taylor personally designs the integrated systems that
                  have driven seven-figure growth for clients across industries. Every engagement begins
                  where most consultants stop — at the intersection of strategy and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION - GRADIENT (Next Steps) */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Next Steps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/solutions">
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer text-center h-full">
                  <h3 className="mb-3">Explore Our Solutions</h3>
                  <p className="text-muted-foreground">
                    See the automation systems we build for businesses like yours
                  </p>
                </div>
              </Link>
              <Link href="/results">
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer text-center h-full">
                  <h3 className="mb-3">See Client Results</h3>
                  <p className="text-muted-foreground">
                    Real case studies with measurable outcomes and ROI
                  </p>
                </div>
              </Link>
              <Link href="/process">
                <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer text-center h-full">
                  <h3 className="mb-3">Understand Our Process</h3>
                  <p className="text-muted-foreground">
                    Learn how we partner with you from discovery to deployment
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
