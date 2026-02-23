import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, GraduationCap, Stethoscope, Clock, Languages, CheckCircle, Star } from "lucide-react";
import { doctorsList } from "@/data/doctors";

const MAPS_URL = "https://maps.google.com/?q=Nila+Hospital+Namakkal+Salem+Road+Tamil+Nadu";
const PHONE = "tel:+919655225192";

const infoCards = [
  { icon: GraduationCap, title: "Qualifications", items: ["MBBS", "DGO (Diploma in Gynaecology)", "Registered Medical Practitioner"] },
  { icon: Stethoscope, title: "Specializations", items: ["High-Risk Pregnancy", "Normal & Surgical Delivery", "PCOS / PCOD Management", "Gynaecological Disorders"] },
  { icon: Star, title: "Experience", items: ["Extensive clinical experience", "Performed hundreds of deliveries", "Expert in laparoscopic procedures", "Trusted by families in Namakkal"] },
];

const careApproaches = [
  { num: "01", title: "Patient-Centered Education", desc: "We ensure every patient understands their diagnosis, treatment, and next steps in simple, clear language." },
  { num: "02", title: "Absolute Privacy & Dignity", desc: "All consultations are strictly confidential. We maintain a respectful, private environment for every woman." },
  { num: "03", title: "Holistic Wellness Focus", desc: "Beyond treatment, we offer guidance on nutrition, mental wellbeing, and lifestyle for complete health." },
  { num: "04", title: "Transparent Communication", desc: "No surprises — we explain procedures, costs, and options clearly before any intervention." },
  { num: "05", title: "Continuity of Care", desc: "From your first visit through delivery and beyond, the same doctor monitors your progress personally." },
];

const timings = [
  { day: "Monday - Friday", time: "09:00 AM – 01:00 PM & 06:00 PM – 09:00 PM", badge: "OPD" },
  { day: "Saturday & Sunday", time: "09:00 AM – 01:00 PM", badge: "Weekend OPD" },
];

const commonReasons = [
  "Antenatal (ANC) Checkups", "Irregular or Painful Periods", "PCOS / PCOD Management", "Pregnancy Confirmation",
  "Vaginal Infections", "Menopause Symptoms", "Pre-conception Counselling", "Postnatal Follow-up",
];

export default function Doctors() {
  return (
    <Layout>
      {/* Doctor Profile Header */}
      <section className="nila-gradient py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 rounded-full bg-white/15 backdrop-blur-sm flex flex-col items-center justify-center border-4 border-white/30 shrink-0">
              <Stethoscope className="h-16 w-16 text-white/70" />
              <span className="text-white/40 text-xs mt-2">Doctor Photo</span>
            </div>
            <div className="text-center md:text-left">
              <Badge className="bg-[hsl(var(--nila-warm))]/20 text-[hsl(var(--nila-warm))] border-0 mb-3 text-xs font-bold uppercase tracking-widest">
                Senior Consultant
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Dr. Nithya Subashini</h1>
              <div className="text-nila-light-blue text-base mb-1">MBBS, DGO</div>
              <div className="text-white/80 text-base font-medium mb-6">Consultant Obstetrician &amp; Gynaecologist</div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href={PHONE}>
                  <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold gap-2 px-6 shadow-lg">
                    <Phone className="h-4 w-4" /> Call for Consultation
                  </Button>
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-nila-navy hover:bg-white/90 font-bold gap-2 px-6">
                    <MapPin className="h-4 w-4" /> Directions to Clinic
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Info Cards */}
      <section className="bg-background py-14">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-10 max-w-5xl mx-auto">
            {infoCards.map((card) => (
              <Card key={card.title} className="border-0 shadow-xl nila-card-hover">
                <CardContent className="p-6">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-3 w-fit mb-4">
                    <card.icon className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Approaches */}
      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">How We Practice</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              Our Care Approach
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {careApproaches.map((approach) => (
              <div key={approach.num} className="flex items-start gap-5 bg-card rounded-xl p-5 shadow-sm border border-border nila-card-hover">
                <div className="text-3xl font-bold text-[hsl(var(--nila-warm))]/30 shrink-0 w-12 text-right">
                  {approach.num}
                </div>
                <div className="border-l-2 border-[hsl(var(--nila-warm))]/20 pl-5">
                  <h3 className="font-bold text-foreground mb-1">{approach.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{approach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Reasons */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
              Common Reasons Patients Visit
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {commonReasons.map((reason, i) => (
              <div key={i} className="bg-card rounded-xl p-5 text-center shadow-sm border border-border nila-card-hover">
                <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-2 w-fit mx-auto mb-3">
                  <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))]" />
                </div>
                <span className="text-sm text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Hours */}
      <section className="py-16 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">Consultation Hours</h2>
            </div>
            <Card className="border-0 shadow-xl overflow-hidden rounded-2xl">
              <div className="bg-primary px-6 py-3">
                <div className="flex items-center gap-2 text-white text-sm font-semibold">
                  <Clock className="h-4 w-4" /> OPD Schedule
                </div>
              </div>
              <CardContent className="p-0">
                {timings.map((t, i) => (
                  <div key={i} className={`flex items-center justify-between px-6 py-5 ${i < timings.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="font-medium text-foreground">{t.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground text-sm">{t.time}</span>
                      <Badge variant={t.badge === "Emergency" ? "destructive" : "default"} className="text-xs">{t.badge}</Badge>
                    </div>
                  </div>
                ))}
                <div className="px-6 py-4 bg-muted">
                  <p className="text-xs text-muted-foreground">* Surgical schedule may vary. Please call ahead to confirm availability.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Urgent Attention?</h2>
          <p className="text-nila-light-blue mb-8 text-base">Call our emergency line: +91 96552 25192</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <MapPin className="h-5 w-5" /> Contact Hospital
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
