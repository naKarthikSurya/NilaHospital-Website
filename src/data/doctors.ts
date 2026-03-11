import { GraduationCap, Stethoscope, Star } from "lucide-react";

export interface Doctor {
    id: string;
    name: string;
    title: string;
    qualifications: string;
    badge: string;
    category: "gynaecologist" | "anaesthesiologist";
    type: "practitioner" | "pg";
    pursuing?: string;
    seesOP: boolean;
    roleContext: string;
    description: string;
    infoCards: {
        icon: any;
        title: string;
        items: string[];
    }[];
}

export const doctorsList: Doctor[] = [
    {
        id: "nithya-subashini",
        name: "Dr. Nithya Subashini",
        title: "Consultant Obstetrician & Gynaecologist",
        qualifications: "MBBS, DGO",
        badge: "Senior Consultant",
        category: "gynaecologist",
        type: "practitioner",
        seesOP: false,
        roleContext: "OP Consultant",
        description: "Dr. Nithya Subashini is a senior consultant at Nila Hospital with extensive experience in high-risk pregnancy and compassionate women's care.",
        infoCards: [
            { icon: GraduationCap, title: "Qualifications", items: ["MBBS", "DGO (Diploma in Gynaecology)", "Registered Medical Practitioner"] },
            { icon: Stethoscope, title: "Specializations", items: ["High-Risk Pregnancy", "Normal & Surgical Delivery", "PCOS / PCOD Management", "Gynaecological Disorders"] },
            { icon: Star, title: "Experience", items: ["Extensive clinical experience", "Performed hundreds of deliveries", "Expert in laparoscopic procedures", "Trusted by families in Namakkal"] },
        ],
    },
    {
        id: "arul-ramasamy",
        name: "Dr. Arul Ramasamy",
        title: "Senior Anaesthesiologist",
        qualifications: "MBBS, DA",
        badge: "Senior Consultant",
        category: "anaesthesiologist",
        type: "practitioner",
        seesOP: false,
        roleContext: "Surgical Specialist",
        description: "Senior Anaesthesiologist specialized in providing safe anaesthesia for various surgical procedures with a focus on patient comfort.",
        infoCards: [
            { icon: GraduationCap, title: "Qualifications", items: ["MBBS", "DA (Diploma in Anaesthesia)"] },
            { icon: Stethoscope, title: "Specializations", items: ["Obstetric Anaesthesia", "General Anaesthesia", "Pain Management"] },
            { icon: Star, title: "Experience", items: ["Senior clinical lead", "Extensive operative experience", "Emergency trauma care Expert"] },
        ],
    },
];
