This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Project Overview
A professional landing page for a crypto/economics business consultant. Built with modern React best practices, focusing on performance, accessibility, and maintainability.
Development Commands

npm run dev - Start development server with hot reload at http://localhost:5173
npm run build - Build for production (TypeScript check + Vite build)
npm run lint - Run ESLint to check code quality
npm run preview - Preview production build locally

Tech Stack

Frontend: React 19.1.1 with TypeScript (strict mode)
Build Tool: Vite 7.1.7 with HMR
Styling: Tailwind CSS 3.4.18
Component Library: Shadcn/ui (headless, accessible components)
Icons: Lucide React
Utilities: clsx, tailwind-merge, class-variance-authority

Architecture Principles

1. Component Structure

Keep components small and focused - Single responsibility principle
Split large components into logical sub-components
Reuse components wherever possible - DRY principle
Co-locate related files: Each major feature should have its own folder with components, types, and utilities

Example structure:
src/
├── components/
│ ├── ui/ # Shadcn components (Button, Card, etc.)
│ ├── layout/ # Layout components (Header, Footer, etc.)
│ ├── sections/ # Page sections (Hero, Features, etc.)
│ └── shared/ # Shared/reusable components
├── lib/
│ ├── utils.ts # Utility functions
│ └── constants.ts # App constants
├── types/
│ └── index.ts # TypeScript type definitions
└── data/
└── content.ts # Static content, data arrays 2. Styling Guidelines

Always use Tailwind utility classes - avoid custom CSS unless absolutely necessary
Define custom colors in tailwind.config.js for easy theme management
Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:, 2xl:) for all breakpoints
Mobile-first approach - design for mobile, then scale up
Use semantic color names in Tailwind config (e.g., primary, accent, crypto-gold)

3. Accessibility (A11Y)

Always include proper ARIA labels on interactive elements
Use semantic HTML (nav, main, section, article, etc.)
Ensure keyboard navigation works for all interactive elements
Maintain proper heading hierarchy (h1 → h2 → h3)
Sufficient color contrast - WCAG AA minimum
Focus states on all interactive elements

4. Responsiveness

Test on all breakpoints: mobile (320px+), tablet (768px+), desktop (1024px+)
Use Tailwind responsive utilities instead of media queries
Flexible layouts with flexbox/grid
Responsive typography using Tailwind's responsive text sizes
Touch-friendly targets on mobile (minimum 44×44px)

5. TypeScript Best Practices

Define interfaces for all component props
Use type inference where possible, explicit types where needed
Separate types into types/ directory for complex types
No any types - use unknown if type is truly unknown
Use const assertions for immutable data

6. Code Organization

types/ - All TypeScript interfaces and types
data/ - Static content, mock data, configuration objects
lib/utils.ts - Reusable utility functions
components/ui/ - Shadcn components only
components/sections/ - Landing page sections
components/shared/ - Reusable custom components

7. Asset Handling

Images: Use placeholders (placeholder.com or unsplash) until real assets provided
Always specify aspect ratios for images to prevent layout shift
Use WebP format recommendations for production
Icons: Lucide React library (already installed)
Notify user when real images/assets are needed

Current Configuration
Path Alias

@/ maps to ./src/ (use @/components/... for imports)

Tailwind Custom Theme

Configured with CSS variables for easy theming
Dark mode support via class strategy
Custom border radius via --radius variable

ESLint

TypeScript strict rules enabled
React hooks rules enforced
React Refresh for HMR

Design System for This Project
Color Palette (Define in tailwind.config.js)
javascriptcolors: {
primary: '#1e40af', // Professional blue
'crypto-gold': '#f59e0b', // Bitcoin/gold accent
'crypto-dark': '#0f172a', // Deep dark
'success-green': '#10b981',
// Add more as needed
}

```

### Typography Scale
- Headings: Bold, clear hierarchy
- Body: 16px base, readable line-height
- Use `font-semibold` and `font-bold` for emphasis

### Spacing
- Consistent padding/margin using Tailwind scale (4, 8, 12, 16, 24, 32, etc.)
- Large whitespace between sections for breathing room

## UI/UX Guidelines for Crypto Landing Page

### Must-Have Sections
1. **Hero** - Attention-grabbing headline, clear CTA, professional image/illustration
2. **Trust Indicators** - Logos, certifications, years of experience
3. **Services/Features** - What the consultant offers (crypto advisory, economic analysis, etc.)
4. **Social Proof** - Testimonials, case studies, results
5. **About/Credentials** - Expertise, background, qualifications
6. **CTA Section** - Clear call to action (contact, consultation)
7. **Footer** - Contact info, social links, legal

### Design Principles
- **Professional & trustworthy** - This is finance/economics
- **Modern but not flashy** - Elegant, clean design
- **Data visualization ready** - Charts, stats, metrics
- **High contrast** for readability
- **Clear CTAs** - Make actions obvious
- **Fast loading** - Optimize everything

### Icons & Imagery
- Use **Lucide icons** for UI elements (Check, TrendingUp, Shield, etc.)
- Use **placeholder images** initially:
  - Hero: Professional office/chart/bitcoin imagery
  - About: Professional headshot placeholder
  - Features: Icon-based (no images needed)
- **Notify user** about required images in comments

## Development Workflow

1. **Start with mobile design** - build mobile-first
2. **Create reusable components** - Button, Card, Section wrappers
3. **Extract data** to data files early
4. **Type everything** - interfaces for all props
5. **Test responsiveness** at each breakpoint
6. **Check accessibility** with keyboard navigation

## Notes
- No testing framework configured yet
- No state management library (use React useState/useContext as needed)
- No backend integration (static landing page)

```
