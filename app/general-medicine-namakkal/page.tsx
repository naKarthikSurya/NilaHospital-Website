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
  AlertCircle,
  FileCheck,
  HeartHandshake,
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
    question: "What conditions are covered in general medicine consultation?",
    answer: "General consultation supports first-level assessment for common adult symptoms, seasonal fevers, coughs, diabetes, hypertension, wellness monitoring, and medicine reviews.",
  },
  {
    question: "Can Nila Hospital coordinate specialist referral if needed?",
    answer: "Yes. When advanced super-specialist care is needed, Nila Hospital provides coordinated referral support for specialist management.",
  },
  {
    question: "How do I book general doctor consultation in Namakkal?",
    answer: "Call +91 96552 25192 for consultation and appointment support, or visit our clinic during daily outpatient timings.",
  },
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
            Primary Healthcare &amp; Family Medicine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            General Medicine &amp; OPD<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Accessible, thorough clinical assessment, fever care, and chronic disease management for Namakkal's families.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">First-Line Medical Support for Your Family</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In addition to our dedicated women's and maternity care, Nila Hospital provides reliable outpatient general medicine for acute sickness, chronic disease management, and routine preventive health evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Stethoscope,
                title: "Acute Illness & Fevers",
                desc: "Thorough clinical evaluation for viral fevers, dengue, seasonal flu, respiratory infections, and gastrointestinal upsets."
              },
              {
                icon: Activity,
                title: "Chronic Disease Care",
                desc: "Ongoing blood pressure tracking, diabetes glycemic control (HbA1c), cholesterol review, and thyroid regulation."
              },
              {
                icon: HeartPulse,
                title: "Preventive Family Checks",
                desc: "Routine physical examinations, baseline blood investigations, and personalized lifestyle counseling for all age groups."
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

          {/* Deep Clinical Guide 1: Fever, Infection & Acute Care Protocols */}
          <div className="bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-border/80 mb-20">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
                <Stethoscope className="h-4 w-4" /> Acute Care
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">Seasonal Fever &amp; Infection Management in Namakkal</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Namakkal regularly experiences seasonal spikes in viral and vector-borne infections. At Nila Hospital, we emphasize rational diagnostic testing and supportive care, preventing unnecessary antibiotic overuse while safeguarding against severe complications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">Dengue &amp; Viral Fevers</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Serial complete blood counts (CBC) to monitor platelet counts and hematocrit levels. We provide aggressive oral hydration protocols and close warning-sign surveillance to prevent severe dengue shock.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">Typhoid &amp; Enteric Fevers</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Evaluation of step-ladder fevers, abdominal discomfort, and coated tongue. Targeted testing and precise, culture-directed antimicrobial treatment to guarantee complete bacterial clearance.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">Respiratory &amp; Chest Illnesses</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stethoscope auscultation for wheezing, rhonchi, or bronchial breath sounds. Management of seasonal bronchitis, allergic asthma, pharyngitis, and upper respiratory tract infections.
                </p>
              </div>
            </div>
          </div>

          {/* Deep Clinical Guide 2: Chronic Disease Management (Diabetes & BP) */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest mb-2">Long-Term Vitality</div>
              <h3 className="text-2xl md:text-3xl font-bold text-nila-navy mb-4">Chronic Disease Management: Diabetes &amp; Hypertension</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Managing chronic lifestyle conditions requires long-term continuity, patient education, and routine biological surveillance rather than sporadic prescription refills:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Type 2 Diabetes Monitoring
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Quarterly HbA1c testing, fasting and post-prandial blood sugar targets, diabetic diet adjustments, and regular screening to prevent peripheral neuropathy and diabetic kidney disease.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Hypertension &amp; Cardiovascular Care
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Precise sphygmomanometer blood pressure tracking, dietary sodium restriction advice, cardiovascular risk profiling, and anti-hypertensive dose optimization.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Thyroid Disorders
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Periodic TSH, Free T3, and Free T4 testing for hypothyroidism and hyperthyroidism, titrating thyroxine replacement to alleviate fatigue, weight gain, and sluggish metabolism.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Lipid &amp; Cholesterol Review
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Fasting lipid profiles evaluating LDL ("bad cholesterol"), HDL, and triglycerides, with medical statin therapy and dietary counseling for heart health protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Guide 3: Red Flag Symptoms */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-destructive/5 border border-destructive/20 mb-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 p-3.5 rounded-2xl shrink-0">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-nila-navy">Medical Warning Signs Requiring Immediate Emergency Care</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While our OPD handles general ailments, severe acute symptoms require immediate emergency evaluation. Please seek urgent care or contact our desk if experiencing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Crushing central chest pain radiating to jaw or left arm
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Sudden facial drooping, arm numbness, or speech slurring
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Severe breathing difficulty with oxygen saturation under 92%
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> High fever accompanied by confusion or neck stiffness
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={hospital.phoneHref}
                    className="inline-flex items-center gap-2 text-destructive font-bold text-sm hover:underline"
                  >
                    Hospital Contact Line: +91 96552 25192 <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Procedures and Outpatient Scope */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border mb-16">
            <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Primary Care Services Available Daily</h3>
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

          {/* Link to Contact & Women's Health */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Need a Doctor Consultation Today?</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              Walk in during OPD hours or contact our team to confirm doctor availability on Salem Road, Namakkal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                View Clinic Timings &amp; Map <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link
                href="/why-choose-nila-hospital-namakkal"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                Why Families Trust Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
