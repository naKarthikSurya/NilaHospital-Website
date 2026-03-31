import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const MAPS_URL =
  "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

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
      title="Best Maternity & Gynaecology Hospital in Namakkal | Nila Hospital"
      description="Nila Hospital is Namakkal's trusted maternity & gynaecology hospital. Expert care for normal delivery, C-section, PCOS & high-risk pregnancy. Call 24/7."
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
            Best Maternity &amp; Gynaecology<br />
            <span className="text-[hsl(var(--nila-warm))] text-3xl md:text-5xl">Hospital in Namakkal</span>
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
              <h3 className="text-3xl font-bold text-nila-navy">Pre-conception & Early Pregnancy Care</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Infertility and pre-conception hurdles can be stressful for couples. We provide detailed <strong>ANC screenings</strong>, hormonal management, and genetic counselling to ensure your body is ready for the beautiful journey ahead.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Nithya Subashini specializes in <strong>High-Risk Pregnancy</strong> monitoring, ensuring that every complication is detected and managed early.
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
                    We prioritize <strong>Natural Normal Delivery</strong> whenever safe for the mother and baby. Our labor rooms are designed for comfort and privacy, promoting a stress-free environment.
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
              <p className="text-lg text-white/80 leading-relaxed mb-0">
                Our commitment extends beyond delivery. We offer specialized care for <strong>PCOS / PCOD management</strong>, combining clinical expertise with lifestyle modifications to help patients regain hormonal balance and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-24 bg-muted/30">
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
                  "Every patient at Nila Hospital is seen directly by <span className="text-[hsl(var(--nila-warm))]">Dr. Nithya Subashini (MBBS, DGO)</span>, ensuring continuity of care that is often missing in larger corporate hospitals."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Compassionate & Respectful Care",
                "A Clean & Sterile Medical Environment",
                "Expertise in High-Risk Pregnancies",
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
      <section className="py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-nila-navy mb-8">Comprehensive Gynaecological Care</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Our Gynaecology department also addresses complex issues like <strong>uterine fibroids</strong>, ovarian cysts, and menstrual irregularities. We utilize modern diagnostic tools and evidence-based medicine (citing WHO standards) to provide treatments that are both safe and effective.
          </p>
          <p className="text-2xl font-bold text-primary italic">
            Experience the difference of personalized medical care at Namakkal's most trusted maternity center.
          </p>
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
