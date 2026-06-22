import { MetadataRoute } from 'next';
import { servicesDetailsMap } from './services/servicesData';

const baseUrl = 'https://rovixs.com';
const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Dynamic service pages
  const servicePages = Object.keys(servicesDetailsMap).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Blog category pages (for future implementation)
  const blogCategories = [
    'development-tutorials',
    'saas-insights',
    'case-studies',
    'design-ux',
    'devops',
    'industry-insights',
  ];

  const categoryPages = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Combine all pages
  return [...staticPages, ...servicePages, ...categoryPages];
}