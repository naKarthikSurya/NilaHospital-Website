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
];


const hospitalId = "https://nilahospital.com/#hospital";

// Page-specific metadata for each route
const pageMeta = {
  "/": {
    title: "Nila Hospital | Best Gynaecology Specialty in Namakkal",
    description: "Leading hospital for Obstetrics & Gynaecology in Namakkal. Expert pregnancy monitoring, infertility treatments, and safe maternity services. Care you trust.",
    canonical: "https://nilahospital.com/",
  },
  "/services": {
    title: "Maternity, Pregnancy and Gynaecology Services in Namakkal | Nila Hospital",
    description: "Explore Nila Hospital services in Namakkal: ANC checkups, normal delivery, C-section, PCOS management, preventive screening, and complete women-focused care.",
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
    title: "Best Doctors in Namakkal | Nila Hospital",
    description: "Meet the specialist doctors at Nila Hospital Namakkal, including expert obstetric, gynaecology, and anaesthesia consultants for safe maternity care.",
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
    title: "About Nila Hospital | Women's Specialty Hospital in Namakkal",
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
    title: "Contact Nila Hospital | Namakkal Gynaecology Hospital",
    description: "Contact Nila Hospital Namakkal. Salem Road, Swamy Nagar, Namakkal 637001. Call +91 96552 25192. Available 24/7 for emergency obstetric care.",
    canonical: "https://nilahospital.com/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Nila Hospital Namakkal",
      url: "https://nilahospital.com/contact",
      about: { "@id": hospitalId },
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
