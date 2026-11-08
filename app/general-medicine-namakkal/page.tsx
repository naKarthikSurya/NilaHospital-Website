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
  Stethoscope,
  Activity,
  HeartPulse,
  Clock,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { generalMedicineNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "General Medicine & Outpatient Clinic in Namakkal | Nila Hospital",
  description: "Consult Nila Hospital's outpatient clinic in Namakkal for primary healthcare, seasonal infections, fever care, diabetes and blood pressure monitoring for families.",
  alternates: {
    canonical: "/general-medicine-namakkal",
  },
};

const medicineFaqs = [
  {
    question: "What conditions are treated in your General Medicine OPD?",
    answer: "Our outpatient department manages common acute ailments like seasonal fevers, flu, respiratory infections, headaches, digestive upsets, as well as chronic monitoring for hypertension and diabetes.",
  },
  {
    question: "What are the outpatient consultation hours?",
    answer: "OPD consultations are available Monday to Friday from 9:00 AM – 1:00 PM and 6:00 PM – 9:00 PM, and Saturday & Sunday from 9:00 AM – 1:00 PM.",
  },
  {
    question: "Do you have diagnostic blood tests and pharmacy tie-ups?",
    answer: "Yes, we coordinate rapid blood testing, vital monitoring, and routine diagnostic investigations with trusted local laboratories for immediate clinical decisions.",
  },
  {
    question: "Are emergency admissions accepted?",
    answer: "Obstetric and maternity emergencies are supported 24/7. General medical emergencies are clinically stabilized and guided appropriately depending on acuity.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generalMedicineNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Primary Healthcare &amp; Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            General Medicine &amp; OPD<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Accessible, thorough clinical assessment and primary medical support for Namakkal's families.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">First-Line Medical Support for Your Family</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In addition to our specialized women's and maternity care, Nila Hospital provides reliable outpatient general medicine for acute sickness, chronic disease follow-ups, and preventive checkups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Stethoscope,
                title: "Acute Illness & Fevers",
                desc: "Thorough evaluation of seasonal fevers, viral infections, coughs, gastrointestinal upsets, and urinary infections."
              },
              {
                icon: Activity,
                title: "Chronic Health Management",
                desc: "Ongoing blood pressure monitoring, blood sugar checks, thyroid regulation, and lifestyle reviews."
              },
              {
                icon: HeartPulse,
                title: "Preventive Family Checks",
                desc: "Routine physical examinations, baseline blood investigations, and preventive counselling for all age groups."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h3 className="text-xl font-bold text-nila-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Procedures and Outpatient Scope */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border mb-16">
            <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Primary Care Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Seasonal Infection & Viral Fever Care",
                "High Blood Pressure (Hypertension) Management",
                "Diabetes Fasting & Post-Prandial Screening",
                "Respiratory & Allergy Symptom Relief",
                "Gastrointestinal & Acidity Management",
                "Diagnostic Blood Test Coordination",
                "Geriatric Routine Health Reviews",
                "Preventive Lifestyle Guidance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                  <span className="font-semibold text-nila-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link to Contact */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Need a Doctor Consultation Today?</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              Walk in during OPD hours or call ahead to check today's consultation schedule.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
            >
              View Clinic Timings &amp; Location <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> OPD FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Frequently Asked General Medicine Questions</h2>
            <p className="text-muted-foreground text-sm mt-2">Information on consultation timings, testing, and visits.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {medicineFaqs.map((faq, idx) => (
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
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Consult With Our Doctors in Namakkal
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Experience unhurried medical consultations and reliable family care on Salem Road, Namakkal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "general_medicine_cta_call", service_name: "general_medicine", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "general_medicine_cta_directions", service_name: "general_medicine", link_url: hospital.mapsUrl }}
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
