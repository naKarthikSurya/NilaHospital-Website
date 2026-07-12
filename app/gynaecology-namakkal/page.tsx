import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Stethoscope, Heart, Activity } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { gynaecologyNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Gynaecologist & Gynaecology Care in Namakkal",
  description: "Consult Namakkal's leading gynaecologist for PCOS, menstrual disorders, hormonal imbalance, and preventive care. Expert clinical treatments with a compassionate approach.",
  alternates: {
    canonical: "/gynaecology-namakkal",
  },
};

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

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-6">Comprehensive Gynaecological Solutions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide expert management for clinical issues affecting women at every stage of life. Our pathways are designed to offer diagnostic accuracy and clear long-term treatment strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Stethoscope, title: "Hormonal Health", desc: "Specialist support for PCOS, thyroid irregularities, and metabolic monitoring." },
              { icon: Heart, title: "Menstrual Disorders", desc: "Therapies and diagnostic support for painful, heavy, or irregular cycles." },
              { icon: Activity, title: "Life-Stage Support", desc: "Empathetic guidance from adolescent care through to menopausal wellness." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mb-6">
                  <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h3 className="text-xl font-bold text-nila-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border">
            <h3 className="text-2xl font-bold text-nila-navy mb-6 text-center">Gynaecological Screenings &amp; Procedures</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Routine Pap Smear Screening",
                "Uterine Fibroid Evaluation",
                "Ovarian Cyst Management",
                "Infertility Workups",
                "Cervical Cancer Screening",
                "Family Planning Advice"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <span className="font-semibold text-nila-navy text-sm">{item}</span>
                </div>
              ))}
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
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "gynaecology_cta_call", service_name: "gynaecology", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "gynaecology_cta_directions", service_name: "gynaecology", link_url: hospital.mapsUrl }}
              href={hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </ClientCTA>
          </div>
        </div>
      </section>
    </>
  );
}
