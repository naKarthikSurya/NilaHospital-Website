# Brand Repositioning, Route Renaming & Content Expansion Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition Nila Hospital authentically as one of the best and most trusted maternity & women's specialty hospitals in Namakkal by updating legacy "best hospital" route URLs to search-friendly alternatives with 301 redirects, and significantly enriching in-depth clinical content across both main pages and specialty pages.

**Architecture:** Next.js 14 App Router static site with Tailwind CSS and TypeScript. Replace legacy routes `/why-we-are-best-hospital-in-namakkal` and `/best-women-hospital-in-namakkal` with `/why-choose-nila-hospital-namakkal` and `/womens-hospital-namakkal`, backed by 301 permanent redirects in `next.config.mjs` and `vercel.json`. Expand content across all 12 key pages with grounded, consultant-led medical explanations, patient care pathways, cross-interlinking, and localized FAQs.

**Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React, TypeScript.

**Spec:** User directives to position Nila Hospital specifically as a dedicated women's and maternity hospital (not a multi-specialty facility) and as "one of the best and most trusted hospitals in Namakkal" (never boastful "the best"). All commits authored by `nakarthiksurya <n.a.karthiksurya@gmail.com>`.

## Global Constraints

- Never use boastful or hyperbolic claims like "the best hospital in Namakkal". Use authentic phrases: "one of the best and most trusted maternity & women's hospitals in Namakkal", "consultant-led women's healthcare", "patient-first maternity care".
- Explicitly emphasize Nila Hospital's core focus: Obstetrics, Gynaecology, Maternity, and Women's Health (with general medicine outpatient support), not a full multi-specialty hospital.
- Ensure all legacy URLs 301-redirect to new routes so search engines and bookmarks never encounter a 404.
- All code must pass `npm run build` with zero TypeScript or lint errors.
- Every commit must be attributed to `nakarthiksurya <n.a.karthiksurya@gmail.com>`.

## Review Focus

1. Redirect integrity: Testing that `/why-we-are-best-hospital-in-namakkal` and `/best-women-hospital-in-namakkal` redirect cleanly to the new URLs.
2. Internal link consistency: Checking Header, Footer, Home, and Sitemap so zero broken links or old route references remain.
3. Content quality & tone: Verify the copy reads warmly, compassionately, and professionally, highlighting Dr. Nithya Subashini and Dr. Arul Ramasamy's direct patient care.
4. Schema & metadata accuracy: Updating canonical URLs, breadcrumb schemas, and `MedicalWebPage` schemas in `lib/seo.ts` to match new routes.
5. Mobile layout stability: Ensuring rich tables, lists, and FAQs display cleanly across all viewport widths.

---

### Task 1: Route Renaming & 301 Redirect Architecture

**Files:**
- Create: `app/why-choose-nila-hospital-namakkal/page.tsx`
- Create: `app/womens-hospital-namakkal/page.tsx`
- Delete: `app/why-we-are-best-hospital-in-namakkal/page.tsx`
- Delete: `app/best-women-hospital-in-namakkal/page.tsx`
- Modify: `next.config.mjs`
- Modify: `vercel.json`
- Modify: `app/sitemap.ts`
- Modify: `lib/seo.ts`
- Modify: `components/Footer.tsx`
- Modify: `components/Header.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Existing page implementations
- Produces: New clean route URLs with automatic 301 permanent redirects for backwards compatibility.

- [ ] **Step 1: Create new route pages and delete old directories**
  - Migrate content to `app/why-choose-nila-hospital-namakkal/page.tsx` and `app/womens-hospital-namakkal/page.tsx`.
  - Remove old directories `app/why-we-are-best-hospital-in-namakkal/` and `app/best-women-hospital-in-namakkal/`.

- [ ] **Step 2: Add 301 permanent redirects in `next.config.mjs` and `vercel.json`**
  - Map `/why-we-are-best-hospital-in-namakkal` -> `/why-choose-nila-hospital-namakkal`.
  - Map `/best-women-hospital-in-namakkal` -> `/womens-hospital-namakkal`.

- [ ] **Step 3: Update all references in `sitemap.ts`, `lib/seo.ts`, `Header.tsx`, `Footer.tsx`, and `app/page.tsx`**
  - Replace all occurrences of old paths with new route paths.
  - Update canonical tags and schema `@id` URLs in `lib/seo.ts`.

- [ ] **Step 4: Verify build succeeds**
  Run: `npm run build`
  Expected: Build passes with new static routes generated.

- [ ] **Step 5: Commit route renaming**
  ```bash
  git add -A
  git commit -m "feat(routing): rename legacy best-hospital routes to why-choose-nila and womens-hospital with 301 redirects"
  ```

---

### Task 2: Main Pages Content Refinement (Home, About, Services, Doctors, Contact)

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/services/page.tsx`
- Modify: `app/doctors/page.tsx`
- Modify: `app/doctors/[doctorId]/page.tsx`
- Modify: `app/contact/page.tsx`

**Interfaces:**
- Consumes: Hospital brand parameters and doctor data from `data/hospital.ts` and `data/doctors.ts`.
- Produces: Polished, authentic copy across the 5 primary site sections.

- [ ] **Step 1: Refine Home page (`app/page.tsx`)**
  - Hero headline: "Trusted Maternity & Gynaecology Hospital in Namakkal"
  - Subtitle: "One of Namakkal's most trusted consultant-led centers for women and mothers"
  - Emphasize direct senior consultant access and women-centered clinical focus.

- [ ] **Step 2: Refine About page (`app/about/page.tsx`)**
  - Ground the hospital's story: Dr. Nithya Subashini and Dr. Arul Ramasamy establishing a compassionate, unhurried hospital for women and families.
  - Highlight core values: personal consultation, medical ethics, patient dignity.

- [ ] **Step 3: Refine Services page (`app/services/page.tsx`)**
  - Clean up remaining WHO/NIH reference.
  - Group into clear clinical departments with rich summaries and deep links to specialty pages.

- [ ] **Step 4: Refine Doctors listing & profile pages (`app/doctors/page.tsx`, `app/doctors/[doctorId]/page.tsx`)**
  - Deepen narrative for Dr. Nithya Subashini (Senior Consultant Obstetrician & Gynaecologist) and Dr. Arul Ramasamy (Senior Anaesthesiologist).
  - Emphasize continuity of care and surgical safety.

- [ ] **Step 5: Refine Contact page (`app/contact/page.tsx`)**
  - Add clear emergency protocol guidance for labor/urgent cases, clinic timings, and location instructions.

- [ ] **Step 6: Verify build and commit**
  Run: `npm run build`
  ```bash
  git add app/page.tsx app/about/page.tsx app/services/page.tsx app/doctors/ app/contact/
  git commit -m "feat(content): refine main pages with authentic, consultant-led specialty positioning"
  ```

---

### Task 3: Content Expansion for Maternity & Obstetrics Pages

**Files:**
- Modify: `app/maternity-hospital-namakkal/page.tsx`
- Modify: `app/obstetrics-namakkal/page.tsx`

**Interfaces:**
- Consumes: Clinical procedures (normal delivery pathways, ANC screening, foetal monitoring, labor suites).
- Produces: 800+ words of structured, patient-friendly guidance on each page with dedicated FAQs.

- [ ] **Step 1: Expand Maternity Hospital Namakkal (`app/maternity-hospital-namakkal/page.tsx`)**
  - Natural normal delivery focus and supportive labor environments.
  - Pain-relief options and continuous maternal/fetal monitoring.
  - Postnatal care, breastfeeding assistance, and newborn health.
  - 4 specialized FAQs for expectant parents in Namakkal.

- [ ] **Step 2: Expand Obstetrics & Antenatal (`app/obstetrics-namakkal/page.tsx`)**
  - Trimester-by-trimester monitoring schedule.
  - High-risk pregnancy management (gestational diabetes, hypertension, twin pregnancy).
  - Advanced ultrasound evaluation and blood screening.
  - 4 specialized pregnancy FAQs.

- [ ] **Step 3: Verify build and commit**
  Run: `npm run build`
  ```bash
  git add app/maternity-hospital-namakkal/page.tsx app/obstetrics-namakkal/page.tsx
  git commit -m "feat(content): expand in-depth clinical guides for maternity and obstetrics"
  ```

---

### Task 4: Content Expansion for Gynaecology, Women's Health & General Medicine

**Files:**
- Modify: `app/gynaecology-namakkal/page.tsx`
- Modify: `app/womens-health-namakkal/page.tsx`
- Modify: `app/general-medicine-namakkal/page.tsx`

**Interfaces:**
- Consumes: Clinical details for women's disorders and general outpatient care.
- Produces: Comprehensive medical care guides with patient recovery advice and FAQs.

- [ ] **Step 1: Expand Gynaecology (`app/gynaecology-namakkal/page.tsx`)**
  - Detailed sections on uterine fibroid treatments, ovarian cysts, PCOS/PCOD hormonal balancing, and menstrual health.
  - Minimally invasive and laparoscopic surgery capabilities.
  - Gynaecology patient FAQs.

- [ ] **Step 2: Expand Women's Health (`app/womens-health-namakkal/page.tsx`)**
  - Comprehensive preventive screening guide: Pap smear, cervical cancer prevention, breast awareness.
  - Perimenopause, menopause symptoms, and bone health.
  - Preventive care FAQs.

- [ ] **Step 3: Expand General Medicine (`app/general-medicine-namakkal/page.tsx`)**
  - Outpatient care scope: seasonal fever clinic, diabetes & blood pressure monitoring, preventive family health.
  - Outpatient FAQs.

- [ ] **Step 4: Verify build and commit**
  Run: `npm run build`
  ```bash
  git add app/gynaecology-namakkal/page.tsx app/womens-health-namakkal/page.tsx app/general-medicine-namakkal/page.tsx
  git commit -m "feat(content): expand clinical guides for gynaecology, women's health, and general medicine"
  ```

---

### Task 5: Content Expansion for "Why Choose Us" & "Women's Hospital Guide"

**Files:**
- Modify: `app/why-choose-nila-hospital-namakkal/page.tsx`
- Modify: `app/womens-hospital-namakkal/page.tsx`

**Interfaces:**
- Consumes: Grounded trust pillars and women's hospital selection criteria.
- Produces: Patient decision guides establishing Nila Hospital as one of the best choices in Namakkal.

- [ ] **Step 1: Expand "Why Choose Nila Hospital" (`app/why-choose-nila-hospital-namakkal/page.tsx`)**
  - 6 grounded pillars of care: Direct Consultant Access, Unhurried Consultations, Patient Dignity, Modern Surgical Safety, Transparent Billing, 24/7 Maternity Emergency Readiness.
  - Clean up lingering WHO/NIH reference.
  - Add comparison of what families experience at Nila Hospital.

- [ ] **Step 2: Expand "Women's Hospital in Namakkal" (`app/womens-hospital-namakkal/page.tsx`)**
  - Why a dedicated women's hospital matters: specialized clinical environment, privacy, and continuous care.
  - Guidance on selecting a women's healthcare provider in Namakkal.

- [ ] **Step 3: Verify build and commit**
  Run: `npm run build`
  ```bash
  git add app/why-choose-nila-hospital-namakkal/page.tsx app/womens-hospital-namakkal/page.tsx
  git commit -m "feat(content): expand why-choose-nila and womens-hospital patient guides"
  ```

---

### Task 6: Final Verification & Production Build Audit

**Files:**
- Inspect: Full build output and git log

- [ ] **Step 1: Execute production build**
  Run: `npm run build`
  Expected: All 19 static routes compile with zero warnings or errors.

- [ ] **Step 2: Verify git status and author log**
  Run: `git status && git log -n 6 --oneline`
  Expected: Clean working tree, all commits attributed to `nakarthiksurya <n.a.karthiksurya@gmail.com>`.
