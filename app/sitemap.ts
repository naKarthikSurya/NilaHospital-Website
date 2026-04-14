import { MetadataRoute } from 'next';
import { doctorsList } from '@/data/doctors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nilahospital.com';

  const staticRoutes = [
    '',
    '/services',
    '/doctors',
    '/about',
    '/contact',
    '/why-we-are-best-hospital-in-namakkal',
    '/best-women-hospital-in-namakkal',
    '/gynaecology-namakkal',
    '/obstetrics-namakkal',
    '/maternity-hospital-namakkal',
    '/womens-health-namakkal',
    '/general-medicine-namakkal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const doctorRoutes = doctorsList.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...doctorRoutes];
}
