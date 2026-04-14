import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { doctorsList } from '@/data/doctors';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Phone, Mail, Award, Clock, CalendarHeart, HeartPulse, GraduationCap, Link as LinkIcon, User } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ doctorId: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const doctor = doctorsList.find(d => d.id === resolvedParams.doctorId);
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found - Nila Hospital'
    };
  }

  return {
    title: `${doctor.name} - ${doctor.category.replace(/-/g, ' ')} | Nila Hospital`,
    description: doctor.description,
    alternates: {
      canonical: `/doctors/${doctor.id}`,
    },
  };
}

export async function generateStaticParams() {
  return doctorsList.map((doctor) => ({
    doctorId: doctor.id,
  }));
}

export default async function DoctorProfile({ params }: Props) {
  const resolvedParams = await params;
  const doctor = doctorsList.find(d => d.id === resolvedParams.doctorId);

  if (!doctor) {
    notFound();
  }

  // Common JSON-LD structure using actual doctor data
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.description,
    medicalSpecialty: doctor.category.replace(/-/g, ' '),
    image: "https://nilahospital.com/assets/NHLogo_NB.svg", // Fallback image since no real photos
    url: `https://nilahospital.com/doctors/${doctor.id}`,
    telephone: "+919655225192",
    availableService: "Obstetrics and Gynaecology",
    address: {
      "@type": "PostalAddress",
      streetAddress: "743, A/1, A/2, Salem Road, Swamy Nagar",
      addressLocality: "Namakkal",
      addressRegion: "Tamil Nadu",
      postalCode: "637001",
      addressCountry: "IN"
    },
    hospitalAffiliation: {
      "@type": "Hospital",
      name: "Nila Hospital",
      url: "https://nilahospital.com"
    }
  };

  const isDrd = doctor.id === 'dr-deepika';
  const isDrr = doctor.id === 'dr-rajesh';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      
      {/* Hero section */}
      <div className="bg-gradient-to-b from-nila-navy/5 to-background py-8 md:py-16">
        <div className="container px-4 max-w-5xl mx-auto">
          <Link href="/doctors" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-nila-navy transition-colors mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Doctors
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 xl:w-1/4 shrink-0 mt-2">
              <Card className="overflow-hidden border-border/50 shadow-lg bg-card inline-block w-full max-w-sm mx-auto">
                <div className="w-full aspect-square bg-nila-navy/5 flex items-center justify-center relative inner-shadow">
                  <User className="h-32 w-32 text-nila-navy/20" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${doctor.type === 'practitioner' ? 'bg-primary' : 'bg-[hsl(var(--nila-warm))]'} text-white border-0 shadow-sm`}>
                      {doctor.type === 'pg' && 'pursuing' in doctor ? `Currently Pursuing ${doctor.pursuing}` : doctor.badge}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            <div className="w-full md:w-2/3 xl:w-3/4 flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-nila-navy mb-2">{doctor.name}</h1>
                  <p className="text-primary font-semibold text-lg uppercase tracking-wide flex items-center gap-2">
                    <Award className="h-5 w-5" /> {doctor.category.replace(/-/g, ' ')}
                  </p>
                </div>
                
                {/* Conditionally Render Contact Area based on requirements */}
                {(!isDrd && !isDrr) && (
                  <div className="flex flex-row md:flex-col gap-3">
                    <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white gap-2 shadow-md" asChild>
                      <a href="tel:+919655225192">
                        <Phone className="h-4 w-4" /> Contact Desk
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2 bg-white hidden" asChild>
                      <a href="https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8" target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-4 w-4" /> View Direction
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              <div className="prose prose-slate max-w-none mb-10">
                <h3 className="text-2xl font-bold text-nila-navy mb-4 border-b border-border pb-2 inline-block">About the Doctor</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{doctor.description}</p>
              </div>

              {doctor.infoCards && doctor.infoCards.length > 0 && (
                <div className="grid grid-cols-1 gap-6">
                  {doctor.infoCards.map((card, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-xl font-bold text-nila-navy mb-4 flex items-center gap-2">
                        <card.icon className="h-5 w-5 text-primary" /> {card.title}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {card.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-muted-foreground bg-white border border-border/50 p-3 rounded-xl shadow-sm">
                            <span className="text-[hsl(var(--nila-warm))] mt-1 shrink-0">•</span>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
