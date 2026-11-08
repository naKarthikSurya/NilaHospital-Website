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
  Heart,
  Activity,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  AlertCircle,
  FileCheck,
  CalendarHeart,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { gynaecologyNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Gynaecologist in Namakkal | Fibroid & PCOS Care",
  description: "Consult Dr. Nithya Subashini, MBBS, DGO at Nila Hospital for expert treatment of uterine fibroids, PCOS, ovarian cysts, and menstrual disorders in Namakkal.",
  alternates: {
    canonical: "/gynaecology-namakkal",
  },
};

const gynaecologyFaqs = [
  {
    question: "When should I see a gynaecologist in Namakkal?",
    answer: "You should consult a gynaecologist for irregular or painful periods, heavy bleeding, pelvic pain, suspected PCOS symptoms, unusual vaginal discharge, or pre-conception planning.",
  },
  {
    question: "Does Nila Hospital treat hormonal imbalance and menstrual disorders?",
    answer: "Yes. Nila Hospital provides specialist evaluation and long-term management for menstrual irregularity, hormonal imbalances (PCOS/PCOD), and related gynaecological symptoms.",
  },
  {
    question: "How can I book gynaecology consultation in Namakkal?",
    answer: "You can contact Nila Hospital at +91 96552 25192 for appointments and consultation support.",
  },
  {
    question: "Can uterine fibroids be treated without surgery?",
    answer: "Yes, many fibroids can be managed medically using hormonal medications and lifestyle support if they are small or asymptomatic. Dr. Nithya evaluates size, location, and symptoms to recommend the least invasive and most effective path.",
  },
  {
    question: "How does Nila Hospital treat PCOS and irregular periods?",
    answer: "We take a comprehensive approach to PCOS/PCOD, addressing insulin resistance, hormonal balance, ovulation stimulation (for couples planning pregnancy), and menstrual cycle regulation through personalized medical protocols.",
  },
  {
    question: "When should I consult a gynaecologist for heavy bleeding?",
    answer: "If your periods last longer than 7 days, require changing pads every 1-2 hours, include large clots, or cause severe fatigue/dizziness, you should schedule a consultation promptly to check for fibroids, polyps, or hormonal imbalances.",
  },
  {
    question: "Are laparoscopic (keyhole) procedures available at Nila Hospital?",
    answer: "Yes. Our surgical suites are equipped for minimally invasive laparoscopic evaluation and minor procedures, minimizing post-operative recovery time and discomfort.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gynaecologyNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Consultant-Led Women's Health
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gynaecology Care<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            One of the most trusted centers for uterine fibroid treatment, PCOS management, ovarian health, and compassionate women's care in Namakkal.
          </p>
        </div>
      </HeroGradientSection>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">Personalized Clinical Gynaecology</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every woman deserves compassionate, confidential medical care without judgment. Led by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini, MBBS, DGO</Link>, Nila Hospital provides thorough clinical diagnosis, gentle pelvic evaluations, and transparent, evidence-based long-term treatment strategies.
            </p>
          </div>

          {/* Condition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-4">
                  <Stethoscope className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h3 className="text-xl font-bold text-nila-navy mb-2">Uterine Fibroids</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Accurate ultrasound grading, medical therapies for bleeding control, and fertility-preserving surgical myomectomy when needed.
                </p>
                <div className="text-xs text-primary font-semibold border-t border-border pt-3">Pelvic Pain &amp; Heavy Bleeding Relief</div>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-4">
                  <Heart className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h3 className="text-xl font-bold text-nila-navy mb-2">PCOS &amp; Hormonal Health</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Holistic management of polycystic ovary syndrome, cycle regularization, acne/weight management, and ovulation guidance.
                </p>
                <div className="text-xs text-primary font-semibold border-t border-border pt-3">Metabolic &amp; Cycle Harmony</div>
              </CardContent>
            </Card>

            <Card className="border border-border/70 rounded-2xl bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-4">
                  <Activity className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h3 className="text-xl font-bold text-nila-navy mb-2">Ovarian Cysts &amp; Pain</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Careful monitoring of follicular, corpus luteum, and dermoid cysts, with surgical cystectomy performed with tissue preservation.
                </p>
                <div className="text-xs text-primary font-semibold border-t border-border pt-3">Fertility Preservation First</div>
              </CardContent>
            </Card>
          </div>

          {/* Deep Clinical Guide 1: Uterine Fibroids Comprehensive Breakdown */}
          <div className="bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-border/80 mb-20">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
                <Stethoscope className="h-4 w-4" /> Clinical Speciality
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">In-Depth Guide: Uterine Fibroid Diagnosis &amp; Management</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Uterine fibroids (leiomyomas) are non-cancerous muscular growths in the uterus affecting up to 70% of women during their reproductive years. At Nila Hospital, we tailor treatment based on whether your priority is fertility preservation or complete symptom relief.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--nila-warm))]">Type 01</div>
                <h4 className="font-bold text-nila-navy text-lg">Submucosal Fibroids</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These develop inside the uterine cavity. Even when small, they are the most common cause of severe menorrhagia (flooding menstrual periods), anemia, and recurrent miscarriages.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--nila-warm))]">Type 02</div>
                <h4 className="font-bold text-nila-navy text-lg">Intramural Fibroids</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These grow embedded within the thick muscular uterine wall. They can cause uterine enlargement, prolonged menstrual cramps, and a sensation of lower abdominal heaviness.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--nila-warm))]">Type 03</div>
                <h4 className="font-bold text-nila-navy text-lg">Subserosal Fibroids</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These project outward from the external surface of the uterus into the pelvic cavity. Large subserosal fibroids frequently press against the bladder, causing frequent urination.
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
              <h4 className="font-bold text-nila-navy text-lg">Treatment Strategies at Nila Hospital:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-1">
                  <strong className="text-foreground">Conservative Medical Therapy:</strong>
                  <p>Tranexamic acid, non-steroidal anti-inflammatory agents, and targeted progesterone regimens to control menstrual bleeding without immediate surgery.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-foreground">Surgical Myomectomy (Uterus-Sparing):</strong>
                  <p>Precise surgical removal of fibroids while carefully reconstructing the uterine wall, protecting fertility for women desiring future pregnancies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Clinical Guide 2: PCOS / PCOD Metabolic & Hormonal Management */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest mb-2">Hormonal Health</div>
              <h3 className="text-2xl md:text-3xl font-bold text-nila-navy mb-4">PCOS &amp; Irregular Periods: Root-Cause Management</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Polycystic Ovary Syndrome (PCOS/PCOD) is a metabolic and endocrine disorder rather than simply an ovarian issue. Instead of offering temporary fixes, Dr. Nithya Subashini develops holistic treatment plans focusing on cycle regularity, fertility goals, and long-term metabolic health:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-card p-5 rounded-2xl border border-border space-y-2">
                  <h4 className="font-bold text-nila-navy text-base">Comprehensive Diagnostics</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ultrasound tracking of follicle counts, fasting insulin/glucose ratios, LH:FSH hormonal ratios, thyroid panels, and serum androgen levels.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border space-y-2">
                  <h4 className="font-bold text-nila-navy text-base">Cycle Regularization</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Preventing endometrial hyperplasia (thickening of uterine lining) through cyclic natural progestin therapy and lifestyle modifications.
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border space-y-2">
                  <h4 className="font-bold text-nila-navy text-base">Weight &amp; Insulin Resistance</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Guidance on low-glycemic dietary planning, regular exercise protocols, and insulin-sensitizing agents (Inositol / Metformin when indicated).
                  </p>
                </div>

                <div className="bg-card p-5 rounded-2xl border border-border space-y-2">
                  <h4 className="font-bold text-nila-navy text-base">Ovulation Induction for Conception</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For married couples experiencing difficulty conceiving, monitored ovulation stimulation using Letrozole with follicular ultrasound scans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Guide 3: Red Flag Gynaecological Symptoms */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-destructive/5 border border-destructive/20 mb-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 p-3.5 rounded-2xl shrink-0">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-nila-navy">When to Seek Prompt Gynaecological Care</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Do not ignore chronic pelvic symptoms. Schedule an unhurried consultation with Dr. Nithya if you experience any of the following:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Heavy bleeding requiring pad changes every 1–2 hours
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Severe pelvic cramps unresponsive to basic analgesics
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Any spotting or vaginal bleeding after menopause
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Pain or heavy discomfort during marital intercourse
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Persistent foul-smelling discharge or pelvic burning
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="text-destructive font-bold">•</span> Palpable lump or firmness in the lower abdomen
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={hospital.phoneHref}
                    className="inline-flex items-center gap-2 text-destructive font-bold text-sm hover:underline"
                  >
                    Direct Clinical Desk: +91 96552 25192 <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Clinical Procedures List */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Comprehensive Gynaecological Services at Nila Hospital</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Uterine Fibroid Evaluation & Conservative Care",
                "PCOS / PCOD Long-Term Hormonal Management",
                "Ovarian Cyst Follow-Up & Surgical Intervention",
                "Pelvic Inflammatory Disease (PID) Treatment",
                "Abnormal Uterine Bleeding (AUB) Investigation",
                "Cervical Cancer Screening (Pap Smear & HPV)",
                "Pre-Conception Assessment & Infertility Workup",
                "Perimenopausal & Menopausal Hormone Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                  <span className="font-semibold text-nila-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross Link to Women's Health & Maternity */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Explore Related Healthcare Services</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              From preventive well-woman screenings to pregnancy care, explore how our dedicated center supports women across Namakkal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/womens-health-namakkal"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                Women's Preventive Care <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link
                href="/maternity-hospital-namakkal"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                Maternity &amp; Birth <ArrowRight className="h-4 w-4" />
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
              <HelpCircle className="h-3.5 w-3.5" /> Gynaecology FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Frequently Asked Gynaecology Questions</h2>
            <p className="text-muted-foreground text-sm mt-2">Common clinical concerns answered by Dr. Nithya Subashini.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {gynaecologyFaqs.map((faq, idx) => (
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
            Book a Confidential Consultation in Namakkal
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Consult Dr. Nithya Subashini in a private, supportive clinical setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "gynaecology_cta_call", service_name: "gynaecology", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "gynaecology_cta_directions", service_name: "gynaecology", link_url: hospital.mapsUrl }}
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
