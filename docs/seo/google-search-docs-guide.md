# Google Search Guide for Nila Hospital (nilahospital.com)

> **Provenance warning.** The live fetch of the Google Search Central pages was blocked (WebFetch permission not granted), so this guide was written from established knowledge of those docs, not from a fresh read. Re-verify details marked ⚠ against the sources in the last section before relying on them (limits and policies change).
>
> The "Current state" notes come from reading `lib/seo.ts`, `app/robots.ts` and `app/sitemap.ts`.

Site: Next.js App Router, Namakkal, Tamil Nadu. Maternity, obstetrics, gynaecology and general medicine. It is a medical (YMYL) site, so the quality bar is high.

---

## 1. Site names
**Rules**
- Site names come from `WebSite` structured data on the **homepage** (domain-level root), plus `<title>`, `og:site_name` and the visible homepage heading as supporting signals.
- Use `name` (preferred) and optional `alternateName` (e.g. "Nila Hospital", "Nila Hospital Namakkal"). `url` must be the homepage.
- The name must be consistent across the homepage title, `og:site_name`, the structured data and the page content. Don't use different names on subpages.
- Google may take time to pick up changes. Request a recrawl of the homepage.

**Current state:** the `WebSite` schema uses `name: hospital.fullName`, while `siteName` in OG is "Nila Hospital". The two may differ.
**Action:** set `WebSite.name = "Nila Hospital"`, `alternateName = ["Nila Hospital Namakkal"]` and keep `og:site_name` identical.

## 2. Favicon in search
**Rules**
- Link a favicon from the homepage `<head>`: `<link rel="icon" href="/favicon.ico" sizes="any">` plus PNG/SVG variants.
- The icon must be square (1:1), a **multiple of 48px** (48x48, 96x96, 144x144, ...), at least 8x8, preferably ≥48px. SVG is allowed.
- One stable URL, no frequent changes. Googlebot and Googlebot-Image must be able to crawl both the homepage and the icon file (not blocked in robots.txt).
- The icon should be a recognizable brand mark. Google may hide inappropriate icons.
- Changes can take days to weeks to show.

**Current state:** commit 45dcc3e added favicon.ico, 48/96/192/512px PNGs, manifest and layout icon metadata. This is compliant. Verify `/favicon.ico` returns 200 and isn't blocked (robots only disallows `/private/`, so it is fine).

## 3. Title links
**Rules**
- Every page needs a unique, descriptive `<title>` that matches the page's main visible heading.
- Keep it concise (around 50-60 characters or about 600px; longer ones get truncated, not penalized).
- Do not stuff keywords, repeat the brand, or use boilerplate like "Home". Put the brand once, usually at the end: `Maternity Hospital in Namakkal | Nila Hospital`.
- Google may rewrite titles using the H1, the anchor text or other on-page text. Make the `<title>`, the `<h1>` and the visible site name consistent to minimize rewrites.
- Use `<title>` in the initial HTML (Next.js `metadata`).

**Current state:** commit a536d4d deduplicated the brand suffix. `buildPageMetadata` omits `title` for the homepage (relying on the layout default), so confirm the layout has a `title.template` and a good default.
**Action:** audit titles for length and uniqueness, and keep geo-modifiers ("Namakkal") natural.

## 4. Snippets
**Rules**
- Snippets are auto-generated from page content, and the meta description is used when it describes the page better than the on-page text.
- Write a unique `description` per page (about 120-160 characters), a factual summary with a clear next step (e.g. phone/appointment). No keyword lists.
- Controls: `nosnippet`, `max-snippet:[n]`, `max-image-preview:[none|standard|large]`, `max-video-preview:[n]`, and `data-nosnippet` on an HTML element to exclude part of a page. `noindex` removes the page entirely.
- Put the key answer text in indexable HTML (visible text). Don't hide it in images or behind interactions.
- Keep the default of allowing snippets and `max-image-preview:large` so pages can show large image previews.

**Current state:** every page passes `description` to `buildPageMetadata`. Good.

## 5. Structured data
**Rules**
- Prefer **JSON-LD** (Google's recommended format), placed in the page, rendered in the server HTML.
- Markup must describe content that is **visible** on the page, be accurate and not misleading, and be complete for required properties. Violations can cause a manual action or loss of rich results.
- Validate with the **Rich Results Test** and the **Schema Markup Validator**, and monitor the Search Console enhancement reports.
- Structured data enables eligibility, not a guarantee, of rich results.
- ⚠ **FAQPage:** since Aug 2023 FAQ rich results are shown only for well-known, authoritative government and health sites. A small hospital is unlikely to get them. The markup is harmless if it matches visible Q&A, but don't expect a rich result.
- ⚠ Review snippets (`aggregateRating`) must not be self-serving for your own organization. Do not add invented ratings.
- Useful types for this site: `Hospital`/`MedicalOrganization` (+ `LocalBusiness` properties: address, geo, openingHours, telephone), `Physician`, `MedicalWebPage`, `BreadcrumbList`, `WebSite`, `ContactPage`, `AboutPage`.

**Current state (`lib/seo.ts`):** already has `Hospital` with `@id`, address, geo, hours, `sameAs`; `Physician` with `medicalRegistrationNumber`; `BreadcrumbList`; `MedicalWebPage`; `FAQPage`; `Service`.
**Actions:**
- Make sure every FAQ in JSON-LD is visible on the page.
- `Hospital` is a subtype of both `MedicalOrganization` and `LocalBusiness`, so it is fine.
- Check that `priceRange: "$$"` is meaningful or drop it.
- Verify `amenityFeature` values (beds, OTs) against reality.
- `ItemList` for the doctors listing is fine. Add `image`/`url` per item if used for a carousel (carousels need a list of detail pages).

## 6. Google Images
**Rules**
- Use `<img>` (or `next/image`, which outputs `<img>`) with `src` that is crawlable. Avoid CSS background images for content images.
- Write descriptive **alt text** (what the image shows, in context), not keyword stuffing. Use descriptive file names (`dr-nithya-subashini-obstetrician.jpg`, not `IMG_6952.JPG`).
- Put images near relevant text, use supported formats (JPEG, PNG, WebP, AVIF, GIF, SVG, BMP), and use high-quality, responsive images (`srcset`/`sizes`).
- Stable image URLs. Don't block Googlebot-Image in robots.txt.
- Optional: image sitemap entries, and `ImageObject`/`image` in structured data.
- Patient photos need consent and privacy care (see section 8).

**Current state:** gallery uses `next/image` with improved alt text (commit 1b79917). The default OG image is `/images/gallery/521A6952.JPG` (camera-style filename).
**Actions:** rename or alias key images descriptively, and keep OG images at 1200x630.

## 7. Crawling & indexing
- `robots.txt` controls **crawling** only. A blocked URL can still be indexed from links, so use `noindex` (meta or `X-Robots-Tag`) to keep pages out of the index, and don't block a page you want `noindex` to be seen on.
- Don't block CSS, JS or images that Google needs to render the page.
- Each indexable page should return **200**, with a self-referencing **canonical** (absolute URL, one per page, matching the sitemap). Use 301 for permanent moves. Return real 404/410 for missing pages (avoid soft 404s).
- Use one hostname and protocol (https, and choose www or non-www), and redirect the others.
- Internal links must be real `<a href>` anchors with descriptive anchor text. Every page should be reachable from internal links.
- Use Search Console: URL Inspection (live test, request indexing), Page indexing report, Core Web Vitals, Enhancements.
- Google does not guarantee crawling or indexing of every page. Quality and uniqueness matter.

**Current state:** `app/robots.ts` allows `/`, disallows `/private/`, lists the sitemap. Canonicals set via `alternates.canonical`.
**Action:** confirm `metadataBase` is set to `https://nilahospital.com` in the root layout so relative canonicals resolve to absolute URLs.

## 8. Sitemap
- XML sitemap (50,000 URLs or 50MB uncompressed per file), absolute canonical URLs only, same host and protocol, served at `/sitemap.xml`, and referenced in robots.txt.
- Google **ignores `priority` and `changefreq`**. It uses `lastmod` only when it is consistently accurate. ⚠
- Include only indexable, 200, canonical URLs. Exclude noindex and redirected URLs.
- Submit in Search Console.

**Current state:** `app/sitemap.ts` sets `lastModified: new Date()` for every URL, so lastmod changes on every build/request. That teaches Google to distrust it.
**Action:** use real per-page modified dates (content change dates, e.g. from `data/doctors` or a constant per page), and drop `priority`/`changeFrequency` (optional, harmless).

## 9. JavaScript SEO (Next.js)
- Google renders JS with an evergreen Chromium, but rendering is queued and can fail. Put critical content, links, titles, descriptions, canonicals and JSON-LD in **server-rendered/static HTML** (Server Components, SSG/ISR). Next.js metadata and `<script type="application/ld+json">` rendered by Server Components satisfy this.
- Don't depend on user interaction (click, scroll, tabs, accordions that fetch on click) to load indexable content. Content in collapsed UI is fine if it is in the DOM.
- Use `<a href>` for navigation, not `onClick` + `router.push` only.
- Don't use URL fragments (`#`) for distinct content.
- Avoid client-only fetching of main content, and don't `noindex` in the HTML and then remove it with JS (Google may drop the page).
- Return proper HTTP status codes from route handlers and `notFound()`.
- Keep Core Web Vitals healthy (LCP image priority, no layout shift, small JS). Use `next/image` with `priority` for the hero image.

**Current state:** commit 06db80c added `use client` to interactive components. Check that content-bearing sections remain Server Components, and test with URL Inspection → View crawled page.

## 10. Helpful, people-first content & E-E-A-T (YMYL)
Medical content is YMYL, so Google holds it to the highest standard for Experience, Expertise, Authoritativeness and Trust (trust is the most important).
- **Who:** show real doctors with bylines, qualifications (MBBS, DGO), and registration (TNMC number) on the page and in `Physician` markup. Add a clear About page and contact details (address, phone, hours) on the site.
- **How:** explain how content was created and reviewed. Add "Medically reviewed by Dr. ..., date" and "last updated" on health articles.
- **Why:** content should exist to help patients, not just to rank. Avoid thin or near-duplicate location pages ("Namakkal" + service doorway pages). Each page needs unique, substantive information.
- Be accurate and avoid unsupported claims ("best", "guaranteed", outcomes). Cite reputable medical sources for clinical statements.
- Include safety info: emergency instructions, when to seek care, and a disclaimer that content isn't a substitute for consultation.
- Original photos of the real facility and staff build trust. Genuine patient reviews should come from Google Business Profile, not fabricated on-site ratings.
- Keep the Google Business Profile consistent with the site's name, address, phone (NAP) and hours.
- Avoid scaled low-value content and expired or auto-generated pages.

**Current state:** 7 service/location landing pages (maternity, gynaecology, obstetrics, women's health, women's hospital, general medicine, why-choose). Several overlap heavily in intent.
**Action:** differentiate them or consolidate. Add reviewer and last-updated lines.

---

## Prioritized action checklist
| # | Action | File |
|---|--------|------|
| 1 | Accurate per-page `lastModified` in the sitemap | `app/sitemap.ts` |
| 2 | Align `WebSite` name/alternateName with `og:site_name`; add `alternateName` | `lib/seo.ts`, `app/layout.tsx` |
| 3 | Confirm `metadataBase`, `title.template` and a good default title | `app/layout.tsx` |
| 4 | Make sure every FAQ JSON-LD item is visible on-page | page files using `FAQPage` |
| 5 | Differentiate or consolidate overlapping service pages | `app/*-namakkal/page.tsx` |
| 6 | Rename key images descriptively and use a proper OG image | `public/images`, `lib/seo.ts` |
| 7 | Add medical review/last-updated and E-E-A-T signals | doctor and service pages |
| 8 | Validate with Rich Results Test, URL Inspection and the Page indexing report | Search Console |

## Sources (re-verify ⚠ items here)
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://developers.google.com/search/docs/appearance/google-images
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
