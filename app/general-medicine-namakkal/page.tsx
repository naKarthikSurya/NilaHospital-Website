import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Stethoscope, Activity, HeartPulse } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { generalMedicineNamakkalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "General Medicine in Namakkal | Wellness & Primary Care",
  description: "Nila Hospital provides expert general medicine consultations in Namakkal. First-level clinical assessment, adult medicine, and wellness monitoring for families.",
  alternates: {
    canonical: "/general-medicine-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generalMedicineNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Primary Healthcare & Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            General Medicine Specialist<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Expert clinical assessment and coordinated medicine support for Namakkal's families.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Breakdown */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-nila-navy">Your First Line of Medical Support</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nila Hospital's general medicine department provides first-level clinical evaluations for various adult health symptoms. Our goal is to provide accurate diagnosis and clear treatment pathways for common medical conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-4">
                {[
                  "Adult Illness Management",
                  "Chronic Disease Screening",
                  "Lifestyle Medicine",
                  "Wellness Physicals",
                  "Geriatric Support",
                  "Coordinated Referrals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-semibold text-nila-navy text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                <Stethoscope className="h-8 w-8 text-[hsl(var(--nila-warm))] shrink-0" />
                <div>
                  <h4 className="font-bold text-nila-navy mb-1">Clinical Evaluation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Thorough symptom assessment and history review for accurate diagnostics.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                <Activity className="h-8 w-8 text-[hsl(var(--nila-warm))] shrink-0" />
                <div>
                  <h4 className="font-bold text-nila-navy mb-1">Wellness Monitoring</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Periodic health checkups and physiological monitoring for long-term health.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                <HeartPulse className="h-8 w-8 text-[hsl(var(--nila-warm))] shrink-0" />
                <div>
                  <h4 className="font-bold text-nila-navy mb-1">Preventive Health</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Vaccinations and risk-factor screening for heart, lung, and metabolic health.</p>
                </div>
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
            Consult a General Medicine Specialist in Namakkal
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
