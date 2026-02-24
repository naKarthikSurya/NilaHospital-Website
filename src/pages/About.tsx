import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Bed, Activity, Users, Shield, Lock, Heart, CheckCircle, Microscope, Building } from "lucide-react";

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

export default function About() {
  return (
    <Layout>
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
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Our Story</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 nila-decoration pb-4">
              Built on Trust, Guided by Compassion
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
              <p>
                Nila Hospital was established with a singular vision — to provide high-quality, women-focused medical care in Namakkal. Recognising the need for a dedicated facility for obstetrics and gynaecology in the region, we built a space where every woman feels safe, heard, and cared for.
              </p>
              <p>
                Our philosophy is simple: personal attention over volume. Unlike larger institutions, every patient at Nila Hospital is seen directly by our consultant. We believe that medical care should be built on trust, and trust begins with consistent, one-on-one attention.
              </p>
              <p>
                Over the years, we have grown to serve women and families across Namakkal and the surrounding districts. From pregnancy care to complex gynaecological treatment, Nila Hospital continues to be a place where women receive respectful, evidence-based care at every stage of life.
              </p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallerySlots.map((slot) => (
              <div key={slot} className="aspect-video rounded-2xl overflow-hidden shadow-md nila-card-hover">
                <div className="nila-gradient w-full h-full flex flex-col items-center justify-center gap-2">
                  <Building className="h-8 w-8 text-white/50" />
                  <span className="text-white font-medium text-sm">{slot}</span>
                  <span className="text-white/40 text-xs">Photo coming soon</span>
                </div>
              </div>
            ))}
          </div>
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
