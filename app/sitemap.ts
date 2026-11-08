import { MetadataRoute } from 'next';
import { doctorsList } from '@/data/doctors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nilahospital.com';
  const lastUpdated = new Date();

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/maternity-hospital-namakkal', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/gynaecology-namakkal', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/obstetrics-namakkal', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/womens-health-namakkal', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/doctors', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/general-medicine-namakkal', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/why-choose-nila-hospital-namakkal', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/womens-hospital-namakkal', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: lastUpdated,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const doctorRoutes = doctorsList.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.id}`,
    lastModified: lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...doctorRoutes];
}
