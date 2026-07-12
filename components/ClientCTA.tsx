"use client";

import React from "react";
import { trackEvent, AnalyticsEvent, EventParams } from "@/lib/analytics";

interface Props {
  event: AnalyticsEvent;
  params?: EventParams;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function ClientCTA({ event, params, children, href, target, rel, className }: Props) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        onClick={() => trackEvent(event, params)}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={className} onClick={() => trackEvent(event, params)}>
      {children}
    </div>
  );
}
