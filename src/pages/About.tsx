import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Bed, Activity, Users, Shield, Lock, Heart, CheckCircle, Microscope, Building } from "lucide-react";
import Gallery from "@/components/Gallery";
import { aboutPageSchema } from "@/lib/seo";

const MAPS_URL =
  "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

const highlights = [
  { icon: Bed, label: "15+ Beds", desc: "Well-equipped inpatient care" },
  { icon: Activity, label: "2 OT Units", desc: "Sterile surgical theatres" },
  { icon: Users, label: "Personal Attention", desc: "Direct doctor care every visit" },
  { icon: Shield, label: "Clean Environment", desc: "Strictly maintained hygiene" },
  { icon: Lock, label: "Patient Privacy", desc: "Confidential consultations" },
  { icon: Heart, label: "Women-Focused", desc: "Exclusively for women's health" },
];

const commitments = [
  "Strict privacy for all consultations and treatments",
  "Respectful, dignified care regardless of condition or background",
  "Clear, jargon-free communication at every stage",
  "Timely attention — no unnecessary waiting",
  "Follow-up support after procedures and deliveries",
  "No unnecessary procedures or investigations",
];

const gallerySlots = ["Hospital Exterior", "Reception", "Consultation Room", "Operation Theatre", "Waiting Area", "Hospital Signage"];

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
    title: "OPD Timings",
    value: "Mon - Sat: 09:00 AM - 01:00 PM & 06:00 PM - 09:00 PM",
    sub: "Sunday: 09:00 AM - 01:00 PM",
    href: null,
  }, 
];

export default function About() {
  return (
    <Layout 
      title="Our Story & Commitment to Women's Health | Nila Hospital"
      description="Learn about Nila Hospital's mission in Namakkal. We combine clinical excellence with compassionate care to support every woman's health journey."
      schema={aboutPageSchema}
    >
      {/* Mission Hero */}
      <section className="nila-gradient nila-gradient-motion text-white py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-56 h-56 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">About Us</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Women-Focused Care in the<br />Heart of Namakkal
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-base leading-relaxed">
            Founded on a belief that every woman deserves personalised, compassionate healthcare — Nila Hospital has been a trusted name in Obstetrics & Gynaecology in Namakkal.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Mission</div>
                <h2 className="text-3xl md:text-5xl font-bold text-nila-navy leading-tight">
                  Maternal Excellence in <br /><span className="text-[hsl(var(--nila-warm))]">Every Care Every Time</span>
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Nila Hospital was established with a singular vision — to provide high-quality, women-focused medical care in Namakkal. Recognising the need for a dedicated facility for <strong>Obstetrics & Gynaecology</strong> in the region, we built a space where every woman feels safe, heard, and cared for.
                </p>
                <p>
                  Our philosophy is simple: <strong>personal attention over volume</strong>. Unlike larger corporate institutions, every patient at Nila Hospital is seen directly by our consultant. We believe that medical care should be built on trust, and trust begins with consistent, one-on-one attention from the same doctor throughout your journey.
                </p>
                <p>
                  Over the years, we have grown to serve women and families across Namakkal, Tiruchengode, and Rasipuram. From complex gynaecological treatments like uterine fibroid management to the joyful moment of a first baby's arrival, we are committed to being your lifelong health partner.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[hsl(var(--nila-warm))]/5 rounded-[3rem] rotate-2" />
              <div className="relative bg-card border border-border shadow-2xl rounded-[2.5rem] overflow-hidden p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-[hsl(var(--nila-warm-light))] shadow-lg">
                    <img src="/placeholder.svg" alt="Dr. Nithya Subashini" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-nila-navy">Dr. Nithya Subashini</h3>
                    <p className="text-[hsl(var(--nila-warm))] font-semibold">MBBS, DGO</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Consultant Obstetrician & Gynaecologist</p>
                  </div>
                  <div className="prose prose-sm text-muted-foreground leading-relaxed italic">
                    "My goal at Nila Hospital is to ensure that healthcare remains human. I want every mother to walk out of our hospital feeling empowered, healthy, and respected. We don't just treat conditions; we care for people."
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">PCOS Specialist</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">High-Risk Pregnancy</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Normal Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Highlights */}
      <section className="py-20 nila-gradient-warm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">What Sets Us Apart</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              Hospital Highlights
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <Card key={h.label} className="border-0 shadow-md nila-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-4 w-fit mx-auto mb-4">
                    <h.icon className="h-7 w-7 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{h.label}</h3>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Support */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Infrastructure</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 nila-decoration pb-4">
                Facilities &amp; Support
              </h2>
              <div className="space-y-5">
                {[
                  { icon: Building, title: "Consultation Rooms", desc: "Private, well-equipped rooms for confidential one-on-one consultations with our specialist." },
                  { icon: Activity, title: "Sterile OT Environment", desc: "Two fully equipped Operation Theatres maintained to strict sterility standards for safe surgical care." },
                  { icon: Microscope, title: "In-house Support", desc: "Coordinated tie-ups with labs, scan centres, and pharmacies to streamline your care without the runaround." },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-3 shrink-0">
                      <f.icon className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="nila-gradient rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-2xl" />
              <Heart className="h-16 w-16 text-white/30 mb-4 relative z-10" />
              <div className="text-white text-2xl font-bold mb-2 relative z-10">
                A Place You Can Trust
              </div>
              <p className="text-white/60 text-sm relative z-10">
                15+ beds · 2 OTs · Private consultations · Clean environment
              </p>
              <div className="mt-6 relative z-10">
                <a href={PHONE}>
                  <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold gap-2 shadow-lg">
                    <Phone className="h-4 w-4" /> Call Us Today
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Gallery</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">Our Hospital</h2>
          </div>
          <Gallery
            images={[
              { src: "/images/gallery/521A6952.JPG", alt: "Hospital Exterior" },
              { src: "/images/gallery/521A6945.JPG", alt: "Reception Area" },
              { src: "/images/gallery/521A6872.JPG", alt: "Consultation Room" },
              { src: "/images/gallery/521A6864.JPG", alt: "Patient Ward" },
              { src: "/images/gallery/521A6892.JPG", alt: "Operation Theatre" },
              { src: "/images/gallery/521A6862.JPG", alt: "Treatment Area" },
              { src: "/images/gallery/521A6833.JPG", alt: "Diagnostic Equipment" },
            ]}
          />
        </div>
      </section>

      {/* Patient Commitments */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Promise</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
                Our Commitment to Every Patient
              </h2>
            </div>
            <div className="space-y-3">
              {commitments.map((c, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border nila-card-hover">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-1.5 shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Come Visit Us in Namakkal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {quickInfoCards.map((card) => (
              <Card key={card.title} className="shadow-xl border-0 nila-card-hover bg-card text-left">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-3 shrink-0">
                    <card.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      {card.title}
                    </div>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors text-sm block truncate"
                      >
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
