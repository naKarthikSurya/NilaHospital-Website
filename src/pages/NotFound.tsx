import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout title="404 - Page Not Found">
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[hsl(var(--nila-warm-light))] text-[hsl(var(--nila-warm))]">
            <span className="text-4xl font-bold">404</span>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Oops! Page Missing</h1>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            The health resource or service you're looking for might have been moved or updated. Let's get you back on track.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="/">
              <button className="w-full rounded-lg bg-[hsl(var(--nila-warm))] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[hsl(var(--nila-warm))]/20 hover:bg-[hsl(var(--nila-warm))]/90 transition-all">
                Return Home
              </button>
            </a>
            <a href="/services">
              <button className="w-full rounded-lg border border-[hsl(var(--nila-warm))] bg-transparent px-6 py-2.5 text-sm font-semibold text-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm-light))] transition-all">
                View Services
              </button>
            </a>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground italic">
              Need immediate assistance? <a href="tel:+919655225192" className="text-primary font-medium hover:underline">Call us 24/7</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
