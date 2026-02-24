import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Baby, Heart, Activity, Stethoscope, Shield } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/place/Nila+Hospital/@11.24534185036797,78.16326507578772,17z";
const PHONE = "tel:+919655225192";

const serviceCategories = [
  {
    icon: Baby,
    title: "Pregnancy Care (ANC)",
    services: [
      { name: "Prenatal Consultations", for: "All pregnant women from first trimester", when: "As soon as pregnancy is confirmed", how: "Regular checkups to monitor mother and baby health, growth tracking, and blood tests." },
      { name: "Ultrasound Monitoring", for: "All expectant mothers", when: "At each key stage of pregnancy", how: "Scan guidance and foetal monitoring to detect any anomalies early." },
      { name: "Maternal Nutrition Counselling", for: "Pregnant and breastfeeding women", when: "Any stage of pregnancy", how: "Personalised diet plans and supplement advice for a healthy pregnancy." },
    ],
  },
  {
    icon: Heart,
    title: "Delivery Care",
    services: [
      { name: "Normal Delivery", for: "Low-risk pregnancies", when: "Full term (37–40 weeks)", how: "Supportive, calm, and safe natural birth with experienced care." },
      { name: "Cesarean (C-Section)", for: "High-risk pregnancies or medical indication", when: "As determined by the doctor", how: "Sterile OT environment with skilled surgical team for safe delivery." },
      { name: "Postnatal Follow-up", for: "New mothers post delivery", when: "First 6 weeks after delivery", how: "Monitoring recovery, breastfeeding support, and newborn guidance." },
    ],
  },
  {
    icon: Stethoscope,
    title: "Gynaecology Care",
    services: [
      { name: "PCOS / PCOD", for: "Women with hormonal imbalance or irregular periods", when: "Irregular cycles, weight changes, or acne", how: "Diagnosis, medication, and lifestyle counselling to manage PCOS effectively." },
      { name: "Irregular Periods", for: "Women of reproductive age", when: "Missed, painful, or unusually heavy periods", how: "Thorough evaluation and personalised treatment plan." },
      { name: "Vaginal Infections / Discharge", for: "Women with discomfort or unusual symptoms", when: "Persistent discharge, itching, or odour", how: "Private, respectful evaluation with targeted treatment." },
      { name: "Menopause Care", for: "Women in their 40s and 50s", when: "Hot flashes, mood changes, irregular periods", how: "Supportive management to ease the menopausal transition." },
    ],
  },
  {
    icon: Shield,
    title: "Women's Preventive Care",
    services: [
      { name: "Cervical Screening / Pap Test", for: "Women above 21 or sexually active women", when: "Routine annual or bi-annual screening", how: "Early detection of cervical changes to prevent cancer." },
      { name: "Pre-conception Counselling", for: "Couples planning pregnancy", when: "3–6 months before trying to conceive", how: "Health assessment, folic acid guidance, and preparation for pregnancy." },
      { name: "Family Planning", for: "Women and couples", when: "When contraception or birth spacing is needed", how: "Confidential counselling on safe and effective family planning options." },
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Nila Hospital — Services
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Comprehensive Care for<br />Every Stage of Life
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-base leading-relaxed">
            From the first prenatal visit to postnatal recovery and beyond — we provide complete women's healthcare under one roof.
          </p>
        </div>
      </HeroGradientSection>

      {/* Service Categories */}
      {serviceCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-16 ${catIdx % 2 === 0 ? "bg-background" : "nila-gradient-warm"}`}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[hsl(var(--nila-warm-light))] rounded-2xl p-3.5">
                <category.icon className="h-7 w-7 text-[hsl(var(--nila-warm))]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground nila-decoration pb-3">
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, i) => (
                <Card key={i} className="border border-border nila-card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground text-base mb-4">{service.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-[hsl(var(--nila-warm))] font-semibold">Who it's for: </span>
                        <span className="text-muted-foreground">{service.for}</span>
                      </div>
                      <div>
                        <span className="text-[hsl(var(--nila-warm))] font-semibold">When to visit: </span>
                        <span className="text-muted-foreground">{service.when}</span>
                      </div>
                      <div>
                        <span className="text-[hsl(var(--nila-warm))] font-semibold">How we help: </span>
                        <span className="text-muted-foreground">{service.how}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Strip */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have Questions About Our Services?
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-md mx-auto">We're happy to explain any service in detail. Just give us a call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto gap-2 text-base">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
