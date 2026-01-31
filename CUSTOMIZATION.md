# Customization Guide

This guide will help you customize the Thornton & Sons website to match your specific needs.

## Table of Contents

- [Brand Colors](#brand-colors)
- [Contact Information](#contact-information)
- [Content Updates](#content-updates)
- [Images](#images)
- [Services](#services)
- [Portfolio](#portfolio)
- [Forms](#forms)

## Brand Colors

### Location: `tailwind.config.ts`

Update the brand colors to match your company's branding:

```typescript
colors: {
  brand: {
    blue: '#2ea3f2',    // Primary accent - buttons, links, highlights
    dark: '#333333',    // Dark text - headings, body text
    gray: '#666666',    // Secondary text - descriptions, captions
    light: '#f8f9fa',   // Light backgrounds - sections
  },
}
```

## Contact Information

### Phone Number

Update in **3 files**:

1. **Navigation** (`components/navigation.tsx`):
```typescript
href="tel:+1234567890"  // Line 41 & 63
```

2. **Contact Section** (`components/contact-section.tsx`):
```typescript
href="tel:+1234567890"  // Line 49 & 51
```

3. **Footer** (`components/footer.tsx`):
```typescript
href="tel:+1234567890"  // Line 40
```

### Email Address

Update in **2 files**:

1. **Contact Section** (`components/contact-section.tsx`):
```typescript
href="mailto:info@thorntonandsons.com"  // Line 64
```

2. **Footer** (`components/footer.tsx`):
```typescript
href="mailto:info@thorntonandsons.com"  // Line 46
```

### Business Address

Update in **2 files**:

1. **Contact Section** (`components/contact-section.tsx`):
```typescript
// Lines 72-75
<p className="text-brand-gray">
  123 Craftsman Lane
  <br />
  Your City, ST 12345
</p>
```

2. **Footer** (`components/footer.tsx`):
```typescript
// Lines 36-38
<p>123 Craftsman Lane</p>
<p>Your City, ST 12345</p>
```

### Business Hours

Update in `components/contact-section.tsx` (Lines 79-84):
```typescript
<p className="text-brand-gray text-sm">
  Monday - Friday: 8:00 AM - 5:00 PM
  <br />
  Saturday: 9:00 AM - 2:00 PM
  <br />
  Sunday: Closed
</p>
```

## Content Updates

### Company Name

The company name "Thornton & Sons" appears in multiple places. Search and replace if needed:
- Navigation logo
- Footer
- Page metadata (app/layout.tsx)

### Hero Section

Update tagline in `components/hero-section.tsx` (Line 18):
```typescript
<h1>Craftsmanship Beyond Compare</h1>
```

Update description (Lines 20-23):
```typescript
<p>
  Premium custom cabinetry for discerning homeowners. From concept to completion,
  we bring your vision to life with unparalleled quality and attention to detail.
</p>
```

### About Section

Update company story in `components/about-section.tsx` (Lines 36-52):
```typescript
<p>
  For over two decades, Thornton & Sons has been the trusted name...
</p>
```

Update stats (Lines 9-14):
```typescript
const stats = [
  { icon: Clock, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '100%', label: 'Satisfaction Rate' },
  { icon: CheckCircle, value: '$30k-500k', label: 'Project Range' },
];
```

## Images

### Replace Placeholder Images

All images currently use `https://picsum.photos` as placeholders. To use your own:

1. **Add images to the public directory**:
```
public/
  images/
    hero-bg.jpg
    workshop.jpg
    portfolio/
      kitchen-1.jpg
      office-1.jpg
      etc.
```

2. **Update image sources**:

**Hero Section** (`components/hero-section.tsx`, Line 12):
```typescript
backgroundImage: 'url(/images/hero-bg.jpg)'
```

**About Section** (`components/about-section.tsx`, Line 21):
```typescript
src="/images/workshop.jpg"
```

**Portfolio Section** (`components/portfolio-section.tsx`, Line 61):
```typescript
src={`/images/portfolio/${project.image}`}
// Update projects array to include image property
```

### Image Optimization Tips

- Use WebP or AVIF format for best performance
- Recommended sizes:
  - Hero background: 1920x1080px
  - Portfolio images: 800x600px
  - About section: 800x600px
- Compress images before adding to project
- Next.js `<Image>` component handles optimization automatically

## Services

### Update Services

Edit `components/services-section.tsx` (Lines 6-41):

```typescript
const services = [
  {
    icon: Home,  // Choose from lucide-react icons
    title: 'Your Service Title',
    description: 'Your service description...',
  },
  // Add or remove services as needed
];
```

### Available Icons

Import icons from lucide-react:
```typescript
import { Home, Briefcase, DoorOpen, Hammer, Wrench, Ruler } from 'lucide-react';
```

Browse all available icons: https://lucide.dev/icons

## Portfolio

### Update Portfolio Projects

Edit `components/portfolio-section.tsx` (Lines 17-27):

```typescript
const projects = [
  {
    id: 1,
    category: 'kitchen',  // Must match category IDs
    title: 'Your Project Title',
    image: 'kitchen-1.jpg'  // Add this when using real images
  },
  // Add more projects
];
```

### Update Categories

Edit categories (Lines 9-14):
```typescript
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'office', label: 'Offices' },
  { id: 'living', label: 'Living Spaces' },
  // Add more categories if needed
];
```

## Forms

### Contact Form Backend Integration

When ready to integrate with a backend API, update `components/contact-section.tsx`:

1. Create API endpoint (example with Next.js API route):

Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email using your email service
  // (SendGrid, AWS SES, Nodemailer, etc.)

  return NextResponse.json({ success: true });
}
```

2. Update form submission handler (Line 21):
```typescript
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Thank you! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Error submitting form. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
}
```

### Form Fields

Add or modify fields in `components/contact-section.tsx` (Lines 95-175).

## SEO & Metadata

### Update Page Metadata

Edit `app/layout.tsx` (Lines 4-12):

```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description...',
  keywords: 'your, custom, keywords',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG Description',
    type: 'website',
  },
};
```

## Testing Your Changes

After making customizations:

1. **Development Mode**:
```bash
npm run dev
```
Visit http://localhost:3000

2. **Production Build**:
```bash
npm run build
```

3. **Check for errors**:
```bash
npm run lint
```

## Common Issues

### Text not updating
- Clear browser cache
- Restart dev server
- Check you're editing the correct file

### Images not showing
- Verify file path is correct
- Check image file exists in public directory
- Ensure Image component has `fill` prop or width/height

### Colors not changing
- Restart dev server after tailwind.config.ts changes
- Check you're using the correct Tailwind class names
- Clear .next cache: `rm -rf .next`

## Need Help?

If you need assistance with customization:
1. Check the README.md for general information
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS documentation: https://tailwindcss.com/docs
4. Review component comments in the code
