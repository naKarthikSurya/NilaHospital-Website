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
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { womensHealthNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Women's Preventive Healthcare in Namakkal | Nila Hospital",
  description: "Comprehensive women's health in Namakkal — preventive screenings, Pap smears, cervical cancer prevention, menopause care, and adolescent support with Dr. Nithya Subashini.",
  alternates: {
    canonical: "/womens-health-namakkal",
  },
};

const womensHealthFaqs = [
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
  {
    question: "Do you offer pre-pregnancy wellness checkups?",
    answer: "Yes. Our pre-conception consultations evaluate blood parameters, thyroid levels, rubella immunity, and folic acid optimization before conception.",
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
            Personalized clinical support, preventive cancer screenings, and wellness guidance for every milestone of a woman's life.
          </p>
        </div>
      </HeroGradientSection>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))]">
                  Lifelong Care
                </div>
                <h2 className="text-3xl font-bold text-nila-navy">Wellness &amp; Prevention Across Life Stages</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Led by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini, MBBS, DGO</Link>, our department provides custom wellness surveillance to address unique health requirements across each phase of life: from adolescent puberty transitions, through active maternal periods, and into post-menopausal health management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "Screening", text: "Regular Pap smears, cervical cancer prevention, and breast checks." },
                  { icon: Heart, title: "Hormonal Care", text: "Evaluation for thyroid, PCOS, and perimenopause transitions." },
                  { icon: Activity, title: "Long-Term Wellness", text: "Personalized lifestyle guidance and preventive bone health." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                    <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))] mb-3" />
                    <h4 className="font-bold text-nila-navy mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Preventive Screenings Detail */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-nila-navy">Early Detection Saves Lives</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Many serious conditions — including cervical dysplasia, uterine fibroids, and breast lumps — can be treated with minimal intervention when detected early. We provide comfortable, private screening procedures with rapid report turnarounds.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-muted/30 p-8 md:p-10 rounded-[2.5rem] border border-border">
              <h3 className="text-2xl font-bold text-nila-navy mb-6">Key Wellness Programs</h3>
              <ul className="space-y-4">
                {[
                  "Routine Cervical Pap Smears & HPV Screening",
                  "Breast Examination & Self-Exam Education",
                  "Personalized Pre-Conception Counseling",
                  "Adolescent Menstrual Health & Anemia Screenings",
                  "Perimenopause & Menopause Symptom Relief",
                  "Post-Menopausal Bone Density Guidance",
                  "Confidential Family Planning & Contraception",
                  "Hormonal Weight & Metabolism Reviews"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span className="font-medium text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/gynaecology-namakkal"
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 hover:text-[hsl(var(--nila-warm))]"
                >
                  View Gynaecology &amp; Fibroid Clinic <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
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

      {/* Trust Block */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nila-navy mb-4">Built on a Foundation of Trust</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nila Hospital Namakkal provides specialized care with direct access to senior woman consultants. This ensures that every clinical decision is made with high expertise and a deep understanding of patient comfort.
          </p>
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
