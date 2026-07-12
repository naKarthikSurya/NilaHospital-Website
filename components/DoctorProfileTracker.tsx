"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  doctorName: string;
}

export default function DoctorProfileTracker({ doctorName }: Props) {
  useEffect(() => {
    trackEvent("doctor_profile_view", { doctor_name: doctorName });
  }, [doctorName]);

  return null;
}
