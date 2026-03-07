import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Stethoscope, Clock, CheckCircle, GraduationCap, Award, HeartHandshake } from "lucide-react";
import { doctorsList } from "@/data/doctors";

const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE = "tel:+919655225192";

export default function DoctorProfile() {
  const { doctorId } = useParams();
  const doctor = doctorsList.find((d) => d.id === doctorId);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const isPG = doctor.type === 'pg';
  const isRestrictedDoctor = doctor.id === 'deepika' || doctor.id === 'rajesh';

  return (
    <Layout 
      title={`${doctor.name} | ${doctor.title} at Nila Hospital`}
      description={`${doctor.name} (${doctor.qualifications}), ${doctor.badge} at Nila Hospital. ${doctor.description}`}
      hideMobileBar={isRestrictedDoctor}
    >
      {/* Hero Profile Section */}
      <HeroGradientSection className="pb-24 pt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--nila-warm))]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            
            {/* Image/Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[hsl(var(--nila-warm))] to-white/20 rounded-full opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-nila-navy/40 backdrop-blur-md flex flex-col items-center justify-center border-4 border-white/20 shrink-0 relative overflow-hidden">
                <Stethoscope className="h-20 w-20 text-white/40" />
                <div className="absolute bottom-6 bg-white/10 px-4 py-1 rounded-full border border-white/10 backdrop-blur-md">
                   <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Medical Faculty</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left flex-1">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <Badge className="bg-white/10 text-white border-white/20 px-4 py-1 backdrop-blur-sm text-xs font-bold uppercase tracking-widest">
                  {doctor.roleContext}
                </Badge>
                <Badge className="bg-[hsl(var(--nila-warm))]/20 text-[hsl(var(--nila-warm))] border-0 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  {isPG && doctor.pursuing ? `Currently Pursuing ${doctor.pursuing}` : doctor.badge}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{doctor.name}</h1>
              <div className="text-nila-light-blue text-xl md:text-2xl font-light mb-2 tracking-wide">{doctor.qualifications}</div>
              <div className="text-white/60 text-lg mb-8 max-w-2xl">{doctor.description}</div>
              
              {!isRestrictedDoctor && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold gap-3 px-10 w-full sm:w-auto hover:scale-105 transition-transform shadow-lg">
                      <MapPin className="h-5 w-5" /> Visit Our Hospital
                    </Button>
                  </a>
                  <a href={PHONE} className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 font-bold gap-3 px-10 w-full sm:w-auto backdrop-blur-sm">
                      <Phone className="h-5 w-5 text-[hsl(var(--nila-warm))]" /> Contact Desk
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </HeroGradientSection>

      {/* Main Content Grid */}
      <section className="bg-background py-16 lg:py-20 -mt-12 relative z-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {/* Standardized 3-Column Grid for Medical Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {doctor.infoCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <Card 
                      key={card.title} 
                      className="border-border/40 shadow-sm overflow-hidden nila-card-hover bg-card/60 backdrop-blur-sm transition-all duration-300 flex flex-col h-full rounded-2xl"
                    >
                      <div className="p-1 bg-gradient-to-r from-[hsl(var(--nila-warm))]/30 to-transparent shrink-0" />
                      <CardContent className="p-7 md:p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-6 shrink-0">
                          <div className="bg-[hsl(var(--nila-warm-light))] rounded-xl p-3 shadow-inner">
                            <Icon className="h-6 w-6 text-[hsl(var(--nila-warm))]" />
                          </div>
                          <h3 className="font-bold text-foreground text-xl tracking-tight">{card.title}</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                          {card.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-base text-muted-foreground group">
                              <CheckCircle className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-1 shrink-0 transition-transform group-hover:scale-110" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

            {/* Centered Philosophy Card */}
            <div className="max-w-4xl mx-auto pt-4">
              <Card className="border-primary/10 shadow-xl bg-primary/[0.02] overflow-hidden border-l-4 border-l-primary rounded-2xl">
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-center md:text-left text-balance">
                  <div className="bg-primary/10 rounded-full p-6 shrink-0">
                    <HeartHandshake className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-nila-navy mb-3">Our Patient Promise</h3>
                    <p className="text-muted-foreground leading-relaxed italic text-lg lg:text-xl">
                      "We treat every patient with the same dignity, privacy, and clinical precision we would expect for our own families."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Credentials Footer */}
      <section className="py-16 bg-muted/30 border-t border-border">
         <div className="container max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3 font-bold text-nila-navy uppercase tracking-widest text-xs">
              <Stethoscope className="h-5 w-5" />
              Evidence Based Medicine
            </div>
            <div className="flex items-center gap-3 font-bold text-nila-navy uppercase tracking-widest text-xs">
              <Award className="h-5 w-5" />
              State-of-the-Art OT
            </div>
            <div className="flex items-center gap-3 font-bold text-nila-navy uppercase tracking-widest text-xs">
              <CheckCircle className="h-5 w-5" />
              Patient Advocacy
            </div>
         </div>
      </section>
    </Layout>
  );
}
