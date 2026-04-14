import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Award, Shield, Users } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { whyBestHospitalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Nila Hospital is the Best Hospital in Namakkal | Expert Care",
  description: "Discover why families trust Nila Hospital Namakkal for specialist maternity, gynaecology, and general medicine. Senior consultant-led care & 24/7 support.",
  alternates: {
    canonical: "/why-we-are-best-hospital-in-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyBestHospitalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Excellence in Healthcare
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why We Are the Best<br />
            <span className="text-[hsl(var(--nila-warm))]">Hospital in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Combining senior clinical expertise with a compassionate, patient-first approach to healthcare.
          </p>
        </div>
      </HeroGradientSection>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center p-6">
              <Award className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Senior Expertise</h3>
              <p className="text-muted-foreground">Led by senior consultants with decades of combined experience in complex medical cases.</p>
            </div>
            <div className="space-y-4 text-center p-6">
              <Shield className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Patient Safety</h3>
              <p className="text-muted-foreground">Rigid sterile protocols and evidence-based medicine (WHO/NIH) at every step.</p>
            </div>
            <div className="space-y-4 text-center p-6">
              <Users className="h-12 w-12 text-[hsl(var(--nila-warm))] mx-auto" />
              <h3 className="text-xl font-bold text-nila-navy">Compassionate Care</h3>
              <p className="text-muted-foreground">A family-like environment where every patient receives dedicated, personalized attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-slate max-w-none space-y-8">
            <h2 className="text-3xl font-bold text-nila-navy text-center mb-10">Dedicated to Namakkal's Health</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nila Hospital, we believe that quality healthcare should be accessible, transparent, and expert-led. Our foundation is built on the trust of hundreds of families in Namakkal who have chosen us for their most critical health journeys.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                "Direct Senior Consultant Access",
                "Advanced Diagnostic Equipment",
                "Affordable & Clear Billing",
                "24/7 Emergency Support",
                "Modern Surgical Suites",
                "Sterile Patient Rooms"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <span className="font-semibold text-nila-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Experience the Best Healthcare in Namakkal
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
