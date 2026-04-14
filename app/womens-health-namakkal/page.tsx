import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Heart, Shield, Activity, Users } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { womensHealthNamakkalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Complete Women's Health in Namakkal | Preventive Care & Wellness",
  description: "Consult Nila Hospital for expert women's health in Namakkal. Specialized in preventive screenings, hormonal wellness, and life-stage health management for women.",
  alternates: {
    canonical: "/womens-health-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHealthNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Holistic Women's Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Women's Health<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Personalized clinical support and wellness guidance for every milestone of a woman's life.
          </p>
        </div>
      </HeroGradientSection>

      {/* Narrative Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-nila-navy leading-tight">Proactive Care for a Healthier You</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Health concerns for women often change throughout life. At Nila Hospital Namakkal, we provide tailored medical evaluations that address physical, hormonal, and emotional well-being.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Shield, title: "Screening", text: "Regular Pap smears and cervical cancer prevention." },
                  { icon: Heart, title: "Wellness", text: "Nutrition and lifestyle guidance for hormonal health." },
                  { icon: Activity, title: "Management", text: "Long-term care for menstrual and uterine health." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-muted/40 rounded-2xl border border-border/50">
                    <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))] shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card border border-border shadow-xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--nila-warm))]/5 rounded-full" />
               <h3 className="text-2xl font-bold text-nila-navy mb-8">Clinical Focus Areas</h3>
               <ul className="space-y-5">
                 {[
                   "Dysfunctional Uterine Bleeding (DUB)",
                   "Endometriosis & Pelvic Pain Care",
                   "Vaginal Health & Infection Control",
                   "Pre-conception Nutritional Health",
                   "Menopause/HRT Consultation Support",
                   "Obesity & Gynae-Health Coordination"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                     <span className="font-medium text-foreground text-sm">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Users className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-nila-navy mb-6">Built on Foundation of Trust</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nila Hospital Namakkal provides specialized care with direct access to senior woman consultants. This ensures that every clinical decision is made with high expertise and a deep understanding of patient comforts.
          </p>
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Take Charge of Your Health Today
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
