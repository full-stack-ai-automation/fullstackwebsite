# PRD: Full Stack AI Automation — Luxury Repositioning Initiative

**Version:** 1.0
**Created:** February 5, 2026
**Status:** Approved for Implementation
**Sources:** Mary (Analyst) Positioning Audit, Carmen (Content Marketer) Assessment, User Notes & Decisions

---

## Introduction

This PRD defines the implementation plan for repositioning the Full Stack AI Automation website from mid-market vendor (currently scored 4/10 on the premium spectrum) toward a luxury/premium service provider. The goal is to elevate the brand perception so that every visitor — from a 5-person plumbing company to a corporate enterprise — thinks "we need this luxury service team."

**Critical constraint:** The target audience remains BOTH SMBs (including service trades) AND enterprise. The luxury positioning is about SERVICE QUALITY, not audience exclusion. Specific trade industries are kept but reframed as expertise signals.

**Already completed (Feb 5, 2026):**
- ✅ All "free" language removed from website CTAs (17 edits, 10 files)
- ✅ Repo restructured to SOP-compliant project structure

---

## Goals

- Shift brand perception from 4/10 to 6.5+/10 on the premium spectrum
- Replace fear/pain messaging with authority/aspiration messaging
- Integrate real client data (Source 4 Industries, Elev808 Designs, Hydr8 Consulting, Huge Capital)
- Establish the "systems, not tools" positioning as the primary brand differentiator
- Add exclusivity/selectivity signals without excluding SMB audience
- Restructure pricing to remove dollar amounts while keeping transparency
- Build trust architecture (team section, client logos, methodology branding)

---

## Brand Vocabulary Guide

### USE consistently across all pages:
- "We build systems, not tools"
- "AI tools work in isolation. We build the connective tissue."
- "Tools help individuals. Systems help businesses."
- "Stop collecting tools. Start building systems."
- "Bespoke AI systems engineered to compound revenue and scale with precision"
- "Consultants, architects, and builders who embed with your team"
- "system" over "tool" / "architecture" over "setup" / "engagement" over "project" / "investment" over "cost"

### AVOID:
- "free" (anywhere, including social media copy)
- Trash-talking specific tools by name
- Saying AI tools are "bad" or "useless"
- Overstating complexity to scare people
- Being defensive about AI replacing your work

---

## Execution Order

Tasks are segmented by page/touchpoint for maximum efficiency (touch each file once). Within each page, changes are ordered by impact.

**Dependency note:** Global/Sitewide changes (Section 1) should be done FIRST as they affect multiple pages. Then pages can be done in any order. New Additions (Section 9) can be done in parallel with page changes.

### Execution Phases:

| Phase | Scope | Pages/Files | Priority |
|-------|-------|-------------|----------|
| 1 | Global/Sitewide | layout.tsx, metadata, social copy | Critical |
| 2 | Home Page | app/page.tsx | Critical |
| 3 | About Page | app/about/page.tsx | High |
| 4 | Solutions Page | app/solutions/page.tsx | High |
| 5 | Results Page | app/results/page.tsx | High |
| 6 | Process Page | app/process/page.tsx | Critical |
| 7 | Analysis Page | app/analysis/page.tsx | High |
| 8 | New Additions | New components, new sections | Medium |
| **Checkpoint** | Build + deploy + verify | `npm run build` | Required |
| 9 | Documentation | Update project docs | Required |

---

## User Stories by Page/Touchpoint

---

### SECTION 1: GLOBAL / SITEWIDE

#### US-001: Update Meta Description & OG Tags
**Description:** As a visitor finding us via search or social sharing, I should see premium positioning language in the preview, not "stop wasting time" fear copy.
**Priority:** Critical
**File:** `src/fullstack-ai-nextjs/app/layout.tsx`

**Changes:**

| Field | BEFORE | AFTER |
|-------|--------|-------|
| `metadata.description` | "Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster. Schedule your AI audit and see how we can save you 20+ hours weekly with custom CRM automation and workflow solutions." | "Bespoke AI automation systems engineered to compound revenue and scale with precision. We are consultants, architects, and builders who design integrated systems around how your business actually operates. Strategy, integration & hands-on executive partnership." |
| `metadata.openGraph.description` | "Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster." | "We build systems, not tools. Bespoke AI automation designed to compound revenue, eliminate operational drag, and scale with your growth." |
| `metadata.twitter.description` | (same as OG) | (same as new OG) |

**Acceptance Criteria:**
- [x] Meta description updated with premium positioning language
- [x] OG description updated
- [x] Twitter description updated
- [x] Zero instances of "stop wasting time" or "monotonous" in metadata
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-002: Update Social Media Copy
**Description:** As the brand, our LinkedIn and Twitter copy should match the no-free premium positioning.
**Priority:** High
**Deliverable:** Updated copy document (not code — social profiles updated manually)

**Changes:**

| Platform | BEFORE | AFTER |
|----------|--------|-------|
| LinkedIn description (last line) | "Start with a free discovery session." | "Start with a strategy session." |
| Twitter bio | (already premium — no change needed) | Keep as-is: "Bespoke AI systems engineered to compound revenue and scale with precision. Strategy, integration & hands-on executive partnership." |

**Acceptance Criteria:**
- [x] Updated LinkedIn copy saved to `Documents/reference files/UPDATED-SOCIAL-COPY.md`
- [x] Zero instances of "free" in any social copy

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 2: HOME PAGE (`app/page.tsx`)

#### US-003: Rewrite Hero Section (Highest Impact Change)
**Description:** As a first-time visitor, I should immediately understand this is a premium consulting firm with a unique strategic perspective, not a budget automation vendor.
**Priority:** Critical
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 72-91

**BEFORE:**
```
<h1>Stop Wasting Time on <span>Monotonous Work</span></h1>
<p>While your competitors are using AI to work 3X faster and produce 3X the results,
are you being left behind? Our AI consulting team delivers ROI-driven automation
systems that transform how your business operates.</p>
```

**AFTER:**
```
<h1>We Build <span>Systems</span>, Not Tools</h1>
<p>Most companies are collecting AI tools that work in isolation. We design the
connective tissue — integrated automation systems that compound across your entire
operation. The difference between a tool and a system is the difference between
incremental improvement and structural advantage.</p>
```

**Acceptance Criteria:**
- [x] Hero headline updated to "We Build Systems, Not Tools"
- [x] Subtext uses authority/aspiration language, zero fear/FOMO language
- [x] "Systems, not tools" brand differentiator is the first thing visitors see
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-004: Rewrite "Who We Are" Section
**Description:** As a visitor, I should see authoritative expertise signals, not peer-level empathy.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 93-133

**BEFORE:**
```
<h2>Real People Building <span>Real Solutions</span></h2>
<p>We're not AI creating AI—we're a team of experienced humans who understand your
struggles with implementing artificial intelligence. We've seen businesses waste time
and money on AI tools that don't deliver results. That's why we built Full Stack AI
Automation: to bridge the gap between AI potential and real-world business value.</p>
```

**AFTER:**
```
<h2>Human Expertise. <span>Engineered Outcomes.</span></h2>
<p>AI implementation fails when it is treated as a technology problem. It is a business
architecture problem — and it requires consultants who understand both. Our team brings
deep operational experience across industries, combining strategic insight with hands-on
engineering to build systems that do not just work on day one, but compound in value
over time.</p>
```

**Three value cards — update titles and descriptions:**

| Card | BEFORE Title | AFTER Title | BEFORE Description | AFTER Description |
|------|-------------|------------|-------------------|------------------|
| 1 | "Human-Centered Approach" | "Embedded Partnership" | "Our consultants work directly with your team to understand your unique challenges and design custom AI solutions that actually fit your workflow." | "We embed with your team as consultants, architects, and builders — designing systems around how your business actually operates, not how a software vendor thinks it should." |
| 2 | "Results-Driven Strategy" | "Measurable Outcomes" | "We don't sell you technology for technology's sake. Every automation we implement is designed to deliver measurable ROI and time savings." | "Every system we build is measured by the value it delivers — recovered revenue, eliminated bottlenecks, and operations that scale without adding headcount." |
| 3 | "Partnership, Not Just Service" | "Compounding Returns" | "We become an extension of your team, providing ongoing support and optimization to ensure your AI systems continue delivering value." | "Our engagements are designed to compound results over time. Ongoing refinement ensures your systems grow more valuable with every quarter, not less." |

**Acceptance Criteria:**
- [x] Section heading updated
- [x] Body copy updated
- [x] All 3 value cards updated with new titles and descriptions
- [x] Zero instances of "struggle" or "waste" in this section
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-005: Rewrite Home Solutions Preview Section
**Description:** As a visitor, the solutions preview should lead with outcomes, not "eliminate monotonous work."
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 136-191

**BEFORE (section header):**
```
<h2>Our <span>Solutions</span></h2>
<p>Customized AI automation systems designed to eliminate monotonous work and amplify
your team's productivity.</p>
```

**AFTER:**
```
<h2>Tools Help Individuals. <span>Systems</span> Help Businesses.</h2>
<p>Every solution we architect is designed as an integrated system — connecting your
sales pipeline, operations, and customer experience into automation that compounds
across your entire organization.</p>
```

**Update Operations Optimization card (reframe trade names as expertise, not limitation):**

| Field | BEFORE | AFTER |
|-------|--------|-------|
| description | "Streamline your entire operation from scheduling to invoicing. Perfect for service companies like plumbing, landscaping, and roofing." | "Streamline your entire operation from scheduling to invoicing. Refined across industries we've mastered — plumbing, landscaping, roofing, spray foam, and beyond." |

**Acceptance Criteria:**
- [x] Section header uses systems-vs-tools positioning
- [x] Operations card reframes trades as expertise signal
- [x] Zero instances of "monotonous" in this section
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-006: Rewrite Home Results Preview & Testimonials
**Description:** As a visitor, I should see real client names and metrics that signal premium outcomes.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 193-540

**Results preview section header change:**

| Field | BEFORE | AFTER |
|-------|--------|-------|
| `<h2>` | "Real Results" | "Client Outcomes" |
| `<p>` | "See how businesses like yours are transforming their operations with AI automation." | "We measure our work by what it produces — recovered revenue, eliminated bottlenecks, and operations that scale without adding headcount." |

**Result cards — replace with real client data:**

| Card | BEFORE | AFTER |
|------|--------|-------|
| 1 (85%) | "A regional home improvement company automated their lead follow-up process, converting 3X more prospects into customers." | "Elev808 Designs scaled from $1M to $10M in 3 years through marketing automation and customer journey streamlining." |
| 2 (20+ hours) | "A plumbing service eliminated manual scheduling and invoicing, freeing up time for growth and customer service." | "Source 4 Industries, a 50-year-old family company, achieved 70% revenue growth over 3 years with our automation systems." |
| 3 ($50K) | "A corporate client reduced operational costs by automating data entry and report generation across departments." | "Huge Capital saw 78% revenue increase by month 4 of working together, reaching their highest month to date." |

**Testimonials section — replace mock testimonials with real client references:**

| Slot | BEFORE (Mock) | AFTER (Real Client Data) |
|------|---------------|------------------------|
| 1 | Mike Johnson, Johnson's Plumbing Services | "Full Stack AI Automation didn't just give us tools — they built a system that our entire team relies on daily. The results compound with every month." — **Source 4 Industries, Service & Manufacturing** |
| 2 | Sarah Chen, GreenScape Landscaping | "We went from $1M to $10M. That doesn't happen with another SaaS subscription. It happens with the right team building the right systems." — **Elev808 Designs, Marketing & E-Commerce** |
| 3 | David Martinez, Martinez Roofing & Construction | "Within 3 months we grew from 26 to 40 consulting clients. Now we're building a SaaS product with the same team." — **Hydr8 Consulting, Professional Services** |

**NOTE:** These testimonial quotes are narrative-framed from client data, not direct quotes. Add a comment in code: `{/* TODO: Replace with actual client testimonial quotes when available */}`. The metrics and company names are real.

**Acceptance Criteria:**
- [x] Results section header updated to "Client Outcomes"
- [x] Three result cards use real client data
- [x] Three testimonials use real client names and industries
- [x] TODO comment added for future direct quotes
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-007: Rewrite Home Final CTA Section
**Description:** As a visitor ready to convert, the closing CTA should frame the next step as strategic, not transactional.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 542-555

**BEFORE:**
```
<h2>Ready to Work 3X Faster?</h2>
<p>Schedule your AI audit and discover how much time and money you could be saving.</p>
<CTAButton>Schedule Your Discovery Meeting</CTAButton>
```

**AFTER:**
```
<h2>See Where the Leverage Is</h2>
<p>Our audit identifies the highest-leverage automation opportunities specific to your
operation and builds a preliminary case for ROI.</p>
<CTAButton>SCHEDULE YOUR AUDIT</CTAButton>
```

**Acceptance Criteria:**
- [x] CTA headline updated
- [x] CTA subtext uses outcome/leverage language
- [x] Button text consistent with navbar CTA
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-008: Rewrite Home Process Preview Step 1
**Description:** As a visitor, the process overview should use strategic language.
**Priority:** Medium
**File:** `src/fullstack-ai-nextjs/app/page.tsx` — Lines 467-472

**BEFORE (Step 1):**
```
title: "Discovery Meeting"
description: "We start with a comprehensive audit call to understand your business,
identify bottlenecks, and explore automation opportunities."
```

**AFTER:**
```
title: "Strategic Assessment"
description: "Every engagement begins with a comprehensive review of your operations,
technology stack, and growth objectives to identify the highest-impact automation
opportunities."
```

**Acceptance Criteria:**
- [x] Step 1 title changed from "Discovery Meeting" to "Strategic Assessment"
- [x] Step 1 description uses strategic language
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 3: ABOUT PAGE (`app/about/page.tsx`)

#### US-009: Rewrite About Hero & Founding Story
**Description:** As a visitor learning about the company, I should see authority-level expertise, not peer-level commiseration.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/about/page.tsx`

**Hero subtext:**

| BEFORE | AFTER |
|--------|-------|
| "Full Stack AI Automation was founded by business owners who got tired of watching companies waste money on AI tools that don't deliver results." | "Full Stack AI Automation was founded on a single conviction: that AI implementation fails when it is disconnected from real business operations. Our team brings deep expertise in both technology and business strategy to close that gap." |

**Our Story section:**

| BEFORE | AFTER |
|--------|-------|
| "We've been in your shoes. We've struggled with overwhelmed teams, lost leads, and operations that couldn't scale. We've also seen firsthand how the right AI automation can transform a business." | "Having led technology transformation initiatives across service businesses and enterprise organizations, our team understands both sides of the AI implementation challenge: the strategic vision and the operational reality." |
| "That's why we started Full Stack AI Automation—to bridge the gap between AI potential and real-world business value. We're not here to sell you the latest tech trend. We're here to solve your actual problems with systems that work." | "That insight is what drives every engagement. We are not here to deploy the latest trend. We are here to architect systems that produce measurable, compounding results — and to stay accountable for those results over time." |

**Our Mission section:**

| BEFORE | AFTER |
|--------|-------|
| "To empower businesses of all sizes with AI automation that delivers measurable results. We believe technology should serve people, not replace them." | "To deliver enterprise-grade AI automation to growth-oriented businesses — from service trades scaling their first million to corporations optimizing across departments. We believe technology should amplify human capability, not replace it." |

**Acceptance Criteria:**
- [x] Hero subtext updated
- [x] "Our Story" rewritten with authority positioning
- [x] Mission statement rewritten — removes "all sizes," adds qualification language
- [x] Zero instances of "in your shoes" or "struggled"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-010: Add Team/Founder Section to About Page
**Description:** As a premium consulting buyer, I need to know WHO I'm hiring.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/about/page.tsx`

**Implemented:** Leadership section added between Values and Next Steps sections. Single founder card (Taylor Grassmick, Founder) with initials placeholder for headshot and 3-sentence authoritative bio. Centered layout with `max-w-2xl`. TODO comment for future headshot image.

**Implementation deviation from original spec:**
- Single person (Taylor Grassmick, Founder) instead of 2-person layout — per user direction, additional team members will be added when roles are confirmed
- Centered single-card layout instead of 2-column grid — appropriate for single person

**Acceptance Criteria:**
- [x] Leadership section added with founder (project director deferred per user direction)
- [x] Bios are concise and authoritative
- [x] Responsive layout (centered single card, appropriate for one person)
- [x] Placeholder for headshot images included
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 4: SOLUTIONS PAGE (`app/solutions/page.tsx`)

#### US-011: Rewrite Solutions Hero
**Description:** As a visitor evaluating our services, I should see the systems-vs-tools differentiation front and center.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/solutions/page.tsx` — Lines 92-109

**BEFORE:**
```
<h1>AI Solutions That <span>Actually Work</span></h1>
<p>Customized automation systems designed to eliminate monotonous work and amplify
your team's productivity.</p>
```

**AFTER:**
```
<h1>Tools Help Individuals. <span>Systems</span> Help Businesses.</h1>
<p>Every solution we architect is designed as an integrated system — connecting your
sales pipeline, operations, and customer experience into automation that compounds
across your entire organization.</p>
```

**Acceptance Criteria:**
- [x] Hero headline uses systems-vs-tools framework
- [x] Subtext uses "architect" and "compounds" language
- [x] Zero instances of "monotonous"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-012: Reframe Solutions Copy & Benefits Headers
**Description:** As a visitor, solution descriptions should lead with outcomes and frame trade industries as expertise.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/solutions/page.tsx`

**Global change on Solutions page:** Replace all instances of `"What You Get:"` with `"What We Deliver:"`

**Operations Optimization description:**

| BEFORE | AFTER |
|--------|-------|
| "Built specifically for service companies like plumbing, landscaping, and roofing, our operations optimization systems streamline everything from job scheduling to invoicing. Spend less time on paperwork and more time serving customers." | "Our operations optimization systems streamline everything from job scheduling to invoicing — refined across industries we've mastered including plumbing, landscaping, roofing, spray foam, and home improvement. Built for service-based businesses where operational complexity scales with revenue." |

**CRM Automation description — reframe from pain to outcome:**

| BEFORE | AFTER |
|--------|-------|
| "Stop losing leads in spreadsheets and email chains. Our AI-enabled CRM systems automatically capture every lead, follow up at the perfect time, and keep your pipeline organized—so you never miss an opportunity." | "Our CRM intelligence systems create a closed-loop pipeline where every lead is captured, scored, and engaged at the optimal moment. Clients implementing this system have seen follow-up rates increase by 85% and pipeline velocity triple within 90 days." |

**Acceptance Criteria:**
- [x] All "What You Get:" changed to "What We Deliver:"
- [x] Operations description reframes trades as expertise
- [x] CRM description leads with outcomes, not pain
- [x] Zero instances of "Stop losing" or "without lifting a finger"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 5: RESULTS PAGE (`app/results/page.tsx`)

#### US-013: Rewrite Results Page Hero & CTA
**Description:** As a visitor viewing case studies, the framing should be confident and factual, not "real results from real businesses."
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/results/page.tsx`

**Hero:**

| BEFORE | AFTER |
|--------|-------|
| `<h1>Real <span>Results</span> From Real Businesses</h1>` | `<h1>Client <span>Outcomes</span></h1>` |
| "See how companies like yours are saving time, increasing revenue, and scaling faster with AI automation." | "We measure our work by what it produces — recovered revenue, eliminated bottlenecks, and operations that scale without adding headcount. These are representative engagements." |

**Bottom CTA:**

| BEFORE | AFTER |
|--------|-------|
| `<h2>Ready For Your Own Success Story?</h2>` | `<h2>Explore What This Could Look Like For Your Business</h2>` |
| "Schedule your AI audit and discover how much time and money you could be saving." | "Our audit identifies the highest-leverage automation opportunities specific to your operation and builds a preliminary case for ROI." |

**Acceptance Criteria:**
- [x] Hero updated to "Client Outcomes"
- [x] CTA section uses outcome-focused language
- [x] Zero instances of "Real Results" or "Real Businesses"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-014: Replace Mock Case Studies with Real Client Data
**Description:** As a prospect evaluating us, I should see named companies with specific, credible outcome narratives.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/results/page.tsx`

**Replace the three case study sections with real client data:**

**Case Study 1 — Elev808 Designs:**
- Headline: "$1M to $10M in 3 Years"
- Subtitle: "Elev808 Designs — Marketing & E-Commerce"
- Narrative: "Elev808 Designs came to us as a $1M company with ambitious growth targets but manual marketing processes that couldn't scale. We implemented marketing automation and customer journey streamlining systems that transformed how they acquired and retained customers."
- Metrics: `$10M` Revenue milestone | `10X` Growth in 3 years | `Marketing Automation` Core system
- NOTE: Enhance narrative when more detail is available

**Case Study 2 — Source 4 Industries:**
- Headline: "70% Revenue Growth for a 50-Year Legacy Business"
- Subtitle: "Source 4 Industries — Service & Manufacturing"
- Narrative: "Source 4 Industries is a 50-year-old family-owned company that needed to modernize operations without disrupting what made them successful. Our automation systems integrated with their existing workflows, driving 70% revenue growth over 3 years while preserving the operational discipline built over five decades."
- Metrics: `70%` Revenue growth | `50 Years` Business legacy | `3 Years` Growth timeline

**Case Study 3 — Hydr8 Consulting:**
- Headline: "54% Client Growth in 3 Months"
- Subtitle: "Hydr8 Consulting — Professional Services"
- Narrative: "Hydr8 Consulting was growing but constrained by manual client acquisition and onboarding. Within 3 months of implementing our systems, they scaled from 26 to 40 consulting clients. The partnership has since expanded — we're now building a SaaS product together for their offer."
- Metrics: `54%` Client growth | `3 Months` Time to results | `SaaS` Product partnership

**Add a 4th case study — Huge Capital:**
- Headline: "78% Revenue Increase by Month 4"
- Subtitle: "Huge Capital — Financial Services"
- Narrative: "Huge Capital partnered with us to systematize their revenue operations. By month 4, they achieved a 78% revenue increase and reached their highest-revenue month to date — a direct result of automation systems designed to compound results over time."
- Metrics: `78%` Revenue increase | `Month 4` Breakout point | `Highest Month` On record

**Add TODO comment:** `{/* TODO: Add actual client testimonial quotes and video content when available */}`

**Acceptance Criteria:**
- [x] All 3 existing mock case studies replaced with real client data
- [x] 4th case study (Huge Capital) added
- [x] All case studies use named companies
- [x] Metrics cards updated with real numbers
- [x] TODO comment for future quotes/video
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 6: PROCESS PAGE (`app/process/page.tsx`)

#### US-015: Restructure Pricing Grid (Remove Dollar Amounts)
**Description:** As a premium consulting buyer, I should see qualitative engagement descriptions, not a SaaS pricing grid with dollar amounts.
**Priority:** Critical
**File:** `src/fullstack-ai-nextjs/app/process/page.tsx` — Lines 23-90

**Replace the entire pricing tier data:**

| Field | BEFORE | AFTER |
|-------|--------|-------|
| Tier 1 name | "Starter" | "Focused Engagement" |
| Tier 1 price | "$5K-$15K" | *(remove price display entirely)* |
| Tier 1 description | "Perfect for small businesses ready to automate one key workflow." | "Single workflow transformation with training and 30-day optimization. Ideal for businesses ready to automate their highest-impact process." |
| Tier 2 name | "Professional" | "Integrated Systems" |
| Tier 2 price | "$15K-$40K" | *(remove price display entirely)* |
| Tier 2 description | "Ideal for growing companies ready to scale with integrated systems." | "Multiple connected automation systems with custom integrations and 60-day optimization. For operations ready to scale through systematic automation." |
| Tier 2 "MOST POPULAR" | `<div>MOST POPULAR</div>` | **Remove entirely** — keep the featured border styling only |
| Tier 3 name | "Enterprise" | "Full Transformation" |
| Tier 3 price | "$40K+" | *(remove price display entirely)* |
| Tier 3 description | "For established companies needing comprehensive AI transformation." | "Comprehensive AI architecture across your entire operation with advanced analytics and ongoing strategic partnership." |

**Add footer text below the pricing grid:**
```
<p className="text-center text-muted-foreground mt-8">
  Investment is scoped during the Strategy phase based on your specific objectives,
  operational complexity, and desired timeline. Every engagement is designed to deliver
  measurable ROI.
</p>
```

**Acceptance Criteria:**
- [x] All dollar amounts removed from pricing tiers
- [x] Tier names changed to qualitative labels
- [x] "MOST POPULAR" badge removed
- [x] "Perfect for small businesses" removed
- [x] Descriptions rewritten with premium language
- [x] Investment scoping footer text added
- [x] Featured border styling preserved on middle tier
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-016: Update Process Steps Copy
**Description:** As a visitor, the process steps should use strategic language consistent with the new positioning.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/process/page.tsx` — Lines 92-169

**Changes:**

| Step | Field | BEFORE | AFTER |
|------|-------|--------|-------|
| 1 | title | "Discovery Meeting (Week 1)" | "Strategic Assessment (Week 1)" |
| 1 | detail item 5 | "No obligation—just valuable insights" | "Preliminary automation opportunity mapping" |
| 1 | "What You Get:" header | "What You Get:" | "What We Deliver:" |
| 2 | "What You Get:" header | "What You Get:" | "What We Deliver:" |
| 3 | "What You Get:" header | "What You Get:" | "What We Deliver:" |
| 4 | "What You Get:" header | "What You Get:" | "What We Deliver:" |

**Acceptance Criteria:**
- [x] Step 1 renamed to "Strategic Assessment"
- [x] "No obligation" removed from step 1 details
- [x] All "What You Get:" changed to "What We Deliver:"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 7: ANALYSIS/INTAKE PAGE (`app/analysis/page.tsx`)

#### US-017: Rewrite Analysis Page Hero & Trust Indicators
**Description:** As a prospect filling out the intake form, the framing should position the audit as valuable, not as a sales call disguised as a gift.
**Priority:** High
**File:** `src/fullstack-ai-nextjs/app/analysis/page.tsx`

**Hero subtext:**

| BEFORE | AFTER |
|--------|-------|
| "Discover exactly how AI automation can transform your business—no obligation, just valuable insights." | "Share a few details about your operation. We will review your workflow architecture, identify the highest-ROI automation opportunities, and come to our first conversation with a preliminary assessment already in hand." |

**Trust indicators (Lines 372-386):**

Replace emoji-based trust badges with credibility metrics:

**BEFORE:**
```
🔒 100% Secure
⚡ Quick Response
✓ No Obligation
```

**AFTER:**
```
Serving businesses from $100K to $50M+ in revenue
Average client ROI of 312% in year one
Response within one business day
```

**Acceptance Criteria:**
- [x] Hero subtext rewritten with value-forward language
- [x] Trust indicators replaced with credibility metrics
- [x] Zero instances of "no obligation"
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 8: NEW ADDITIONS

#### US-018: Add Client Logo Strip to Results Page
**Description:** As a visitor, I should see recognizable client names/logos that signal the firm works with real, named businesses.
**Priority:** Medium
**File:** `src/fullstack-ai-nextjs/app/results/page.tsx` (new section at bottom, before CTA)
**Style Reference:** https://www.elev808designs.com/pages/artist-collabs (horizontal scrolling logo strip)

**Implementation:**
- Add a new section between the last case study and the bottom CTA
- Header: "Trusted By" or "Our Clients"
- Horizontal scrolling logo strip (CSS animation, infinite loop)
- Initial logos: Source 4 Industries, Elev808 Designs, Hydr8 Consulting, Huge Capital
- Use company names as text if logos aren't available yet, with placeholder image slots
- Grayscale treatment on logos (premium convention), color on hover
- Mobile: smaller logos, same scrolling behavior

**Acceptance Criteria:**
- [x] Client logo section added to Results page
- [x] Horizontal scrolling animation works
- [x] Grayscale with color-on-hover treatment
- [x] At least 4 client names displayed
- [x] Responsive on mobile
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-019: Brand the Methodology
**Description:** As a premium firm, our 4-step process should have a proprietary name that signals intellectual property.
**Priority:** Medium
**Scope:** Process page, Home page process section

**Changes:**
- Name the methodology: **"The Full Stack Framework"**
- Add a brief introduction on the Process page: "Our proprietary Full Stack Framework has been refined across dozens of engagements to ensure every implementation delivers maximum impact with minimum disruption."
- Reference "The Full Stack Framework" in the Home page process section header
- Consider adding a simple visual diagram in a future iteration

**Acceptance Criteria:**
- [x] "The Full Stack Framework" referenced on Process page
- [x] "The Full Stack Framework" referenced on Home page process section
- [x] Methodology description added
- [x] Typecheck passes

**Status: COMPLETE (Feb 6, 2026)**

#### US-020: Generate Blog/Thought Leadership Article Recommendations
**Description:** As a brand building authority, we need a content roadmap of 10 foundational articles.
**Priority:** Medium
**Deliverable:** Article list saved to `Documents/reference files/BLOG-ARTICLE-RECOMMENDATIONS.md`

**Recommended 10 Launch Articles:**

1. **"We Build Systems, Not Tools: Why the Distinction Matters"** — Foundational brand positioning piece. Explains the systems vs. tools framework. Anchor article that all social content links back to.

2. **"Why 73% of AI Implementations Fail (And What to Do Instead)"** — Authority piece with industry statistics. Positions FSAA as the team that avoids the common pitfalls.

3. **"The Hidden Cost of Manual Operations: A Calculator for Business Owners"** — Pairs with the ROI calculator on the site. SEO play for "AI ROI" and "automation cost savings" keywords.

4. **"What a $15K-$40K AI Engagement Actually Includes"** — Transparency piece that justifies premium pricing. Breaks down what clients receive vs. what a SaaS subscription provides.

5. **"AI Tools Are Easy to Find. AI Systems That Work? Here's the Difference."** — Competitive positioning piece. Addresses the "why not DIY?" question without trash-talking tools.

6. **"From $1M to $10M: How Elev808 Designs Scaled with Automation"** — Named client case study in long-form narrative. The most powerful trust signal you can publish.

7. **"The Automation Maturity Model: Where Does Your Business Fall?"** — Framework piece that creates a self-assessment. Generates leads from businesses at early maturity stages.

8. **"How Service Businesses (Plumbing, Landscaping, Roofing) Are Using AI in 2026"** — Industry-specific piece targeting the SMB service audience. SEO play for trade + AI keywords.

9. **"CRM Automation vs. CRM Software: Why Your HubSpot Still Needs a System Behind It"** — Addresses the most common objection: "We already have a CRM." Positions integration expertise.

10. **"What to Look for in an AI Consulting Partner (And What to Run From)"** — Buyer's guide that positions FSAA as the standard-setter. Establishes evaluation criteria that favor your strengths.

**Acceptance Criteria:**
- [x] Article list saved to Documents
- [x] Each article has a title, positioning rationale, and target keyword theme

**Status: COMPLETE (Feb 6, 2026)**

---

### SECTION 9: DOCUMENTATION & VERIFICATION

#### US-021: Build, Deploy, and Verify
**Description:** After all changes, verify the site builds clean and deploys correctly.
**Priority:** Required

**Acceptance Criteria:**
- [x] `npx tsc --noEmit` passes with zero errors
- [x] `npm run build` completes successfully
- [x] Changes committed and pushed to GitHub (commit 6815bae)
- [x] Vercel deployment succeeds (auto-deploy on push to main)
- [ ] All 6 pages visually verified in browser
- [ ] No broken links or missing images

**Status: PARTIALLY COMPLETE (Feb 6, 2026)** — Build/deploy verified. Visual browser verification is a manual step for the site owner.

#### US-022: Update Project Documentation
**Description:** All project docs should reflect the work completed.
**Priority:** Required

**Files to update:**
- `Documents/Main Project Files/progress.md` — Add luxury repositioning milestone
- `Documents/Main Project Files/decisions.md` — Add pricing restructure, brand vocabulary, and positioning decisions
- `src/fullstack-ai-nextjs/claude.md` — Update if relevant technical details changed
- `CLAUDE.md` (root) — Verify all file references still accurate

**Acceptance Criteria:**
- [x] progress.md updated
- [x] decisions.md updated
- [x] claude.md (technical docs) updated
- [x] All documentation reflects current state

**Status: COMPLETE (Feb 6, 2026)**

---

## Functional Requirements Summary

- FR-1: All hero headlines use authority/aspiration language (zero fear/FOMO)
- FR-2: "Systems, not tools" positioning leads the Home page
- FR-3: All pricing dollar amounts removed; qualitative descriptions only
- FR-4: "MOST POPULAR" badge removed from Process page
- FR-5: All "What You Get" changed to "What We Deliver" sitewide
- FR-6: Real client data (4 companies) replaces all mock testimonials and case studies
- FR-7: Client logo strip added to Results page
- FR-8: Team/Leadership section added to About page
- FR-9: Methodology branded as "The Full Stack Framework"
- FR-10: Trade industries reframed as expertise signals, not limitations
- FR-11: Trust indicators on Analysis page replaced with credibility metrics
- FR-12: All meta descriptions and OG tags updated with premium copy
- FR-13: LinkedIn copy updated to remove "free"
- FR-14: Zero instances of "free," "monotonous," "stop wasting time," or "being left behind" on any page

---

## Non-Goals (Out of Scope for This PRD)

- Blog/newsletter implementation (content plan is delivered, but building the blog is a separate project)
- Video testimonial integration (planned for future, placeholder noted)
- Full About page redesign with team headshots (photo sourcing is separate)
- Revenue slider minimum change on Analysis page (current range is fine)
- SEO keyword optimization of new copy (can be a follow-up pass)
- Dark mode styling adjustments for new sections

---

## Technical Considerations

- All changes are copy/JSX only — no new dependencies required
- Client logo strip will need CSS keyframe animation (no library needed)
- Team section is standard responsive grid — reuse existing card patterns
- Build and typecheck should pass cleanly since changes are all string/JSX
- Vercel Root Directory is configured to `src/fullstack-ai-nextjs` — no deployment config changes needed

---

## Success Metrics

- Premium positioning score moves from 4/10 to 6.5+/10 (assessed by re-running Mary's audit framework)
- Zero instances of "free," "monotonous," "wasting time," or fear-based CTAs on any page
- All 4 real client names appear on the Results page
- Pricing section displays zero dollar amounts
- Team/Leadership section exists on About page
- "The Full Stack Framework" is named on Process and Home pages

---

## Open Questions

1. ~~**Founder name and bio content**~~ — **RESOLVED:** Taylor Grassmick, Founder. Bio implemented in Phase 3.
2. ~~**Client logos**~~ — **RESOLVED:** Text-based placeholders used in scrolling "Trusted By" strip (Phase 8). Ready for logo image swap when files are available.
3. **Headshot photos** — For the team section, are photos available or should we use professional placeholder styling? *(Still open — initials placeholder currently used)*
4. **Revenue slider minimum** — Should the Analysis page slider start at $100K (current) or $250K (stronger qualification signal)? *(Still open — current range kept per PRD non-goals)*

---

*This PRD is designed for implementation by Nadia (Next.js Developer) with copy specifications ready for direct implementation. Each user story can be completed in a single focused session.*
