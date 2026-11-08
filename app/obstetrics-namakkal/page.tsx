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
  Baby,
  HeartPulse,
  ShieldCheck,
  Calendar,
  Activity,
  ArrowRight,
  HelpCircle,
  Stethoscope,
  AlertCircle,
  FileCheck,
  Sparkles,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { obstetricsNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Obstetrician & Pregnancy Care in Namakkal | Nila Hospital",
  description: "Comprehensive obstetrics care in Namakkal — antenatal monitoring (ANC), high-risk pregnancy management, ultrasound tracking, and delivery planning with Dr. Nithya Subashini.",
  alternates: {
    canonical: "/obstetrics-namakkal",
  },
};

const obstetricsFaqs = [
  {
    question: "What does obstetrics care include at Nila Hospital?",
    answer: "Obstetrics care includes comprehensive antenatal monitoring (ANC), high-risk pregnancy management, ultrasound scan reviews, nutritional counseling, delivery planning, and postnatal maternal recovery.",
  },
  {
    question: "Does Nila Hospital provide safe delivery support in Namakkal?",
    answer: "Yes. Nila Hospital supports both normal delivery and medically indicated C-section with senior specialist supervision, dual sterile operation theatres, and round-the-clock safety-focused protocols.",
  },
  {
    question: "Does Nila Hospital provide structured antenatal monitoring?",
    answer: "Yes. Antenatal care at Nila Hospital includes structured month-by-month follow-up, symptom surveillance, fetal growth scans, and timely clinical guidance throughout every trimester.",
  },
  {
    question: "When should I begin my antenatal checkups (ANC)?",
    answer: "We recommend scheduling your first consultation as soon as you receive a positive pregnancy test. Early checkups confirm intrauterine pregnancy, estimate your due date, and initiate essential folic acid and micronutrient supplementation.",
  },
  {
    question: "How does Dr. Nithya manage high-risk pregnancies?",
    answer: "High-risk cases (such as gestational diabetes, thyroid disorders, high blood pressure, or twin pregnancies) receive close monitoring, tailored medication regimens, and specialized growth ultrasound scans to safeguard both mother and child.",
  },
  {
    question: "Can I discuss normal delivery planning during my ANC visits?",
    answer: "Yes, absolutely. We discuss birth planning throughout your third trimester, evaluating pelvic capacity, baby's position, and maternal readiness to support a smooth natural birth.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(obstetricsNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Antenatal &amp; High-Risk Care
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Obstetrics &amp; Pregnancy Care<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Consultant-led pregnancy care, comprehensive antenatal monitoring, and high-risk pregnancy management trusted by families across Namakkal.
          </p>
        </div>
      </HeroGradientSection>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">Science-Driven Pregnancy Monitoring</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Led directly by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini, MBBS, DGO</Link>, our obstetrics department ensures that every milestone of your pregnancy is managed with clinical precision, unhurried attention, and compassionate warmth.
            </p>
          </div>

          {/* Trimester Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  1st Trimester (Weeks 1-12)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Foundation &amp; Early Screening</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Confirming intrauterine pregnancy, establishing accurate gestational age, blood group and Rh factor screening, thyroid evaluation, and initiating neural-tube protecting folic acid.
                </p>
                <ul className="text-xs space-y-2 text-muted-foreground border-t border-border pt-3">
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Dating &amp; Viability Scan</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> NT Scan &amp; Double Marker</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Nausea &amp; Micronutrient Support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  2nd Trimester (Weeks 13-27)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Growth &amp; Anomaly Assessment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Detailed anatomical survey of all fetal organ systems, cervical length tracking to prevent preterm labor, glucose challenge test (GCT) for gestational diabetes, and iron/calcium therapy.
                </p>
                <ul className="text-xs space-y-2 text-muted-foreground border-t border-border pt-3">
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Detailed TIFFA Anomaly Scan</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Gestational Sugar Screening (GCT)</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Blood Pressure &amp; Urine Albumin</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  3rd Trimester (Weeks 28-Birth)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Delivery Readiness &amp; Planning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Biophysical profile scans, fetal weight estimation, umbilical artery Doppler flow studies, pelvic capacity evaluation (pelvimetry), labor sign education, and natural birth planning.
                </p>
                <ul className="text-xs space-y-2 text-muted-foreground border-t border-border pt-3">
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Fetal Growth &amp; Doppler Scans</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Daily Fetal Movement (DFMC)</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary" /> Normal Delivery Preparedness</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Clinical Guide Section 1: Detailed Antenatal Diagnostic Protocols */}
          <div className="bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-border/80 mb-20">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
                <FileCheck className="h-4 w-4" /> Diagnostic Protocols
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">Essential Pregnancy Tests &amp; Ultrasound Scans</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Antenatal monitoring at Nila Hospital is structured around evidence-based clinical milestones to protect maternal health and monitor fetal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                <h4 className="font-bold text-nila-navy text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" /> Core Laboratory Bloodwork
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Complete Blood Count (CBC) &amp; Ferritin:</strong> Regular screening to detect and treat iron deficiency anemia early.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Blood Group &amp; Rh Antibody Screening:</strong> Critical for Rh-negative mothers to administer timely Anti-D immunoglobulin.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Thyroid Stimulating Hormone (TSH):</strong> Essential for healthy fetal brain development throughout gestation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Oral Glucose Tolerance Test (OGTT / GCT):</strong> Screening for gestational diabetes mellitus between weeks 24 and 28.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                <h4 className="font-bold text-nila-navy text-lg flex items-center gap-2">
                  <Baby className="h-5 w-5 text-[hsl(var(--nila-warm))]" /> Key Ultrasound Milestones
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--nila-warm))] font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Dating &amp; Viability Scan (6–9 Weeks):</strong> Confirms heartbeat, single vs twin gestation, and accurate expected delivery date.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--nila-warm))] font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Nuchal Translucency (NT) Scan (11–13 Weeks):</strong> Early chromosomal risk evaluation combined with maternal serum markers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--nila-warm))] font-bold">•</span>
                    <div>
                      <strong className="text-foreground">TIFFA / Targeted Anomaly Scan (18–22 Weeks):</strong> Detailed head-to-toe organ screening of the baby's heart, spine, brain, and limbs.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--nila-warm))] font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Fetal Growth &amp; Doppler Scans (32–36 Weeks):</strong> Measures amniotic fluid (AFI), estimated fetal weight, and placental blood flow.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Guide Section 2: High-Risk Pregnancy Protocols */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest mb-2">Specialized Expertise</div>
              <h3 className="text-2xl md:text-3xl font-bold text-nila-navy mb-4">High-Risk Pregnancy Surveillance &amp; Protocols</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Not every pregnancy follows a predictable course. Dr. Nithya Subashini has extensive clinical experience identifying and managing complex obstetric conditions with calm precision, clear patient communication, and continuous maternal-fetal surveillance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Gestational Diabetes (GDM)
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Personalized nutritional counseling, structured blood glucose monitoring, and close maternal-fetal surveillance to support healthy fetal growth and prevent complications.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Pregnancy-Induced Hypertension
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Close monitoring of blood pressure, urine albumin checks, uterine artery Doppler, and clinical management to prevent pre-eclampsia and premature placental detachment.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Thyroid Disorders in Pregnancy
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Periodic TSH screening across all three trimesters to help maintain balanced maternal thyroid levels for healthy fetal development.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border shadow-sm space-y-2">
                  <h4 className="font-bold text-nila-navy text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" /> Previous C-Section (VBAC / TOLAC)
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Careful ultrasound assessment of lower uterine segment scar thickness, inter-pregnancy interval, and clinical suitability for safe Trial of Labor after Caesarean.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Guide Section 3: Warning Signs Requiring Immediate Emergency Attention */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-destructive/5 border border-destructive/20 mb-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 p-3.5 rounded-2xl shrink-0">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-nila-navy">Obstetric Red Flag Symptoms (Call Immediately)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you experience any of the following symptoms at any stage of pregnancy, do not wait for your scheduled appointment. Proceed directly to Nila Hospital or contact our 24/7 obstetric hotline:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Sudden vaginal bleeding or fluid leakage
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Noticeable reduction in baby's kicks/movement
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Severe persistent headache or blurred vision
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Persistent severe pain in upper right abdomen
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> High fever with chills or painful urination
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Sudden swelling of the face, hands, or feet
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={hospital.phoneHref}
                    className="inline-flex items-center gap-2 text-destructive font-bold text-sm hover:underline"
                  >
                    Emergency Maternity Line: +91 96552 25192 <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interlink to Maternity */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Preparing for Labor and Delivery?</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              Explore our supportive labor suites, natural normal delivery commitment, and 24/7 surgical theatre facilities at Nila Hospital Namakkal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/maternity-hospital-namakkal"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                Explore Maternity &amp; Delivery Care <ArrowRight className="h-4 w-4" />
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

          <MedicalDisclaimer />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Pregnancy FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Frequently Asked Pregnancy Questions</h2>
            <p className="text-muted-foreground text-sm mt-2">Guidance on checkups, scans, and doctor visits at Nila Hospital.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {obstetricsFaqs.map((faq, idx) => (
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
            Schedule Your Antenatal Checkup Today
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Consult Dr. Nithya Subashini for trusted, personalized pregnancy care in Namakkal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "obstetrics_cta_call", service_name: "obstetrics", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "obstetrics_cta_directions", service_name: "obstetrics", link_url: hospital.mapsUrl }}
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
