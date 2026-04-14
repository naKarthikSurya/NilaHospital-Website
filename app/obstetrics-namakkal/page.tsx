import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Baby, HeartPulse, ShieldCheck } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { obstetricsNamakkalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Specialist Obstetrics in Namakkal | Expert Pregnancy Care",
  description: "Nila Hospital provides Namakkal's leading obstetrics care — from ANC monitoring to normal delivery and surgical support. Consult Dr. Nithya Subashini for a safe pregnancy.",
  alternates: {
    canonical: "/obstetrics-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(obstetricsNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Expert Maternal Care
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Obstetrics Specialist<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading the way in safe, compassionate, and evidence-based pregnancy care for mother and child.
          </p>
        </div>
      </HeroGradientSection>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-slate max-w-none space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-nila-navy mb-4">Science-Driven Pregnancy Monitoring</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Nila Hospital, we follow rigid international clinical guidelines for **Antenatal Care (ANC)**. Our specialist-led approach ensures that every symptom is monitored, and every milestone is protected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <Baby className="h-10 w-10 text-[hsl(var(--nila-warm))] mb-4" />
                <h3 className="text-xl font-bold text-nila-navy mb-3">Normal Delivery Support</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">We are primary advocates for natural, normal delivery. Our labor suites emphasize comfort and professional fetal monitoring.</p>
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <ShieldCheck className="h-10 w-10 text-[hsl(var(--nila-warm))] mb-4" />
                <h3 className="text-xl font-bold text-nila-navy mb-3">Surgical Delivery (C-Section)</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">When medically indicated, our sterile surgical theaters and senior anaesthesiology team ensure a safe delivery for the baby and mother.</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border not-prose">
              <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Comprehensive Obstetric Pathways</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Fetal Growth & Tracking",
                  "High-Risk Pregnancy Management",
                  "Maternal Nutrition Advice",
                  "Emergency Obstetric Support 24/7",
                  "Postpartum Recovery Planning",
                  "Breastfeeding & Neonatal Guidance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-semibold text-nila-navy text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-muted/10">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Consult the Best Obstetrics Specialists in Namakkal
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call +91 96552 25192
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
    </>
  );
}
