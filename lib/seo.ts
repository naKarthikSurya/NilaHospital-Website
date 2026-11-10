import type { Metadata } from "next";
import { hospital } from "@/data/hospital";
import type { Doctor } from "@/data/doctors";

export const SITE_URL = "https://nilahospital.com";
export const DEFAULT_OG_IMAGE = "/images/gallery/521A6952.JPG";

export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  image = DEFAULT_OG_IMAGE,
}: {
  title?: string;
  description: string;
  path: string;
  ogTitle?: string;
  image?: string;
}): Metadata {
  const fullOgTitle =
    ogTitle ??
    (title
      ? `${title} | Nila Hospital`
      : "Nila Hospital Namakkal | Maternity & Women’s Care");
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullOgTitle,
      description,
      url: canonicalUrl,
      siteName: "Nila Hospital",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullOgTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description,
      images: [image],
    },
  };
}
export const HOSPITAL_NAME = hospital.fullName;
export const HOSPITAL_ID = `${SITE_URL}/#hospital`;
export const MAIN_PHONE = hospital.phoneHref.replace("tel:", "");
export const MAPS_URL = hospital.mapsUrl;
export const GOOGLE_REVIEW_URL = hospital.mapsUrl; // Direct to Maps Page

export const HOSPITAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: hospital.address.streetAddress,
  addressLocality: hospital.address.addressLocality,
  postalCode: hospital.address.postalCode,
  addressRegion: hospital.address.addressRegion,
  addressCountry: hospital.address.addressCountry,
} as const;

export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "@id": HOSPITAL_ID,
  name: HOSPITAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/NHLogo_NB.svg`,
  image: `${SITE_URL}/images/gallery/521A6952.JPG`, // Genuine exterior image
  description: "Nila Hospital Namakkal is a premier center for specialist maternity, obstetrics, gynaecology, and general medicine.",
  telephone: hospital.phoneDisplay,
  email: hospital.email || undefined,
  address: HOSPITAL_ADDRESS,
  hasMap: hospital.mapsUrl,
  priceRange: "$$",
  medicalSpecialty: ["ObstetricAndGynecologic", "Anesthesia", "GeneralMedicine"],
  availableService: [
    "Pregnancy Care (ANC)",
    "Normal and Caesarean Delivery Care",
    "Gynaecology and Women's Health Care",
    "Women's Preventive Care & Screening",
    "General Medicine & Primary Care"
  ],
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Inpatient Beds",
      value: "15+ Beds"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Operation Theatres",
      value: "2 sterile OT units"
    }
  ],
  sameAs: hospital.socialProfiles.map(p => p.url),
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.24534185036797,
    longitude: 78.16326507578772,
  },
  openingHoursSpecification: hospital.schemaHours.map(sh => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: sh.dayOfWeek,
    opens: sh.opens,
    closes: sh.closes
  }))
};

export const homePageSchemas = [
  defaultSchema,
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: HOSPITAL_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Nila Hospital in Namakkal specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nila Hospital specializes in Obstetrics, Gynaecology, Maternal Care, Normal and Caesarean Delivery, Antenatal Monitoring, Infertility and Pre-conception Counselling, and General Medicine."
        }
      },
      {
        "@type": "Question",
        name: "Who is the senior doctor at Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hospital is led by Dr. Nithya Subashini, MBBS, DGO, a senior consultant obstetrician and gynaecologist who personally consults with every patient."
        }
      },
      {
        "@type": "Question",
        name: "What are the clinic hours and is emergency support available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OP clinic hours are Monday to Friday from 9:00 AM – 1:00 PM and 6:00 PM – 9:00 PM, and Saturday & Sunday from 9:00 AM – 1:00 PM. Emergency obstetric and maternity care is accessible 24/7."
        }
      },
      {
        "@type": "Question",
        name: "Does Nila Hospital prioritize normal deliveries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We prioritize natural normal delivery whenever clinically safe for mother and baby, with modern sterile operation theatres available if a surgical delivery is medically indicated."
        }
      },
      {
        "@type": "Question",
        name: "Where is Nila Hospital located in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nila Hospital is conveniently located at 743, Salem Road, Swamy Nagar, Namakkal, Tamil Nadu 637001 (opposite Reynolds Car Showroom). Call +91 96552 25192 for appointments."
        }
      }
    ]
  }
];

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
    name: "Gynaecology and Women's Health Care",
    provider: { "@id": HOSPITAL_ID },
    areaServed: "Namakkal",
  },
];

export const whyChooseNilaHospitalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Why Choose Nila Hospital in Namakkal",
    url: `${SITE_URL}/why-choose-nila-hospital-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Why Choose Nila Hospital",
      path: "/why-choose-nila-hospital-namakkal",
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
          text: "Families choose Nila Hospital for specialist-led women and maternity care, direct continuity with Dr. Nithya Subashini, and practical safety-focused treatment pathways.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nila Hospital provide antenatal and delivery planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nila Hospital provides structured antenatal monitoring, risk-based evaluation, and delivery planning with specialist supervision.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Nila Hospital located in Namakkal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nila Hospital is located at Salem Road, Swamy Nagar, Namakkal, Tamil Nadu 637001 (opposite Reynolds Car Showroom).",
        },
      },
    ],
  },
];
export const whyBestHospitalPageSchemas = whyChooseNilaHospitalPageSchemas;

export const womensHospitalPageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Women's Specialty Hospital in Namakkal",
    url: `${SITE_URL}/womens-hospital-namakkal`,
    about: { "@id": HOSPITAL_ID },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Women's Specialty Hospital in Namakkal",
      path: "/womens-hospital-namakkal",
    },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services should a dedicated women's hospital offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dedicated women's hospital should provide pregnancy care, normal delivery support, menstrual disorder treatment, preventive screening, and postnatal follow-up.",
        },
      },
      {
        "@type": "Question",
        name: "Can I consult for irregular periods and hormonal concerns at Nila Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nila Hospital provides clinical evaluation and long-term management plans for menstrual irregularities, hormonal imbalances (PCOS/PCOD), and related gynaecological symptoms.",
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
export const bestWomenHospitalPageSchemas = womensHospitalPageSchemas;

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
          text: "Consult a gynaecologist for irregular periods, severe menstrual pain, infection concerns, pelvic pain, or pre-conception planning.",
        },
      },
      {
        "@type": "Question",
        name: "Does Nila Hospital treat hormonal imbalance and menstrual disorders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nila Hospital provides specialist evaluation and long-term management for menstrual irregularity, hormonal imbalances, and related gynaecological symptoms.",
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
        name: "Does Nila Hospital provide structured antenatal monitoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Antenatal care at Nila Hospital includes structured follow-up, symptom surveillance, and timely clinical guidance throughout pregnancy.",
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
          text: "Services include menstrual and hormonal care, reproductive counselling, pregnancy-linked wellness, and menopause support.",
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
  if (doctor.category === "anaesthesiologist") {
    return "Anesthesia";
  }
  return "GeneralMedicine";
}

export function physicianSchemaForDoctor(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/doctors/${doctor.id}#physician`,
    name: doctor.name,
    url: `${SITE_URL}/doctors/${doctor.id}`,
    image: doctor.image ? `${SITE_URL}${doctor.image}` : `${SITE_URL}/assets/NHLogo_NB.svg`,
    jobTitle: doctor.title,
    description: doctor.description,
    telephone: hospital.phoneDisplay,
    address: HOSPITAL_ADDRESS,
    hospitalAffiliation: { "@id": HOSPITAL_ID },
    medicalSpecialty: getMedicalSpecialty(doctor),
    knowsAbout: doctor.knowsAbout || [],
    sameAs: doctor.sameAs || [],
    medicalRegistrationNumber: doctor.registrationNumber || undefined,
    qualifications: doctor.qualifications
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
