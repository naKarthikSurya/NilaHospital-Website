"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Facebook, Instagram, ShieldCheck } from "lucide-react";
import { hospital } from "@/data/hospital";
import { trackEvent } from "@/lib/analytics";

const specialtyLinks = [
  { label: "Maternity Hospital Namakkal", path: "/maternity-hospital-namakkal" },
  { label: "Gynaecology Care", path: "/gynaecology-namakkal" },
  { label: "Obstetrics & Antenatal", path: "/obstetrics-namakkal" },
  { label: "Women's Health Care", path: "/womens-health-namakkal" },
  { label: "General Medicine", path: "/general-medicine-namakkal" },
  { label: "Why Choose Nila Hospital", path: "/why-we-are-best-hospital-in-namakkal" },
  { label: "Best Women Hospital Guide", path: "/best-women-hospital-in-namakkal" },
];

export default function Footer() {
  return (
    <footer className="bg-nila-navy text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/5 rounded-full blur-3xl" />
      <div className="container max-w-6xl mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <img src="/assets/NHLogo_NB.svg" alt="Nila Hospital" className="h-32 w-auto" />
              <div className="-ml-4">
                <div className="font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{hospital.name}</div>
                <div className="text-nila-light-blue text-xs tracking-wide">{hospital.tagline}</div>
              </div>
            </div>
            <p className="text-nila-light-blue text-sm mt-3 leading-relaxed">
              Dedicated to maternal excellence and specialist women's healthcare in Namakkal.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {hospital.socialProfiles.map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-[hsl(var(--nila-warm))] transition-colors"
                >
                  {profile.platform === "Facebook" ? (
                    <Facebook className="h-5 w-5" />
                  ) : (
                    <Instagram className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Doctors", path: "/doctors" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-nila-light-blue hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialties & Treatments (High-intent SEO internal links) */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Specialties &amp; Care</h4>
            <ul className="space-y-2.5">
              {specialtyLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-nila-light-blue hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                <a
                  href={hospital.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("directions_click", { cta_location: "footer_address", link_url: hospital.mapsUrl })}
                  className="text-nila-light-blue hover:text-white text-sm leading-relaxed transition-colors"
                >
                  {hospital.address.streetAddress},<br />{hospital.address.addressLocality},<br />{hospital.address.addressRegion} {hospital.address.postalCode}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                <div className="flex flex-col">
                  <a 
                    href={hospital.phoneHref}
                    onClick={() => trackEvent("phone_click", { cta_location: "footer_contact", link_url: hospital.phoneHref })}
                    className="text-nila-light-blue hover:text-white text-sm transition-colors font-medium"
                  >
                    {hospital.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-nila-light-blue/70">24/7 Emergency Support</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 5: Working Hours */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Working Hours</h4>
            <ul className="space-y-3">
              {hospital.openingHours.map((oh) => (
                <li key={oh.days} className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <div className="text-white font-medium">{oh.days}</div>
                    <div className="text-nila-light-blue">{oh.hours}</div>
                  </div>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-nila-light-blue/80">
                <ShieldCheck className="h-4 w-4 text-[hsl(var(--nila-warm))]" />
                Emergency maternity care 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-nila-light-blue/70 text-sm">
            © 2026 {hospital.name}. All rights reserved. | Namakkal, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
