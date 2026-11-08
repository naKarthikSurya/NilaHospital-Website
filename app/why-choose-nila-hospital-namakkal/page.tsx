import { Metadata } from "next";
import Link from "next/link";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  MapPin,
  CheckCircle,
  Award,
  Shield,
  Users,
  Clock,
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { whyChooseNilaHospitalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Why Choose Nila Hospital Namakkal | Trusted Care",
  description: "Discover why families consider Nila Hospital one of the best and most trusted hospitals in Namakkal for obstetrics, gynaecology, and consultant-led patient care.",
  alternates: {
    canonical: "/why-choose-nila-hospital-namakkal",
  },
};

const trustFaqs = [
  {
    question: "Why do families choose Nila Hospital in Namakkal?",
    answer: "Families choose Nila Hospital for specialist-led women and maternity care, direct continuity with Dr. Nithya Subashini without junior doctor handoffs, unhurried consultations, and transparent, ethical healthcare pathways.",
  },
  {
    question: "Does Nila Hospital provide antenatal and delivery planning?",
    answer: "Yes. We provide structured antenatal monitoring (ANC), trimester risk evaluation, ultrasound tracking, and comprehensive normal and surgical delivery planning under senior specialist supervision.",
  },
  {
    question: "Where is Nila Hospital located and how do I reach it?",
    answer: "Nila Hospital is conveniently located at 743, Salem Road, Swamy Nagar, Namakkal, Tamil Nadu 637001 (opposite Reynolds Car Showroom). Direct phone support is available at +91 96552 25192.",
  },
  {
    question: "Is emergency maternity care available 24/7?",
    answer: "Yes, our emergency obstetric support, sterile labor rooms, and surgical operation theatre teams are on call 24 hours a day, 7 days a week.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyChooseNilaHospitalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Grounded In Clinical Trust
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose<br />
            <span className="text-[hsl(var(--nila-warm))]">Nila Hospital Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            One of Namakkal's most trusted consultant-led centers, combining senior clinical expertise with personalized, unhurried care.
          </p>
        </div>
      </HeroGradientSection>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">A Patient-First Clinical Environment</h2>
            <p className="text-muted-foreground text-lg">
              We focus on what truly matters: direct doctor interaction, clinical safety, and genuine empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center p-6 bg-card rounded-2xl border border-border shadow-sm">
              <Award className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Senior Consultant-Led</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every consultation, ANC review, and delivery is managed directly by <Link href="/doctors/nithya-subashini" className="text-primary font-medium hover:underline">Dr. Nithya Subashini</Link>, ensuring 100% continuity without junior doctor handoffs.
              </p>
            </div>
            <div className="space-y-4 text-center p-6 bg-card rounded-2xl border border-border shadow-sm">
              <Shield className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Patient Safety First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rigid sterile protocols, state-of-the-art dual operation theatre suites led by senior anaesthesiologist Dr. Arul Ramasamy, and evidence-based treatments.
              </p>
            </div>
            <div className="space-y-4 text-center p-6 bg-card rounded-2xl border border-border shadow-sm">
              <Users className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Compassionate Dignity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A calm, respectful environment where every woman feels heard, respected, and supported throughout pregnancy, birth, and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-nila-navy text-center mb-6">Dedicated to Namakkal's Health</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nila Hospital, we believe that quality healthcare should be accessible, transparent, and expert-led. Rather than operating as an impersonal mega-facility, our foundation is built on personal attention over patient volume. Families across Namakkal, Tiruchengode, and Rasipuram have trusted us for their most critical health milestones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Direct Senior Consultant Access at Every Visit",
                "Advanced Diagnostic & Ultrasound Equipment",
                "Affordable & Transparent Treatment Billing",
                "24/7 Emergency Obstetric Support",
                "Modern Sterile Surgical Suites",
                "Private, Comfortable Labor & Inpatient Rooms",
                "Dedicated Breastfeeding & Postnatal Guidance",
                "Respect for Patient Privacy and Comfort"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))] shrink-0" />
                  <span className="font-semibold text-nila-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Guide for Patients */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
              <FileCheck className="h-4 w-4" /> Patient Decision Guide
            </div>
            <h2 className="text-3xl font-bold text-nila-navy mb-4">5 Questions to Ask When Choosing a Maternity Hospital</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Selecting the right hospital for your pregnancy and delivery is one of the most important decisions your family will make. Here is how Nila Hospital answers the key questions:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "1. Who will handle my antenatal visits and delivery?",
                a: "At large corporate hospitals, you may see different duty doctors at each visit. At Nila Hospital, you are cared for 100% by senior consultant Dr. Nithya Subashini from your very first scan through delivery and postnatal recovery."
              },
              {
                q: "2. What is the hospital's approach to natural normal delivery?",
                a: "We believe natural birth is a physiological milestone that requires patient monitoring, encouragement, and calm labor rooms. We never rush to perform unnecessary surgical interventions unless maternal or fetal health demands it."
              },
              {
                q: "3. What happens if an emergency occurs in the middle of the night?",
                a: "Nila Hospital provides 24/7 emergency obstetric readiness. Our dual sterile Operation Theatres, senior anaesthesiologist Dr. Arul Ramasamy, and trained neonatal emergency nurses are on call round the clock."
              },
              {
                q: "4. Are labor rooms and post-delivery wards private and hygienic?",
                a: "Yes. We maintain private labor and inpatient rooms designed to give mothers the peace of mind, family presence, and dignity they deserve during childbirth."
              },
              {
                q: "5. Is the billing transparent and honest?",
                a: "We provide clear, upfront cost estimates for both normal and C-section deliveries, avoiding hidden room surcharges or unexpected add-on fees."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-2">
                <h4 className="font-bold text-nila-navy text-lg">{item.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Specialties */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-nila-navy mb-8">Explore Our Specialized Care Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-bold text-lg text-nila-navy mb-2">Maternity &amp; Birth</h3>
              <p className="text-muted-foreground text-sm mb-4">Supportive normal delivery pathways and 24/7 emergency care.</p>
              <Link href="/maternity-hospital-namakkal" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                View Maternity Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-bold text-lg text-nila-navy mb-2">Gynaecology Clinic</h3>
              <p className="text-muted-foreground text-sm mb-4">Fibroid management, PCOS care, and irregular period treatments.</p>
              <Link href="/gynaecology-namakkal" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                View Gynaecology Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="font-bold text-lg text-nila-navy mb-2">Women's Hospital Guide</h3>
              <p className="text-muted-foreground text-sm mb-4">Learn why a dedicated women's facility provides superior care.</p>
              <Link href="/womens-hospital-namakkal" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                Read Women's Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Trust &amp; Care FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Common Questions About Nila Hospital</h2>
            <p className="text-muted-foreground text-sm mt-2">Learn more about our doctor access, facilities, and patient care standards.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {trustFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/60 rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-bold text-nila-navy text-base hover:no-underline hover:text-[hsl(var(--nila-warm))] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience Trusted, Patient-First Healthcare
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Speak directly with our team to schedule a consultation or visit our hospital on Salem Road, Namakkal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "why_choose_cta_call", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "why_choose_cta_directions", link_url: hospital.mapsUrl }}
              href={hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </ClientCTA>
          </div>
        </div>
      </section>
    </>
  );
}
