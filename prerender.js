// prerender.js — Static Pre-rendering Script for nilahospital.com
// Builds Vite SSR bundle, renders each route to static HTML, writes to dist/
// Run after: vite build   -> called via "postbuild" script in package.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distClientDir = path.resolve(__dirname, "dist");
const templatePath = path.resolve(distClientDir, "index.html");

// Routes to pre-render
const routesToPrerender = [
  { url: "/", dir: "" },
  { url: "/services", dir: "services" },
  { url: "/doctors", dir: "doctors" },
  { url: "/doctors/nithya-subashini", dir: "doctors/nithya-subashini" },
  { url: "/doctors/arul-ramasamy", dir: "doctors/arul-ramasamy" },
  { url: "/about", dir: "about" },
  { url: "/contact", dir: "contact" },
  {
    url: "/why-we-are-best-hospital-in-namakkal",
    dir: "why-we-are-best-hospital-in-namakkal",
  },
  {
    url: "/best-women-hospital-in-namakkal",
    dir: "best-women-hospital-in-namakkal",
  },
  { url: "/gynaecology-namakkal", dir: "gynaecology-namakkal" },
  { url: "/obstetrics-namakkal", dir: "obstetrics-namakkal" },
  { url: "/maternity-hospital-namakkal", dir: "maternity-hospital-namakkal" },
  { url: "/womens-health-namakkal", dir: "womens-health-namakkal" },
  { url: "/general-medicine-namakkal", dir: "general-medicine-namakkal" },
];


const hospitalId = "https://nilahospital.com/#hospital";

// Page-specific metadata for each route
const pageMeta = {
  "/": {
    title: "Best Maternity & Gynaecology Hospital in Namakkal | Nila Hospital",
    description: "Nila Hospital is Namakkal's trusted maternity & gynaecology hospital. Expert care for normal delivery, C-section, PCOS & high-risk pregnancy. Call 24/7.",
    canonical: "https://nilahospital.com/",
  },
  "/services": {
    title: "Gynaecology & Maternity Services in Namakkal | Dr. Nithya Subashini | Nila Hospital",
    description: "Comprehensive women's healthcare in Namakkal — ANC, normal delivery, PCOS treatment, Pap smear & more. Consult Dr. Nithya Subashini today.",
    canonical: "https://nilahospital.com/services",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "Obstetrics and Gynaecology Services in Namakkal",
      url: "https://nilahospital.com/services",
      about: { "@id": hospitalId },
    },
  },
  "/doctors": {
    title: "Dr. Nithya Subashini — Best Gynaecologist in Namakkal | Nila Hospital",
    description: "Dr. Nithya Subashini (MBBS, DGO) — expert gynaecologist & obstetrician in Namakkal. Specialises in high-risk pregnancy, PCOS & infertility. Book appointment.",
    canonical: "https://nilahospital.com/doctors",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Doctors at Nila Hospital Namakkal",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Dr. Nithya Subashini",
          url: "https://nilahospital.com/doctors/nithya-subashini",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dr. Arul Ramasamy",
          url: "https://nilahospital.com/doctors/arul-ramasamy",
        },
      ],
    },
  },
  "/doctors/nithya-subashini": {
    title: "Dr. Nithya Subashini - Consultant Obstetrician and Gynaecologist in Namakkal | Nila Hospital",
    description: "Meet Dr. Nithya Subashini (MBBS, DGO), Consultant Obstetrician & Gynaecologist at Nila Hospital Namakkal. Specialized in high-risk pregnancy, PCOS, and delivery care.",
    canonical: "https://nilahospital.com/doctors/nithya-subashini",
    schema: {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://nilahospital.com/doctors/nithya-subashini#physician",
      name: "Dr. Nithya Subashini",
      url: "https://nilahospital.com/doctors/nithya-subashini",
      jobTitle: "Consultant Obstetrician & Gynaecologist",
      description:
        "Senior consultant in high-risk pregnancy, delivery care, and PCOS management at Nila Hospital Namakkal.",
      telephone: "+919655225192",
      medicalSpecialty: "ObstetricAndGynecologic",
      hospitalAffiliation: { "@id": hospitalId },
    },
  },
  "/doctors/arul-ramasamy": {
    title: "Dr. Arul Ramasamy - Senior Anaesthesiologist in Namakkal | Nila Hospital",
    description: "Meet Dr. Arul Ramasamy (MBBS, DA), Senior Anaesthesiologist in Nila Hospital Namakkal, specialized in providing safe anaesthesia for various surgical procedures with a focus on patient comfort.",
    canonical: "https://nilahospital.com/doctors/arul-ramasamy",
    schema: {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://nilahospital.com/doctors/arul-ramasamy#physician",
      name: "Dr. Arul Ramasamy",
      url: "https://nilahospital.com/doctors/arul-ramasamy",
      jobTitle: "Senior Anaesthesiologist",
      description:
        "Senior anaesthesiologist focused on safe obstetric and surgical anaesthesia at Nila Hospital Namakkal.",
      telephone: "+919655225192",
      medicalSpecialty: "Anesthesiologic",
      hospitalAffiliation: { "@id": hospitalId },
    },
  },
  "/about": {
    title: "About Nila Hospital — Women's Specialist Hospital in Namakkal",
    description: "Learn about Nila Hospital's mission, our expert team, and our commitment to compassionate maternity and gynaecology care in Namakkal, Tamil Nadu.",
    canonical: "https://nilahospital.com/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Nila Hospital Namakkal",
      url: "https://nilahospital.com/about",
      about: { "@id": hospitalId },
    },
  },
  "/contact": {
    title: "Contact Nila Hospital | Namakkal | +91 96552 25192",
    description: "Visit Nila Hospital on Salem Road, Swamy Nagar, Namakkal. Open daily 9AM–1PM & 6–9PM. 24/7 emergency obstetric support. Call +91 96552 25192.",
    canonical: "https://nilahospital.com/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Nila Hospital Namakkal",
      url: "https://nilahospital.com/contact",
      about: { "@id": hospitalId },
    },
  },
  "/why-we-are-best-hospital-in-namakkal": {
    title: "Why We Are Best Hospital in Namakkal | Nila Hospital",
    description: "Learn why Nila Hospital is considered one of the best hospitals in Namakkal for women and maternity care, with expert doctors, safe protocols, and compassionate support.",
    canonical: "https://nilahospital.com/why-we-are-best-hospital-in-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Why We Are Best Hospital in Namakkal",
          url: "https://nilahospital.com/why-we-are-best-hospital-in-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://nilahospital.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Why We Are Best Hospital in Namakkal",
              item: "https://nilahospital.com/why-we-are-best-hospital-in-namakkal",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Why do families choose Nila Hospital in Namakkal?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Families choose Nila Hospital for specialist-led women and maternity care, continuity with the same consultant team, and practical safety-focused treatment pathways.",
              },
            },
            {
              "@type": "Question",
              name: "Does Nila Hospital provide high-risk pregnancy monitoring?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Nila Hospital provides antenatal monitoring, risk-based evaluation, and delivery planning for both routine and high-risk pregnancy cases.",
              },
            },
          ],
        },
      ],
    },
  },
  "/best-women-hospital-in-namakkal": {
    title: "Best Women Hospital in Namakkal | Nila Hospital",
    description: "Explore why Nila Hospital is trusted as a leading women hospital in Namakkal for pregnancy, PCOS care, menstrual health, and long-term specialist follow-up.",
    canonical: "https://nilahospital.com/best-women-hospital-in-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Best Women Hospital in Namakkal",
          url: "https://nilahospital.com/best-women-hospital-in-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://nilahospital.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Best Women Hospital in Namakkal",
              item: "https://nilahospital.com/best-women-hospital-in-namakkal",
            },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services should a women hospital in Namakkal offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A strong women hospital should provide pregnancy care, delivery support, PCOS and menstrual disorder treatment, preventive screening, and postnatal follow-up.",
              },
            },
            {
              "@type": "Question",
              name: "Can I consult for PCOS and irregular periods at Nila Hospital?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Nila Hospital provides clinical evaluation and long-term management plans for PCOS, irregular cycles, and related hormonal symptoms.",
              },
            },
          ],
        },
      ],
    },
  },
  "/gynaecology-namakkal": {
    title: "Gynaecology in Namakkal | Best Gynaecologist in Namakkal | Nila Hospital",
    description: "Consult a trusted gynaecologist in Namakkal at Nila Hospital for PCOS care, menstrual irregularities, infection treatment, and preventive women health support.",
    canonical: "https://nilahospital.com/gynaecology-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Gynaecology in Namakkal",
          url: "https://nilahospital.com/gynaecology-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nilahospital.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Gynaecology in Namakkal",
              item: "https://nilahospital.com/gynaecology-namakkal",
            },
          ],
        },
      ],
    },
  },
  "/obstetrics-namakkal": {
    title: "Obstetrics in Namakkal | Safe Delivery Care | Nila Hospital",
    description: "Obstetrics care in Namakkal with ANC, high-risk pregnancy monitoring, safe normal delivery and C-section planning at Nila Hospital.",
    canonical: "https://nilahospital.com/obstetrics-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Obstetrics in Namakkal",
          url: "https://nilahospital.com/obstetrics-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nilahospital.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Obstetrics in Namakkal",
              item: "https://nilahospital.com/obstetrics-namakkal",
            },
          ],
        },
      ],
    },
  },
  "/maternity-hospital-namakkal": {
    title: "Best Maternity Hospital in Namakkal | Best Delivery Hospital | Nila Hospital",
    description: "Nila Hospital offers complete maternity care in Namakkal with ANC monitoring, safe delivery planning, and postnatal follow-up for mother and baby.",
    canonical: "https://nilahospital.com/maternity-hospital-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Maternity Hospital in Namakkal",
          url: "https://nilahospital.com/maternity-hospital-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nilahospital.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Maternity Hospital in Namakkal",
              item: "https://nilahospital.com/maternity-hospital-namakkal",
            },
          ],
        },
      ],
    },
  },
  "/womens-health-namakkal": {
    title: "Women's Health in Namakkal | Nila Hospital",
    description: "Women's health care in Namakkal with menstrual, hormonal, reproductive, pregnancy-linked, and menopause support at Nila Hospital.",
    canonical: "https://nilahospital.com/womens-health-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Women's Health in Namakkal",
          url: "https://nilahospital.com/womens-health-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nilahospital.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Women's Health in Namakkal",
              item: "https://nilahospital.com/womens-health-namakkal",
            },
          ],
        },
      ],
    },
  },
  "/general-medicine-namakkal": {
    title: "General Medicine in Namakkal | General Doctor Consultation | Nila Hospital",
    description: "General medicine consultation in Namakkal at Nila Hospital for first-level diagnosis, wellness monitoring, and coordinated specialist referral.",
    canonical: "https://nilahospital.com/general-medicine-namakkal",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "General Medicine in Namakkal",
          url: "https://nilahospital.com/general-medicine-namakkal",
          about: { "@id": hospitalId },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nilahospital.com/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "General Medicine in Namakkal",
              item: "https://nilahospital.com/general-medicine-namakkal",
            },
          ],
        },
      ],
    },
  },
};

function injectMeta(html, url) {
  const meta = pageMeta[url] || pageMeta["/"];

  // Update title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Update description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Update canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Update OG tags
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${meta.canonical}$2`
  );
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  );
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  );

  // Update Twitter tags
  html = html.replace(
    /(<meta\s+name="twitter:url"\s+content=")[^"]*(")/,
    `$1${meta.canonical}$2`
  );
  html = html.replace(
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  );
  html = html.replace(
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  );

  // Replace route-level JSON-LD schema
  html = html.replace(
    /\s*<script id="route-schema-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    ""
  );

  if (meta.schema) {
    const schemaJson = JSON.stringify(meta.schema).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `  <script id="route-schema-jsonld" type="application/ld+json">${schemaJson}</script>\n  </head>`
    );
  }

  return html;
}

async function prerender() {
  console.log("🚀 Starting pre-render...");

  // Start Vite in SSR mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: __dirname,
  });

  // Read the built index.html template
  const template = fs.readFileSync(templatePath, "utf-8");

  for (const { url, dir } of routesToPrerender) {
    console.log(`  ⚙️  Rendering: ${url}`);

    let html;
    try {
      // Load and execute the SSR entry for this route
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      const appHtml = render(url);

      // Inject the rendered HTML into the template
      html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    } catch (err) {
      console.warn(`  ⚠️  SSR render failed for ${url}, using template only. Error: ${err.message}`);
      html = template;
    }

    // Inject correct per-page metadata
    html = injectMeta(html, url);

    // Write output
    const outDir = dir ? path.resolve(distClientDir, dir) : distClientDir;
    if (dir) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.resolve(outDir, "index.html"), html);
    console.log(`  ✅ Written: dist/${dir ? dir + "/" : ""}index.html`);
  }

  await vite.close();
  console.log("\n✅ Pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
