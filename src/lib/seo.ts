import type { Doctor } from "@/data/doctors";

export const SITE_URL = "https://nilahospital.com";
export const HOSPITAL_NAME = "Nila Hospital Namakkal";
export const HOSPITAL_ID = `${SITE_URL}/#hospital`;
export const MAIN_PHONE = "+919655225192";
export const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
export const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8"; // Direct to Maps Page

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

export const whyBestHospitalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Why We Are Best Hospital in Namakkal",
    url: `${SITE_URL}/why-we-are-best-hospital-in-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Why We Are Best Hospital in Namakkal",
      path: "/why-we-are-best-hospital-in-namakkal",
    },
  ]),
  {
    "@context": "https://schema.org",
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
      {
        "@type": "Question",
        name: "Where is Nila Hospital located in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nila Hospital is located at Salem Road, Swamy Nagar, Namakkal, Tamil Nadu 637001.",
        },
      },
    ],
  },
];

export const bestWomenHospitalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Best Women Hospital in Namakkal",
    url: `${SITE_URL}/best-women-hospital-in-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Best Women Hospital in Namakkal",
      path: "/best-women-hospital-in-namakkal",
    },
  ]),
  {
    "@context": "https://schema.org",
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
      {
        "@type": "Question",
        name: "How can I book an appointment with Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call +91 96552 25192 for consultation and appointment support.",
        },
      },
    ],
  },
];

export const gynaecologyNamakkalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Gynaecology in Namakkal",
    url: `${SITE_URL}/gynaecology-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gynaecology in Namakkal", path: "/gynaecology-namakkal" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I see a gynaecologist in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consult a gynaecologist for irregular periods, severe menstrual pain, PCOS symptoms, infection concerns, pelvic pain, or pre-conception planning.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nila Hospital treat PCOS and hormonal imbalance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nila Hospital provides specialist evaluation and long-term management for PCOS, menstrual irregularity, and related hormonal symptoms.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book gynaecology consultation in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Nila Hospital at +91 96552 25192 for appointments and consultation support.",
        },
      },
    ],
  },
];

export const obstetricsNamakkalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Obstetrics in Namakkal",
    url: `${SITE_URL}/obstetrics-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Obstetrics in Namakkal", path: "/obstetrics-namakkal" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does obstetrics care include at Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Obstetrics care includes ANC monitoring, risk-based pregnancy review, delivery planning, and postpartum follow-up support.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nila Hospital provide safe delivery support in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nila Hospital supports both normal delivery and medically indicated C-section with specialist supervision and safety-focused protocols.",
        },
      },
      {
        "@type": "Question",
        name: "Can high-risk pregnancy cases be monitored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. High-risk pregnancies are monitored with structured follow-up, symptom surveillance, and timely escalation planning.",
        },
      },
    ],
  },
];

export const maternityHospitalNamakkalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Maternity Hospital in Namakkal",
    url: `${SITE_URL}/maternity-hospital-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Maternity Hospital in Namakkal",
      path: "/maternity-hospital-namakkal",
    },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why choose Nila Hospital as a maternity hospital in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nila Hospital provides complete maternity care from ANC to delivery and postnatal follow-up with specialist-led continuity.",
        },
      },
      {
        "@type": "Question",
        name: "Is normal delivery available at Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Normal delivery is supported when clinically suitable, with C-section advised when medically needed for mother-baby safety.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Nila Hospital for delivery planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call +91 96552 25192 to discuss pregnancy monitoring, delivery planning, and maternity consultation.",
        },
      },
    ],
  },
];

export const womensHealthNamakkalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Women's Health in Namakkal",
    url: `${SITE_URL}/womens-health-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Women's Health in Namakkal", path: "/womens-health-namakkal" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What women's health services are available at Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Services include menstrual and hormonal care, PCOS management, reproductive counselling, pregnancy-linked wellness, and menopause support.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide life-stage women health support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Care is tailored across adolescence, reproductive years, pregnancy, postnatal recovery, and menopause.",
        },
      },
      {
        "@type": "Question",
        name: "How can I schedule women health consultation in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call +91 96552 25192 for appointments and consultation guidance.",
        },
      },
    ],
  },
];

export const generalMedicineNamakkalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "General Medicine in Namakkal",
    url: `${SITE_URL}/general-medicine-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "General Medicine in Namakkal", path: "/general-medicine-namakkal" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What conditions are covered in general medicine consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "General consultation supports first-level assessment for common adult symptoms, wellness monitoring, and medicine review.",
        },
      },
      {
        "@type": "Question",
        name: "Can Nila Hospital coordinate specialist referral if needed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. When advanced care is needed, Nila Hospital provides coordinated referral support for specialist management.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book general doctor consultation in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call +91 96552 25192 for consultation and appointment support.",
        },
      },
    ],
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

export const locationPageSchema = (locationName: string, serviceName: string) => {
  const path = `/${locationName.toLowerCase()}-${serviceName.toLowerCase().replace(/ /g, '-')}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${SITE_URL}${path}#webpage`,
      "url": `${SITE_URL}${path}`,
      "name": `${serviceName} near ${locationName} | Nila Hospital`,
      "description": `Top-rated ${serviceName} for families in ${locationName}. Located in Namakkal (25-30 kms away), Nila Hospital offers expert maternity and gynaecology care.`,
      "about": { "@id": HOSPITAL_ID },
      "breadcrumb": { "@id": `${SITE_URL}${path}#breadcrumb` }
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: `${serviceName} in ${locationName}`, path: path }
    ])
  ];
};
