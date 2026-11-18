"use client";

import { Phone, MapPin } from "lucide-react";
import { hospital } from "@/data/hospital";
import { trackEvent, triggerConversionContactEvent } from "@/lib/analytics";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-2xl">
      <a
        href={hospital.phoneHref}
        onClick={(e) => {
          trackEvent("phone_click", { cta_location: "mobile_bottom_bar", link_url: hospital.phoneHref });
          triggerConversionContactEvent(e, hospital.phoneHref);
        }}
        className="flex-1 flex items-center justify-center gap-2 bg-nila-navy text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a
        href={hospital.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          trackEvent("directions_click", { cta_location: "mobile_bottom_bar", link_url: hospital.mapsUrl });
          triggerConversionContactEvent(e, hospital.mapsUrl, "_blank");
        }}
        className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--nila-warm))] text-white py-4 font-semibold text-sm active:opacity-80 transition-opacity"
      >
        <MapPin className="h-5 w-5" />
        Get Directions
      </a>
    </div>
  );
}
