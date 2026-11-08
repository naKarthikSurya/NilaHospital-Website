import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nila Hospital Namakkal',
    short_name: 'Nila Hospital',
    description: "Maternity, Obstetrics & Gynaecology Specialist Hospital in Namakkal",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f2b48',
    icons: [
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
