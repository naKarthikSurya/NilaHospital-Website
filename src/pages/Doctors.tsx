import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, ArrowRight, User, GraduationCap } from "lucide-react";
import { doctorsList } from "@/data/doctors";
import { Link } from "react-router-dom";
import { doctorsListingSchema } from "@/lib/seo";

export default function Doctors() {
  const practitioners = doctorsList.filter(d => d.type === 'practitioner');

  const DoctorCard = ({ doctor }: { doctor: typeof doctorsList[0] }) => (
    <Card className="border border-border nila-card-hover group overflow-hidden bg-card h-full flex flex-col items-center text-center">
      <div className="w-full h-48 bg-nila-navy/5 flex items-center justify-center relative overflow-hidden group-hover:bg-nila-navy/10 transition-colors">
        <User className="h-20 w-20 text-nila-navy/20" />
        <div className="absolute top-4 right-4">
          <Badge className={`${doctor.type === 'practitioner' ? 'bg-primary' : 'bg-[hsl(var(--nila-warm))]'} text-white border-0`}>
            {doctor.type === 'pg' && doctor.pursuing ? `Currently Pursuing ${doctor.pursuing}` : doctor.badge}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-1 items-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{doctor.name}</h3>
          <div className="text-primary text-sm font-medium uppercase tracking-wide mt-1">{doctor.category.replace(/-/g, ' ')}</div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mt-2">
            <GraduationCap className="h-3.5 w-3.5" />
            {doctor.qualifications}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {doctor.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border w-full">
          <Link to={`/doctors/${doctor.id}`}>
            <Button variant="ghost" className="w-full justify-center gap-2 text-primary hover:text-primary hover:bg-primary/5 group/btn p-0 h-auto font-bold py-2">
              View Full Profile
              <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout 
      title="Best Doctors in Namakkal"
      description="Meet the specialist doctors at Nila Hospital Namakkal, including expert obstetric, gynaecology, and anaesthesia consultants for safe maternity care."
      schema={doctorsListingSchema}
    >
      <HeroGradientSection className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-4 backdrop-blur-sm">
            Medical Professionals
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Doctors at Your Service</h1>
          <p className="text-nila-light-blue text-lg max-w-2xl mx-auto">
            Our multi-disciplinary team is dedicated to providing compassionate, high-quality healthcare focused on your unique needs.
          </p>
        </div>
      </HeroGradientSection>

      {/* Practitioners Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-nila-navy nila-decoration nila-decoration-center pb-4 inline-block">Medical Practitioners</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Senior consultants leading our specialized departments with decades of collective experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {practitioners.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[hsl(var(--nila-warm-light))] rounded-full p-4 w-fit mx-auto mb-6">
            <Stethoscope className="h-8 w-8 text-[hsl(var(--nila-warm))]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Patient-First Care Always</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Nila Hospital, we believe in personalized attention for every patient. Our senior consultants ensure 
            complete continuity of care, providing the benefit of decades of clinical expertise throughout your healthcare journey.
          </p>
        </div>
      </section>
    </Layout>
  );
}
