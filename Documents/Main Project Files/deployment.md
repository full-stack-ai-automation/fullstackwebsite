# Deployment Documentation

## Production Environment

- **Live URL:** https://fullstackaiautomation.com
- **Hosting:** Vercel
- **Project:** Full Stack AI Automation Amanda
- **Repository:** https://github.com/amandamealy/fullstackwebsite
- **Branch:** main

## Auto-Deployment

Pushing to `main` branch triggers automatic deployment:

```bash
cd fullstack-ai-nextjs
git add .
git commit -m "Your changes"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Runs `npm run build`
3. Deploys to production
4. Updates fullstackaiautomation.com

## Manual Deployment

### Via Vercel Dashboard
1. Go to https://vercel.com/full-stack-ai-automation-amanda/fullstackwebsite
2. Click "Deployments"
3. Click "Redeploy" on any previous deployment

### Via Vercel CLI
```bash
cd fullstack-ai-nextjs
npx vercel --prod
```

## Rollback

### Via Dashboard
1. Go to Vercel → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

### Via Instant Rollback
1. Go to Vercel → Overview
2. Click "Instant Rollback" button
3. Select previous deployment

## Domain Configuration

| Domain | Type | Status |
|--------|------|--------|
| fullstackaiautomation.com | Primary | Active |
| www.fullstackaiautomation.com | Redirect | Active |
| *.vercel.app | Preview | Auto-generated |

## Environment Variables

Currently none required. If needed in future:
1. Vercel → Settings → Environment Variables
2. Add variable for Production/Preview/Development

## Build Settings

- **Framework Preset:** Next.js
- **Build Command:** `next build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)
- **Node.js Version:** 18.x

## Deployment History

| Version | Date | Commit | Notes |
|---------|------|--------|-------|
| v1.8.0 | 2025-12-04 | 664c11b | Security patch (CVE-2025-55182) |
| v1.7.0 | 2025-11-17 | 4370497 | Simplified form, Google Calendar |

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Fix errors and push again

### Site Not Updating
1. Check Vercel dashboard for deployment status
2. Verify push reached GitHub (check commits)
3. Check if correct branch is being watched

### Domain Issues
1. Verify DNS settings in domain registrar
2. Check Vercel → Domains for status
3. SSL certificates auto-renew via Vercel
