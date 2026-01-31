# Deployment Guide

This guide covers deploying your Thornton & Sons website to Cloudflare Pages or other hosting platforms.

## Cloudflare Pages Deployment

### Prerequisites

1. A Cloudflare account (free tier available)
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Wrangler CLI installed globally (optional, but recommended)

```bash
npm install -g wrangler
```

### Option 1: Deploy via Cloudflare Dashboard (Recommended for First Time)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Workers & Pages" > "Pages"

3. **Create a new project**
   - Click "Create a project"
   - Connect your Git repository
   - Select the Thornton-and-Sons repository

4. **Configure build settings**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variables: None required

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build to complete (usually 1-3 minutes)

### Option 2: Deploy via CLI

1. **Build the project**
```bash
npm run build
```

2. **Deploy using Wrangler** (if you have it installed)
```bash
wrangler pages deploy out --project-name=thornton-and-sons
```

### Custom Domain Setup

1. Go to your Cloudflare Pages project
2. Navigate to "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain (e.g., thorntonandsons.com)
5. Follow the DNS setup instructions

## Alternative Hosting Platforms

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Static Hosting (AWS S3, Azure, etc.)

Since this is a static export, you can host the `out/` directory on any static file hosting service:

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `out/` directory to your hosting service

## Environment Variables

Currently, no environment variables are required for production. When you add backend integration for the contact form, you'll need to add:

- `NEXT_PUBLIC_API_URL` - Your API endpoint URL

Configure these in your hosting platform's dashboard.

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form displays correctly (backend integration pending)
- [ ] Check mobile responsiveness
- [ ] Test all CTAs (Call buttons, contact form)
- [ ] Verify images load correctly
- [ ] Test smooth scroll navigation
- [ ] Check SEO metadata (view page source)
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate (usually automatic)

## Performance Monitoring

After deployment, monitor your site's performance:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check both mobile and desktop scores

2. **Cloudflare Analytics**
   - Available in your Cloudflare dashboard
   - Track visitors, bandwidth, and performance

3. **Google Search Console**
   - https://search.google.com/search-console
   - Monitor SEO performance and indexing

## Troubleshooting

### Build fails on Cloudflare Pages

- Ensure Node.js version is 18+
- Check that all dependencies are in package.json
- Verify build command is correct

### Images not loading

- Check that picsum.photos URLs are accessible
- Consider replacing with actual hosted images
- Verify image optimization settings in next.config.ts

### Form not submitting

- This is expected - backend integration is pending
- The form currently shows a browser alert
- See README.md for backend integration instructions

## Next Steps

1. Replace placeholder images with actual project photos
2. Update contact information (phone, email, address)
3. Set up contact form backend API
4. Add Google Analytics (if desired)
5. Configure SEO metadata for specific keywords
6. Add sitemap.xml and robots.txt
