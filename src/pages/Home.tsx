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
    <Layout title="Best Obstetrics & Gynaecology Specialty in Namakkal">
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

      {/* Facilities Gallery */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Facility</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              A Clean, Safe Environment
            </h2>
          </div>
          <Gallery
            images={[
              { src: "/images/gallery/521A6952.JPG", alt: "Hospital Exterior" },
              { src: "/images/gallery/521A6945.JPG", alt: "Reception Area" },
              { src: "/images/gallery/521A6872.JPG", alt: "Consultation Room" },
              { src: "/images/gallery/521A6892.JPG", alt: "Operation Theatre" },
              { src: "/images/gallery/521A6864.JPG", alt: "Patient Ward" },
            ]}
          />
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
