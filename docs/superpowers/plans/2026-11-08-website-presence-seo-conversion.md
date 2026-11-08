# Website Presence, Indexing & SEO Conversion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix site-wide page indexing bottlenecks (only 5 of 16+ pages currently indexed by Google), eliminate crawl discovery traps, establish robust internal linking architecture, refresh sitemap timestamps, and optimize patient conversion (calls and WhatsApp inquiries) on mobile.

**Architecture:** Next.js 14 App Router static site with Tailwind CSS and TypeScript. Eliminate orphan URLs by linking all specialty routes (`/maternity-hospital-namakkal`, `/gynaecology-namakkal`, `/obstetrics-namakkal`, `/womens-health-namakkal`, `/general-medicine-namakkal`, `/why-we-are-best-hospital-in-namakkal`, `/best-women-hospital-in-namakkal`, `/doctors/[doctorId]`) from Header, Footer, and Home. Update `sitemap.ts` to use current dynamic timestamps, configure structured FAQ/Doctor schemas, and deploy a 3-action mobile contact bar (Call, WhatsApp, Directions).

**Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React, TypeScript.

**Spec:** Google Search Console Performance, Coverage, Crawl Stats, and HTTPS Reports (`nilahospital.com-Coverage-2026-11-08.zip`, `nilahospital.com-Crawl-stats-2026-11-08.zip`, `nilahospital.com-Https-2026-11-08.zip`). Git author set to `nakarthiksurya <n.a.karthiksurya@gmail.com>`.

## Global Constraints

- Preserve all established brand styling (Nila Navy `#0B2038`, Nila Warm `#D97706`/amber-600, clean typography, responsive layout).
- All changes must pass `npm run build` with zero TypeScript or lint errors and generate all static pages.
- Every commit must use author `nakarthiksurya <n.a.karthiksurya@gmail.com>`.
- Keep copy focused on patient trust, warmth, and Nila Hospital's medical strengths without external corporate comparisons.

## GSC Diagnostic Findings Incorporated Into Plan

1. **Indexing Bottleneck:** Only 5 pages indexed (`/`, `/about`, `/contact`, `/doctors`, `/gynaecology-namakkal`). 11 specialty and doctor pages are unindexed because they lack internal anchor links and are treated as orphan pages.
2. **Crawl Trap (Discovery deficit):** 93.81% of Googlebot crawl requests are "Refresh" and only 6.19% are "Discovery". Googlebot repeatedly re-crawls known URLs because no in-page paths lead to deeper content.
3. **Stale Sitemap Signals:** `app/sitemap.ts` is hardcoded with `lastModified: '2026-07-12'` (months old), signalling to search engines that content has not been updated.
4. **Mobile Dominance:** 85%+ of actual clicks and 82% of impressions come from mobile devices.

## Review Focus

1. Internal link coverage: Every single route listed in `sitemap.ts` must have at least one crawlable `<Link>` from Header, Footer, or Home.
2. Sitemap date accuracy: All routes in `sitemap.ts` must use updated timestamps (`new Date()`).
3. Mobile layout stability: Mobile bottom bar must render seamlessly on 320px–420px viewports with zero overlap over main content.
4. WhatsApp click-to-chat URL: Properly formatted with country code `919655225192` and encoded message parameters.
5. Canonical and Schema consistency: Schema `@id` and canonical URLs must match canonical non-www HTTPS domain.

---

### Task 1: Author Credentials & Baseline Copy Commit

**Files:**
- Modify: `.git/config`
- Commit: `app/page.tsx`, `app/about/page.tsx`, `README.md`

**Interfaces:**
- Consumes: Local git workspace
- Produces: Clean git history attributed to `nakarthiksurya <n.a.karthiksurya@gmail.com>`

- [ ] **Step 1: Verify git author configuration**
  Run: `git config user.name && git config user.email`
  Expected: `nakarthiksurya` and `n.a.karthiksurya@gmail.com`

- [ ] **Step 2: Stage and commit the 3 initial copy changes**
  - Removed WHO citation in `app/page.tsx`
  - Removed brackets near MBBS, DGO in `app/page.tsx` and `README.md`
  - Removed corporate hospital comparisons in `app/page.tsx` and `app/about/page.tsx`
  Run:
  ```bash
  git add app/page.tsx app/about/page.tsx README.md
  git commit -m "fix(copy): update doctor credentials, remove WHO citation and corporate comparisons"
  ```

---

### Task 2: Sitemap & Crawl Discovery Optimization (Fix Stale 2026-07-12 Dates)

**Files:**
- Modify: `app/sitemap.ts`

**Interfaces:**
- Consumes: Current static and doctor routes
- Produces: Dynamic/fresh `lastmod` ISO timestamps so Googlebot switches from 93.8% Refresh to active Discovery crawling.

- [ ] **Step 1: Update `app/sitemap.ts` timestamps**
  - Replace hardcoded `'2026-07-12'` with `new Date()` (or deployment build date) for static routes.
  - Set priority hierarchy:
    - `/` (1.0)
    - `/maternity-hospital-namakkal`, `/gynaecology-namakkal`, `/obstetrics-namakkal`, `/womens-health-namakkal` (0.9)
    - `/services`, `/doctors`, `/about`, `/contact`, `/general-medicine-namakkal` (0.8)
    - `/why-we-are-best-hospital-in-namakkal`, `/best-women-hospital-in-namakkal` (0.8)
    - Doctor profiles `/doctors/[doctorId]` (0.7)

- [ ] **Step 2: Verify sitemap output**
  Run: `npm run build`
  Expected: `/sitemap.xml` generates cleanly with updated ISO dates.

- [ ] **Step 3: Commit sitemap update**
  ```bash
  git add app/sitemap.ts
  git commit -m "fix(seo): refresh sitemap timestamps and optimize crawl priority hierarchy"
  ```

---

### Task 3: Internal Linking Architecture in Footer & Header (Eliminate Orphan Pages)

**Files:**
- Modify: `components/Footer.tsx`
- Modify: `components/Header.tsx`

**Interfaces:**
- Consumes: All 11 currently unindexed specialty and doctor routes
- Produces: Crawlable navigation pathways linking Googlebot and users directly to target SEO pages.

- [ ] **Step 1: Add "Specialties & Treatments" column in `components/Footer.tsx`**
  - Column 1: Hospital Info, logo, social profiles
  - Column 2: Quick Links (Home, Services, Doctors, About Us, Contact)
  - Column 3: Specialties (Maternity Hospital Namakkal, Gynaecology Care, Obstetrics & Antenatal, Women's Health, General Medicine)
  - Column 4: Contact & Directions (Phone, Address, Hours)

- [ ] **Step 2: Add "Specialties" menu in `components/Header.tsx`**
  - In mobile sheet menu (`SheetContent`), add an expandable or clear list of all specialty landing pages.
  - In desktop navigation, add a dropdown or direct links to high-intent pages.

- [ ] **Step 3: Verify build and links**
  Run: `npm run build`
  Expected: Clean compilation with 0 broken links.

- [ ] **Step 4: Commit navigation improvements**
  ```bash
  git add components/Footer.tsx components/Header.tsx
  git commit -m "feat(seo): add internal linking for specialty landing pages in header and footer"
  ```

---

### Task 4: Home Page Deep Linking to High-Intent Specialty Pages

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Target routes `/maternity-hospital-namakkal`, `/gynaecology-namakkal`, `/doctors/nithya-subashini`
- Produces: Contextual in-content links passing page authority to deeper landing pages.

- [ ] **Step 1: Add contextual keyword links in narrative sections**
  - Link "Obstetrics & Gynaecology Care in Namakkal" to `/gynaecology-namakkal`.
  - Link "Maternal Excellence" and "The Nila Birth Experience" to `/maternity-hospital-namakkal`.
  - Link "Dr. Nithya Subashini, MBBS, DGO" directly to `/doctors/nithya-subashini`.

- [ ] **Step 2: Add a "Key Treatments & Specialties" grid on Home**
  - Visual cards linking to `/maternity-hospital-namakkal`, `/gynaecology-namakkal`, `/obstetrics-namakkal`, `/womens-health-namakkal`, `/general-medicine-namakkal`.

- [ ] **Step 3: Verify build**
  Run: `npm run build`
  Expected: Build succeeds with static page generation.

- [ ] **Step 4: Commit home page deep linking**
  ```bash
  git add app/page.tsx
  git commit -m "feat(seo): link home page sections to targeted specialty and doctor pages"
  ```

---

### Task 5: Mobile WhatsApp Quick-Inquiry Bar (DEFERRED)

> [!NOTE]
> Deferred per user request: "For Now Dont implement the Task5 other that proceed okay ?".
> We keep the existing `MobileBottomBar` (Call Now + Get Directions) unchanged.

- [x] **Deferred per user request**

---

### Task 6: Local E-E-A-T Trust & FAQ Expansion

**Files:**
- Modify: `app/page.tsx`
- Modify: `lib/seo.ts`

**Interfaces:**
- Consumes: `homePageSchemas`
- Produces: FAQ accordion on home page with matching `FAQPage` schema markup for Google Search rich snippets.

- [ ] **Step 1: Add FAQ Accordion section on Home Page**
  - Derived from top Namakkal patient search queries:
    1. *What are the consultation hours at Nila Hospital?*
    2. *Does Nila Hospital handle 24/7 emergency maternity cases?*
    3. *Where is Nila Hospital located in Namakkal?*
    4. *What gynaecological and pregnancy treatments are provided?*
  - Use Radix `Accordion` component from `@/components/ui/accordion`.

- [ ] **Step 2: Sync structured data in `lib/seo.ts`**
  - Add `FAQPage` schema to `homePageSchemas` so Google Search renders rich snippet dropdowns.

- [ ] **Step 3: Verify build**
  Run: `npm run build`
  Expected: Zero errors, valid schema injection.

- [ ] **Step 4: Commit local FAQ and schema improvements**
  ```bash
  git add app/page.tsx lib/seo.ts
  git commit -m "feat(seo): add FAQ section with structured FAQPage schema on home page"
  ```

---

### Task 7: Full Static Build Verification & Audit

**Files:**
- Inspect: All routes and build output

- [ ] **Step 1: Execute production build**
  Run: `npm run build`
  Expected: All 19+ routes compile with `○ (Static)` or `● (SSG)` with exit code 0.

- [ ] **Step 2: Review git status and log**
  Run: `git status && git log -n 5 --oneline`
  Expected: Clean working tree and well-structured commits attributed to `nakarthiksurya <n.a.karthiksurya@gmail.com>`.
