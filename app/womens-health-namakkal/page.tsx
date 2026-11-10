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
  Heart,
  Shield,
  Activity,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Stethoscope,
  FileCheck,
  AlertCircle,
  CalendarHeart,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { womensHealthNamakkalPageSchemas, buildPageMetadata } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = buildPageMetadata({
  title: "Women's Preventive Healthcare in Namakkal",
  description: "Comprehensive women's health in Namakkal — preventive screenings, Pap smears, cervical cancer prevention, menopause care, and adolescent support with Dr. Nithya Subashini.",
  path: "/womens-health-namakkal",
});

const womensHealthFaqs = [
  {
    question: "What women's health services are available at Nila Hospital?",
    answer: "Services include menstrual and hormonal care, preventive Pap smears, breast examinations, pre-conception wellness, perimenopause and menopause support, and adolescent gynaecological counseling.",
  },
  {
    question: "Do you provide life-stage women health support?",
    answer: "Yes. Care is tailored across adolescence, reproductive years, pregnancy, postnatal recovery, and post-menopausal life stages.",
  },
  {
    question: "How can I schedule women health consultation in Namakkal?",
    answer: "You can call +91 96552 25192 for appointments and consultation guidance with our clinical team.",
  },
  {
    question: "At what age should a woman begin routine Pap smear screening?",
    answer: "Routine Pap smear screening is recommended beginning at age 21 (or earlier if sexually active), repeating every 3 years to detect pre-cancerous cervical changes early.",
  },
  {
    question: "What treatments are available for severe menopausal symptoms?",
    answer: "Dr. Nithya provides medical support, nutritional supplementation, bone density management, and lifestyle guidance to relieve hot flashes, sleep disturbance, mood swings, and vaginal dryness.",
  },
  {
    question: "Can teenagers consult for painful or irregular periods?",
    answer: "Yes. We offer compassionate, reassuring adolescent consultations addressing dysmenorrhea (period cramps), irregular cycles, and anemia in a welcoming, private environment.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHealthNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Holistic Women's Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Women's Health &amp; Prevention<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Personalized clinical support, preventive cancer screenings, and life-stage wellness guidance for every milestone of a woman's journey.
          </p>
        </div>
      </HeroGradientSection>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))] mb-3">
              Lifelong Care
            </div>
            <h2 className="text-3xl font-bold text-nila-navy mb-4">Wellness &amp; Prevention Across Every Decade</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini, MBBS, DGO</Link>, our department provides custom wellness surveillance to address unique health requirements across each phase of life: from adolescent puberty transitions, through active maternal periods, and into post-menopausal health management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Shield, title: "Screening & Prevention", text: "Regular Pap smears, cervical cancer screening, and clinical breast checks to catch conditions early." },
              { icon: Heart, title: "Hormonal Harmony", text: "Targeted evaluation for thyroid disorders, PCOS/PCOD, and perimenopausal transitional symptoms." },
              { icon: Activity, title: "Long-Term Vitality", text: "Personalized lifestyle guidance, nutritional blood profiles, and preventive bone density preservation." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                <item.icon className="h-8 w-8 text-[hsl(var(--nila-warm))] mb-4 mx-auto" />
                <h3 className="font-bold text-nila-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Deep Clinical Guide 1: Cervical Cancer Screening & Breast Health */}
          <div className="bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-border/80 mb-20">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
                <FileCheck className="h-4 w-4" /> Preventive Oncology
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">Cervical Cancer Screening (Pap Smears) &amp; Breast Care</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Cervical cancer is one of the most preventable cancers in women when pre-cancerous lesions are detected early through routine screening. At Nila Hospital, we provide comfortable, confidential screening procedures in a dignified female-led environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                <h4 className="font-bold text-nila-navy text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" /> The Pap Smear Screening
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Pap smear involves gently collecting superficial cells from the cervix during a brief, painless speculum examination. The sample is examined cytologically to detect cellular dysplasias years before they can progress into invasive cancer.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Recommended every 3 years for women aged 21–65</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Combined with high-risk HPV DNA testing when indicated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Rapid report review directly with Dr. Nithya</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                <h4 className="font-bold text-nila-navy text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[hsl(var(--nila-warm))]" /> Clinical Breast Examination
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regular physical breast examinations are critical for distinguishing common benign conditions (such as fibroadenomas or hormonal breast cysts) from solid, irregular lesions that require diagnostic mammography or ultrasound.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>Comprehensive palpation of breast and axillary lymph nodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>One-on-one training on monthly home self-examinations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>Evaluation of breast pain (mastalgia) and nipple discharge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Clinical Guide 2: Life-Stage Care (Adolescence to Menopause) */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
                <CalendarHeart className="h-4 w-4" /> Comprehensive Stages
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">Dedicated Care Across Every Milestone</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                A woman's physiological needs change across her lifetime. Our clinical protocols ensure you receive specific, evidence-based care at every age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                  01
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Adolescent Health (Ages 12–19)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Supportive, reassuring guidance for young girls experiencing onset of menstruation, dysmenorrhea (severe cramps), heavy flow, and adolescent iron-deficiency anemia.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                  <li>• Empathic period management</li>
                  <li>• Early detection of metabolic PCOS markers</li>
                  <li>• Dietary counseling for growing teens</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                  02
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Pre-Conception &amp; Reproductive (20s–30s)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive health optimization before planning pregnancy. Checking thyroid function, baseline hemoglobin, blood sugar, rubella immunity, and pelvic ultrasound status.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                  <li>• Pre-pregnancy blood work &amp; scans</li>
                  <li>• High-dose folic acid initiation</li>
                  <li>• Ovulation and cycle timing advice</li>
                </ul>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                  03
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Menopause &amp; Beyond (40s–50s+)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Navigating the perimenopausal transition with dignity. Managing hot flashes, sleep disturbances, mood swings, metabolic changes, and preventing post-menopausal osteopenia.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                  <li>• Hot flash &amp; night sweat relief</li>
                  <li>• Calcium &amp; Vitamin D3 bone therapy</li>
                  <li>• Endometrial health surveillance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clinical Guide 3: Annual Well-Woman Checkup Program */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Annual Well-Woman Checkup Components</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Routine Cervical Pap Smears & HPV Screening",
                "Clinical Breast Examination & Self-Exam Training",
                "Pelvic Ultrasound for Uterus & Ovarian Health",
                "Complete Blood Count (CBC) & Anemia Check",
                "Fasting Blood Sugar & Lipid Profile Screening",
                "Thyroid Stimulating Hormone (TSH) Evaluation",
                "Blood Pressure & Cardiovascular Risk Assessment",
                "One-on-One Lifestyle Consultation with Dr. Nithya"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card p-3.5 rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                  <span className="font-semibold text-nila-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interlinks */}
          <div className="text-center p-8 bg-card rounded-2xl border border-border shadow-sm">
            <h4 className="text-xl font-bold text-nila-navy mb-2">Need Treatment for Fibroids, PCOS, or Menstrual Pain?</h4>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-4">
              Consult with Dr. Nithya Subashini at our specialized gynaecology clinic in Namakkal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/gynaecology-namakkal"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-[hsl(var(--nila-warm))] transition-colors"
              >
                Gynaecology &amp; Fibroid Clinic <ArrowRight className="h-4 w-4" />
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

          <MedicalDisclaimer />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Wellness FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Frequently Asked Wellness Questions</h2>
            <p className="text-muted-foreground text-sm mt-2">Guidance on checkups, screenings, and women's health milestones.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {womensHealthFaqs.map((faq, idx) => (
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
            Take Charge of Your Health Today
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Schedule a routine health screening or consultation at Nila Hospital Namakkal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "womens_health_cta_call", service_name: "womens_health", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "womens_health_cta_directions", service_name: "womens_health", link_url: hospital.mapsUrl }}
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
