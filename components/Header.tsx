"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { hospital } from "@/data/hospital";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const specialtyLinks = [
  { label: "Maternity Care (Namakkal)", path: "/maternity-hospital-namakkal" },
  { label: "Gynaecology Care", path: "/gynaecology-namakkal" },
  { label: "Obstetrics & Antenatal", path: "/obstetrics-namakkal" },
  { label: "Women's Specialty Hospital", path: "/womens-hospital-namakkal" },
  { label: "Women's Health & Wellness", path: "/womens-health-namakkal" },
  { label: "General Medicine", path: "/general-medicine-namakkal" },
  { label: "Why Choose Nila Hospital", path: "/why-choose-nila-hospital-namakkal" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isSpecialtyActive = specialtyLinks.some((link) => pathname === link.path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nila-navy/95 backdrop-blur-md shadow-lg">
      <div className="container max-w-6xl mx-auto px-4 py-1 md:py-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 group">
          <img
            src="/assets/NHLogo_NB.svg"
            alt="Nila Hospital Logo"
            style={{ height: "120px" }}
            className="h-20 md:h-[90px] w-auto transition-transform group-hover:scale-105"
          />
          <div className="-ml-4">
            <div
              className="text-white font-bold text-lg leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px" }}
            >
              Nila Hospital
            </div>
            <div
              className="text-nila-light-blue text-xs leading-tight tracking-wide"
              style={{ fontSize: "14px" }}
            >
              Obstetrics & Gynaecology
            </div>
          </div>
        </Link>

        {/* Desktop Nav & Call Button Group */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                pathname === "/"
                  ? "text-white bg-white/15"
                  : "text-nila-light-blue hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* Specialties Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-all outline-none ${
                    isSpecialtyActive
                      ? "text-white bg-white/15"
                      : "text-nila-light-blue hover:text-white hover:bg-white/10"
                  }`}
                >
                  Specialties <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-nila-navy border border-white/15 text-white min-w-[230px] p-2 shadow-2xl rounded-xl">
                {specialtyLinks.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      href={item.path}
                      className="cursor-pointer text-sm py-2 px-3 rounded-lg text-nila-light-blue hover:text-white hover:bg-white/10 transition-colors focus:bg-white/10 focus:text-white"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  pathname === link.path
                    ? "text-white bg-white/15"
                    : "text-nila-light-blue hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <a 
              href={hospital.phoneHref}
              onClick={() => trackEvent("phone_click", { cta_location: "header_desktop", link_url: hospital.phoneHref })}
            >
              <Button className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white gap-2 font-semibold shadow-md">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>
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
              className="bg-nila-navy border-nila-blue w-80 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Nila Hospital
                </span>
                <button onClick={() => setOpen(false)} className="text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium py-2.5 px-4 rounded-lg transition-all ${
                    pathname === "/"
                      ? "text-white bg-white/15"
                      : "text-nila-light-blue hover:text-white hover:bg-white/10"
                  }`}
                >
                  Home
                </Link>

                {/* Specialties Subgroup on Mobile */}
                <div className="my-2 border-y border-white/10 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--nila-warm))] px-4 mb-2">
                    Specialties &amp; Treatments
                  </div>
                  <div className="flex flex-col gap-1 pl-2">
                    {specialtyLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setOpen(false)}
                        className={`text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                          pathname === link.path
                            ? "text-white bg-white/15"
                            : "text-nila-light-blue hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium py-2.5 px-4 rounded-lg transition-all ${
                      pathname === link.path
                        ? "text-white bg-white/15"
                        : "text-nila-light-blue hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href={hospital.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 bg-[hsl(var(--nila-warm))] text-white rounded-lg py-3 font-semibold shadow-md"
                  onClick={() => {
                    setOpen(false);
                    trackEvent("phone_click", { cta_location: "header_mobile", link_url: hospital.phoneHref });
                  }}
                >
                  <Phone className="h-4 w-4" />
                  Call Now ({hospital.phoneDisplay})
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
