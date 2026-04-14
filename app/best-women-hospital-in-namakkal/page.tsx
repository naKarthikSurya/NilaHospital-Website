import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, CheckCircle, Heart, Shield, Baby } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { bestWomenHospitalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Women Hospital in Namakkal | Dedicated Maternity & Gynaec Care",
  description: "Nila Hospital is Namakkal's best women hospital offering expert maternity care, gynaecology services, and hormone wellness. Book your consultation today.",
  alternates: {
    canonical: "/best-women-hospital-in-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestWomenHospitalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Specialized Women's Healthcare
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Best Women Hospital<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading the way in personalized, high-quality healthcare for women of all ages.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-nila-navy mb-6">Comprehensive Care for Every Stage of Womanhood</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nila Hospital is designed to be a safe haven for women. From adolescence through motherhood and into menopause, our clinic provides the expertise and compassion required for holistic health.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Baby, title: "Advanced Maternity", desc: "Expert prenatal, delivery, and postnatal support." },
                  { icon: Heart, title: "Hormonal Wellness", desc: "Specialized PCOS/PCOD and thyroid management." },
                  { icon: Shield, title: "Preventive Screening", desc: "Pap smears, breast exams, and regular checkups." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[hsl(var(--nila-warm-light))] p-2.5 rounded-xl shrink-0 h-fit">
                      <item.icon className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-nila-navy">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-nila-navy mb-6">Why Women Choose Nila</h3>
              <ul className="space-y-4">
                {[
                  "Senior Woman-Led Clinical Team",
                  "Private and Dignified Consultation",
                  "Expert Infertility Support",
                  "Modern Diagnostic Facilities",
                  "Compassionate Nursing Staff"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Consult the Best Women Specialists in Namakkal
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
