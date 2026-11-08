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
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { obstetricsNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Obstetrician & Pregnancy Care in Namakkal | Nila Hospital",
  description: "Comprehensive obstetrics care in Namakkal — antenatal monitoring (ANC), high-risk pregnancy management, ultrasound tracking, and delivery planning with Dr. Nithya Subashini.",
  alternates: {
    canonical: "/obstetrics-namakkal",
  },
};

const obstetricsFaqs = [
  {
    question: "When should I begin my antenatal checkups (ANC)?",
    answer: "We recommend scheduling your first consultation as soon as you receive a positive pregnancy test. Early checkups confirm intrauterine pregnancy, estimate your due date, and initiate essential folic acid and micronutrient supplementation.",
  },
  {
    question: "How does Dr. Nithya manage high-risk pregnancies?",
    answer: "High-risk cases (such as gestational diabetes, thyroid disorders, high blood pressure, or twin pregnancies) receive close monitoring, tailored medication regimens, and specialized growth ultrasound scans to safeguard both mother and child.",
  },
  {
    question: "How frequently will I need visits throughout pregnancy?",
    answer: "Typically, visits are scheduled monthly up to 28 weeks, every two weeks until 36 weeks, and weekly thereafter until delivery. High-risk mothers may require personalized, closer visit intervals.",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border border-border/70 rounded-2xl bg-card">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  1st Trimester (Weeks 1-12)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Foundation &amp; Early Screening</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Confirmation dating scan, vital blood work, early genetic risk evaluation, and morning sickness relief management.
                </p>
                <ul className="text-xs space-y-1.5 text-muted-foreground">
                  <li className="flex items-center gap-1.5">✓ Dating &amp; Viability Scan</li>
                  <li className="flex items-center gap-1.5">✓ Nutritional Supplementation</li>
                  <li className="flex items-center gap-1.5">✓ Early Screening Guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  2nd Trimester (Weeks 13-27)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Growth &amp; Anomaly Assessment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Detailed fetal organ anomaly scans, gestational diabetes screening, blood pressure monitoring, and fetal movement tracking.
                </p>
                <ul className="text-xs space-y-1.5 text-muted-foreground">
                  <li className="flex items-center gap-1.5">✓ Anomaly &amp; Cervical Scans</li>
                  <li className="flex items-center gap-1.5">✓ Gestational Sugar Screening</li>
                  <li className="flex items-center gap-1.5">✓ Maternal Health Reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card">
              <CardContent className="p-6">
                <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  3rd Trimester (Weeks 28-Birth)
                </div>
                <h3 className="font-bold text-lg text-nila-navy mb-2">Delivery Readiness &amp; Planning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Growth and Doppler scans, amniotic fluid checks, pelvic assessment, birth plan discussion, and labor sign education.
                </p>
                <ul className="text-xs space-y-1.5 text-muted-foreground">
                  <li className="flex items-center gap-1.5">✓ Foetal Growth &amp; Doppler</li>
                  <li className="flex items-center gap-1.5">✓ Normal Delivery Preparation</li>
                  <li className="flex items-center gap-1.5">✓ 24/7 Labor Support Access</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* High-Risk Pregnancy Management */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest mb-2">Specialized Expertise</div>
              <h3 className="text-2xl font-bold text-nila-navy mb-4">High-Risk Pregnancy Surveillance</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Not every pregnancy is routine. Dr. Nithya Subashini has extensive clinical experience identifying and managing complex obstetric conditions with calm precision:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Gestational Diabetes Management",
                  "Pregnancy-Induced Hypertension (Preeclampsia)",
                  "Thyroid & Hormonal Imbalances",
                  "Multiple Gestations (Twin Pregnancies)",
                  "Previous Caesarean Birth (TOLAC/VBAC Consultation)",
                  "Fetal Growth Restriction (IUGR) Monitoring"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-foreground bg-card p-3 rounded-xl border border-border">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interlink to Maternity */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Preparing for Labor and Delivery?</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              Explore our supportive labor rooms and dedicated normal delivery care in Namakkal.
            </p>
            <Link
              href="/maternity-hospital-namakkal"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
            >
              Explore Maternity &amp; Delivery Care <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
