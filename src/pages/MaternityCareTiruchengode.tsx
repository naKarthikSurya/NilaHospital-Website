import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Baby, Clock, CheckCircle, ArrowRight } from "lucide-react";
import HeroGradientSection from "@/components/HeroGradientSection";
import { locationPageSchema } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

export default function MaternityCareTiruchengode() {
  const schema = locationPageSchema("Tiruchengode", "Maternity Care");

  return (
    <Layout 
      title="Maternity Care near Tiruchengode | Nila Hospital"
      description="Expert maternity and pregnancy care for families in Tiruchengode. Located just 30 mins (28 kms) away in Namakkal, Nila Hospital provides specialist-led normal delivery and high-risk pregnancy monitoring."
      schema={schema}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm mb-6 tracking-widest uppercase font-medium border border-white/10">
            Serving Families in Tiruchengode
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Safe & Higher Standard<br />Maternity Care near Tiruchengode
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed">
            Nila Hospital (Namakkal) is the trusted choice for expectant mothers from Tiruchengode seeking personal attention, sterile environments, and specialist expertise.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-nila-navy">Quick & Easy Access from Tiruchengode</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Located just <strong>28 kms (approx. 35-40 minutes)</strong> from Tiruchengode via the Namakkal-Tiruchengode Road, Nila Hospital provides a calm, women-focused environment that corporate hospitals often lack.
              </p>
              <div className="space-y-4">
                {[
                  "Specialist-led care by Dr. Nithya Subashini",
                  "Advanced Fetal Monitoring & Ultrasound",
                  "Expertise in High-Risk Pregnancies",
                  "Sterile & Safe Operation Theatres",
                  "Preferred choice for Normal Delivery",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold gap-2 shadow-lg">
                    <MapPin className="h-4 w-4" /> Get Travel Directions
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[hsl(var(--nila-warm))]/5 rounded-[3rem] rotate-2" />
              <Card className="relative border-border shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center space-y-6">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-4 w-fit mx-auto">
                    <Baby className="h-10 w-10 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-nila-navy">The Preferred Choice for Tiruchengode Families</h3>
                  <p className="text-muted-foreground">
                    Many families from Tiruchengode choose us for the continuity of care — you see the same doctor every visit, from pre-conception to delivery.
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--nila-warm))]">Consultation Timings</span>
                    <span className="text-foreground font-semibold">9:00 AM - 1:00 PM & 6:00 PM - 9:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 nila-gradient-warm">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Expert Maternity Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pregnancy Monitoring", desc: "Detailed ANC checkups and high-resolution scans to ensure baby's health." },
              { title: "Normal Delivery", desc: "Patient and supportive natural birth environment led by senior specialists." },
              { title: "C-Section Care", desc: "Safety-first surgical delivery with gold-standard sterile OT protocols." },
            ].map((s, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-nila-navy mb-3">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Planning Your Delivery?
          </h2>
          <p className="text-nila-light-blue text-lg mb-10 max-w-xl mx-auto">
            Book a consultation with Dr. Nithya Subashini today. We are here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call +91 96552 25192
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto text-base gap-2">
                Directions from Tiruchengode <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
