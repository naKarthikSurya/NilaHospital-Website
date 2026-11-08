"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Home, RefreshCw, AlertCircle } from "lucide-react";
import { hospital } from "@/data/hospital";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for diagnostic purposes
    console.error("Client error captured:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-2">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-nila-navy">
          Something went wrong
        </h1>

        <p className="text-muted-foreground text-sm leading-relaxed">
          We encountered an unexpected issue while loading this page. Our team is here to assist you 24/7.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="gap-2 border-border"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </Button>

          <Button
            asChild
            className="gap-2 bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white"
          >
            <Link href="/">
              <Home className="w-4 h-4" /> Return Home
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-border/60">
          <p className="text-xs text-muted-foreground mb-3">
            For immediate medical assistance or appointment enquiries:
          </p>
          <a
            href={hospital.phoneHref}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <Phone className="w-4 h-4" /> {hospital.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
