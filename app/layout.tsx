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
    default: 'Nila Hospital Namakkal | Maternity & Women’s Care',
    template: '%s | Nila Hospital',
  },
  description: 'Consult Nila Hospital Namakkal for expert maternity, pregnancy, gynaecology, and women’s care. Call +91 96552 25192 to schedule a consultation.',
  keywords: ['hospital', 'maternity', 'gynaecology', 'namakkal', 'pregnancy', 'obstetrician', 'gynaecologist', 'women care'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Nila Hospital Namakkal | Maternity & Women’s Care',
    description: 'Consult Nila Hospital Namakkal for expert maternity, pregnancy, gynaecology, and women’s care. Call +91 96552 25192 to schedule a consultation.',
    url: 'https://nilahospital.com',
    siteName: 'Nila Hospital',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/gallery/521A6952.JPG',
        width: 1200,
        height: 630,
        alt: 'Nila Hospital Namakkal - Maternity & Women’s Care',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nila Hospital Namakkal | Maternity & Women’s Care',
    description: 'Consult Nila Hospital Namakkal for expert maternity, pregnancy, gynaecology, and women’s care.',
    images: ['/images/gallery/521A6952.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
