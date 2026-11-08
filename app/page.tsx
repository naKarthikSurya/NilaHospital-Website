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
  Clock,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  HeartPulse,
  Baby,
} from "lucide-react";
import { homePageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  description: "Nila Hospital is Namakkal's leading center for obstetrics, gynaecology, and general medicine. Expert surgical capabilities and dedicated patient care.",
  alternates: {
    canonical: "/",
  },
};

const quickInfoCards = [
  {
    icon: Phone,
    title: "Our Contact",
    value: hospital.phoneDisplay,
    sub: "Available 24/7",
    href: hospital.phoneHref,
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: `${hospital.address.streetAddress.split(',').slice(-2).join(',').trim()}`,
    sub: `${hospital.address.addressLocality}, ${hospital.address.addressRegion} ${hospital.address.postalCode}`,
    href: hospital.mapsUrl,
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    value: "9 AM - 1 PM & 6 PM - 9 PM",
    sub: "Mon – Fri (Sat/Sun 9 AM - 1 PM)",
    href: null,
  }, 
];

const coreSpecialties = [
  {
    title: "Maternity & Normal Delivery",
    desc: "Compassionate antenatal care, natural birth prioritization, and 24/7 emergency maternity support in Namakkal.",
    href: "/maternity-hospital-namakkal",
    badge: "Maternity Care",
    icon: Baby,
  },
  {
    title: "Gynaecology & Fibroid Clinic",
    desc: "Specialized clinical diagnosis and management for uterine fibroids, ovarian cysts, PCOS, and menstrual disorders.",
    href: "/gynaecology-namakkal",
    badge: "Gynaecology",
    icon: HeartPulse,
  },
  {
    title: "Obstetrics & High-Risk Pregnancy",
    desc: "Detailed ANC screenings, foetal well-being monitoring, and risk-managed delivery planning with senior specialists.",
    href: "/obstetrics-namakkal",
    badge: "Obstetrics",
    icon: ShieldCheck,
  },
  {
    title: "Women's Preventive Health",
    desc: "Routine screenings, cancer prevention, pap smears, menopause care, and hormonal health guidance for women.",
    href: "/womens-health-namakkal",
    badge: "Women's Wellness",
    icon: CheckCircle,
  },
  {
    title: "General Medicine & Outpatient",
    desc: "Primary care, seasonal infections, chronic disease monitoring, and routine medical investigations.",
    href: "/general-medicine-namakkal",
    badge: "Primary Health",
    icon: Clock,
  },
  {
    title: "Why Families Choose Nila Hospital",
    desc: "Discover why hundreds of families across Namakkal trust Dr. Nithya Subashini and our dedicated team.",
    href: "/why-choose-nila-hospital-namakkal",
    badge: "Patient Trust",
    icon: ShieldCheck,
  },
];

const homeFaqs = [
  {
    question: "What services does Nila Hospital in Namakkal specialize in?",
    answer: "Nila Hospital specializes in Obstetrics, Gynaecology, Maternal Care, Normal and Caesarean Delivery, Antenatal Monitoring, Infertility and Pre-conception Counselling, and General Medicine.",
  },
  {
    question: "Who is the senior doctor at Nila Hospital?",
    answer: "The hospital is led by Dr. Nithya Subashini, MBBS, DGO, a senior consultant obstetrician and gynaecologist who personally consults with every patient, providing direct continuity of care.",
  },
  {
    question: "What are the clinic hours and is emergency support available?",
    answer: "Outpatient clinic hours are Monday to Friday from 9:00 AM – 1:00 PM and 6:00 PM – 9:00 PM, and Saturday & Sunday from 9:00 AM – 1:00 PM. Emergency obstetric and delivery care is accessible 24/7.",
  },
  {
    question: "Does Nila Hospital prioritize normal deliveries?",
    answer: "Yes. We prioritize natural normal delivery whenever clinically safe for mother and baby, with modern sterile operation theatres available if a surgical delivery is medically indicated.",
  },
  {
    question: "Where is Nila Hospital located in Namakkal?",
    answer: "Nila Hospital is located at 743, Salem Road, Swamy Nagar, Namakkal, Tamil Nadu 637001 (opposite Reynolds Car Showroom). Call +91 96552 25192 for appointments and directions.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-24 md:py-36 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-[hsl(var(--nila-warm))]/10 blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm mb-6 tracking-widest uppercase font-medium border border-white/10">
            Namakkal's Women's Specialty Hospital
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.15]">
            Best Maternity &amp; Gynaecology<br />
            <span className="text-[hsl(var(--nila-warm))] text-3xl md:text-5xl">Hospital in Namakkal</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            <Link href="/gynaecology-namakkal" className="underline hover:text-white transition-colors">
              Obstetrics &amp; Gynaecology Care in Namakkal
            </Link>{" "}
            — trusted by women and families across the region.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-8">
            {quickInfoCards.map((card) => (
              <Card key={card.title} className="shadow-xl border-0 nila-card-hover bg-card text-left h-full">
                <CardContent className="p-5 md:p-6 h-full flex items-center gap-4">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-2.5 shrink-0">
                    <card.icon className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-1">
                      {card.title}
                    </div>
                    {card.href ? (
                      <ClientCTA
                        event={card.href.startsWith("tel:") ? "phone_click" : "directions_click"}
                        params={{
                          cta_location: card.href.startsWith("tel:") ? "quick_info_phone" : "quick_info_location",
                          link_url: card.href
                        }}
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors text-[1rem] leading-tight block"
                      >
                        {card.value}
                      </ClientCTA>
                    ) : (
                      <div className="font-semibold text-foreground text-[1rem] leading-tight">{card.value}</div>
                    )}
                    {card.sub ? (
                      <div className="text-muted-foreground text-xs mt-1 leading-tight">{card.sub}</div>
                    ) : null}
                    {"extra" in card && typeof card.extra === 'string' && (
                      <div className="text-muted-foreground text-xs leading-tight">{card.extra}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "hero_call_now", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
              className="w-full sm:w-auto"
            >
              <Button className="h-9 min-h-9 bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-6 gap-2 w-full sm:w-auto shadow-lg shadow-[hsl(var(--nila-warm))]/20 text-sm leading-none">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "hero_get_directions", link_url: hospital.mapsUrl }}
              href={hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="h-9 min-h-9 bg-white text-nila-navy hover:bg-white/90 font-bold px-6 gap-2 w-full sm:w-auto text-sm leading-none">
                <MapPin className="h-4 w-4" /> Get Directions
              </Button>
            </ClientCTA>
          </div>
        </div>
      </HeroGradientSection>

      {/* Maternal Journey Narrative */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-nila-navy mb-8 leading-tight">
              Maternal Excellence:<br />
              <span className="text-[hsl(var(--nila-warm))]">Your Journey to Motherhood</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Choosing where to bring your child into the world is one of the most significant decisions a family can make. At <strong>Nila Hospital</strong>, we take this responsibility with the utmost seriousness and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Early Care
              </div>
              <h3 className="text-3xl font-bold text-nila-navy">Pre-conception &amp; Early Pregnancy Care</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Infertility and pre-conception hurdles can be stressful for couples. We provide detailed <strong>ANC screenings</strong>, hormonal management, and genetic counselling to ensure your body is ready for the beautiful journey ahead.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <Link href="/doctors/nithya-subashini" className="text-primary hover:text-[hsl(var(--nila-warm))] font-semibold underline underline-offset-4">
                  Dr. Nithya Subashini
                </Link>{" "}
                specializes in{" "}
                <Link href="/obstetrics-namakkal" className="font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-2">
                  Antenatal Pregnancy Monitoring
                </Link>
                , ensuring that every milestone is tracked and managed with clinical precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Blood Work & Screenings",
                  "Lifestyle Counselling",
                  "Advanced Ultrasound"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[hsl(var(--nila-warm))]/5 rounded-3xl -rotate-1" />
              <Card className="relative border-border/50 shadow-2xl overflow-hidden rounded-3xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-[hsl(var(--nila-warm))] mb-6">The Nila Birth Experience</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    We prioritize <strong>Natural Normal Delivery</strong> whenever safe for the mother and baby. Our dedicated{" "}
                    <Link href="/maternity-hospital-namakkal" className="text-primary underline underline-offset-4 font-semibold hover:text-[hsl(var(--nila-warm))]">
                      maternity care in Namakkal
                    </Link>{" "}
                    features labor suites designed for comfort and privacy, promoting a calm, supportive environment.
                  </p>
                  <div className="p-6 bg-background rounded-2xl border border-border/50 shadow-inner">
                    <p className="text-sm font-medium italic text-primary leading-relaxed">
                      "If a surgical delivery (C-Section) is medically indicated, our state-of-the-art sterile Operation Theatre and senior surgical nursing staff provide gold-standard clinical care."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-12 bg-nila-navy rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Leading Women's Specialty Hospital</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Our commitment extends beyond delivery. We offer specialized gynaecological care, combining clinical expertise with lifestyle guidance to help patients maintain long-term women's health and hormonal wellness.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/why-choose-nila-hospital-namakkal"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--nila-warm))] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[hsl(var(--nila-warm))]/90 transition-colors shadow-md"
                >
                  Why We Are Trusted in Namakkal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clinical Specialties (SEO Internal Discovery Grid) */}
      <section className="py-24 bg-muted/20 border-t border-border/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block bg-[hsl(var(--nila-warm-light))] mb-3">
              Departments &amp; Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-nila-navy leading-tight">
              Specialized Care For Every Stage of Life
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Comprehensive women's healthcare, maternity services, and clinical treatments in Namakkal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSpecialties.map((specialty) => (
              <Card key={specialty.href} className="group border border-border/60 hover:border-[hsl(var(--nila-warm))]/40 transition-all duration-300 hover:shadow-xl bg-card rounded-2xl flex flex-col justify-between">
                <CardContent className="p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {specialty.badge}
                    </span>
                    <h3 className="text-xl font-bold text-nila-navy mb-3 group-hover:text-[hsl(var(--nila-warm))] transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {specialty.desc}
                    </p>
                  </div>
                  <Link
                    href={specialty.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-[hsl(var(--nila-warm))] transition-colors mt-auto"
                  >
                    View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 text-center mb-12">
              <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-4">Foundation of Care</div>
              <h2 className="text-3xl md:text-5xl font-bold text-nila-navy">Why Trust Nila Hospital?</h2>
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a category like healthcare, trust is built on clinical transparency and patient satisfaction. 
              </p>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--nila-warm))]" />
                <p className="text-xl font-bold text-foreground leading-snug">
                  "Every patient at Nila Hospital is seen directly by{" "}
                  <Link href="/doctors/nithya-subashini" className="text-[hsl(var(--nila-warm))] hover:underline">
                    Dr. Nithya Subashini, MBBS, DGO
                  </Link>
                  , ensuring personalized attention, direct doctor-patient communication, and dedicated continuity of care throughout your treatment."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Compassionate & Respectful Care",
                "A Clean & Sterile Medical Environment",
                "Women-Centred Clinical Expertise",
                "Affordable & Transparent Pricing",
                "24/7 Emergency Obstetric Support",
                "Patient Privacy & Dignity"
              ].map((item, idx) => (
                <Card key={idx} className="border-0 shadow-sm bg-card hover:bg-white transition-colors">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-[hsl(var(--nila-warm-light))] p-2.5 rounded-xl shrink-0">
                      <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    </div>
                    <span className="font-semibold text-nila-navy leading-tight">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Gynaecology Services */}
      <section className="py-24 bg-muted/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-nila-navy mb-8">Comprehensive Gynaecological Care</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our Gynaecology department also addresses complex issues like <strong>uterine fibroids</strong>, ovarian cysts, and menstrual irregularities. We utilize modern diagnostic tools and evidence-based medicine to provide treatments that are both safe and effective.
          </p>
          <p className="text-xl font-bold text-primary italic mb-8">
            Experience the difference of personalized medical care at Namakkal's most trusted maternity center.
          </p>
          <div>
            <Link
              href="/gynaecology-namakkal"
              className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--nila-warm))] hover:underline"
            >
              Learn more about our Gynaecology Services in Namakkal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient FAQs (SEO Rich Snippets) */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-nila-navy">
              Common Questions About Nila Hospital
            </h2>
            <p className="text-muted-foreground text-base mt-3">
              Find quick answers regarding our services, consultation timings, and doctor visits.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {homeFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border/60 rounded-2xl px-6 bg-card shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-nila-navy text-base md:text-lg hover:no-underline hover:text-[hsl(var(--nila-warm))] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Your Health is Our Sole Priority
          </h2>
          <p className="text-nila-light-blue text-base md:text-lg mb-10 max-w-xl mx-auto">
            Reach out to us today. We are here to guide you through every step of your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "homepage_bottom_cta", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </ClientCTA>
            <ClientCTA
              event="service_cta_click"
              params={{ cta_location: "homepage_bottom_cta", service_name: "all" }}
              href="/services"
            >
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto text-base gap-2">
                Our Services <ArrowRight className="h-4 w-4" />
              </Button>
            </ClientCTA>
          </div>
        </div>
      </section>
    </>
  );
}
