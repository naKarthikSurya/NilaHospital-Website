import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoWhite from "@/assets/NHLogo_NB.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nila-navy/95 backdrop-blur-md shadow-lg">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 group">
          <img
            src={logoWhite}
            alt="Nila Hospital Logo"
            className="h-20 w-auto"
          />
          <div>
            <div
              className="text-white font-bold text-lg leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nila Hospital
            </div>
            <div className="text-nila-light-blue text-xs leading-tight tracking-wide">
              Obstetrics & Gynaecology
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                location.pathname === link.path
                  ? "text-white bg-white/15"
                  : "text-nila-light-blue hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Call Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a href="tel:+919655225192">
            <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white gap-2 font-semibold shadow-md">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile: Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-nila-navy border-nila-blue w-72"
            >
              <div className="flex justify-between items-center mb-8">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Menu
                </span>
                <button onClick={() => setOpen(false)} className="text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium py-3 px-4 rounded-lg transition-all ${
                      location.pathname === link.path
                        ? "text-white bg-white/15"
                        : "text-nila-light-blue hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+919655225192"
                  className="mt-4 flex items-center justify-center gap-2 bg-[hsl(var(--nila-warm))] text-white rounded-lg py-3 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
