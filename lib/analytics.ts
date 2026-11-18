export type AnalyticsEvent = 
  | "phone_click"
  | "directions_click"
  | "appointment_click"
  | "review_click"
  | "service_cta_click"
  | "doctor_profile_view"
  | "doctor_contact_click"
  | "form_submit";

export interface EventParams {
  page_path?: string;
  cta_location?: string;
  link_url?: string;
  service_name?: string;
  doctor_name?: string;
  [key: string]: any;
}

export function trackEvent(event: AnalyticsEvent, params?: EventParams) {
  if (typeof window === "undefined") return;
  
  try {
    const gtag = (window as any).gtag;
    if (typeof gtag === "function") {
      // Ensure no sensitive personal data is accidentally recorded
      const sanitizedParams = { ...params };
      delete sanitizedParams.name;
      delete sanitizedParams.phone;
      delete sanitizedParams.symptoms;
      delete sanitizedParams.diagnoses;
      delete sanitizedParams.message;

      gtag("event", event, sanitizedParams);
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn(`gtag not available. Event [${event}] with params:`, params);
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error tracking event:", error);
    }
  }
}

export function triggerConversionContactEvent(
  e: { preventDefault: () => void } | undefined,
  url?: string,
  target?: string
) {
  if (typeof window === "undefined") return;

  const shouldDelayNavigation = Boolean(url && target !== "_blank");
  if (shouldDelayNavigation && e) {
    e.preventDefault();
  }

  const w = window as any;
  if (typeof w.gtagSendEvent === "function") {
    w.gtagSendEvent(shouldDelayNavigation ? url : undefined);
    return;
  }

  if (typeof w.gtag === "function") {
    const callback = () => {
      if (shouldDelayNavigation && typeof url === "string") {
        window.location.href = url;
      }
    };
    w.gtag("event", "conversion_event_contact_2", {
      event_callback: callback,
      event_timeout: 2000,
    });
    return;
  }

  if (shouldDelayNavigation && typeof url === "string") {
    window.location.href = url;
  }
}
