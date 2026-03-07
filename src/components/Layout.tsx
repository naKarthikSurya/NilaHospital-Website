import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  useEffect(() => {
    // Update Title
    const isFullTitle = title === "Nila Hospital | Best Gynaecology Specialty in Namakkal";
    const finalTitle = isFullTitle ? title : (title ? `${title} | Nila Hospital` : "Nila Hospital | Best Gynaecology Specialty in Namakkal");
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

    const finalDescription = description || "Leading hospital for Obstetrics & Gynaecology in Namakkal. Expert pregnancy monitoring, infertility treatments, and safe maternity services. Care you trust.";

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

  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px] pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
