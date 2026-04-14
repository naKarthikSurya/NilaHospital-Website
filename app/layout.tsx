export const dynamic = "force-static";

import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { defaultSchema } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nilahospital.com'),
  title: {
    default: 'Nila Hospital Namakkal | Expert Maternity & Health Care',
    template: '%s | Nila Hospital',
  },
  description: 'Nila Hospital Namakkal provides expert obstetrics, gynaecology, and maternity care. Book an appointment today for trusted healthcare.',
  keywords: ['hospital', 'maternity', 'gynaecology', 'namakkal', 'pregnancy'],
  openGraph: {
    title: 'Nila Hospital Namakkal | Expert Maternity & Health Care',
    description: 'Nila Hospital Namakkal provides expert obstetrics, gynaecology, and maternity care. Book an appointment today for trusted healthcare.',
    url: 'https://nilahospital.com',
    siteName: 'Nila Hospital',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nila Hospital Namakkal',
    description: 'Nila Hospital Namakkal provides expert obstetrics, gynaecology, and maternity care.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <div className="min-h-screen flex flex-col pt-20 md:pt-24 selection:bg-[hsl(var(--nila-warm))]/20 selection:text-nila-navy antialiased">
          <Header />
          <main className="flex-grow flex flex-col relative w-full overflow-hidden">
            {children}
          </main>
          <Footer />
          <MobileBottomBar />
        </div>
        <Toaster />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
