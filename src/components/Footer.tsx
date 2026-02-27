import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/NHLogo_NB.svg";

export default function Footer() {
  return (
    <footer className="bg-nila-navy text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/5 rounded-full blur-3xl" />
      <div className="container max-w-6xl mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <img src={logoWhite} alt="Nila Hospital" className="h-24 w-auto" />
              <div className="-ml-4">
                <div className="font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Nila Hospital</div>
                <div className="text-nila-light-blue text-xs tracking-wide">Obstetrics & Gynaecology</div>
              </div>
            </div>
            <p className="text-nila-light-blue text-sm mt-3 leading-relaxed">
              Dedicated to maternal excellence and women's health care in Namakkal.
            </p>

          </div>

          {/* Quick Links */}
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
                  <Link to={link.path} className="text-nila-light-blue hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                <span className="text-nila-light-blue text-sm leading-relaxed">
                  743, A/1, A/2, Nila Hospital,<br />Salem Road, Namakkal,<br />Tamil Nadu 637001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919655225192" className="text-nila-light-blue hover:text-white text-sm transition-colors">
                    +91 96552 25192
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">Mon – Fri</div>
                  <div className="text-nila-light-blue">9AM – 1PM & 6PM – 9PM</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">Sat & Sun</div>
                  <div className="text-nila-light-blue">9AM – 1PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-nila-light-blue/70 text-sm">
            © 2026 Nila Hospital. All rights reserved. | Namakkal, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
