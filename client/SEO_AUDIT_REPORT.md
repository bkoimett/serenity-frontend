# SEO Audit — Current State

**Project:** The Serenity Place (Rehab/Care Facility Website)  
**Stack:** React/Vite (CSR SPA) + Express/MongoDB backend  
**Audit Date:** 2026-07-01

---

## 1. Rendering Strategy

### ✅ What's already in place
- Uses React 18.2.0 with Vite 7.1.7 as the build tool
- React Router DOM 7.9.5 for client-side routing
- Clean URL structure with React Router (`/about`, `/blog`, `/gallery`, `/blog/:id`)
- Mobile-responsive design with Tailwind CSS

### ❌ What's missing
- **No SSR/SSG implementation** - This is a pure Client-Side Rendered (CSR) Single Page Application
- Content is NOT visible in initial HTML (view-source) - only a `<div id="root"></div>` exists in `index.html`
- All content including meta tags, structured data, and page content is rendered only after JavaScript executes
- No prerendering or static site generation for SEO-critical content

### ⚠️ What's present but misconfigured or weak
- The `vercel.json` uses `@vercel/static-build` which serves static files, but without SSR the content remains JavaScript-dependent
- Search engines can index CSR content but with significant delays and potential missed content

---

## 2. Meta Tags & Head Management

### ✅ What's already in place
- Custom `useSEO` hook (`src/hooks/useSEO.jsx`) manages dynamic meta tags
- Each public page has a `<SEO>` component with title, description, keywords, and ogImage props
- Viewport meta tag present in `index.html`
- Charset declaration (`UTF-8`) present
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`, `og:url`, `og:site_name`
- Canonical link tag support in the SEO hook

### ❌ What's missing
- **No Twitter Card tags** (twitter:card, twitter:title, twitter:description, etc.)
- **No robots meta tag** on public pages (only in robots.txt)
- **No language alternate tags** (hreflang) for international SEO
- **No theme-color or mobile-specific meta tags**
- **No manifest.json** for PWA support
- The static `index.html` has a generic title "The Serenity Place" that gets overridden by JS

### ⚠️ What's present but misconfigured or weak
- Meta descriptions are set via JavaScript hook, not in initial HTML - crawlers may not see them immediately
- The `og:image` URLs point to a Cloudinary collection URL that may not be a direct image link
- No verification that meta tags are properly escaped or sanitized

---

## 3. Structured Data (Schema.org)

### ✅ What's already in place
- `OrganizationSchema` component (`src/components/seo/StructuredData.jsx`) with `RehabilitationCenter` type
- Includes NAP (Name, Address, Phone) data:
  - Name: "Serenity Place"
  - Address: Nairobi, Kenya
  - Phone: +254-722-970951
  - Geo coordinates for Nairobi
  - Opening hours: 24/7
  - Social media links (Facebook, Instagram, X/Twitter, TikTok)
- `ArticleSchema` component for blog posts
- Schema is injected via `useEffect` (client-side only)

### ❌ What's missing
- **No BreadcrumbList schema** for navigation structure
- **No FAQPage schema** (no FAQ content found on pages)
- **No Review/AggregateRating schema** (no testimonials/reviews structured data)
- **No LocalBusiness schema** (RehabilitationCenter is used, but LocalBusiness with proper NAP would be more standard)
- **No WebPage schema** on individual pages (only on Home page)
- Schema is client-side rendered - not in initial HTML

### ⚠️ What's present but misconfigured or weak
- Schema.org data is injected via `useEffect` after page load, not server-side
- The Organization schema address is incomplete (missing full street address)
- No `priceRange` or `paymentAccepted` fields in the business schema

---

## 4. Technical Files

### ✅ What's already in place
- `robots.txt` exists at `public/robots.txt`
- Disallows `/admin/` and `/api/` paths
- References sitemap at `https://theserenityplace.org/sitemap.xml`
- `sitemap.xml` exists with static pages (/, /about, /blog, /gallery)
- Sitemap generation script exists (`src/utils/generateSitemap.js`)

### ❌ What's missing
- **No noindex meta tag on admin pages** - relies solely on robots.txt
- **Sitemap doesn't include dynamic blog post URLs** (`/blog/:id` routes)
- **No sitemap index for multiple sitemaps**
- **No dynamic sitemap generation** - the script has commented-out code for fetching blog posts
- **No Google Search Console verification tag or file**
- **No Bing/Yandex verification**

### ⚠️ What's present but misconfigured or weak
- `robots.txt` allows everything with `Allow: /` which is redundant since that's the default
- Sitemap dates are hardcoded to `2024-01-15` - not dynamically updated
- Admin routes are blocked via robots.txt but the `/admin/login` page is still publicly accessible (just redirects to login form)

---

## 5. URL Structure

### ✅ What's already in place
- Clean, human-readable URLs:
  - `/` (Home)
  - `/about` (About)
  - `/blog` (Blog list)
  - `/blog/:id` (Individual blog posts)
  - `/gallery` (Gallery)
  - `/admin/login` (Admin login)
- Consistent URL patterns without query parameters for main pages

### ❌ What's missing
- **No trailing slash handling** - could create duplicate content issues
- **No www to non-www redirect** configuration
- **No HTTP to HTTPS redirect** configuration (relies on hosting)
- **No URL parameter handling** for potential duplicate content
- **No custom 404 page** with proper SEO (current 404 is basic)

### ⚠️ What's present but misconfigured or weak
- Blog posts use MongoDB `_id` (long alphanumeric strings) instead of SEO-friendly slugs
- URLs like `/blog/65a1b2c3d4e5f67890abcdef` are not user-friendly or keyword-rich

---

## 6. Performance Signals (affects SEO ranking)

### ✅ What's already in place
- Images use `loading="lazy"` attribute
- Images served from Cloudinary (CDN)
- Tailwind CSS for optimized styling
- Framer Motion with `useReducedMotion` for accessibility

### ❌ What's missing
- **No explicit width/height on images** - potential layout shift issues
- **No image format optimization** - no WebP or AVIF usage detected
- **No service worker or PWA implementation**
- **No preconnect or dns-prefetch** for external domains
- **No critical CSS inlining**
- **No bundle analysis** to identify large dependencies

### ⚠️ What's present but misconfigured or weak
- Large dependencies loaded: `framer-motion`, `quill`, `react-quill`, `styled-components`
- No code splitting visible in the vite config
- The `vercel.json` has caching for `/assets/` but not for HTML
- No image optimization pipeline (Vite's built-in image handling not configured)

---

## 7. Content Structure & On-Page SEO

### ✅ What's already in place
- **Home page** (`/`) has substantial content with Hero, Services, BlogPreview, Gallery, Contact sections
- **About page** (`/about`) has ~400+ lines of content with:
  - Proper H1 heading ("About Serenity Place")
  - H2 headings for sections (Mission & Vision, Core Values, Treatment Approach, Team)
  - Descriptive content about services and team
- **Blog page** (`/blog`) has:
  - H1 heading ("Recovery Insights")
  - Search functionality
  - Blog cards with proper structure
- **Gallery page** (`/gallery`) has:
  - H1 heading ("Our Gallery")
  - Category filtering
  - Image alt text from database

### ❌ What's missing
- **No dedicated Contact page** - contact form is on home page via anchor link
- **No dedicated Services page** - services are a component on home page
- **No testimonials or reviews section** on public pages
- **No FAQ section** for common questions
- **No location-specific landing pages** (e.g., "Nairobi rehab center")
- **No service-specific pages** (e.g., "alcohol treatment", "drug rehab")
- **No author bylines on blog posts** (structured data exists but not visible author info)
- **No date published/updated visible** on blog post list

### ⚠️ What's present but misconfigured or weak
- Blog post pages (`/blog/:id`) don't have their own SEO component - missing page-specific meta tags
- The `BlogPost` component doesn't use the `ArticleSchema` that exists in the codebase
- Some images use placeholder URLs (`/api/placeholder/200/200`) instead of real images
- Content depth on Gallery page is minimal (just images, no descriptive text)

---

## 8. Accessibility (overlaps with SEO)

### ✅ What's already in place
- Semantic HTML elements used: `<header>`, `<nav>`, `<main>`, `<footer>` in Layout
- Form labels present in ContactForm (proper `htmlFor` association)
- `aria-label` on interactive elements (mobile menu button)
- Focus states and keyboard navigation support
- Reduced motion support in Hero component

### ❌ What's missing
- **No skip-to-content link** for keyboard users
- **No ARIA landmarks** beyond basic semantic elements
- **No alt text on logo images** in Header/Footer (only in About page team images)
- **No language attribute on html element** beyond `lang="en"` in index.html
- **No form error announcements** for screen readers
- **No breadcrumb navigation** (both for UX and SEO)

### ⚠️ What's present but misconfigured or weak
- The mobile menu doesn't have proper ARIA attributes for expanded/collapsed state
- Some decorative elements have `aria-hidden="true"` but could be more consistent
- Color contrast on the gradient backgrounds (blue-600 to teal-600) may be an issue for text readability

---

## 9. Analytics & Tracking

### ✅ What's already in place
- Google Analytics component exists (`src/components/analytics/GoogleAnalytics.jsx`)
- `useGoogleAnalytics` hook for page view tracking
- Event tracking functions available

### ❌ What's missing
- **GA4 Measurement ID is placeholder** (`G-XXXXXXXXXX`) - not configured
- **No Google Search Console verification**
- **No Google Tag Manager** implementation
- **No conversion tracking** for contact form submissions
- **No structured data testing** in build process

### ⚠️ What's present but misconfigured or weak
- Analytics is client-side only - no server-side tracking
- The GA initialization uses a placeholder ID that needs to be replaced

---

## 10. Mobile & Indexability Sanity Check

### ✅ What's already in place
- Responsive design with Tailwind CSS breakpoints
- Mobile menu implementation
- Viewport meta tag with proper scaling
- Mobile-friendly navigation

### ❌ What's missing
- **No explicit noindex check** on public pages (could be accidentally left from staging)
- **No HTTPS enforcement** in the codebase (relies on hosting)
- **No mobile-specific meta tags** (theme-color, apple-mobile-web-app-capable)
- **No AMP (Accelerated Mobile Pages)** implementation

### ⚠️ What's present but misconfigured or weak
- The viewport has `maximum-scale=1.0, user-scalable=no` which can hurt accessibility
- No PWA manifest for "Add to Home Screen" capability

---

## Prioritized Summary: Top 5 SEO Gaps (Ranked by Impact)

| Rank | Issue | Impact | Notes |
|------|-------|--------|-------|
| **1** | **Pure Client-Side Rendering (CSR)** | **Critical** | Search engines can index CSR content but with significant delays. Content is not visible in initial HTML, meta tags are injected via JavaScript. This is the single biggest SEO limitation. |
| **2** | **Missing Blog Post SEO** | **High** | Individual blog posts (`/blog/:id`) lack page-specific SEO components. The `ArticleSchema` exists but isn't used. No dynamic meta tags for blog content. |
| **3** | **Incomplete Sitemap** | **High** | Sitemap only includes static pages. Dynamic blog posts are not included, meaning new content won't be discovered by search engines. |
| **4** | **No Twitter Card Tags** | **Medium** | Missing `twitter:card`, `twitter:title`, `twitter:description` tags reduces social sharing effectiveness. |
| **5** | **Admin Pages Lack noindex** | **Medium** | Admin routes rely solely on `robots.txt` blocking. Should have explicit `noindex, nofollow` meta tags as a backup. |

---

## Additional Observations

### Positive Findings
- Good use of structured data with RehabilitationCenter schema
- Contact information is comprehensive (phone, email, physical address)
- Content is location-specific (Nairobi, Kenya) which is good for local SEO
- Blog section exists for content marketing
- Gallery provides visual content

### Recommendations for Consideration
1. **Implement SSR or SSG** - Consider migrating to Next.js or adding prerendering
2. **Add dynamic sitemap generation** - Include blog posts in sitemap
3. **Add Twitter Card meta tags** to the SEO hook
4. **Create dedicated service pages** for better keyword targeting
5. **Add testimonials/reviews** with proper schema markup
6. **Implement proper image optimization** with WebP format and explicit dimensions
7. **Add a Contact page** separate from the home page
8. **Configure GA4 with real Measurement ID**