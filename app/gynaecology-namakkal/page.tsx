import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Stethoscope, Heart, Activity } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { gynaecologyNamakkalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Specialist Gynaecology in Namakkal | Dr. Nithya Subashini",
  description: "Consult Namakkal's leading gynaecologist for PCOS, menstrual disorders, hormonal imbalance, and preventive care. Expert clinical treatments with a compassionate approach.",
  alternates: {
    canonical: "/gynaecology-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gynaecologyNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Clinical Gynaecology
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Gynaecology Services<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading diagnostic and treatment pathways for menstrual, hormonal, and reproductive health concerns.
          </p>
        </div>
      </HeroGradientSection>

      {/* Services Breakdown */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm nila-card-hover group">
              <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
              </div>
              <h3 className="text-xl font-bold text-nila-navy mb-4">Menstrual Health</h3>
              <p className="text-muted-foreground leading-relaxed">Evaluation and management of irregular periods, painful monthly cycles, and heavy bleeding.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm nila-card-hover group">
              <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
              </div>
              <h3 className="text-xl font-bold text-nila-navy mb-4">Hormonal Care</h3>
              <p className="text-muted-foreground leading-relaxed">Specialized care for PCOS, PCOD, thyroid-related hormonal symptoms, and weight management.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm nila-card-hover group">
              <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
              </div>
              <h3 className="text-xl font-bold text-nila-navy mb-4">Preventive Care</h3>
              <p className="text-muted-foreground leading-relaxed">Routine cervical cancer screening (Pap Smear), breast exams, and preventive vaccinations.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-8 text-center">Modern Gynaecology for the Modern Woman</h2>
            <div className="prose prose-slate max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                At Nila Hospital, gynaecology is not just about treatment; it's about education and long-term wellness. Our consultant, <strong>Dr. Nithya Subashini</strong>, provides evidence-based clinical insights while respecting patient privacy and dignity.
              </p>
              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  "PCOS/PCOD Management",
                  "Menopause & Perimenopause Support",
                  "Pelvic Infection Treatments",
                  "Infertility Evaluation",
                  "Adolescent Gynaecology",
                  "Uterine Health Surveillance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-semibold text-nila-navy">{item}</span>
                  </div>
                ))}
              </div>
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
            Book Your Gynaecology Consultation in Namakkal
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
