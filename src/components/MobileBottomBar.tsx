import { Phone, MapPin } from "lucide-react";

const MAPS_URL =
  "https://maps.google.com/?q=Nila+Hospital+Namakkal+Salem+Road+Tamil+Nadu";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl">
      <a
        href="tel:+919655225192"
        className="flex-1 flex items-center justify-center gap-2 bg-nila-navy text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--nila-warm))] text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <MapPin className="h-5 w-5" />
        Get Directions
      </a>
    </div>
  );
}
