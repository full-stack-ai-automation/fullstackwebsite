# CLAUDE.md - Full Stack AI Automation Website

## Project Overview

This is the marketing website for Full Stack AI Automation, an AI consulting company. The site is live at https://fullstackaiautomation.com.

## Quick Context

- **Primary Codebase:** `src/fullstack-ai-nextjs/` - Next.js 16 + React 19 + TypeScript
- **Backup Version:** `src/website-production/` - Static HTML/CSS/JS
- **GitHub:** https://github.com/amandamealy/fullstackwebsite
- **Hosting:** Vercel (auto-deploys on push to main)
- **Domain:** fullstackaiautomation.com

## Tech Stack

- Next.js 16.0.7
- React 19.2.1
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Google Forms (form backend)
- Google Calendar (booking)

## Key Files

| Purpose | Location |
|---------|----------|
| Technical documentation | `src/fullstack-ai-nextjs/claude.md` |
| Main pages | `src/fullstack-ai-nextjs/app/*/page.tsx` |
| Components | `src/fullstack-ai-nextjs/components/` |
| Global styles | `src/fullstack-ai-nextjs/app/globals.css` |
| Brand logos | `assets/Brand/Logos/` |
| Brand icons | `assets/Brand/Icons/` |
| Progress tracking | `Documents/Main Project Files/progress.md` |
| Decisions log | `Documents/Main Project Files/decisions.md` |
| Deployment docs | `Documents/Main Project Files/deployment.md` |
| Bug tracker | `Documents/Main Project Files/bugs.md` |
| SEO guide | `Documents/guides/SEO-IMPLEMENTATION-SUMMARY.md` |
| Social sharing guide | `Documents/guides/SOCIAL-SHARING-IMAGE-GUIDE.md` |
| Market analysis | `Documents/reference files/MARY-ANALYST-COMPETITIVE-ANALYSIS.md` |
| UX review | `Documents/reference files/RACHEL-UX-REVIEW-REPORT.md` |
| Blog content plan | `Documents/reference files/BLOG-ARTICLE-RECOMMENDATIONS.md` |
| Luxury repositioning PRD | `Documents/Main Project Files/PRD-LUXURY-REPOSITIONING.md` |

## Design Guidelines

- **Colors:** Black, White, Turquoise (#00CED1)
- **Fonts:** Poppins (headings), Open Sans (body)
- **Style:** Modern, minimalist, bold - NO gimmicks (no glows, galaxy effects, mouse trails)
- **Responsive:** Mobile-first, all breakpoints supported

## Commands

```bash
# Development
cd src/fullstack-ai-nextjs && npm run dev

# Build
cd src/fullstack-ai-nextjs && npm run build

# Type check
cd src/fullstack-ai-nextjs && npx tsc --noEmit

# Deploy (auto on push)
cd src/fullstack-ai-nextjs && git push origin main
```

## Pages

1. **Home** (`/`) - Hero, solutions overview, testimonials
2. **About** (`/about`) - Company story, team, values
3. **Solutions** (`/solutions`) - 6 AI automation services
4. **Results** (`/results`) - Case studies, metrics
5. **Process** (`/process`) - Timeline, pricing, FAQ
6. **Analysis** (`/analysis`) - Lead capture form with booking

## Archived Files

Historical development files archived to:
`/Users/amandamealy/Documents/Claude Code/OLD-WORK-ALL/OLD-Full-Stack-Website/`

See `ARCHIVED-FILES.json` in that folder for manifest.
