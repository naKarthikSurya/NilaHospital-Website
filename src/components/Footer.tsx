import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/Nila_Hospital_Logo_2.png";

export default function Footer() {
  return (
    <footer className="bg-nila-navy text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--nila-warm))]/5 rounded-full blur-3xl" />
      <div className="container max-w-6xl mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img src={logoWhite} alt="Nila Hospital" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Nila Hospital</div>
                <div className="text-nila-light-blue text-xs tracking-wide">Obstetrics & Gynaecology</div>
              </div>
            </div>
            <p className="text-nila-light-blue text-sm mt-3 leading-relaxed">
              Dedicated to maternal excellence and women's health care in Namakkal.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="bg-white/10 rounded-lg p-2 text-nila-light-blue hover:text-white hover:bg-white/20 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 rounded-lg p-2 text-nila-light-blue hover:text-white hover:bg-white/20 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
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
                  743, A/1, A/2, MNR Complex,<br />Salem Road, Namakkal,<br />Tamil Nadu 637001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[hsl(var(--nila-warm))] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+914286297192" className="text-nila-light-blue hover:text-white text-sm transition-colors">
                    04286 - 297192
                  </a>
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
                  <div className="text-white font-medium">Mon – Sat</div>
                  <div className="text-nila-light-blue">09:00 AM – 08:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[hsl(var(--nila-warm))] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-white font-medium">Sunday</div>
                  <div className="text-nila-light-blue">Emergency Only</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-nila-light-blue/70 text-sm">
            © 2024 Nila Hospital. All rights reserved. | Namakkal, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
