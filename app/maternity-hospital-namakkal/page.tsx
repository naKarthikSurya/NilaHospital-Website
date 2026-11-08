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
  Activity,
  AlertCircle,
  FileText,
  HeartHandshake,
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
    question: "Why choose Nila Hospital as a maternity hospital in Namakkal?",
    answer: "Nila Hospital provides complete maternity care from ANC to delivery and postnatal follow-up with specialist-led continuity. Every patient is directly attended by Dr. Nithya Subashini without junior doctor handoffs.",
  },
  {
    question: "Is normal delivery available at Nila Hospital?",
    answer: "Yes, absolutely. Our clinical philosophy strongly favors natural, normal delivery whenever medically safe for mother and child. We provide calm labor environments, gentle encouragement, and continuous fetal monitoring.",
  },
  {
    question: "How can I contact Nila Hospital for delivery planning?",
    answer: "Call +91 96552 25192 to discuss pregnancy monitoring, delivery planning, and maternity consultation with our team.",
  },
  {
    question: "What if a Caesarean Section (C-Section) becomes medically necessary?",
    answer: "We maintain two fully equipped, sterile Operation Theatres available 24/7. When medically indicated for mother or baby safety, our surgical team and senior anaesthesiologist Dr. Arul Ramasamy provide prompt, gold-standard surgical care.",
  },
  {
    question: "Are labor suites and patient rooms private?",
    answer: "Yes. We offer private, hygienic labor and post-delivery rooms designed to give families comfort, peace of mind, and dignity during childbirth.",
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
            One of the most trusted maternity centers in Namakkal, combining maternal clinical excellence, natural delivery advocacy, and round-the-clock emergency surgical readiness.
          </p>
        </div>
      </HeroGradientSection>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-4">A Trusted Foundation for New Life</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Named after "Nila" (the Moon) to represent nurturing and calm care, our center on Salem Road, Namakkal, is designed around the safety, dignity, and personal comfort of every expectant mother.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Baby, title: "Senior Consultant Led", desc: "Every patient is personally attended by Dr. Nithya Subashini, MBBS, DGO without junior doctor handoffs." },
              { icon: ShieldCheck, title: "Sterile Clinical Safety", desc: "Two sterile OTs, strict infection controls, and modern neonatal resuscitation facilities." },
              { icon: Clock, title: "24/7 Obstetric Cover", desc: "Round-the-clock emergency support for sudden labor onset, pain relief, and immediate admission." },
              { icon: HeartPulse, title: "Mother & Baby Wellness", desc: "Holistic care covering antenatal scans, supportive birth, and complete postnatal lactation care." }
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

          {/* Clinical Guide 1: Natural Normal Delivery vs C-Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
            <div className="space-y-6">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))]">
                Our Birth Philosophy
              </div>
              <h3 className="text-3xl font-bold text-nila-navy">Natural Normal Delivery as Priority</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                At Nila Hospital, normal delivery is not just an option—it is our primary clinical commitment. We believe pregnancy is a natural physiological process that demands time, patient reassurance, and attentive monitoring rather than unnecessary interventions.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Led by <Link href="/doctors/nithya-subashini" className="text-primary font-semibold hover:underline">Dr. Nithya Subashini</Link>, our clinical team allows labor to progress naturally whenever mother and child remain stable. We support mothers with non-pharmacological comfort measures, breathing coaching, upright labor postures, and intermittent or continuous Cardiotocography (CTG) fetal monitoring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Continuous Cardiotocography (CTG)",
                  "Comfort-Focused Labor Postures",
                  "Supportive Family Companionship",
                  "Dedicated 1-on-1 Nursing Oversight",
                  "Gentle Perineal Protection Techniques",
                  "Immediate Skin-to-Skin Newborn Bonding"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-muted/30 p-8 md:p-10 rounded-[2rem] border border-border shadow-sm">
              <div className="text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-primary/10">
                Surgical Excellence
              </div>
              <h3 className="text-2xl font-bold text-nila-navy">Emergency & Planned C-Section Protocols</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While natural childbirth is our priority, maternal and newborn safety is paramount. If medical complications arise—such as persistent fetal distress, breech presentation, severe pre-eclampsia, or obstructed labor progression—our team executes an immediate, smooth transition to surgical delivery.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our twin Operation Theatres are staffed 24/7 with senior anaesthesiologist <Link href="/doctors/arul-ramasamy" className="text-primary font-semibold hover:underline">Dr. Arul Ramasamy</Link>, ensuring optimal regional spinal anaesthesia, rapid pain control, minimal maternal blood loss, and rapid post-operative recovery.
              </p>
              <div className="p-4 bg-background rounded-xl border border-border">
                <div className="font-semibold text-nila-navy text-sm mb-1">Looking for Antenatal Monitoring?</div>
                <p className="text-xs text-muted-foreground mb-3">Learn about our trimester-by-trimester scans, blood work, and high-risk pregnancy protocols.</p>
                <Link href="/obstetrics-namakkal" className="text-primary text-xs font-bold inline-flex items-center gap-1 hover:text-[hsl(var(--nila-warm))]">
                  Explore Obstetrics &amp; ANC Care <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Clinical Guide 2: When to Come to the Hospital (Symptoms & Warning Signs) */}
          <div className="bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-border/80 mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-primary/10 mb-3">
                <AlertCircle className="h-4 w-4" /> Patient Guidance
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">When Should You Come to the Hospital?</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Knowing when labor has truly begun helps families prepare calmly. Here is clinical guidance from Dr. Nithya Subashini on true labor signs versus early warning symptoms that require immediate evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                  01
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Active Labor Contractions</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Regular uterine tightening that occurs every 4 to 5 minutes, lasting 45–60 seconds, and progressively increasing in intensity regardless of resting or walking.
                </p>
                <div className="text-xs text-primary font-medium bg-primary/5 p-3 rounded-xl border border-primary/10">
                  Tip: Time the start of one contraction to the start of the next.
                </div>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--nila-warm-light))] flex items-center justify-center text-[hsl(var(--nila-warm))] font-bold text-sm">
                  02
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Rupture of Membranes (Water Breaking)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Any sudden gush or steady trickling of clear or straw-colored amniotic fluid. You should proceed to Nila Hospital promptly, even if contractions have not yet started.
                </p>
                <div className="text-xs text-primary font-medium bg-primary/5 p-3 rounded-xl border border-primary/10">
                  Note fluid color: Greenish or brownish tint indicates meconium and needs immediate evaluation.
                </div>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm">
                  03
                </div>
                <h4 className="font-bold text-nila-navy text-lg">Red Flag Symptoms (24/7 ER)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bright red vaginal bleeding, sudden decrease in baby movements, severe persistent abdominal headache with blurred vision (pre-eclampsia signs), or high fever.
                </p>
                <div className="text-xs text-destructive font-medium bg-destructive/5 p-3 rounded-xl border border-destructive/10">
                  Direct 24/7 Obstetric Hotline: +91 96552 25192
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Guide 3: Diagnostic & Monitoring Protocols */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 bg-card p-8 md:p-10 rounded-[2rem] border border-border shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-nila-navy">On-Arrival Diagnostic Protocols</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When an expectant mother arrives at Nila Hospital, she is admitted directly to our sterile evaluation area where Dr. Nithya Subashini and our senior nursing team conduct immediate vital assessments:
              </p>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-nila-navy">Cardiotocography (CTG / NST):</strong>
                    <span className="text-muted-foreground"> Measures fetal heart rate variability in response to contractions, providing real-time data on fetal oxygenation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Stethoscope className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-nila-navy">Cervical Assessment & Pelvic Examination:</strong>
                    <span className="text-muted-foreground"> Gentle check of cervical effacement, dilation, station, and membrane integrity.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-nila-navy">Maternal Vitals & Biochemistry:</strong>
                    <span className="text-muted-foreground"> Blood pressure screening, urine protein check, and blood grouping to prevent intrapartum complications.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Baby className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-nila-navy">Bedside Ultrasound Verification:</strong>
                    <span className="text-muted-foreground"> Quick scan confirms cephalic presentation, placental location, and adequate amniotic fluid levels.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))]">
                Clinical Rigour
              </div>
              <h3 className="text-3xl font-bold text-nila-navy">Maternal Safety &amp; Infection Prevention</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Childbirth requires an environment of uncompromising hygiene. Nila Hospital strictly adheres to surgical sterilization protocols across our delivery suites and dual operation theatres.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Every instrument is processed through multi-stage autoclave sterilization. Our labor rooms are sanitized before and after each admission, ensuring zero compromise on the well-being of the mother and newborn baby.
              </p>
              <div className="pt-2">
                <Link
                  href="/why-choose-nila-hospital-namakkal"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-[hsl(var(--nila-warm))] transition-colors"
                >
                  Learn more about our clinical safety protocols <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Clinical Guide 4: Postnatal Recovery & Newborn Care */}
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[hsl(var(--nila-warm-light))] mb-3">
                <HeartHandshake className="h-4 w-4" /> Postnatal Guidance
              </div>
              <h3 className="text-3xl font-bold text-nila-navy mb-4">Post-Delivery Recovery &amp; Newborn Support</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our care extends far beyond the delivery room. The first days after birth are vital for establishing maternal recovery, successful breastfeeding, and healthy neonatal adaptation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">The First Golden Hour</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Immediate skin-to-skin contact between mother and baby, delayed umbilical cord clamping where clinically indicated, and initiation of early colostrum feeding to build the baby's immune foundation.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">Lactation &amp; Feeding Support</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated, compassionate nursing support to guide new mothers on correct latching techniques, posture, preventing sore nipples, and managing breast engorgement with calm reassurance.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm space-y-3">
                <h4 className="font-bold text-nila-navy text-lg">Maternal Recovery &amp; Healing</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Detailed monitoring of postpartum bleeding (lochia), gentle perineal care after normal delivery, sterile wound care after C-section, and personalized nutritional guidance for new mothers.
                </p>
              </div>
            </div>
          </div>

          {/* Book Pre-Delivery Tour Card */}
          <div className="bg-muted/40 p-8 md:p-12 rounded-[2.5rem] border border-border/70 text-center max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-nila-navy mb-4">Schedule Your Maternity Consultation</h4>
            <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the gentle warmth of our maternity facility on Salem Road, Namakkal. Meet Dr. Nithya Subashini to discuss your birth preferences, antenatal schedule, and hospital admission details.
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
