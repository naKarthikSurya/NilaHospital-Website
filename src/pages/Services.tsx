import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Baby, Heart, Activity, Stethoscope, Shield, CheckCircle, Clock, Users } from "lucide-react";
import { servicesPageSchemas } from "@/lib/seo";

const MAPS_URL =
  "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
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
    <Layout 
      title="Maternity, Pregnancy and Gynaecology Services in Namakkal"
      description="Explore Nila Hospital services in Namakkal: ANC checkups, normal delivery, C-section, PCOS management, preventive screening, and complete women-focused care."
      schema={servicesPageSchemas}
    >
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

      {/* Advanced Care Narrative Section — SEO Powerhouse */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-nila-navy mb-8 text-center">
              Why Nila Hospital is Considered the <span className="text-[hsl(var(--nila-warm))]">Best Gynaecology Hospital in Namakkal</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Comprehensive Maternal & Fetal Medicine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Nila Hospital, our approach to maternity care goes beyond standard checkups. We understand that every pregnancy journey is unique, which is why we offer specialized <strong>Fetal Medicine</strong> consultations and advanced <strong>Prenatal Screenings (ANC)</strong>. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Nithya Subashini and our team utilize high-resolution ultrasound monitoring to track fetal development at every critical milestone. This allows for the early detection and management of <strong>high-risk pregnancy</strong> complications, ensuring the safety of both mother and baby.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">State-of-the-Art Surgical Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our hospital features globally-compliant sterile <strong>Operation Theatres (OT)</strong> specifically designed for obstetric and gynaecological surgeries. Whether it is a routine <strong>Cesarean Section (C-Section)</strong> or a complex laparoscopic procedure, our surgical team maintains the highest clinical hygiene standards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are primary advocates for <strong>Natural Normal Delivery</strong>. Our labor suites are equipped with monitoring systems that allow mothers to labor in a stress-free, private environment, supported by a compassionate nursing team trained in neonatal resuscitation.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Specialized PCOS & Hormonal Management</h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                PCOS (Polycystic Ovary Syndrome) is one of the most common hormonal disorders affecting women today. At Nila Hospital Namakkal, we don't just treat the symptoms; we address the root cause. Our <strong>PCOS Clinic</strong> integrates clinical treatment with metabolic management and personalized lifestyle counselling. We help women manage menstrual irregularities, infertility issues, and hormonal acne through evidence-based medicine and sustainable diet advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="p-6">
                <CheckCircle className="h-10 w-10 text-[hsl(var(--nila-warm))] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Evidence-Based Treatment</h4>
                <p className="text-sm text-muted-foreground">Following WHO and international clinical guidelines for all obstetric procedures.</p>
              </div>
              <div className="p-6">
                <Shield className="h-10 w-10 text-[hsl(var(--nila-warm))] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Sterile Environment</h4>
                <p className="text-sm text-muted-foreground">Rigid infection control protocols in our theaters and patient wards.</p>
              </div>
              <div className="p-6">
                <Users className="h-10 w-10 text-[hsl(var(--nila-warm))] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Continuity of Care</h4>
                <p className="text-sm text-muted-foreground">Direct access to the same consultant doctor for every visit and procedure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have Questions About Our Services?
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-md mx-auto">We're happy to explain any service in detail. Just give us a call.</p>
          <div className="mb-8 text-[10px] text-white/40 uppercase tracking-[0.2em]">
            Clinical information based on <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">WHO</a> & <a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">NIH</a> standards
          </div>
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
