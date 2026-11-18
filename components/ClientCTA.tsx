"use client";

import React from "react";
import { trackEvent, triggerConversionContactEvent, AnalyticsEvent, EventParams } from "@/lib/analytics";

interface Props {
  event: AnalyticsEvent;
  params?: EventParams;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const CONVERSION_EVENTS: AnalyticsEvent[] = [
  "phone_click",
  "directions_click",
  "appointment_click",
  "doctor_contact_click",
];

export default function ClientCTA({ event, params, children, href, target, rel, className }: Props) {
  const isConversion = CONVERSION_EVENTS.includes(event);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        onClick={(e) => {
          trackEvent(event, params);
          if (isConversion) {
            triggerConversionContactEvent(e, href, target);
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={className}
      onClick={() => {
        trackEvent(event, params);
        if (isConversion) {
          triggerConversionContactEvent(undefined, undefined, target);
        }
      }}
    >
      {children}
    </div>
  );
}
