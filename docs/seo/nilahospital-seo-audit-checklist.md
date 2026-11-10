# Nila Hospital Google Search SEO audit checklist

Audit date: 2026-11-10  
Scope: `app/`, `lib/seo.ts`, `components/`, `data/`, `public/`, `next.config.mjs`, and the 14 URLs emitted by `app/sitemap.ts`  
Method: source review plus inspection of the existing static HTML under `.next/server/app` (build timestamp 2026-11-10). No new build, Lighthouse run, Search Console export, CrUX data, or live URL inspection was available in this read-only audit.

## Executive verdict

There is no repository-level crawl block and no orphan among the 14 sitemap URLs. Canonicals, robots directives, static generation, and the sitemap are broadly sound. Every URL has exactly one rendered H1, and all rendered content images have an `alt` attribute.

The highest-value fixes are:

1. Align the preferred site name across `WebSite.name`, `og:site_name`, titles, visible branding, and organization markup; add `alternateName`.
2. Repair Schema.org range/domain errors in `Hospital` and `Physician`, then improve `MedicalWebPage` entity relationships.
3. Add visible breadcrumbs and `BreadcrumbList` markup to the six non-home URLs that currently lack it.
4. Strengthen the `/doctors/arul-ramasamy` path and the few pages that depend almost entirely on sitewide navigation.
5. Correct heading skips on seven URLs and add intrinsic dimensions to raw logo images.
6. Replace synthetic sitemap `lastModified` dates with real significant-update dates.

Nothing in this code proves that internal linking *caused* a Search Console status of “Discovered – currently not indexed.” Google says indexing is not guaranteed, and every important page only needs at least one crawlable internal link. The anaesthesiologist profile is the weakest path, but content quality, duplication, crawl scheduling, and site authority must also be checked in Search Console and URL Inspection.

## Priority checklist

### P1 — fix first

- [ ] **Choose one preferred site name and make every signal agree.** `WebSite.name` and `Hospital.name` currently use “Nila Hospital Namakkal,” while `og:site_name`, title templates, header/footer branding, and `hospital.name` use “Nila Hospital.” Confirm the exact real-world/Google Business Profile name. A sensible implementation is `name: "Nila Hospital"` and `alternateName: ["Nila Hospital Namakkal"]` if that matches the business identity. Keep `WebSite` on the homepage only. Sources: `lib/seo.ts:121-128`, `app/layout.tsx:28-31`, `app/layout.tsx:51`, `data/hospital.ts:2-3`.
- [ ] **Replace invalid `medicalSpecialty` values.** `ObstetricAndGynecologic` and `GeneralMedicine` are not members of Schema.org’s `MedicalSpecialty` enumeration. Use full enumeration URLs such as `https://schema.org/Obstetric`, `https://schema.org/Gynecologic`, `https://schema.org/Anesthesia`, and `https://schema.org/PrimaryCare`. This affects the hospital and both physician nodes. Source: `lib/seo.ts:87`, `lib/seo.ts:560-570`, `lib/seo.ts:586`.
- [ ] **Replace string-valued `Hospital.availableService`.** Schema.org expects `MedicalProcedure`, `MedicalTest`, or `MedicalTherapy`, not plain strings. Model accurate typed nodes, or move general service names to an `OfferCatalog`/`makesOffer` relationship and omit `availableService` values that cannot be typed truthfully. Source: `lib/seo.ts:88-94`.
- [ ] **Repair physician properties.** The emitted `jobTitle` and `qualifications` properties do not belong on Schema.org’s organization-like `Physician` type; `medicalRegistrationNumber` is not a Schema.org property. Prefer current `IndividualPhysician`, `occupationalCategory`, `hasCredential`/`hasCertification`, and `identifier: { "@type": "PropertyValue", "propertyID": "TNMC registration number", "value": "…" }`. Only emit verified registration details. Sources: `lib/seo.ts:575-591`, `data/doctors.ts:46-69`.
- [ ] **Never use the hospital logo as a doctor image.** Both doctors currently have no photo, yet their structured data emits the white hospital logo as `image`. Google requires structured-data images to represent the marked-up content. Omit `image` until an actual doctor photograph is available. Source: `lib/seo.ts:580`, `data/doctors.ts:50`, `data/doctors.ts:68`.
- [ ] **Use a Google-safe organization logo.** `defaultSchema.logo` points to `NHLogo_NB.svg`, whose artwork is white on transparent and may disappear on a white Search surface. Use a crawlable, brand-representative logo that remains visible on white and is at least 112×112 pixels. Source: `lib/seo.ts:79`; asset: `public/assets/NHLogo_NB.svg`.
- [ ] **Correct sitemap freshness signals.** `new Date()` marks all 14 URLs modified at every build even when content did not change. Google only uses `<lastmod>` when it is consistently accurate and ignores `<priority>` and `<changefreq>`. Use per-page significant-update dates (doctor data already has `lastModified`) or omit `lastModified` until reliable. Source: `app/sitemap.ts:6`, `app/sitemap.ts:23`, `app/sitemap.ts:30`.

### P2 — strengthen discovery and semantics

- [ ] **Add the missing breadcrumb coverage.** The current helper is valid and the seven specialty pages include two required `ListItem`s. Add visible breadcrumbs plus matching `BreadcrumbList` to `/services`, `/doctors`, `/doctors/nithya-subashini`, `/doctors/arul-ramasamy`, `/about`, and `/contact`. The homepage does not need one. Consider `Home > Doctors > Doctor` for profiles and `Home > Services > Specialty` after the Services hub links to those pages. Sources: `lib/seo.ts:594-608` and the page schema definitions.
- [ ] **Strengthen `/doctors/arul-ramasamy`.** It has crawlable incoming links from `/doctors` and `/maternity-hospital-namakkal`, but none from the homepage, header, or footer. Add a homepage/team link or a small “Our specialists” block, and cross-link from relevant surgery/anaesthesia content. This is the weakest of the 14 URLs, though it is not orphaned.
- [ ] **Add contextual homepage links to `/womens-hospital-namakkal` and `/doctors`.** Both are in sitewide navigation, but neither receives a main-content homepage link. `/about` and `/contact` also rely mostly on header/footer links; add them only where they help users rather than creating a link dump.
- [ ] **Make specialty header links present in initial HTML.** The desktop dropdown and mobile sheet do not render their specialty anchors in the closed, server-rendered header. Google will not interact with menus. The crawlable footer currently prevents orphaning, but a persistent HTML specialty nav or server-rendered disclosure would make discovery more robust. Sources: `components/Header.tsx:26-34`, `components/Header.tsx:88-110`, `components/Header.tsx:174-197`.
- [ ] **Give each `MedicalWebPage` a real page entity.** Add a stable page `@id`, `url`, `inLanguage`, accurate `about` medical topic, `publisher`/`provider` pointing to the hospital, and a relationship to its breadcrumb. Add `reviewedBy`, `lastReviewed`, `dateModified`, `medicalAudience`, and `specialty` only when true and maintained. The current `about: { "@id": HOSPITAL_ID }` says each page’s subject is the hospital rather than the medical service/topic. Sources: `lib/seo.ts:214-224` and the seven specialty schema blocks.
- [ ] **Consolidate JSON-LD into connected `@graph` nodes.** `defaultSchema` is emitted on every URL by the root layout and is emitted a second time on the homepage inside `homePageSchemas`. The shared `@id` makes the duplicate mergeable, but one connected homepage graph is clearer and easier to validate. Sources: `app/layout.tsx:92-97`, `lib/seo.ts:121-176`, `app/page.tsx:126-130`.
- [ ] **Use one source of truth for FAQ content and JSON-LD.** The markup has all Google-required `FAQPage`/`Question`/`Answer` properties and corresponding visible FAQs, but the schema and accordion data are duplicated and several answers differ in wording/detail. Generate `mainEntity` from the visible FAQ arrays so they cannot drift. Google now shows FAQ rich results only for well-known, authoritative government and health sites, so valid markup is not a display guarantee.
- [ ] **Add `@id` links for page-level entities.** Give `WebSite`, each `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, and physician a stable fragment identifier, then connect them with `isPartOf`, `mainEntity`, `about`, `breadcrumb`, `publisher`, and `mainEntityOfPage` where semantically correct.

### P2 — headings and images

- [ ] **Change direct H1→H3 skips to H2** on `/contact` (`Address`, `Phone Numbers`, `Visiting Hours`, `Find Us on the Map`) and both doctor profiles (`About the Doctor` and info-card headings). Sources: `app/contact/page.tsx:97-156`, `app/doctors/[doctorId]/page.tsx:132-142`.
- [ ] **Change direct H2→H4 card headings to H3** on `/maternity-hospital-namakkal`, `/womens-health-namakkal`, `/why-choose-nila-hospital-namakkal`, and `/womens-hospital-namakkal`. Sources: `app/maternity-hospital-namakkal/page.tsx:96-114`, `app/womens-health-namakkal/page.tsx:97-112`, `app/why-choose-nila-hospital-namakkal/page.tsx:155-186`, `app/womens-hospital-namakkal/page.tsx:84-115`.
- [ ] **Normalize footer headings.** The four sitewide footer labels are H4s regardless of the page outline. Use H2s styled like the current labels, or non-heading text if they do not introduce meaningful sections. Source: `components/Footer.tsx:58`, `:78`, `:92`, `:124`.
- [ ] **Fix the misleading about-page fallback alt.** The image is the Nila logo but `alt="Dr. Nithya Subashini"` claims it is a doctor photograph. Use `alt="Nila Hospital logo"` or empty alt when adjacent text already names the doctor; preferably supply the real doctor photo. Source: `app/about/page.tsx:121`.
- [ ] **Add intrinsic `width` and `height` to raw logos.** The header and footer `<img>` elements have CSS height but no dimensions, leaving avoidable CLS risk. Use `next/image` with explicit dimensions or raw dimensions matching the square SVG. Sources: `components/Header.tsx:47-51`, `components/Footer.tsx:28`.
- [ ] **Resolve the header size conflict.** The inline `height: 120px` overrides Tailwind’s `h-20 md:h-[90px]`, while the layout reserves only `pt-20 md:pt-24`. Use one responsive size definition and reserve the same header height. Sources: `components/Header.tsx:50-51`, `app/layout.tsx:100`.
- [ ] **Use page-representative social/structured images and accurate image descriptions.** Every page currently defaults to the same hospital exterior while the Open Graph `alt` is the page title, which does not literally describe that photo. Google recommends relevant, representative images and discourages generic images. Sources: `lib/seo.ts:6`, `lib/seo.ts:43-50`.
- [ ] **Rename numeric gallery filenames when practical.** All seven visible photos have strong descriptive alt text, but filenames such as `521A6952.JPG` give Google little context. Preserve redirects or references if filenames change. Sources: `app/about/page.tsx:239-246`, `public/images/gallery/`.

### P3 — validate after implementation

- [ ] Run Schema Markup Validator against the homepage, one specialty page, and both doctor profiles. Site-name markup is not supported by Google’s Rich Results Test.
- [ ] Run Google Rich Results Test for LocalBusiness/Hospital, Breadcrumb, and FAQ eligibility, then inspect rendered HTML.
- [ ] Use Search Console URL Inspection on all 14 canonical URLs; compare “discovered,” “crawled,” canonical, and last crawl data before attributing non-indexing to links.
- [ ] Run PageSpeed Insights mobile for one URL in each template family: homepage, specialty, standard page, doctors list, doctor detail, and contact.
- [ ] Validate field Core Web Vitals at the 75th percentile: LCP ≤2.5 s, CLS <0.1, and INP <200 ms.
- [ ] Confirm that the chosen site name and logo match the verified Google Business Profile and other authoritative brand profiles.

## 1. Google site name and favicon

### Site name

Status: **Needs alignment; required fields are present.**

- Pass: one `WebSite` node is present on the domain homepage only.
- Pass: required `name` and `url` are present.
- Gap: recommended `alternateName` is absent.
- Gap: `WebSite.name` is “Nila Hospital Namakkal,” but `og:site_name` and visible brand text say “Nila Hospital.” Google asks for consistent naming across homepage signals.
- Improvement: add `@id: "https://nilahospital.com/#website"` and connect page nodes with `isPartOf`.
- Non-issue: the JSON-LD script is in the rendered body rather than the head. Google can process JSON-LD in either location when it is in rendered HTML.

Google requirements: [`WebSite` must be on the homepage with `name` and `url`; `alternateName` is recommended](https://developers.google.com/search/docs/appearance/site-names).

### Favicon inventory

Status: **Pass with cleanup recommended.**

| Asset | Verified dimensions | Google favicon assessment |
|---|---:|---|
| `public/favicon.ico` and `app/favicon.ico` | 16×16, 32×32, 48×48 entries | Pass because a square 48×48 entry exists; files are identical. |
| `public/favicon.svg` | square 500×500 canvas/viewBox | Browser-compatible, but SVG is not listed among Google Search’s favicon formats; do not make it the only candidate. |
| `public/icon-48.png` | 48×48 | Minimum good candidate, though current Google guidance recommends larger than 48×48. |
| `public/icon-96.png` | 96×96 | Strong Google candidate. |
| `public/icon-192.png` | 192×192 | Strong Google candidate. |
| `public/icon-512.png` | 512×512 | Manifest icon; square and valid for the PWA. |
| `public/apple-touch-icon.png` | 180×180 | Valid Apple icon; not subject to a multiple-of-48 rule. |

Current Google guidance does **not** require favicon dimensions to be multiples of 48. It requires a square image of at least 8×8 and recommends a favicon larger than 48×48. The 96 and 192 PNGs are both square and exceed that recommendation. The generated homepage currently contains duplicate `/favicon.ico` declarations from the file convention and explicit metadata, plus SVG and PNG candidates. Keep one stable primary ICO/PNG Google candidate and retain other platform icons only as needed.

Google requirements: [favicon eligibility and supported formats](https://developers.google.com/search/docs/appearance/favicon-in-search).

## 2. Structured-data audit

| Type | Coverage | Result | Action |
|---|---|---|---|
| `Hospital` | All pages via root layout; duplicated on homepage | Required LocalBusiness `name` and `address` are present. Invalid specialty values and wrong `availableService` ranges; logo is unsuitable on white. | Fix enum/range errors, replace logo, add truthful applicable Organization properties, and emit once on the homepage or one organization page. |
| `WebSite` | Homepage | Required `name`/`url` pass. | Add `alternateName`; align all site-name signals; add stable `@id`. |
| `MedicalWebPage` | `/services` plus seven specialty/location pages | Valid type, `name`, `url`; currently too thin and `about` points to the hospital rather than the topic. | Add page identity, publisher/provider, medical topic, reviewer/date metadata, audience/specialty, language, and breadcrumb relationships when truthful. |
| `Physician` | Two doctor profiles | Hospital affiliation and stable `@id` are good. Invalid/non-applicable properties and misleading fallback image are present. | Use `IndividualPhysician` vocabulary, valid credential/identifier properties, real photo or no image, and optionally a Google-supported `ProfilePage` node. |
| `BreadcrumbList` | Seven specialty pages | Current two-item lists satisfy Google’s required properties. No visible breadcrumb UI. | Add visible, matching breadcrumbs to current pages and the six uncovered non-home URLs. |
| `FAQPage` | Homepage and seven specialty pages | Required shape passes and marked questions are visible. Schema text is separately maintained and sometimes differs. | Generate markup from visible FAQ data. Keep expectations low because Google restricts FAQ rich results. |

### Hospital and Organization details

- Pass: most-specific type `Hospital`, stable `@id`, full postal address, telephone with country code, URL, geo coordinates with sufficient precision, opening hours, map, image, and social profiles.
- Pass: `Hospital` is a `LocalBusiness` subtype, so the required Google LocalBusiness `name` and `address` fields are present.
- Gap: Google recommends several high-resolution business images in 1:1, 4:3, and 16:9 aspect ratios. Only one 1600×1067 image is supplied.
- Gap: add `contactPoint`, `areaServed`, `isAcceptingNewPatients`, `paymentAccepted`, `legalName`, or identifiers only when accurate and useful; these are enhancements, not blanket requirements.
- Warning: do not add self-serving `aggregateRating` for reviews collected about this same hospital; Google’s LocalBusiness guidance limits that recommendation to sites that capture reviews about other businesses.

References: [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization), [Schema.org Hospital](https://schema.org/Hospital), [Schema.org MedicalSpecialty enumeration](https://schema.org/MedicalSpecialty).

### MedicalWebPage

Google does not list `MedicalWebPage` as a standalone rich-result feature. It can still improve entity semantics, but it does not by itself earn a special Search display. Recommended, maintained properties for this YMYL medical content are:

- a stable page `@id`, `url`, `name`, `description`, and `inLanguage: "en-IN"`;
- `about` for the actual medical topic and `publisher`/`provider` for the hospital;
- `reviewedBy` pointing to the appropriate verified clinician and a real `lastReviewed` date;
- `dateModified` when the medical content materially changes;
- `medicalAudience` and `specialty` using valid Schema.org values;
- `breadcrumb` pointing to the page’s BreadcrumbList;
- `primaryImageOfPage` only when the image represents that page.

Do not add review dates or clinician attribution merely for SEO. They must correspond to a real editorial/clinical review process visible to users.

Reference: [Schema.org MedicalWebPage](https://schema.org/MedicalWebPage).

### Physician

Current emitted issues:

- `jobTitle` has a Person-oriented domain and is not a property of `Physician`/`IndividualPhysician`; use `occupationalCategory` or a connected `Person` model if needed.
- `qualifications` is defined for `JobPosting` and `Occupation`, not Physician.
- `medicalRegistrationNumber` is not a Schema.org property.
- `medicalSpecialty` returns two invalid enumeration strings for gynaecology and general medicine.
- `image` points to the hospital logo when a doctor photo is missing.
- empty `sameAs` and `knowsAbout` arrays should be omitted rather than serialized when empty.

Good existing properties: `@id`, `name`, `url`, description, telephone, address, `hospitalAffiliation`, `knowsAbout` when populated, and `sameAs` when it contains authoritative profile URLs.

References: [Schema.org IndividualPhysician](https://schema.org/IndividualPhysician), [Schema.org hasCredential](https://schema.org/hasCredential), [Schema.org identifier](https://schema.org/identifier).

### BreadcrumbList

The helper emits `itemListElement`, integer `position`, `name`, and absolute `item` URL for two entries, so it meets Google’s required shape. Improvements:

- render the same trail visibly on the page;
- use a typical user path, not merely the URL shape;
- add coverage to the six missing non-home URLs;
- give each list an `@id` and connect it from the page entity;
- consider `Home > Doctors > Doctor` and `Home > Services > Specialty` after those hubs contain the corresponding links.

Reference: [Google Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb).

### FAQPage

The current FAQ objects have Google’s required `mainEntity`, `Question.name`, `acceptedAnswer`, and `Answer.text`, and the marked questions appear in visible accordions. Keep these safeguards:

- build JSON-LD from the same arrays that render the accordions;
- ensure every marked question and full answer remains accessible without login;
- remove or update markup when medical answers change;
- validate that answers do not make claims broader than the visible page;
- treat a rich result as unlikely unless Google independently considers the hospital a well-known, authoritative health site.

References: [Google’s FAQ rich-result restriction](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [general structured-data quality rules](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## 3. Internal-link graph across all 14 sitemap URLs

Legend: “Header” means an anchor is present in the initial server-rendered header. Closed Radix dropdown/sheet links are not counted; Google does not interact with menus. Every specialty URL still has a crawlable footer link.

| Sitemap URL | Header | Footer | Homepage main content | Other contextual incoming sources | Assessment |
|---|---|---|---|---|---|
| `/` | Yes | Yes | N/A | Every page’s logo/Home link | Strong |
| `/maternity-hospital-namakkal` | Dropdown only | Yes | Yes | Gynaecology, obstetrics, women’s health, why-choose, women’s-hospital | Strong |
| `/gynaecology-namakkal` | Dropdown only | Yes | Yes | Women’s health, why-choose, women’s-hospital | Strong |
| `/obstetrics-namakkal` | Dropdown only | Yes | Yes | Maternity | Strong |
| `/womens-health-namakkal` | Dropdown only | Yes | Yes | Gynaecology, women’s-hospital | Strong |
| `/services` | Yes | Yes | Yes | Sitewide only beyond homepage | Strong enough; improve as a true specialty hub |
| `/doctors` | Yes | Yes | No | Both doctor profiles link back | Medium; add homepage team link |
| `/about` | Yes | Yes | No | No main-content incoming link found | Medium/weak context, not orphaned |
| `/contact` | Yes | Yes | No | General medicine | Medium, not orphaned |
| `/general-medicine-namakkal` | Dropdown only | Yes | Yes | Sitewide footer | Strong enough |
| `/why-choose-nila-hospital-namakkal` | Dropdown only | Yes | Yes | Maternity, obstetrics, general medicine, women’s-hospital | Strong |
| `/womens-hospital-namakkal` | Dropdown only | Yes | No | Why-choose | Medium; add homepage contextual card |
| `/doctors/nithya-subashini` | No | No | Yes (two links) | Doctors list plus maternity, gynaecology, obstetrics, women’s health, women’s-hospital, why-choose | Strong |
| `/doctors/arul-ramasamy` | No | No | No | Doctors list and maternity only | Weakest; strengthen |

Findings:

- Pass: all 14 URLs have at least one crawlable incoming internal link.
- Pass: the footer directly links all 12 static routes on every page.
- Pass: `/doctors` produces crawlable links to both generated profiles.
- Risk: interactive specialty header links are absent from the initial built HTML; the footer is doing the discovery work.
- Risk: `/doctors/arul-ramasamy` is two clicks from the homepage through `/doctors` and has only one additional contextual source.
- Opportunity: `/services` currently contains no contextual links to the dedicated specialty URLs. Turn it into the main hub and use it in breadcrumb paths.

Google guidance: every important page should have a link from at least one other page, and contextual internal links with useful anchor text help Google understand the site. See [SEO link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## 4. Heading hierarchy and image alternatives

### Heading results

- Pass: all 14 rendered sitemap URLs contain exactly one H1.
- Pass: homepage, services, doctors listing, about, gynaecology, obstetrics, and general medicine have logical main-content sequences without a direct level skip.
- Fail: seven URLs have a main-content skip: contact and two doctor profiles use H1→H3; maternity, women’s health, why-choose, and women’s-hospital use H2→H4.
- Global issue: footer section labels always use H4 and do not participate cleanly in each page’s outline.

Changing heading levels is a semantic change only; retain the visual design with CSS classes. Do not add headings solely to insert missing numbers.

### Image and alt results

- Pass: every rendered `<img>` has an `alt` attribute.
- Pass: the seven gallery images have specific, useful alt descriptions and responsive Next.js `srcset` output.
- Pass: doctor images, once populated, use the doctor name as alt text.
- Fail: the about-page fallback visually shows the hospital logo but says it is Dr. Nithya Subashini.
- Improvement: header/footer logos sit next to visible “Nila Hospital” text; consider empty alt for one redundant instance or a concise, consistent brand alt.
- Improvement: generic numeric filenames reduce image context.
- Improvement: the default Open Graph image is reused for every page and its alt is the page title rather than a literal image description.

Google guidance: [descriptive alt text and representative images](https://developers.google.com/search/docs/appearance/google-images).

## 5. Core Web Vitals: LCP and CLS static review

This is a code/static-HTML review, not a field measurement. Google’s good thresholds are LCP within 2.5 seconds and CLS below 0.1 at the 75th percentile.

### LCP

Status: **No obvious LCP image-priority defect in the current content.**

- Twelve static pages have no hero `<img>`; their likely LCP is text or a content card, not an image.
- Both doctor records currently have empty image paths, so profile pages render an SVG user icon rather than a photo.
- If a doctor photo is added, the profile `next/image` already uses `priority`, and its aspect-square container is reserved.
- Gallery images are below the fold and correctly lazy-loaded.
- The shared header logo is preloaded in the generated HTML. Because it is not likely the LCP, avoid adding competing preloads if a true hero/LCP photo is introduced.
- `next/font` self-hosts fonts and uses `display: swap`, which is preferable to render-blocking external font stylesheets.
- Google Analytics loads `afterInteractive`; still monitor main-thread impact and INP in field data.

Checklist for any future hero image:

- [ ] Use `next/image` with correct `sizes` and a responsive source.
- [ ] Set `priority`/`fetchPriority="high"` only on the actual above-fold LCP image.
- [ ] Do not lazy-load the LCP image.
- [ ] Ensure the image is discoverable in initial HTML rather than only in CSS or client JavaScript.
- [ ] Avoid preloading several competing images.

### CLS

Status: **Mostly protected; shared logo dimensions need correction.**

- Pass: Next fill images are inside fixed `aspect-square`, `aspect-video`, `w-32 h-32`, or `h-48` containers.
- Pass: the gallery reserves a 16:9 box before each 3:2 photo loads; `object-cover` may crop but does not shift layout.
- Pass: the map iframe is inside a fixed `h-80` container.
- Pass: reduced-motion rules disable the animated gradient for users who request it.
- Risk: raw header/footer SVG `<img>` tags omit `width`/`height`.
- Risk: the header’s inline 120-pixel height conflicts with responsive CSS heights and the root layout’s reserved top padding.
- Low risk: the about fallback also omits dimensions, but its 128×128 parent currently reserves space.

References: [Google Core Web Vitals thresholds](https://developers.google.com/search/docs/appearance/core-web-vitals), [LCP image priority guidance](https://web.dev/articles/optimize-lcp), [CLS image-dimension guidance](https://web.dev/articles/optimize-cls).

## Verification order after fixes

1. Validate all JSON-LD with Schema Markup Validator and resolve every invalid property/range warning.
2. Validate Google-supported features with Rich Results Test.
3. Build production HTML and confirm homepage has one `WebSite` and one Hospital/Organization identity.
4. Re-run the 14-URL link graph against rendered HTML, not just TSX source.
5. Re-run heading and image checks against rendered HTML.
6. Run PageSpeed Insights mobile across the six template families and record LCP element/phase plus CLS sources.
7. Submit the accurate sitemap, inspect the 14 URLs in Search Console, and request indexing only after content/link/schema fixes deploy.
8. Recheck the Page Indexing report after Google recrawls; do not treat submission as an indexing guarantee.

## Acceptance criteria

- [ ] Preferred site name is consistent; homepage `WebSite` contains `name`, `alternateName`, `url`, and `@id`.
- [ ] A stable square favicon larger than 48×48 is crawlable and the primary candidate.
- [ ] Hospital and physician graphs have no invalid Schema.org properties or enumeration values.
- [ ] Organization logo is visible on white and at least 112×112.
- [ ] All non-home URLs have visible, matching breadcrumbs and valid BreadcrumbList markup.
- [ ] FAQ markup is generated from visible FAQ data.
- [ ] Every one of the 14 URLs has a crawlable contextual incoming link; Arul’s profile is linked from homepage/team content.
- [ ] All 14 URLs retain one H1 and no main-content heading level is skipped.
- [ ] Every meaningful image has accurate alt text; decorative/redundant images use empty alt.
- [ ] Raw images declare dimensions or have an explicitly reserved aspect ratio.
- [ ] Sitemap `lastmod` values reflect real significant updates.
- [ ] Field CWV meets LCP ≤2.5 s, CLS <0.1, and INP <200 ms at the 75th percentile.

## Source references

- [Google site names](https://developers.google.com/search/docs/appearance/site-names)
- [Google favicons](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google general structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google internal-link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google image SEO](https://developers.google.com/search/docs/appearance/google-images)
- [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Schema.org Hospital](https://schema.org/Hospital)
- [Schema.org MedicalWebPage](https://schema.org/MedicalWebPage)
- [Schema.org IndividualPhysician](https://schema.org/IndividualPhysician)
- [Schema.org MedicalSpecialty](https://schema.org/MedicalSpecialty)
