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
