# Quick Start Guide

Get your Thornton & Sons website up and running in minutes!

## Development Server is Running!

Your website is currently accessible at:
- **Local:** http://localhost:3003
- **Network:** http://172.25.224.1:3003

Open either URL in your browser to see your website.

## First Steps

### 1. Update Contact Information (Required)

**Phone Number** - Update in 3 files:
- `components/navigation.tsx` (lines 41 & 63)
- `components/contact-section.tsx` (lines 49 & 51)
- `components/footer.tsx` (line 40)

Replace `tel:+1234567890` with your actual phone number.

**Email Address** - Update in 2 files:
- `components/contact-section.tsx` (line 64)
- `components/footer.tsx` (line 46)

Replace `info@thorntonandsons.com` with your actual email.

**Business Address** - Update in 2 files:
- `components/contact-section.tsx` (lines 72-75)
- `components/footer.tsx` (lines 36-38)

### 2. Replace Placeholder Images (Important)

Current images are from picsum.photos (random placeholders). To add your own:

1. Create an `images` folder in the `public` directory:
```bash
mkdir -p public/images/portfolio
```

2. Add your images to the appropriate folders:
   - `public/images/hero-bg.jpg` - Hero background (1920x1080px)
   - `public/images/workshop.jpg` - About section (800x600px)
   - `public/images/portfolio/` - Portfolio images (800x600px each)

3. Update image paths in components (see CUSTOMIZATION.md for details)

### 3. Customize Content (Recommended)

Edit these sections to match your business:

**Hero Tagline** - `components/hero-section.tsx`
- Change "Craftsmanship Beyond Compare" to your tagline

**About Section** - `components/about-section.tsx`
- Update company story (lines 36-52)
- Update stats (years in business, number of clients, etc.)

**Services** - `components/services-section.tsx`
- Modify service descriptions to match your offerings

## Development Commands

```bash
# Start development server (already running)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Project Structure Overview

```
thornton-and-sons/
├── app/
│   ├── layout.tsx          # Page metadata and layout
│   ├── page.tsx            # Main single-page site
│   ├── globals.css         # Global styles
│   └── icon.tsx            # Favicon
│
├── components/
│   ├── navigation.tsx      # Header with nav menu
│   ├── hero-section.tsx    # Hero section
│   ├── services-section.tsx # Services grid
│   ├── portfolio-section.tsx # Portfolio gallery
│   ├── about-section.tsx   # About section
│   ├── contact-section.tsx # Contact form
│   └── footer.tsx          # Footer
│
├── lib/
│   └── utils.ts            # Utility functions
│
├── public/                 # Static assets (add your images here)
│
├── CUSTOMIZATION.md        # Detailed customization guide
├── DEPLOYMENT.md           # Deployment instructions
└── README.md               # Full documentation
```

## What Works Right Now

- Responsive navigation with mobile menu
- Smooth scroll to sections
- Interactive portfolio filtering
- Contact form UI (ready for backend integration)
- Click-to-call buttons
- All sections responsive on mobile, tablet, and desktop

## What Needs Backend Integration

### Contact Form
The contact form currently shows a browser alert. To make it functional:

1. Create an API endpoint (or use a service like Formspree, EmailJS)
2. Update the form handler in `components/contact-section.tsx`
3. See CUSTOMIZATION.md for detailed instructions

## Deployment (When Ready)

### Quick Deploy to Cloudflare Pages

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main
```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Output directory: `out`
6. Deploy!

See DEPLOYMENT.md for detailed deployment instructions.

## Need Help?

- **Customization:** See CUSTOMIZATION.md
- **Deployment:** See DEPLOYMENT.md
- **General Info:** See README.md

## Performance Checklist

Before going live:
- [ ] Replace all placeholder images
- [ ] Update all contact information
- [ ] Test on mobile devices
- [ ] Test contact form submission
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain

## Stop Development Server

When you're done working, press `Ctrl+C` in the terminal to stop the dev server.

---

**Your website is ready to customize!** Start by updating the contact information and replacing placeholder images.
