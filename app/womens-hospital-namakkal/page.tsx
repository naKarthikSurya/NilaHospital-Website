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
  Baby,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Stethoscope,
  Clock,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { womensHospitalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Women's Specialty Hospital in Namakkal | Nila Hospital",
  description: "Nila Hospital is one of the most trusted women's specialty hospitals in Namakkal, offering consultant-led maternity care, gynaecology, and hormonal wellness.",
  alternates: {
    canonical: "/womens-hospital-namakkal",
  },
};

const womensFaqs = [
  {
    question: "What services should a dedicated women's hospital offer?",
    answer: "A dedicated women's hospital should provide pregnancy care, normal delivery support, menstrual disorder treatment, preventive screening, and postnatal follow-up.",
  },
  {
    question: "Can I consult for irregular periods and hormonal concerns at Nila Hospital?",
    answer: "Yes. Nila Hospital provides clinical evaluation and long-term management plans for menstrual irregularities, hormonal imbalances (PCOS/PCOD), and related gynaecological symptoms.",
  },
  {
    question: "How can I book an appointment with Nila Hospital?",
    answer: "You can call +91 96552 25192 for consultation and appointment support.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHospitalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Dedicated Women's Center
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Women's Specialty Hospital<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Personalized, consultant-led healthcare for women across every phase of life — from adolescence to motherhood and beyond.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))] mb-3">
                Women-Centered Medicine
              </div>
              <h2 className="text-3xl font-bold text-nila-navy mb-6">Care for Every Stage of Womanhood</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nila Hospital is purposefully built as a supportive, private space for women. Led directly by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini, MBBS, DGO</Link>, we ensure you receive expert clinical attention in an environment designed for your comfort and dignity.
              </p>
              <div className="space-y-5">
                {[
                  {
                    icon: Baby,
                    title: "Advanced Maternity & Birth",
                    desc: "Comprehensive antenatal monitoring, natural delivery prioritization, and sterile C-section suites.",
                    href: "/maternity-hospital-namakkal"
                  },
                  {
                    icon: Heart,
                    title: "Gynaecology & Hormonal Health",
                    desc: "Diagnosis and treatments for uterine fibroids, ovarian cysts, PCOS/PCOD, and menstrual irregularities.",
                    href: "/gynaecology-namakkal"
                  },
                  {
                    icon: Shield,
                    title: "Preventive Screenings & Wellness",
                    desc: "Pap smears, cervical cancer prevention, breast examinations, and perimenopause counselling.",
                    href: "/womens-health-namakkal"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="bg-[hsl(var(--nila-warm-light))] p-2.5 rounded-xl shrink-0 h-fit">
                      <item.icon className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-nila-navy">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                      <Link href={item.href} className="text-primary text-xs font-semibold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-nila-navy mb-6">Why Women Choose Nila Hospital</h3>
              <ul className="space-y-4">
                {[
                  "Direct Senior Woman Consultant Consultations",
                  "Private, Confidential Examination & Labor Suites",
                  "Supportive Pre-Conception & Infertility Guidance",
                  "Modern Diagnostic Ultrasound & Laboratory Testing",
                  "Empathetic, Experienced Female Nursing Staff",
                  "Unhurried Consultations Where You Are Truly Heard"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span className="font-medium text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/why-choose-nila-hospital-namakkal"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--nila-warm))] hover:underline"
                >
                  Discover more about our care philosophy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Stage Care */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">Complete Health Support Across Every Decade</h2>
            <p className="text-muted-foreground text-lg">
              A woman's health requirements evolve over time. We provide continuous clinical guidance tailored to each biological phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-nila-navy">Adolescent Health</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gentle, empathetic care for teenage girls experiencing their first periods, cycle irregularities, acne or weight changes linked to PCOS, and menstrual pain.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                <li>• Period pain & heavy flow guidance</li>
                <li>• Early PCOS metabolic screening</li>
                <li>• Nutritional counseling for young women</li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-nila-navy">Reproductive & Maternity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Evidence-based care for family planning, pre-conception optimization, trimester-by-trimester antenatal scans, supportive normal labor, and emergency obstetric procedures.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                <li>• Pre-pregnancy blood work & ultrasound</li>
                <li>• Comprehensive ANC packages</li>
                <li>• Postpartum recovery & lactation support</li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-nila-navy">Mature & Menopausal Care</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proactive screening and symptom management for women in their 40s, 50s, and beyond, addressing hot flashes, mood fluctuations, bone density loss, and uterine fibroids.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5 pt-2 border-t border-border">
                <li>• Routine Pap smears & cervical exams</li>
                <li>• Perimenopause symptom management</li>
                <li>• Minimally invasive surgical consultations</li>
              </ul>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Questions About Women's Care in Namakkal</h2>
            <p className="text-muted-foreground text-sm mt-2">Answers regarding specialist appointments, conditions treated, and care standards.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {womensFaqs.map((faq, idx) => (
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
            Consult With Our Women's Healthcare Specialists
          </h2>
          <p className="text-nila-light-blue text-sm md:text-base max-w-xl mx-auto mb-8">
            Experience the difference of dedicated, respectful women's healthcare at Nila Hospital Namakkal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "womens_hospital_cta_call", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "womens_hospital_cta_directions", link_url: hospital.mapsUrl }}
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
