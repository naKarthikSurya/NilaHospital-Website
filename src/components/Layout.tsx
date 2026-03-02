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
    const finalTitle = title ? `${title} | Nila Hospital` : "Nila Hospital | Best Obstetrics & Gynaecology Specialty in Namakkal";
    document.title = finalTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Nila Hospital Namakkal: Leading women's specialty hospital for Obstetrics & Gynaecology. expert pregnancy care, safe deliveries, and compassionate health services.");
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentPath = window.location.pathname === "/" ? "" : window.location.pathname;
    canonical.setAttribute("href", `https://nilahospital.com${currentPath}`);

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
