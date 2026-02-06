# Technical Decisions Log

## Architecture Decisions

### Decision 1: Next.js as Primary Framework
- **Date:** October 2025
- **Decision:** Use Next.js 16 + React 19 + TypeScript
- **Rationale:** Modern stack, SSR/SSG support, Vercel integration
- **Alternatives Considered:** Static HTML only
- **Status:** Implemented

### Decision 2: Vercel for Hosting
- **Date:** October 2025
- **Decision:** Deploy to Vercel
- **Rationale:** Native Next.js support, automatic deployments, excellent DX
- **Status:** Live at fullstackaiautomation.com

### Decision 3: Simplified Lead Form
- **Date:** November 2025
- **Decision:** Reduce form from 8+ fields to 4 fields
- **Rationale:** Higher conversion rates, less friction
- **Fields:** Full Name, Company Website, Annual Revenue, Automation Goals
- **Status:** Implemented (v1.7.0)

### Decision 4: Google Calendar Integration
- **Date:** November 2025
- **Decision:** Direct Google Calendar booking on form success
- **Rationale:** Immediate conversion, no email wait
- **Status:** Implemented

---

## Design Decisions

### Decision 5: Mobile Navigation - Full Screen Overlay
- **Date:** November 2025
- **Decision:** Option 2 - Full-Screen Overlay Menu
- **Rationale:** Clean UX, better for touch devices
- **Analysis:** See archived MOBILE-NAV-OPTIONS.md
- **Status:** Implemented

### Decision 6: Color Scheme
- **Date:** October 2025
- **Decision:** Black/White/Turquoise (#00CED1)
- **Rationale:** Professional, bold, minimal
- **Status:** Implemented

---

## Positioning & Brand Decisions

### Decision 7: Luxury Repositioning Initiative
- **Date:** February 2026
- **Decision:** Reposition brand from mid-market vendor (4/10) to premium consulting firm (6.5+/10)
- **Rationale:** Competitive analysis (Mary Analyst audit) scored current site at 4/10 on premium spectrum. Target audience remains both SMBs and enterprise — luxury positioning is about service quality, not audience exclusion.
- **PRD:** `Documents/Main Project Files/PRD-LUXURY-REPOSITIONING.md`
- **Status:** In progress

### Decision 8: Brand Vocabulary — "Systems, Not Tools"
- **Date:** February 2026
- **Decision:** Adopt "We build systems, not tools" as primary brand differentiator. Preferred vocabulary: "system" over "tool," "architecture" over "setup," "engagement" over "project," "investment" over "cost."
- **Rationale:** Positions FSAA as strategic consulting partner vs. commodity vendor. Creates clear competitive differentiation.
- **Status:** Implemented in metadata (Phase 1), home page (Phase 2), about page (Phase 3), solutions page (Phase 4), results page (Phase 5), and process page (Phase 6). Analysis page pending.

### Decision 9: Remove All "Free" Language
- **Date:** February 5, 2026
- **Decision:** Eliminate the word "free" from all website copy, CTAs, and social media
- **Rationale:** "Free" signals low value and contradicts premium positioning. Replaced with "strategy session" and value-forward framing.
- **Status:** Implemented (17 edits across 10 files)

### Decision 10: Premium Metadata & Social Copy
- **Date:** February 6, 2026
- **Decision:** Replace fear/pain messaging ("Stop wasting time on monotonous work") with authority/aspiration messaging ("Bespoke AI automation systems engineered to compound revenue") across all metadata and social profiles
- **Rationale:** Search previews and social shares are first-impression touchpoints. Premium language must lead.
- **Status:** Implemented

### Decision 11: Home Page — Real Client Data Over Mock Testimonials
- **Date:** February 6, 2026
- **Decision:** Replace all mock testimonials (Mike Johnson, Sarah Chen, David Martinez) and generic case studies with real client names and metrics (Elev808 Designs, Source 4 Industries, Huge Capital, Hydr8 Consulting). Testimonial quotes are narrative-framed from client outcome data until direct quotes are obtained.
- **Rationale:** Named clients with specific metrics are the strongest trust signal for premium positioning. Mock testimonials undermine credibility.
- **Status:** Implemented (home page + results page).

### Decision 12: Home Page — Authority Messaging Over Fear/Pain
- **Date:** February 6, 2026
- **Decision:** Rewrite entire home page copy from fear/FOMO framing ("Stop wasting time," "being left behind," "struggles") to authority/aspiration framing ("We Build Systems, Not Tools," "Human Expertise. Engineered Outcomes.," "See Where the Leverage Is").
- **Rationale:** Fear messaging positions the brand as peer-level; authority messaging positions as expert-level. Premium firms lead with what they know, not what the prospect fears.
- **Status:** Implemented

### Decision 13: About Page — Authority Positioning Over Peer Empathy
- **Date:** February 6, 2026
- **Decision:** Rewrite About page copy from peer-level empathy ("We've been in your shoes," "We've struggled") to authority-level expertise ("technology transformation initiatives," "architect systems that produce measurable, compounding results"). Mission reframed from "businesses of all sizes" to "enterprise-grade AI automation to growth-oriented businesses — from service trades to corporations."
- **Rationale:** Premium consulting firms communicate from a position of expertise, not shared struggle. The new copy signals deep operational experience while remaining inclusive of both SMB and enterprise audiences.
- **Status:** Implemented

### Decision 14: Leadership Section — Founder Only (Initially)
- **Date:** February 6, 2026
- **Decision:** Launch Leadership section with Taylor Grassmick (Founder) only. Additional team members to be added when roles are confirmed within the company. Single centered card layout instead of the originally planned 2-column grid.
- **Rationale:** Better to have one well-presented founder than to list unconfirmed roles. Layout can easily expand to grid when more team members are added.
- **Status:** Implemented (headshot placeholder with TODO for future image)

### Decision 15: Results Page — Real Client Case Studies Over Mock Data
- **Date:** February 6, 2026
- **Decision:** Replace all three mock case studies (generic "Regional Home Improvement Company," "Johnson's Plumbing Services," "Corporate Client") with four named client case studies: Elev808 Designs ($1M→$10M), Source 4 Industries (70% revenue growth), Hydr8 Consulting (54% client growth), Huge Capital (78% revenue increase). SVG metric icons removed in favor of text-based metric cards with real numbers.
- **Rationale:** Named clients with specific, verifiable outcomes are the strongest trust signal for premium positioning. Mock case studies with generic company names undermine credibility. Adding a 4th case study (Huge Capital) strengthens the portfolio breadth across industries.
- **Status:** Implemented (commit 7c6e638). Testimonial quotes are narrative-framed from client data — TODO added for future direct quotes.

### Decision 16: Process Page — Remove Dollar Amounts, Qualitative Tier Naming
- **Date:** February 6, 2026
- **Decision:** Remove all dollar amounts ($5K-$15K, $15K-$40K, $40K+) from pricing tiers. Rename tiers to qualitative labels (Focused Engagement, Integrated Systems, Full Transformation). Remove "MOST POPULAR" badge. Add investment scoping footer: "Investment is scoped during the Strategy phase based on your specific objectives."
- **Rationale:** Dollar amounts in a SaaS-style pricing grid contradict premium consulting positioning. Qualitative tier names signal bespoke scoping. "MOST POPULAR" is a SaaS convention that undermines exclusivity. Investment details are more appropriately discussed during the Strategy phase.
- **Status:** Implemented (commit a950087)

### Decision 17: Process Steps — "What We Deliver" Over "What You Get"
- **Date:** February 6, 2026
- **Decision:** Change all "What You Get:" headers to "What We Deliver:" across all 4 process steps. Rename Step 1 from "Discovery Meeting" to "Strategic Assessment." Replace "No obligation—just valuable insights" with "Preliminary automation opportunity mapping."
- **Rationale:** "What You Get" is transactional language (customer-centric framing from SaaS). "What We Deliver" is consultative language (provider-centric framing from professional services). "Discovery Meeting" sounds like a sales call; "Strategic Assessment" sounds like expert evaluation. "No obligation" signals low commitment expectation, which is inconsistent with premium positioning.
- **Status:** Implemented (commit a950087)
