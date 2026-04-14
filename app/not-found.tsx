import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import HeroGradientSection from '@/components/HeroGradientSection';

export const metadata: Metadata = {
  title: 'Page Not Found - Nila Hospital',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <>
      <HeroGradientSection className="flex-1 flex flex-col items-center justify-center py-20 min-h-[70vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="container px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-8">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-nila-light-blue text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold w-full sm:w-auto shadow-lg gap-2">
                <Home className="h-4 w-4" /> Go to Homepage
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold w-full sm:w-auto backdrop-blur-sm gap-2">
                <ArrowLeft className="h-4 w-4" /> View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </HeroGradientSection>
    </>
  );
}
