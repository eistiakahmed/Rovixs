import { Metadata } from 'next';

// Company Information Configuration
export const COMPANY_INFO = {
  name: 'Rovixs',
  domain: 'rovixs.com',
  url: 'https://rovixs.com',
  description: 'Leading software development company specializing in custom software, SaaS platforms, and mobile applications.',
  foundingDate: '2020',
  logo: '/logo.png',
  email: 'contact@rovixs.com',
  phone: '+1-555-123-4567',
  socials: {
    linkedin: 'https://linkedin.com/company/rovixs',
    twitter: 'https://twitter.com/rovixs',
    github: 'https://github.com/rovixs',
  },
} as const;

// Default Metadata Configuration
export const defaultMetadata: Metadata = {
  title: {
    default: 'Rovixs | Custom Software Development & SaaS Solutions',
    template: '%s | Rovixs',
  },
  description: COMPANY_INFO.description,
  keywords: [
    'software development',
    'custom software',
    'SaaS development',
    'mobile app development',
    'web development',
    'enterprise software',
    'React Native',
    'Next.js development',
    'TypeScript development',
    'software outsourcing',
  ],
  authors: [{ name: 'Rovixs Team' }],
  creator: 'Rovixs',
  publisher: 'Rovixs',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rovixs',
    url: COMPANY_INFO.url,
    title: 'Rovixs | Custom Software Development & SaaS Solutions',
    description: COMPANY_INFO.description,
    images: [
      {
        url: '/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Rovixs Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rovixs | Software Development Company',
    description: COMPANY_INFO.description,
    images: ['/twitter-homepage.jpg'],
    creator: '@rovixs',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

// Page Metadata Builder
export interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  twitterImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

export const createPageMetadata = (options: PageMetadataOptions): Metadata => {
  const {
    title,
    description,
    keywords,
    path = '',
    ogImage = '/og-default.jpg',
    twitterImage = '/twitter-default.jpg',
    noIndex = false,
    canonical,
  } = options;

  const url = canonical ? canonical : `${COMPANY_INFO.url}${path}`;

  return {
    title,
    description,
    keywords,
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Rovixs',
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [twitterImage],
      creator: '@rovixs',
    },
    alternates: {
      canonical: url,
    },
  };
};

// Service Page Metadata Builder
export interface ServiceMetadataOptions {
  serviceName: string;
  serviceSlug: string;
  description: string;
  keywords?: string[];
  techStack?: string[];
}

export const createServiceMetadata = (options: ServiceMetadataOptions): Metadata => {
  const { serviceName, serviceSlug, description, keywords, techStack } = options;

  const title = `${serviceName} | Rovixs Software Development`;
  const path = `/services/${serviceSlug}`;
  const ogImage = `/og/services/${serviceSlug}.jpg`;
  const twitterImage = `/twitter/services/${serviceSlug}.jpg`;

  const serviceKeywords = [
    serviceName.toLowerCase(),
    `${serviceName} services`,
    `${serviceName} company`,
    ...(keywords || []),
  ];

  return createPageMetadata({
    title,
    description,
    keywords: serviceKeywords,
    path,
    ogImage,
    twitterImage,
  });
};

// Blog Post Metadata Builder
export interface BlogMetadataOptions {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  authors: string[];
  category: string;
  tags?: string[];
  featuredImage?: string;
}

export const createBlogMetadata = (options: BlogMetadataOptions): Metadata => {
  const {
    title,
    description,
    slug,
    publishDate,
    authors,
    category,
    tags,
    featuredImage = '/og-blog-default.jpg',
  } = options;

  const path = `/blog/${slug}`;
  const keywords = [category, ...(tags || []), ...authors];

  return {
    title: `${title} | Rovixs Blog`,
    description,
    keywords,
    authors: authors.map((author) => ({ name: author })),
    openGraph: {
      type: 'article',
      locale: 'en_US',
      siteName: 'Rovixs',
      url: `${COMPANY_INFO.url}${path}`,
      title,
      description,
      publishedTime: publishDate,
      authors: authors.map((author) => author),
      section: category,
      tags: tags || [],
      images: [
        {
          url: featuredImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [featuredImage],
      creator: '@rovixs',
    },
    alternates: {
      canonical: `${COMPANY_INFO.url}${path}`,
    },
  };
};

// Canonical URL Generator
export const createCanonicalUrl = (path: string): string => {
  return `${COMPANY_INFO.url}${path}`;
};

// Robots Meta Generator for Special Pages
export const createNoIndexMetadata = (): Metadata => ({
  robots: {
    index: false,
    follow: false,
  },
});

// Open Graph Image Metadata Generator
export interface OGImageMetadata {
  url: string;
  width?: number;
  height?: number;
  alt: string;
}

export const createOGImage = (metadata: OGImageMetadata) => ({
  url: metadata.url,
  width: metadata.width || 1200,
  height: metadata.height || 630,
  alt: metadata.alt,
});

// Twitter Card Metadata Generator
export const createTwitterCard = (metadata: {
  title: string;
  description: string;
  image?: string;
}) => ({
  card: 'summary_large_image' as const,
  title: metadata.title,
  description: metadata.description,
  images: metadata.image ? [metadata.image] : [],
  creator: '@rovixs',
});

// Helper to generate keywords from content
export const generateKeywordsFromContent = (
  content: string,
  maxKeywords: number = 10
): string[] => {
  // Remove common words and extract meaningful keywords
  const stopWords = new Set([
    'the',
    'a',
    'an',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
    'by',
    'from',
    'as',
    'is',
    'was',
    'are',
    'were',
    'been',
    'be',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'may',
    'might',
    'must',
    'can',
    'this',
    'that',
    'these',
    'those',
  ]);

  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));

  // Count word frequency
  const wordCount = new Map<string, number>();
  words.forEach((word) => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });

  // Sort by frequency and return top keywords
  return Array.from(wordCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

// Helper to truncate text to optimal length
export const truncateForMeta = (text: string, maxLength: number = 160): string => {
  const truncated = text.trim().slice(0, maxLength);
  return truncated.length < text.length
    ? `${truncated.slice(0, -3)}...`
    : truncated;
};

// Generate structured data title from page title
export const generateStructuredDataTitle = (pageTitle: string): string => {
  return pageTitle.includes('Rovixs') ? pageTitle : `${pageTitle} | Rovixs`;
};

// Metadata validation helper
export const validateMetadata = (metadata: Metadata): boolean => {
  if (!metadata.title || !metadata.description) {
    console.warn('Missing required metadata fields: title or description');
    return false;
  }

  if (metadata.description && metadata.description.length > 160) {
    console.warn('Meta description exceeds recommended length of 160 characters');
  }

  if (metadata.title && typeof metadata.title === 'string' && metadata.title.length > 60) {
    console.warn('Meta title exceeds recommended length of 60 characters');
  }

  return true;
};