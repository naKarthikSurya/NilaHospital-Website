import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Heart, Shield, Activity, Users } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { womensHealthNamakkalPageSchemas } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = {
  title: "Women's Preventive Healthcare in Namakkal",
  description: "Consult Nila Hospital for expert women's health in Namakkal. Specialized in preventive screenings, hormonal wellness, and life-stage health management for women.",
  alternates: {
    canonical: "/womens-health-namakkal",
  },
};

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

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-nila-navy">Wellness &amp; Prevention Across Life Stages</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our department provides custom wellness surveillance to address unique health requirements across key phases of a woman's life: from adolescent puberty transitions, through active maternal periods, and into post-menopausal health management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "Screening", text: "Regular Pap smears and cervical cancer prevention." },
                  { icon: Heart, title: "Wellness", text: "Nutrition and lifestyle guidance for hormonal health." },
                  { icon: Activity, title: "Management", text: "Long-term care for menstrual and uterine health." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                    <item.icon className="h-5 w-5 text-[hsl(var(--nila-warm))] mb-3" />
                    <h4 className="font-bold text-nila-navy mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-muted/30 p-8 md:p-10 rounded-[2.5rem] border border-border">
              <h3 className="text-2xl font-bold text-nila-navy mb-6">Key Wellness Milestones</h3>
              <ul className="space-y-4">
                {[
                  "Personalized Pre-conception Consults",
                  "PCOS/PCOD Clinical Pathways",
                  "Menstrual Health Monitoring",
                  "Cervical Screening & HPV Care",
                  "Breast Exam Guidance & Audits",
                  "Adolescent Puberty Support"
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

      {/* Trust Block */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
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
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "womens_health_cta_call", service_name: "womens_health", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "womens_health_cta_directions", service_name: "womens_health", link_url: hospital.mapsUrl }}
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
