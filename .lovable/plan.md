
# Nila Hospital Website — Full Implementation Plan

## Overview
A 5-page promotional website for Nila Hospital, Namakkal — a women's specialty hospital focused on Obstetrics & Gynaecology. The site will be clean, clinical, mobile-first, and built around two primary actions: **Call Now** and **Get Directions**. No appointment booking, no WhatsApp.

---

## Design System

**Colors (from logo):**
- Primary Blue: `#5B8DB8` (steel blue — the logo background)
- Dark Navy: `#1E3A5F` (headings, footer)
- Light Blue: `#A8C5DA` (accents, backgrounds)
- White: `#FFFFFF`
- Soft Grey: `#F4F7FA` (section backgrounds)

**Logo:** The uploaded pregnant woman silhouette with heart (Nila_Hospital_Logo_2.png — white on blue) used in header; the flat blue version for light backgrounds.

**Typography:** Clean serif for headings (trust/medical feel), sans-serif for body text.

**Global Elements:**
- Sticky top header: Logo + Nav + Call button
- Mobile sticky bottom bar: Call (left) | Get Directions (right)
- Footer on every page: Address + Phone + Timings + Quick Links

---

## Page 1: Home

**Hero Section**
- Headline: *"Dedicated to Maternal Excellence"*
- Sub-line: *"Obstetrics & Gynaecology Care in Namakkal"*
- Two CTAs: **Call Now** + **Get Directions**
- Stats: 15+ Beds | 02 OT Units

**Quick Info Cards** (3 cards)
- Emergency Call | Our Location | OPD Timings

**Key Services Strip** (4–6 icon cards)
- Pregnancy Care, Normal Delivery, C-Section, PCOS/PCOD, Gynaecology, Preventive Care
- Each ends with "Call for Details"

**Why Choose Nila Hospital** (4–6 trust bullets with icons)
- Personal attention, women-focused, sterile environment, clear communication, privacy, compassionate care

**Doctor Snapshot**
- Photo placeholder + Dr. name + qualification + brief approach bullets
- "Call for Consultation" CTA

**Facilities Gallery** (3 placeholder cards)
- Hospital Exterior | Reception & Waiting | Consultation Suite

**CTA Banner**
- Dark blue background: *"Your Health is Our Sole Priority"*
- Call Now + Our Services buttons

---

## Page 2: Services

**Hero:** *"Comprehensive Care for Every Stage of Life"*

**Section 1 — Pregnancy Care (ANC)**
- Prenatal Consultations
- Ultrasound Monitoring
- Maternal Nutrition Counselling

**Section 2 — Delivery Care**
- Normal Delivery
- Cesarean (C-Section)
- Postnatal Follow-up

**Section 3 — Gynaecology Care**
- PCOS/PCOD
- Irregular Periods
- Vaginal Infections / Discharge Evaluation
- Menopause Care

**Section 4 — Women's Preventive Care**
- Cervical Screening / Pap Test
- Pre-conception Counselling
- Family Planning

Each service card includes: Who it's for, When to visit, How we help + "Call for Details" CTA.

**CTA Strip:** Call Now | Get Directions

---

## Page 3: Doctors

**Doctor Profile Header**
- Professional photo placeholder
- Dr. Name, MD, DGO
- *Consultant Obstetrician & Gynaecologist*
- SENIOR CONSULTANT badge

**4 Info Cards:** Qualifications | Specializations | Experience | Languages

**CTAs:** Call for Consultation | Directions to Clinic

**Care Approaches** (numbered list)
1. Patient-Centered Education
2. Absolute Privacy & Dignity
3. Holistic Wellness Focus

**Consultation Hours Table**
- Monday–Saturday: 09:00 AM – 08:00 PM
- Sunday: Emergency Only
- Note about surgical schedule

**CTA Banner:** Emergency number + Contact Hospital

---

## Page 4: About Nila Hospital

**Mission Statement Hero**
- *"Women-focused care in the heart of Namakkal"*

**Our Story**
- Founded vision, personal attention philosophy, growth paragraph

**Hospital Highlights** (icon cards)
- 15+ Beds | 2 OTs | Personal Attention | Clean Environment | Patient Privacy | Women-Focused

**Facilities & Support**
- Consultation Rooms
- In-house support / lab tie-ups
- Sterile OT environment

**Photo Gallery** (6-card grid with placeholder slots for real photos)
- Hospital Exterior | Reception | Consultation Room | OT | Waiting Area | Signage

**Patient Commitments** (bullet list)
- Privacy, respectful care, clear communication, timely attention

**Footer CTA:** Call + Directions

---

## Page 5: Contact & Location

**Action-First Top Section** (large, prominent)
- **Call Now** button (tap-to-call: +91 96552 25192)
- **Get Directions** button (opens Google Maps)

**Details Section** (two columns)
- Left: Address block, Phone numbers (04286-297192 + 96552 25192), Visiting Hours (Mon–Sat 10AM–8PM, Sunday: Emergency Only)
- Landmark note: *"Opposite Reynolds Car Showroom, Salem Road"*

**Embedded Google Map** (iframe pointing to Nila Hospital Namakkal)

**How to Reach** section
- Landmark cues, directions note

---

## Global Components

**Sticky Header (all pages)**
- Logo (pregnant silhouette icon + "Nila Hospital" text + "Obstetrics & Gynaecology" sub-text)
- Nav: Home | Services | Doctors | About | Contact
- Call button (top-right, blue)
- Mobile hamburger menu

**Mobile Sticky Bottom Bar**
- Left half: 📞 Call Now
- Right half: 📍 Get Directions

**Footer (all pages)**
- Logo + tagline
- Quick Links
- Address + Phone
- Working Hours
- Social media icons (Facebook, Instagram)
- Copyright: © 2024 Nila Hospital. All rights reserved.

---

## Technical Notes
- React Router for 5-page navigation
- Smooth scroll animations on section entry
- All phone numbers linked with `tel:` for tap-to-call on mobile
- Google Maps directions link opens maps app on mobile
- Fully responsive (mobile-first, desktop max-width 1400px)
- Logo uploaded and used across all pages
- Placeholder images styled with gradient/icon placeholders ready for real photos

