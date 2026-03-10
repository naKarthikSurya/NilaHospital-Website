import type { Doctor } from "@/data/doctors";

export const SITE_URL = "https://nilahospital.com";
export const HOSPITAL_NAME = "Nila Hospital Namakkal";
export const HOSPITAL_ID = `${SITE_URL}/#hospital`;
export const MAIN_PHONE = "+919655225192";
export const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

export const HOSPITAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "743, A/1, A/2, Salem Road, Swamy Nagar",
  addressLocality: "Namakkal",
  postalCode: "637001",
  addressRegion: "Tamil Nadu",
  addressCountry: "IN",
} as const;

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Nila Hospital Namakkal",
  url: `${SITE_URL}/contact`,
  about: { "@id": HOSPITAL_ID },
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Nila Hospital Namakkal",
  url: `${SITE_URL}/about`,
  about: { "@id": HOSPITAL_ID },
};

export const doctorsListingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Doctors at Nila Hospital Namakkal",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dr. Nithya Subashini",
      url: `${SITE_URL}/doctors/nithya-subashini`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dr. Arul Ramasamy",
      url: `${SITE_URL}/doctors/arul-ramasamy`,
    },
  ],
};

export const servicesPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Obstetrics and Gynaecology Services in Namakkal",
    url: `${SITE_URL}/services`,
    about: { "@id": HOSPITAL_ID },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pregnancy Care (ANC)",
    provider: { "@id": HOSPITAL_ID },
    areaServed: "Namakkal",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Normal and Caesarean Delivery Care",
    provider: { "@id": HOSPITAL_ID },
    areaServed: "Namakkal",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PCOS and Gynaecology Care",
    provider: { "@id": HOSPITAL_ID },
    areaServed: "Namakkal",
  },
];

function getMedicalSpecialty(doctor: Doctor): string {
  if (doctor.category === "gynaecologist") {
    return "ObstetricAndGynecologic";
  }

  return "Anesthesiologic";
}

export function physicianSchemaForDoctor(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/doctors/${doctor.id}#physician`,
    name: doctor.name,
    url: `${SITE_URL}/doctors/${doctor.id}`,
    jobTitle: doctor.title,
    description: doctor.description,
    telephone: MAIN_PHONE,
    address: HOSPITAL_ADDRESS,
    hospitalAffiliation: { "@id": HOSPITAL_ID },
    medicalSpecialty: getMedicalSpecialty(doctor),
  };
}

export function breadcrumbSchema(
  entries: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: `${SITE_URL}${entry.path}`,
    })),
  };
}
