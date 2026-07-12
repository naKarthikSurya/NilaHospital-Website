import { MetadataRoute } from 'next';
import { doctorsList } from '@/data/doctors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nilahospital.com';

  const staticRoutes = [
    { route: '', lastModified: '2026-07-12', priority: 1.0 },
    { route: '/services', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/doctors', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/about', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/contact', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/why-we-are-best-hospital-in-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/best-women-hospital-in-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/gynaecology-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/obstetrics-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/maternity-hospital-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/womens-health-namakkal', lastModified: '2026-07-12', priority: 0.8 },
    { route: '/general-medicine-namakkal', lastModified: '2026-07-12', priority: 0.8 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(item.lastModified),
    changeFrequency: 'monthly' as const,
    priority: item.priority,
  }));

  const doctorRoutes = doctorsList.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.id}`,
    lastModified: new Date(doctor.lastModified || '2026-07-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...doctorRoutes];
}
