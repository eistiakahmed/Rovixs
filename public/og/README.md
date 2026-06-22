# Open Graph Images for Rovixs

This directory contains Open Graph images for social media sharing and SEO optimization.

## Required Images

### Main Images
- `og-homepage.jpg` - Homepage OG image (1200x630px)
- `twitter-homepage.jpg` - Twitter card image for homepage (1200x630px)

### Page-Specific Images
- `og-about.jpg` - About page OG image (1200x630px)
- `twitter-about.jpg` - Twitter card image for About page (1200x630px)

- `og-pricing.jpg` - Pricing page OG image (1200x630px)
- `twitter-pricing.jpg` - Twitter card image for Pricing page (1200x630px)

- `og-contact.jpg` - Contact page OG image (1200x630px)
- `twitter-contact.jpg` - Twitter card image for Contact page (1200x630px)

- `og-blog.jpg` - Blog listing page OG image (1200x630px)
- `twitter-blog.jpg` - Twitter card image for Blog page (1200x630px)

### Service Page Images
Each service needs its own OG image in the `services/` subdirectory:
- `services/custom-software.jpg`
- `services/frontend-development.jpg`
- `services/backend-development.jpg`
- `services/web-applications.jpg`
- `services/mobile-apps.jpg`
- `services/saas-platforms.jpg`
- `services/database-solutions.jpg`
- `services/user-interfaces.jpg`
- `services/web-development.jpg`
- `services/cms-integration.jpg`
- `services/devops.jpg`
- `services/cloud-architecture.jpg`
- `services/database-optimization.jpg`
- `services/qa-testing.jpg`
- `services/devops-automation.jpg`

## Image Specifications

- **Dimensions**: 1200x630 pixels (recommended)
- **Format**: JPG or PNG
- **File Size**: Under 100KB for optimal loading
- **Quality**: High resolution with clear text
- **Brand Colors**: Purple (#7c3aed), Pink (#ec4899), Dark backgrounds
- **Typography**: Clear, readable fonts

## Design Guidelines

### Brand Elements
- Use Rovixs logo in top-left or centered
- Maintain consistent color scheme
- Include relevant service/category icons
- Use modern, clean design

### Text Content
- Include page title or service name
- Add tagline: "Building Digital Products That Matter"
- Include website URL: "rovixs.com"
- Keep text readable at small sizes

### Technical Requirements
- Use RGB color mode
- Export at 72 DPI
- Ensure good contrast ratios
- Test on different social platforms

## Quick Generation

You can generate these images using:

### Option 1: Online Tools
- **Canva**: Use their social media template
- **Figma**: Create custom designs with export
- **Adobe Express**: Quick OG image generator

### Option 2: Code Generation
Use the included Next.js API route at `/api/og/[slug]` for dynamic generation.

### Option 3: AI Image Generators
- **Midjourney**: `/imagine prompt: modern software company OG image, purple gradient, 1200x630`
- **DALL-E**: Generate with specific dimensions
- **Stable Diffusion**: Local generation with control

## Testing Your Images

Before deploying, test your images on:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Example Design Template

```
┌─────────────────────────────────────────────┐
│ ROVIXS          Building Digital Products    │
│ Logo            That Matter                 │
│                                              │
│                                              │
│          [Service Name / Page Title]         │
│                                              │
│                                              │
│                                              │
│                  rovixs.com                  │
└─────────────────────────────────────────────┘
```

## File Naming Convention

- Use lowercase with hyphens: `og-page-name.jpg`
- Twitter variants: `twitter-page-name.jpg`
- Service images: `og/services/service-name.jpg`
- Blog images: `blog/article-slug.jpg`

## Automation

For automated image generation, consider:

1. **@vercel/og**: Edge-based dynamic OG image generation
2. **Sharp**: Node.js image processing library
3. **Puppeteer**: Headless browser screenshots
4. **Canvas API**: Programmatic image creation

## Notes

- Images should be placed in the `/public` directory
- Update references in metadata files when adding new images
- Test image loading performance
- Monitor image CDN usage and costs
- Keep backup of original design files