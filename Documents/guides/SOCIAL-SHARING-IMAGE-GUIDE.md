# Social Sharing Image Guide

## Overview
This guide explains how to create social sharing images for Full Stack AI that will appear when your website is shared on social media platforms.

## Required Images

### 1. Open Graph Image (og-image.jpg)
**Location:** `/public/og-image.jpg`
**Dimensions:** 1200 x 630 pixels
**Format:** JPG or PNG
**File Size:** < 8 MB (recommended < 300 KB for fast loading)

**Usage:** Facebook, LinkedIn, Slack, and other platforms using Open Graph protocol

### 2. Twitter Card Image (twitter-image.jpg)
**Location:** `/public/twitter-image.jpg`
**Dimensions:** 1200 x 630 pixels (for summary_large_image card)
**Format:** JPG or PNG
**File Size:** < 5 MB (recommended < 300 KB)

**Usage:** Twitter/X platform

---

## Design Guidelines

### Content to Include

1. **Logo/Branding**
   - Full Stack AI logo prominently displayed
   - Use your brand colors

2. **Key Message**
   - Main tagline: "AI-Enabled CRM Strategy & Automation"
   - Or alternative: "Work 3X Faster with AI Automation"

3. **Visual Elements**
   - Consider including metrics: "85% Increase in Follow-ups" or "Save 20+ Hours Weekly"
   - Use professional, tech-forward imagery
   - Clean, modern design aesthetic

4. **Call-to-Action (Optional)**
   - "Get Your Free AI Audit"
   - Website URL: fullstackaiautomation.com

### Design Best Practices

- **Safe Zone:** Keep important text/elements within 1200x600px (30px margin from edges)
- **Text Size:** Use large, readable fonts (minimum 60px for main text)
- **Contrast:** Ensure text is readable against background
- **Brand Consistency:** Match your website's color scheme and style
- **Mobile Preview:** Test how it looks in mobile previews (smaller thumbnails)

### Color Palette (Recommended)

Based on your brand:
- Primary: Your brand blue/main color
- Secondary: Accent colors from your website
- Background: White, light gray, or brand color gradient
- Text: High contrast (white on dark, dark on light)

---

## Design Tools

### Online Tools (Free)
- **Canva:** [canva.com](https://canva.com) - Template: "Facebook Post" or custom 1200x630
- **Figma:** [figma.com](https://figma.com) - Professional design tool
- **Adobe Express:** [adobe.com/express](https://adobe.com/express)

### Template Recommendations

Search for:
- "Social media banner template"
- "OG image template"
- "LinkedIn post template 1200x630"

---

## Sample Layouts

### Layout Option 1: Centered Message
```
+----------------------------------------+
|                                        |
|          [LOGO]                        |
|                                        |
|     AI-Enabled CRM Strategy            |
|       & Automation                     |
|                                        |
|   Work 3X Faster with AI Automation    |
|                                        |
|   fullstackaiautomation.com            |
|                                        |
+----------------------------------------+
```

### Layout Option 2: Split Design
```
+----------------------------------------+
|  [VISUAL/          |                  |
|   GRAPHIC]         |  Full Stack AI   |
|                    |                  |
|   AI Icons or      |  Save 20+ Hours  |
|   Tech imagery     |  Weekly          |
|                    |                  |
|                    |  Get Free Audit  |
+----------------------------------------+
```

### Layout Option 3: Metrics-Focused
```
+----------------------------------------+
|           [LOGO]                       |
|                                        |
|   +------+  +------+  +------+         |
|   | 85%  |  | 20+  |  |$50K+ |         |
|   |Follow|  |Hours |  |Saved |         |
|   | ups  |  |Saved |  |      |         |
|   +------+  +------+  +------+         |
|                                        |
|   AI-Powered Business Automation       |
|   fullstackaiautomation.com            |
+----------------------------------------+
```

---

## Creating Your Images

### Quick Start (15 minutes)

1. **Open Canva** (or your preferred tool)
2. **Create custom dimensions:** 1200 x 630 pixels
3. **Add your logo** from website (/public/icon.png)
4. **Add main text:**
   - Headline: "Full Stack AI"
   - Subheadline: "AI-Enabled CRM Strategy & Automation"
5. **Include a metric or benefit:**
   - "Save 20+ Hours Weekly"
   - "Work 3X Faster"
6. **Add website URL:** fullstackaiautomation.com
7. **Export as JPG** (High Quality, <300 KB if possible)
8. **Create two versions:**
   - `og-image.jpg` for Open Graph
   - `twitter-image.jpg` for Twitter (can be same image)

### Professional Option (1-2 hours)

Hire a designer on:
- **Fiverr:** Search "social media banner" or "OG image design"
- **Upwork:** Post job for "social media graphics"
- **99designs:** Run a contest for multiple design options

**Budget:** $15-50 for quick turnaround, $50-200 for custom professional design

---

## Placement

Once created, place the images in the `/public` folder:
```
/public
  ├── og-image.jpg      (for Open Graph)
  └── twitter-image.jpg (for Twitter)
```

The code is already configured to use these images automatically!

---

## Testing Your Images

After uploading and deploying:

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Enter: https://fullstackaiautomation.com
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Enter: https://fullstackaiautomation.com
   - Preview how it looks on Twitter

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Enter: https://fullstackaiautomation.com

4. **Preview Tools**
   - Metatags.io: https://metatags.io/
   - Enter your URL to see all social previews at once

---

## Tips for Maximum Impact

1. **Use Real Metrics:** Your actual case study numbers (85%, 20+ hours, $50K)
2. **Professional Photography:** Consider using high-quality stock photos from:
   - Unsplash (free)
   - Pexels (free)
   - Shutterstock (paid)
3. **A/B Test:** Create 2-3 variations and test which performs better
4. **Update Seasonally:** Refresh images quarterly to keep content fresh
5. **Brand Consistency:** Match the visual style of your main website

---

## Need Help?

If you need design assistance:
1. **Quick DIY:** Use Canva templates, just customize with your branding
2. **Professional Design:** Hire on Fiverr for $15-30 (2-3 day turnaround)
3. **Agency Support:** Contact a design agency for full brand package

---

## Checklist

- [ ] Create og-image.jpg (1200x630px)
- [ ] Create twitter-image.jpg (1200x630px)
- [ ] Place both images in `/public` folder
- [ ] Deploy website with new images
- [ ] Test with Facebook Sharing Debugger
- [ ] Test with Twitter Card Validator
- [ ] Test with LinkedIn Post Inspector
- [ ] Share on social media to verify appearance

---

**Note:** The metadata is already configured in the code to use these images. Once you add the image files to `/public`, they will automatically be used when your website is shared!
