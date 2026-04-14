import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, Baby, HeartPulse, ShieldCheck, Clock } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { maternityHospitalNamakkalPageSchemas } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Premium Maternity Hospital in Namakkal | 24/7 Delivery Support",
  description: "Nila Hospital is the most trusted maternity hospital in Namakkal. Led by Dr. Nithya Subashini, we offer senior consultant-led delivery care & post-natal support.",
  alternates: {
    canonical: "/maternity-hospital-namakkal",
  },
};

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maternityHospitalNamakkalPageSchemas) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Best-in-Class Maternity Care
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maternity Hospital<br />
            <span className="text-[hsl(var(--nila-warm))]">in Namakkal</span>
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional maternal excellence combined with a supportive family environment.
          </p>
        </div>
      </HeroGradientSection>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nila-navy mb-6">A Trusted Foundation for New Life</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Naming our hospital after the "Nila" (Moon) symbolizes the gentle, nurturing care we provide to every mother and newborn. We prioritize patient comfort and safety above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: "Specialist Care", desc: "Consult directly with senior obstetricians." },
              { icon: ShieldCheck, title: "Modern Safety", desc: "Rigid sterile OT and labor suite protocols." },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock emergency obstetric coverage." },
              { icon: HeartPulse, title: "Neonatal Care", desc: "Focus on immediate newborn health and safety." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                <div className="bg-[hsl(var(--nila-warm-light))] p-3 rounded-2xl w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                </div>
                <h4 className="font-bold text-nila-navy mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">From ANC to Happy Home-Coming</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our maternity journey begins with your first **Antenatal Visit (ANC)**. We guide you through كل milestone with personalized nutrition plans, scan reviews, and delivery planning. After birth, our team supports you with breastfeeding guidance and postnatal recovery care.
              </p>
              <ul className="space-y-4">
                {[
                  "Safe Normal Delivery Advocacy",
                  "Expert C-Section Capability",
                  "Labor Pain Management Support",
                  "Maternal High-Risk Surveillance",
                  "Personalized Lactation Guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted p-8 md:p-10 rounded-[2.5rem] border border-border/50 text-center">
              <h4 className="text-xl font-bold text-nila-navy mb-4">Book Your Maternity Tour</h4>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">Visit Nila Hospital Namakkal today to see our modern facilities and meet our compassionate team of specialists.</p>
              <div className="space-y-4">
                <a href={PHONE} className="block w-full">
                  <Button className="w-full bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold h-12 shadow-lg">
                    Call +91 96552 25192
                  </Button>
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full bg-white text-nila-navy h-12">
                     Get Directions
                  </Button>
                </a>
              </div>
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

      {/* CTA Strip */}
      <section className="bg-nila-navy py-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Beautiful Journey With Us</h2>
          <p className="text-nila-light-blue mb-0">Professional care for Namakkal's mothers and babies.</p>
        </div>
      </section>
    </>
  );
}
