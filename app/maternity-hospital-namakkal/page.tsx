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
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Stethoscope,
} from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { maternityHospitalNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Maternity Hospital in Namakkal | Normal Delivery & Care",
  description: "Nila Hospital is one of the most trusted maternity hospitals in Namakkal. Led by Dr. Nithya Subashini, MBBS, DGO, offering normal delivery focus, private labor suites, and 24/7 care.",
  alternates: {
    canonical: "/maternity-hospital-namakkal",
  },
};

const maternityFaqs = [
  {
    question: "Does Nila Hospital prioritize normal delivery?",
    answer: "Yes, absolutely. Our clinical philosophy strongly favors natural, normal delivery whenever medically safe for mother and child. We provide calm labor environments, gentle encouragement, and unhurried monitoring.",
  },
  {
    question: "Who will oversee my delivery and care?",
    answer: "Every delivery and antenatal consultation is personally overseen by Dr. Nithya Subashini, MBBS, DGO, ensuring you are cared for by an experienced senior consultant from start to finish.",
  },
  {
    question: "What if a Caesarean Section (C-Section) becomes medically necessary?",
    answer: "We have two fully equipped, sterile Operation Theatres available 24/7. In emergency situations or when medically indicated, our surgical team and senior anaesthesiologist Dr. Arul Ramasamy provide prompt, gold-standard surgical care.",
  },
  {
    question: "Are labor suites and patient rooms private?",
    answer: "Yes. We offer private, hygienic labor and post-delivery rooms designed to give families comfort, peace of mind, and dignity during this memorable milestone.",
  },
  {
    question: "Do you offer post-natal lactation and baby care support?",
    answer: "Yes. Our senior nursing staff and Dr. Nithya provide one-on-one lactation guidance, post-delivery recovery advice, and newborn care support before and after discharge.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maternityHospitalNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Consultant-Led Maternity Care
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maternity Hospital<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            One of the most trusted maternity centers in Namakkal, combining maternal excellence, natural delivery advocacy, and 24/7 emergency support.
          </p>
        </div>
      </HeroGradientSection>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">A Trusted Foundation for New Life</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Naming our hospital after the "Nila" (Moon) symbolizes the gentle, nurturing care we provide to every mother and newborn. We prioritize patient comfort and safety above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: "Senior Consultant Led", desc: "Every patient is personally attended by Dr. Nithya Subashini, MBBS, DGO." },
              { icon: ShieldCheck, title: "Sterile Clinical Safety", desc: "Two sterile OTs and strict infection prevention standards." },
              { icon: Clock, title: "24/7 Obstetric Cover", desc: "Round-the-clock emergency support for sudden labor onset." },
              { icon: HeartPulse, title: "Mother & Baby Wellness", desc: "Comprehensive antenatal, delivery, and post-partum recovery." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h4 className="font-bold text-nila-navy mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Deep Clinical Sections */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))]">
                Clinical Approach
              </div>
              <h3 className="text-3xl font-bold text-nila-navy">Natural Normal Delivery Priority</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                At Nila Hospital, normal delivery is our first commitment. We believe pregnancy is a natural physiological process that requires patient patience, encouragement, and vigilant medical oversight.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our labor rooms are designed for family privacy and calm. Rather than rushing interventions, our experienced clinical nursing staff works under <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini's</Link> direct supervision to guide expectant mothers through labor using comfortable positioning and continuous fetal monitoring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Continuous Foetal Heart Telemetry",
                  "Supportive Labor Companionship",
                  "Calm, Private Delivery Rooms",
                  "Clear, Honest Delivery Guidance",
                  "Pain-Relief Comfort Techniques",
                  "Immediate Skin-to-Skin Bonding"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-muted/30 p-8 md:p-10 rounded-[2rem] border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-nila-navy">Emergency Surgical Readiness (C-Section)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While natural birth is prioritized, maternal and newborn safety is always absolute. When medical indications arise — such as fetal distress, cord complications, or obstructed labor — our hospital is prepared with immediate emergency response.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With two sterile Operation Theatres on site, senior anaesthesiologist Dr. Arul Ramasamy, and trained neonatal nursing staff, emergency Caesarean deliveries are performed swiftly with minimal stress to the family.
              </p>
              <div className="p-4 bg-background rounded-xl border border-border">
                <div className="font-semibold text-nila-navy text-sm mb-1">Looking for Antenatal Monitoring?</div>
                <p className="text-xs text-muted-foreground mb-3">Learn about our month-by-month pregnancy scans and risk assessments.</p>
                <Link href="/obstetrics-namakkal" className="text-primary text-xs font-bold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                  Explore Obstetrics Care <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Book Tour Card */}
          <div className="mt-20 bg-muted/40 p-8 md:p-12 rounded-[2.5rem] border border-border/70 text-center max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-nila-navy mb-4">Visit Nila Hospital for a Pre-Delivery Consultation</h4>
            <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the warmth of our maternity facilities firsthand. Meet Dr. Nithya Subashini and discuss your personalized birth plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ClientCTA
                event="phone_click"
                params={{ cta_location: "maternity_tour_call", service_name: "maternity", link_url: hospital.phoneHref }}
                href={hospital.phoneHref}
              >
                <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 shadow-lg text-base">
                  <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
                </Button>
              </ClientCTA>
              <ClientCTA
                event="directions_click"
                params={{ cta_location: "maternity_tour_directions", service_name: "maternity", link_url: hospital.mapsUrl }}
                href={hospital.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white text-nila-navy font-bold px-8 gap-2 text-base">
                  <MapPin className="h-5 w-5" /> Hospital Directions
                </Button>
              </ClientCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Maternity FAQs
            </div>
            <h2 className="text-3xl font-bold text-nila-navy">Frequently Asked Maternity Questions</h2>
            <p className="text-muted-foreground text-sm mt-2">Answers to common queries from expectant mothers and families in Namakkal.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {maternityFaqs.map((faq, idx) => (
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

      {/* CTA Strip */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Beautiful Journey With Us</h2>
          <p className="text-nila-light-blue mb-6 max-w-xl mx-auto text-sm md:text-base">
            Professional maternity care, compassionate support, and 24/7 readiness for Namakkal's mothers and babies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/why-choose-nila-hospital-namakkal"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              Why Families Trust Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
