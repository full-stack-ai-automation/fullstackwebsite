# Full Stack AI Automation Website

Professional marketing website for Full Stack AI Automation - AI consulting and automation services.

## Live Site

**Production:** https://fullstackaiautomation.com

## Tech Stack

- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Hosting:** Vercel
- **Forms:** Google Forms backend
- **Booking:** Google Calendar integration

## Project Structure

```
Full Stack Website/
├── src/
│   ├── fullstack-ai-nextjs/     # Primary Next.js application (deployed)
│   └── website-production/      # Static HTML backup version
├── assets/
│   └── Brand/
│       ├── Logos/               # Logo PNG files
│       └── Icons/               # SVG icons
├── .agent/
│   ├── Tasks/                   # PRDs & implementation plans
│   ├── System/                  # System documentation
│   └── SOP/                     # Standard operating procedures
├── Check Lists/
│   ├── Project Master Check List.md
│   └── Completed Action Items/
├── Data/
│   ├── imports/                 # Data imports
│   ├── exports/                 # Data exports
│   └── reports/                 # Generated reports
├── Documents/
│   ├── Main Project Files/      # bugs.md, decisions.md, progress.md, deployment.md
│   ├── reference files/         # Market analysis, UX review
│   ├── guides/                  # SEO guide, Social sharing guide
│   ├── integrations/            # Integration documentation
│   ├── deployment history/      # Deployment logs
│   ├── Brain/                   # Knowledge base
│   ├── pages/                   # Page-specific documentation
│   ├── schemas/                 # Data schemas
│   └── archived documents/      # Old/superseded docs
├── scripts/
│   └── utilities/               # Utility scripts
├── CLAUDE.md                    # AI context file
├── README.md                    # This file
└── .gitignore
```

## Quick Start

### Run Next.js Development Server
```bash
cd src/fullstack-ai-nextjs
npm install
npm run dev
```
Open http://localhost:3000

### Run Static HTML Version
```bash
cd src/website-production
python3 -m http.server 8000
```
Open http://localhost:8000

## Deployment

The site auto-deploys to Vercel when pushing to the `main` branch:

```bash
cd src/fullstack-ai-nextjs
git add .
git commit -m "Your changes"
git push origin main
```

## Key Features

- 6 complete pages (Home, About, Solutions, Results, Process, Analysis)
- Light/Dark mode toggle
- Mobile-responsive design
- Lead capture form with Google Calendar booking
- Modern, minimalist, bold aesthetic

## Documentation

| Document | Location |
|----------|----------|
| Technical Docs | `src/fullstack-ai-nextjs/claude.md` |
| Deployment Guide | `Documents/Main Project Files/deployment.md` |
| Progress Tracking | `Documents/Main Project Files/progress.md` |
| Decisions Log | `Documents/Main Project Files/decisions.md` |
| Bug Tracker | `Documents/Main Project Files/bugs.md` |
| SEO Guide | `Documents/guides/SEO-IMPLEMENTATION-SUMMARY.md` |
| Social Sharing Guide | `Documents/guides/SOCIAL-SHARING-IMAGE-GUIDE.md` |
| Market Analysis | `Documents/reference files/MARY-ANALYST-COMPETITIVE-ANALYSIS.md` |
| UX Review | `Documents/reference files/RACHEL-UX-REVIEW-REPORT.md` |

## Repository

**GitHub:** https://github.com/amandamealy/fullstackwebsite

---

Built with Next.js and deployed on Vercel
