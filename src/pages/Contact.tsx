import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const MAPS_URL =
  "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";
const PHONE_PRIMARY = "tel:+919655225192";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2183490634034!2d78.16326507578772!3d11.24534185036797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf0311c61c21%3A0xef2619b4195dd4b2!2sNila%20Hospital!5e0!3m2!1sen!2sin!4v1771914117542!5m2!1sen!2sin";

export default function Contact() {
  return (
    <Layout title="Contact & Location in Namakkal">
      {/* Hero */}
      <HeroGradientSection className="text-white pt-20 pb-20 md:pt-24 md:pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Contact & Location
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We're Easy to Reach
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
            <a href={PHONE_PRIMARY} className="block">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white border border-[#cfe0f0] rounded-2xl p-10 text-center shadow-[0_18px_45px_-24px_rgba(22,56,92,0.45)] nila-card-hover cursor-pointer group h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(22,56,92,0.55)]">
                <div className="bg-[#e9f1f8] border border-[#c8dbee] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="h-6 w-6 text-[#5b80a6]" />
                </div>
                <div className="text-[1.35rem] font-bold mb-2 text-[#0f2c4c]">Call Now</div>
                <div className="text-[#3a71b1] text-lg font-semibold mb-2">
                  +91 96552 25192
                </div>
                <div className="text-[#8c9bab] text-sm">
                  Tap to call on mobile
                </div>
              </div>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gradient-to-b from-[#fff8f4] to-white border border-[#f3d5c9] rounded-2xl p-10 text-center shadow-[0_18px_45px_-24px_rgba(131,69,37,0.35)] nila-card-hover cursor-pointer group h-full flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_rgba(131,69,37,0.5)]">
                <div className="bg-[#ffe9de] border border-[#f5cdbd] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <Navigation className="h-6 w-6 text-[#eb7150]" />
                </div>
                <div className="text-[1.35rem] font-bold mb-2 text-[#0f2c4c]">Get Directions</div>
                <div className="text-[#0f2c4c] text-lg font-medium mb-2">
                  Nila Hospital, Namakkal
                </div>
                <div className="text-[#8c9bab] text-sm">
                  Opens in Maps app
                </div>
              </div>
            </a>
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
                      743, A/1, A/2, Nila Hospital, Salem Road, Namakkal, Tamil
                      Nadu 637001
                    </p>
                    <p className="mt-3 text-foreground font-medium text-xs bg-[hsl(var(--nila-warm-light))] inline-block px-3 py-1 rounded-full">
                      📍 Opposite Reynolds Car Showroom
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
                    <a
                      href={PHONE_PRIMARY}
                      className="block text-sm font-semibold text-[hsl(var(--nila-warm))] hover:underline"
                    >
                      +91 96552 25192 (Mobile / Emergency)
                    </a>
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
                    <div className="flex justify-between text-sm flex-col sm:flex-row gap-1">
                      <span className="font-medium text-foreground">Mon – Fri</span>
                      <span className="text-muted-foreground">9:00 AM – 1:00 PM & 6:00 PM – 9:00 PM</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-sm flex-col sm:flex-row gap-1">
                      <span className="font-medium text-foreground">Sat & Sun</span>
                      <span className="text-muted-foreground">9:00 AM – 1:00 PM</span>
                    </div>
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
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3"
              >
                <Button className="w-full gap-2 bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white shadow-md">
                  <Navigation className="h-4 w-4" /> Open in Google Maps
                </Button>
              </a>
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
                    note: "We are located on Salem Road, Namakkal — a major arterial road easily accessible from all parts of the city.",
                  },
                  {
                    label: "Key Landmark",
                    note: "Opposite Reynolds Car Showroom on Salem Road. Easy to spot with the Nila Hospital signage.",
                  },
                  {
                    label: "From Namakkal Bus Stand",
                    note: "Approximately 5–10 minutes by auto or cab. Ask for Salem Road, MNR Complex.",
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

      {/* Final CTA */}
      <section className="bg-nila-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Ready to Visit? We're Here for You
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_PRIMARY}>
              <Button
                size="lg"
                className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base"
              >
                <Phone className="h-5 w-5" /> Call +91 96552 25192
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base"
              >
                <Navigation className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
