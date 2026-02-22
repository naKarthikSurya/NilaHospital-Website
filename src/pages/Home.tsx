import Layout from "@/components/Layout";
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

const MAPS_URL = "https://maps.google.com/?q=Nila+Hospital+Namakkal+Salem+Road+Tamil+Nadu";
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
    title: "Emergency Call",
    value: "+91 96552 25192",
    sub: "04286 - 297192",
    href: PHONE,
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "MNR Complex, Salem Road",
    sub: "Namakkal, Tamil Nadu 637001",
    href: MAPS_URL,
  },
  {
    icon: Clock,
    title: "OPD Timings",
    value: "Mon – Sat: 9AM – 8PM",
    sub: "Sunday: Emergency Only",
    href: null,
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="nila-gradient text-white py-24 md:py-36 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-[hsl(var(--nila-warm))]/10 blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm mb-6 tracking-widest uppercase font-medium border border-white/10">
            Namakkal's Women's Specialty Hospital
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.15]">
            Dedicated to<br />
            <span className="text-[hsl(var(--nila-warm))]">Maternal Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Obstetrics &amp; Gynaecology Care in Namakkal — trusted by women and families across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg shadow-[hsl(var(--nila-warm))]/20 text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
          {/* Stats */}
          <div className="flex justify-center gap-12 md:gap-16">
            {[
              { val: "15+", label: "Hospital Beds" },
              { val: "02", label: "OT Units" },
              { val: "100%", label: "Women-Focused" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white">{s.val}</div>
                <div className="text-white/60 text-sm mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="bg-background py-10 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20">
            {quickInfoCards.map((card) => (
              <Card key={card.title} className="shadow-xl border-0 nila-card-hover bg-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-3">
                    <card.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{card.title}</div>
                    {card.href ? (
                      <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors text-sm block">
                        {card.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-foreground text-sm">{card.value}</div>
                    )}
                    <div className="text-muted-foreground text-xs mt-0.5">{card.sub}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                    Dr. [Name]
                  </h3>
                  <div className="text-muted-foreground text-sm mb-1">MD, DGO</div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Hospital Exterior", "Reception & Waiting", "Consultation Suite"].map((label) => (
              <div key={label} className="rounded-2xl overflow-hidden shadow-md bg-card aspect-video flex flex-col items-center justify-center border border-border nila-card-hover">
                <div className="nila-gradient w-full h-full flex flex-col items-center justify-center gap-3 opacity-80">
                  <Bed className="h-10 w-10 text-white" />
                  <span className="text-white font-semibold text-sm">{label}</span>
                  <span className="text-white/50 text-xs">Photo coming soon</span>
                </div>
              </div>
            ))}
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
