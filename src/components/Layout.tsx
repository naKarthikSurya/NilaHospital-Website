import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  hideMobileBar?: boolean;
}

export default function Layout({
  children,
  title,
  description,
  schema,
  hideMobileBar = false,
}: LayoutProps) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Update Title
    const DEFAULT_TITLE = "Best Maternity & Gynaecology Hospital in Namakkal | Nila Hospital";
    const isFullTitle = title === DEFAULT_TITLE;
    const finalTitle = isFullTitle ? title : (title ? `${title} | Nila Hospital Namakkal` : DEFAULT_TITLE);
    document.title = finalTitle;

    // Helper to update or create meta tags
    const updateOrCreateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', attribute);
        } else {
          element.setAttribute('name', attribute);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    const finalDescription = description || "Nila Hospital is Namakkal's trusted maternity & gynaecology hospital. Expert care for normal delivery, C-section, PCOS & high-risk pregnancy. Call 24/7.";

    updateOrCreateMeta('meta[name="description"]', 'description', finalDescription);
    updateOrCreateMeta('meta[property="og:title"]', 'og:title', finalTitle);
    updateOrCreateMeta('meta[property="og:description"]', 'og:description', finalDescription);
    updateOrCreateMeta('meta[name="twitter:title"]', 'twitter:title', finalTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', 'twitter:description', finalDescription);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    // Normalize path: remove trailing slash for subpages, keep for root
    let path = window.location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    const finalPath = path === "/" ? "/" : path;
    canonical.setAttribute("href", `https://nilahospital.com${finalPath}`);

    const schemaScriptId = "route-schema-jsonld";
    const existingSchemaScript = document.getElementById(schemaScriptId);

    if (schema) {
      const schemaPayload =
        Array.isArray(schema) && schema.length > 1
          ? {
              "@context": "https://schema.org",
              "@graph": schema.map((entry) => {
                const { "@context": _context, ...withoutContext } = entry;
                return withoutContext;
              }),
            }
          : Array.isArray(schema)
            ? schema[0]
            : schema;

      const scriptTag =
        existingSchemaScript || document.createElement("script");
      scriptTag.setAttribute("id", schemaScriptId);
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.textContent = JSON.stringify(schemaPayload);

      if (!existingSchemaScript) {
        document.head.appendChild(scriptTag);
      }
    } else if (existingSchemaScript) {
      existingSchemaScript.remove();
    }
  }, [title, description, schema]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] pb-20 md:pb-0">{children}</main>
      <Footer />
      {!hideMobileBar && <MobileBottomBar />}
    </div>
  );
}
