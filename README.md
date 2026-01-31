# Thornton & Sons Custom Cabinetry

A professional single-page Next.js website for Thornton and Sons, a high-end custom cabinetry business specializing in custom cabinets, trim packages, and custom doors for luxury projects ($30,000 - $500,000 range).

## Features

- **Modern Stack**: Next.js 15+ with App Router, TypeScript, and Tailwind CSS
- **Performance Optimized**: Server-side rendering, image optimization, and Core Web Vitals focus
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Cloudflare Pages Ready**: Configured for deployment with @cloudflare/next-on-pages
- **Professional Design**: Clean, sophisticated UI with high-end positioning
- **Interactive Components**: Smooth scroll navigation, portfolio filtering, contact form

## Sections

1. **Hero** - Full-width hero with compelling tagline and CTAs
2. **Services** - Six service categories with icons and descriptions
3. **Portfolio** - Filterable image gallery with category navigation
4. **About** - Company story with stats and workshop imagery
5. **Contact** - Full contact form with click-to-call button
6. **Footer** - Business information and quick links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Cloudflare Pages

This project is configured for Cloudflare Pages deployment:

1. Build for Cloudflare Pages:
```bash
npm run pages:build
```

2. Deploy (requires Cloudflare account and wrangler CLI):
```bash
npm run pages:deploy
```

### Alternative: Static Export

The project uses `output: 'export'` configuration, so you can also deploy to any static hosting:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Project Structure

```
thornton-and-sons/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main single-page application
├── components/
│   ├── navigation.tsx       # Sticky navigation with mobile menu
│   ├── hero-section.tsx     # Hero section with CTA
│   ├── services-section.tsx # Services grid
│   ├── portfolio-section.tsx # Filterable portfolio gallery
│   ├── about-section.tsx    # About section with stats
│   ├── contact-section.tsx  # Contact form
│   └── footer.tsx           # Footer with links
├── lib/
│   └── utils.ts             # Utility functions (cn for class merging)
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the brand colors:

```typescript
colors: {
  brand: {
    blue: '#2ea3f2',    // Primary accent color
    dark: '#333333',    // Dark text
    gray: '#666666',    // Secondary text
    light: '#f8f9fa',   // Light backgrounds
  },
}
```

### Contact Information

Update contact details in:
- `components/contact-section.tsx` - Phone, email, address
- `components/footer.tsx` - Footer contact info
- `components/navigation.tsx` - Phone number in nav

### Images

Replace placeholder images (picsum.photos) with actual project photos:
- Update image URLs in each section component
- Place images in the `public/` directory
- Use Next.js `<Image>` component for optimization

### Form Integration

The contact form is ready for backend integration. Update `handleSubmit` in `components/contact-section.tsx`:

```typescript
// TODO: Replace with your API endpoint
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## Technologies

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (@cloudflare/next-on-pages)
- **Build Tool**: Turbopack (via Next.js)

## Performance

This site is optimized for Core Web Vitals:

- **Server Components**: Most components are Server Components by default
- **Image Optimization**: Using Next.js Image component with proper sizing
- **Code Splitting**: Automatic route-based code splitting
- **Smooth Scrolling**: CSS-based smooth scroll for navigation
- **Lazy Loading**: Portfolio images load on-demand

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Private - All rights reserved by Thornton & Sons Custom Cabinetry

## Support

For questions or issues, contact the development team.
