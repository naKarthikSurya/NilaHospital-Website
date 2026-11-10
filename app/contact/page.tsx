import { Metadata } from "next";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import ReviewPrompt from "@/components/ReviewPrompt";
import { contactPageSchema, buildPageMetadata } from "@/lib/seo";
import { hospital } from "@/data/hospital";
import ClientCTA from "@/components/ClientCTA";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Nila Hospital Namakkal",
  description: "Visit Nila Hospital, Namakkal for expert maternity, pregnancy (ANC), and gynaecology care. Call +91 96552 25192 to schedule a consultation.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {/* Hero */}
      <HeroGradientSection className="text-white pt-20 pb-20 md:pt-24 md:pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Contact & Location
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Nila Hospital, Namakkal
          </h1>
          <p className="text-white/75 max-w-xl mx-auto text-lg leading-relaxed">
            Located on Salem Road, Namakkal — call us or get directions right
            from here.
          </p>
        </div>
      </HeroGradientSection>

      {/* Action-First */}
      <section className="pt-6 md:pt-8 pb-14 md:pb-16 lg:pb-20 bg-background relative z-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl mx-auto">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "contact_hero_card_call", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
              className="block animate-fade-in"
            >
              <div className="bg-gradient-to-b from-[#f8fbff] to-white border border-[#cfe0f0] rounded-2xl p-10 text-center shadow-[0_18px_45px_-24px_rgba(22,56,92,0.45)] nila-card-hover cursor-pointer group h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(22,56,92,0.55)]">
                <div className="bg-[#e9f1f8] border border-[#c8dbee] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="h-6 w-6 text-[#5b80a6]" />
                </div>
                <div className="text-[1.35rem] font-bold mb-2 text-[#0f2c4c]">Call Now</div>
                <div className="text-[#3a71b1] text-lg font-semibold mb-2">
                  {hospital.phoneDisplay}
                </div>
                <div className="text-[#8c9bab] text-sm">
                  Tap to call on mobile
                </div>
              </div>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "contact_hero_card_directions", link_url: hospital.mapsUrl }}
              href={hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-in"
            >
              <div className="bg-gradient-to-b from-[#fff8f4] to-white border border-[#f3d5c9] rounded-2xl p-10 text-center shadow-[0_18px_45px_-24px_rgba(131,69,37,0.35)] nila-card-hover cursor-pointer group h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(131,69,37,0.5)]">
                <div className="bg-[#ffe9de] border border-[#f5cdbd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Navigation className="h-6 w-6 text-[#eb7150]" />
                </div>
                <div className="text-[1.35rem] font-bold mb-2 text-[#0f2c4c]">Get Directions</div>
                <div className="text-[#0f2c4c] text-lg font-medium mb-2">
                  {hospital.fullName}
                </div>
                <div className="text-[#8c9bab] text-sm">
                  Opens in Maps app
                </div>
              </div>
            </ClientCTA>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-muted">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <h3 className="font-bold text-foreground text-lg">Address</h3>
                </div>
                <Card className="border border-border shadow-sm rounded-xl md:max-w-[36rem]">
                  <CardContent className="p-4 text-muted-foreground text-sm">
                    <p className="leading-7">
                      {hospital.address.streetAddress}, {hospital.address.addressLocality}, {hospital.address.addressRegion} {hospital.address.postalCode}
                    </p>
                    <p className="mt-3 text-foreground font-medium text-xs bg-[hsl(var(--nila-warm-light))] inline-block px-3 py-1 rounded-full">
                      📍 {hospital.address.landmark}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <h3 className="font-bold text-foreground text-lg">
                    Phone Numbers
                  </h3>
                </div>
                <Card className="border border-border shadow-sm rounded-xl">
                  <CardContent className="p-4 space-y-2">
                    <ClientCTA
                      event="phone_click"
                      params={{ cta_location: "contact_details_card", link_url: hospital.phoneHref }}
                      href={hospital.phoneHref}
                      className="block text-sm font-semibold text-[hsl(var(--nila-warm))] hover:underline"
                    >
                      {hospital.phoneDisplay} (Mobile / Emergency)
                    </ClientCTA>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <h3 className="font-bold text-foreground text-lg">
                    Visiting Hours
                  </h3>
                </div>
                <Card className="border border-border shadow-sm rounded-xl">
                  <CardContent className="p-4 space-y-3">
                    {hospital.openingHours.map((oh, i) => (
                      <div key={oh.days} className={`flex justify-between text-sm flex-col sm:flex-row gap-1 ${i > 0 ? "border-t border-border pt-3" : ""}`}>
                        <span className="font-medium text-foreground">{oh.days}</span>
                        <span className="text-muted-foreground">{oh.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                Find Us on the Map
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-80">
                <iframe
                  title="Nila Hospital Location"
                  src={hospital.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ClientCTA
                event="directions_click"
                params={{ cta_location: "contact_map_button", link_url: hospital.mapsUrl }}
                href={hospital.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3"
              >
                <Button className="w-full gap-2 bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white shadow-md">
                  <Navigation className="h-4 w-4" /> Open in Google Maps
                </Button>
              </ClientCTA>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
                Directions
              </div>
              <h2 className="text-3xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
                How to Reach Us
              </h2>
            </div>
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardContent className="p-6 space-y-4">
                {[
                  {
                    label: "By Road",
                    note: `We are located on ${hospital.address.streetAddress.split(',').slice(-3).join(',').trim()} — a major arterial road easily accessible from all parts of the city.`,
                  },
                  {
                    label: "Key Landmark",
                    note: `${hospital.address.landmark} on Salem Road. Easy to spot with the Nila Hospital signage.`,
                  },
                  {
                    label: "From Namakkal Bus Stand",
                    note: `Approximately 5–10 minutes by auto or cab. Ask for Nila Hospital opposite Reynolds Car Showroom on Salem Road.`,
                  },
                  {
                    label: "Parking",
                    note: "Parking space available in front of the hospital.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Navigation className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground text-sm">
                        {item.label}:{" "}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {item.note}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <ReviewPrompt />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Ready to Visit? We're Here for You
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ClientCTA
              event="phone_click"
              params={{ cta_location: "contact_bottom_call", link_url: hospital.phoneHref }}
              href={hospital.phoneHref}
            >
              <Button
                size="lg"
                className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base"
              >
                <Phone className="h-5 w-5" /> Call {hospital.phoneDisplay}
              </Button>
            </ClientCTA>
            <ClientCTA
              event="directions_click"
              params={{ cta_location: "contact_bottom_directions", link_url: hospital.mapsUrl }}
              href={hospital.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base"
              >
                <Navigation className="h-5 w-5" /> Get Directions
              </Button>
            </ClientCTA>
          </div>
        </div>
      </section>
    </>
  );
}
