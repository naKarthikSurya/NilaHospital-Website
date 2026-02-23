import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const MAPS_URL = "https://maps.google.com/?q=Nila+Hospital+Namakkal+Salem+Road+Tamil+Nadu";
const PHONE_PRIMARY = "tel:+919655225192";
const PHONE_LANDLINE = "tel:+914286297192";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="nila-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Contact & Location</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">We're Easy to Reach</h1>
          <p className="text-white/75 max-w-xl mx-auto text-base leading-relaxed">
            Located on Salem Road, Namakkal — call us or get directions right from here.
          </p>
        </div>
      </section>

      {/* Action-First */}
      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto -mt-14">
            <a href={PHONE_PRIMARY} className="block">
              <div className="bg-nila-navy text-white rounded-2xl p-8 text-center shadow-xl nila-card-hover cursor-pointer">
                <Phone className="h-12 w-12 mx-auto mb-3 text-[hsl(var(--nila-warm))]" />
                <div className="text-xl font-bold mb-1">Call Now</div>
                <div className="text-[hsl(var(--nila-warm))] text-lg font-semibold">+91 96552 25192</div>
                <div className="text-white/40 text-xs mt-1">Tap to call on mobile</div>
              </div>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-[hsl(var(--nila-warm))] text-white rounded-2xl p-8 text-center shadow-xl nila-card-hover cursor-pointer">
                <Navigation className="h-12 w-12 mx-auto mb-3 text-white/80" />
                <div className="text-xl font-bold mb-1">Get Directions</div>
                <div className="text-white/90 text-base font-medium">Nila Hospital, Namakkal</div>
                <div className="text-white/50 text-xs mt-1">Opens in Maps app</div>
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
                <div className="pl-7 text-muted-foreground text-sm leading-relaxed space-y-1">
                  <p>743, A/1, A/2, MNR Complex,</p>
                  <p>Salem Road, Namakkal,</p>
                  <p>Tamil Nadu 637001</p>
                  <p className="mt-3 text-foreground font-medium text-xs bg-[hsl(var(--nila-warm-light))] inline-block px-3 py-1 rounded-full">
                    📍 Opposite Reynolds Car Showroom
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <h3 className="font-bold text-foreground text-lg">Phone Numbers</h3>
                </div>
                <div className="pl-7 space-y-2">
                  <a href={PHONE_PRIMARY} className="block text-sm font-semibold text-[hsl(var(--nila-warm))] hover:underline">
                    +91 96552 25192 (Mobile / Emergency)
                  </a>
                  <a href={PHONE_LANDLINE} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    04286 - 297192 (Landline)
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-[hsl(var(--nila-warm))]" />
                  <h3 className="font-bold text-foreground text-lg">Visiting Hours</h3>
                </div>
                <div className="pl-7">
                  <Card className="border border-border shadow-sm rounded-xl">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">Monday – Saturday</span>
                        <span className="text-muted-foreground">10:00 AM – 8:00 PM</span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between text-sm">
                        <span className="font-medium text-foreground">Sunday</span>
                        <span className="text-destructive font-medium">Emergency Only</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.432!2d78.1673!3d11.2218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab96f1e9999999%3A0x0!2sNila+Hospital+Namakkal!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block mt-3">
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
              <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">Directions</div>
              <h2 className="text-3xl font-bold text-foreground nila-decoration nila-decoration-center inline-block pb-4">
                How to Reach Us
              </h2>
            </div>
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardContent className="p-6 space-y-4">
                {[
                  { label: "By Road", note: "We are located on Salem Road, Namakkal — a major arterial road easily accessible from all parts of the city." },
                  { label: "Key Landmark", note: "Opposite Reynolds Car Showroom on Salem Road. Easy to spot with the Nila Hospital signage." },
                  { label: "From Namakkal Bus Stand", note: "Approximately 5–10 minutes by auto or cab. Ask for Salem Road, MNR Complex." },
                  { label: "Parking", note: "Parking space available in front of the hospital." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Navigation className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{item.label}: </span>
                      <span className="text-muted-foreground text-sm">{item.note}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ready to Visit? We're Here for You</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_PRIMARY}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto shadow-lg text-base">
                <Phone className="h-5 w-5" /> Call +91 96552 25192
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 gap-2 w-full sm:w-auto text-base">
                <Navigation className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
