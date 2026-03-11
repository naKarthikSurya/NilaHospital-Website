import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Heart, Clock, CheckCircle, ArrowRight } from "lucide-react";
import HeroGradientSection from "@/components/HeroGradientSection";
import { locationPageSchema } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

export default function PregnancyCareRasipuram() {
  const schema = locationPageSchema("Rasipuram", "Pregnancy Care");

  return (
    <Layout 
      title="Pregnancy Care near Rasipuram | Nila Hospital"
      description="Leading maternity and pregnancy care for families in Rasipuram. Located just 25 kms (30 mins) away in Namakkal, Nila Hospital specializes in normal delivery and high-risk pregnancy monitoring."
      schema={schema}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-5 py-1.5 text-sm mb-6 tracking-widest uppercase font-medium border border-white/10">
            Serving Families in Rasipuram
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Expert Pregnancy Care<br />near Rasipuram
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-base leading-relaxed">
            Nila Hospital (Namakkal) provides the high-quality clinical expertise Rasipuram families need, in a compassionate and private environment.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-nila-navy">Just 25 kms from Rasipuram</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Families from Rasipuram choose Nila Hospital for our <strong>expert led approach</strong> to pregnancy monitoring (ANC) and our dedication to natural birth protocols. We are about a <strong>30-minute drive</strong> from Rasipuram town.
              </p>
              <div className="space-y-4">
                {[
                  "Direct access to Senior Consultant Gynaecologist",
                  "Detailed Prenatal Screenings & Blood Work",
                  "Healthy Pregnancy Diet & Lifestyle Plans",
                  "24/7 Obstetric Emergency Support",
                  "Modern & Clean In-patient Facility",
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
              <div className="absolute -inset-4 bg-[hsl(var(--nila-warm))]/5 rounded-[3rem] -rotate-2" />
              <Card className="relative border-border shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center space-y-6">
                  <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-4 w-fit mx-auto">
                    <Heart className="h-10 w-10 text-[hsl(var(--nila-warm))]" />
                  </div>
                  <h3 className="text-2xl font-bold text-nila-navy">Trusted Maternity Care</h3>
                  <p className="text-muted-foreground">
                    At Nila Hospital, every mother receives personalized attention. We don't believe in the corporate 'churn' — we believe in building trust through patient, detailed healthcare.
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--nila-warm))]">Clinic Hours</span>
                    <span className="text-foreground font-semibold">Morning & Evening Slots Available</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Excellence Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nila-navy mb-8">Clinical Excellence You Can Trust</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Led by <strong>Dr. Nithya Subashini (MBBS, DGO)</strong>, Nila Hospital has established itself as a leading name for pregnancy care in the Namakkal-Rasipuram region. We follow international clinical standards and WHO guidelines to ensure every pregnancy is safe and every delivery is handled with clinical precision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-foreground mb-2">Advanced Fetal Wellbeing</h4>
              <p className="text-sm text-muted-foreground">Regular growth monitoring, anomaly screening guidance, and nutritional planning.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-foreground mb-2">High-Risk Management</h4>
              <p className="text-sm text-muted-foreground">Expert care for gestational diabetes, hypertension, and previous surgical births.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Journey With Us
          </h2>
          <p className="text-nila-light-blue text-lg mb-10 max-w-xl mx-auto">
            Experience clinical care that remains human. Call us to book your visit from Rasipuram today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call +91 96552 25192
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto text-base gap-2">
                Directions from Rasipuram <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
