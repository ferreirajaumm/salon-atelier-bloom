import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/components/JsonLd';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/#servicos`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/#galeria`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/#fundadora`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/#contactos`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
