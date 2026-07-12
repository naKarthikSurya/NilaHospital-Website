"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  doctorName: string;
  phoneHref: string;
  phoneDisplay: string;
}

export default function DoctorContactButton({ doctorName, phoneHref, phoneDisplay }: Props) {
  return (
    <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white gap-2 shadow-md" asChild>
      <a 
        href={phoneHref}
        onClick={() => {
          trackEvent("doctor_contact_click", {
            doctor_name: doctorName,
            cta_location: "doctor_profile_contact",
            link_url: phoneHref
          });
        }}
      >
        <Phone className="h-4 w-4" /> {phoneDisplay}
      </a>
    </Button>
  );
}
