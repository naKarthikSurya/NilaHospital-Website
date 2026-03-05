import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  Baby,
  Stethoscope,
  Shield,
  Star,
  CheckCircle,
  Bed,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Gallery from "@/components/Gallery";

const MAPS_URL =
  "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

const services = [
  { icon: Baby, title: "Pregnancy Care", desc: "Comprehensive ANC checkups and prenatal monitoring" },
  { icon: Heart, title: "Normal Delivery", desc: "Safe and supportive natural birth experience" },
  { icon: Activity, title: "C-Section", desc: "Expert surgical delivery when medically indicated" },
  { icon: Stethoscope, title: "PCOS / PCOD", desc: "Hormonal management and lifestyle guidance" },
  { icon: Shield, title: "Gynaecology", desc: "Treatment for infections, menstrual disorders, and more" },
  { icon: Star, title: "Preventive Care", desc: "Cervical screening, pre-conception counselling" },
];

const trustPoints = [
  "Personal attention — every patient seen by the doctor directly",
  "Women-focused environment with full privacy and dignity",
  "Sterile, clean OT and consultation rooms",
  "Clear communication in Tamil and English",
  "Compassionate, respectful care at every visit",
  "Transparent approach with no unnecessary procedures",
];

const quickInfoCards = [
  {
    icon: Phone,
    title: "Our Contact",
    value: "+91 96552 25192",
    sub: "Available 24/7",
    href: PHONE,
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Salem Rd, Swamy Nagar",
    sub: "Namakkal, Tamil Nadu 637001",
    href: MAPS_URL,
  },
  {
    icon: Clock,
    title: "Clinic Hours",
    value: "9 AM - 1 PM & 6 PM - 9 PM",
    sub: "Everyday",
    href: null,
  }, 
];

export default function Home() {
  return (
    <Layout 
      title="Nila Hospital | Best Gynaecology Specialty in Namakkal"
      description="Leading hospital for Obstetrics & Gynaecology in Namakkal. Expert pregnancy monitoring, infertility treatments, and safe maternity services. Care you trust."
    >
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
           Dedicated to<br />
            <span className="text-[hsl(var(--nila-warm))] text-3xl md:text-5xl">Maternal Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Obstetrics &amp; Gynaecology Care in Namakkal — trusted by women and families across the region.
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
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors text-[1rem] leading-tight block"
                      >
                        {card.value}
                      </a>
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
            <a href={PHONE} className="w-full sm:w-auto">
              <Button className="h-9 min-h-9 bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-6 gap-2 w-full sm:w-auto shadow-lg shadow-[hsl(var(--nila-warm))]/20 text-sm leading-none">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="h-9 min-h-9 bg-white text-nila-navy hover:bg-white/90 font-bold px-6 gap-2 w-full sm:w-auto text-sm leading-none">
                <MapPin className="h-4 w-4" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </HeroGradientSection>

      

      {/* Key Services */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">What We Offer</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              Our Key Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="border border-border nila-card-hover group overflow-hidden">
                <CardContent className="p-6">
                  <div className="bg-secondary rounded-2xl p-3 w-fit mb-4 group-hover:bg-[hsl(var(--nila-warm-light))] transition-colors">
                    <s.icon className="h-6 w-6 text-primary group-hover:text-[hsl(var(--nila-warm))] transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white gap-2 font-semibold">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Nila */}
      <section className="py-20 nila-gradient-warm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Promise</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              Why Choose Nila Hospital?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm border border-border nila-card-hover">
                <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-1.5 shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" />
                </div>
                <span className="text-foreground text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Snapshot */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="nila-gradient flex flex-col items-center justify-center p-12 min-h-64 relative">
                  <div className="absolute inset-0 bg-[hsl(var(--nila-warm))]/5" />
                  <div className="relative z-10">
                    <div className="bg-white/20 rounded-full p-8 mb-4 backdrop-blur-sm">
                      <Stethoscope className="h-16 w-16 text-white" />
                    </div>
                    <div className="text-white/60 text-sm">Doctor Photo</div>
                  </div>
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-block bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))] text-xs font-bold uppercase px-3 py-1 rounded-full mb-3 w-fit tracking-wider">
                    Senior Consultant
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Dr. Nithya Subashini
                  </h3>
                  <div className="text-muted-foreground text-sm mb-1">MBBS, DGO</div>
                  <div className="text-primary text-sm font-medium mb-5">Consultant Obstetrician & Gynaecologist</div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Patient-centered, respectful approach",
                      "Clear communication in Tamil & English",
                      "Strict privacy for every consultation",
                    ].map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE}>
                    <Button className="gap-2 w-full sm:w-auto bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white shadow-md">
                      <Phone className="h-4 w-4" /> Call for Consultation
                    </Button>
                  </a>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Expansion Paragraphs */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-nila max-w-none">
            <h2 className="text-3xl font-bold text-nila-navy mb-8 text-center nila-decoration nila-decoration-center inline-block pb-4 w-full">
              Maternal Excellence: Your Journey to Motherhood at Nila Hospital
            </h2>
            
            <div className="space-y-8 text-foreground leading-relaxed">
              <p>
                Choosing where to bring your child into the world is one of the most significant decisions a family can make. At <strong>Nila Hospital</strong>, we take this responsibility with the utmost seriousness and compassion. Our facility, located in the heart of <strong>Namakkal</strong>, has become a beacon of hope and health for thousands of women seeking expert <strong>Obstetrics & Gynaecology</strong> care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Pre-conception & Early Pregnancy Care</h3>
                  <p className="text-sm">
                    Infertility and pre-conception hurdles can be stressful for couples. We provide detailed <strong>ANC screenings</strong>, hormonal management, and genetic counselling to ensure your body is ready for the beautiful journey ahead. Dr. Nithya Subashini specializes in <strong>High-Risk Pregnancy</strong> monitoring, ensuring that every complication is detected and managed early.
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Comprehensive Blood Work & Screenings</li>
                    <li>Nutritional & Lifestyle Counselling</li>
                    <li>Advanced Ultrasound Monitoring</li>
                  </ul>
                </div>
                <div className="bg-[hsl(var(--nila-warm-light))] p-6 rounded-2xl border border-[hsl(var(--nila-warm))]/10">
                  <h3 className="text-xl font-bold text-[hsl(var(--nila-warm))]">The Nila Birth Experience</h3>
                  <p className="text-sm mt-3">
                    We prioritize <strong>Natural Normal Delivery</strong> whenever safe for the mother and baby. Our labor rooms are designed for comfort and privacy, promoting a stress-free environment. If a surgical delivery (<strong>C-Section</strong>) is medically indicated, our state-of-the-art sterile Operation Theatre and senior surgical nursing staff provide gold-standard clinical care.
                  </p>
                </div>
              </div>

              <p>
                As a leading <strong>Women's Specialty Hospital</strong>, our commitment extends beyond delivery. We offer specialized care for <strong>PCOS / PCOD</strong> management, which has become increasingly common among young women. Our approach combines clinical expertise with lifestyle modifications, helping our patients regain hormonal balance and confidence.
              </p>

              <div className="bg-muted p-8 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold text-nila-navy mb-4">Why Trust Nila Hospital in Namakkal?</h3>
                <p className="text-sm mb-6">
                  In a YMYL (Your Money or Your Life) category like healthcare, trust is built on clinical transparency and patient satisfaction. Every patient at Nila Hospital is seen directly by <strong>Dr. Nithya Subashini (MBBS, DGO)</strong>, ensuring continuity of care that is often missing in larger corporate hospitals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Compassionate & Respectful Care",
                    "A Clean & Sterile Medical Environment",
                    "Expertise in High-Risk Pregnancies",
                    "Affordable & Transparent Pricing",
                    "24/7 Emergency Obstetric Support",
                    "Patient Privacy & Dignity"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Our <strong>Gynaecology</strong> department also addresses complex issues like uterine fibroids, ovarian cysts, and menstrual irregularities. We utilize modern diagnostic tools and evidence-based medicine (citing WHO and international clinical standards) to provide treatments that are both safe and effective.
              </p>

              <p className="text-center font-semibold text-primary italic">
                Experience the difference of personalized medical care at Namakkal's most trusted maternity center.
              </p>
            </div>
          </div>
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
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
            <Link to="/services">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto text-base gap-2">
                Our Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
