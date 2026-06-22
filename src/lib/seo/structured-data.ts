import { COMPANY_INFO } from './metadata';

// Organization Schema Generator
export const createOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    description: COMPANY_INFO.description,
    foundingDate: COMPANY_INFO.foundingDate,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'sales',
      availableLanguage: ['English'],
    },
    sameAs: [
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.twitter,
      COMPANY_INFO.socials.github,
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA',
      addressLocality: 'San Francisco',
    },
  };
};

// LocalBusiness Schema Generator for Multiple Locations
export const createLocalBusinessSchema = (locations: Array<{
  city: string;
  state: string;
  country: string;
  address?: string;
  phone?: string;
}>) => {
  const schemas = locations.map((location) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
    description: COMPANY_INFO.description,
    telephone: location.phone || COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address || '',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: location.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$',
  }));

  return schemas;
};

// WebSite Schema Generator
export const createWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    description: COMPANY_INFO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${COMPANY_INFO.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
    },
  };
};

// Service Schema Generator
export const createServiceSchema = (service: {
  name: string;
  description: string;
  category?: string;
  keywords?: string[];
  priceRange?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
    },
    category: service.category || 'Software Development',
    keywords: service.keywords || [],
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    offers: service.priceRange
      ? {
          '@type': 'Offer',
          priceRange: service.priceRange,
          priceCurrency: 'USD',
        }
      : undefined,
  };
};

// Article Schema Generator for Blog Posts
export const createArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  url: string;
  imageUrl?: string;
  category?: string;
  tags?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    image: article.imageUrl
      ? {
          '@type': 'ImageObject',
          url: article.imageUrl,
          width: 1200,
          height: 630,
        }
      : undefined,
    articleSection: article.category || 'Technology',
    keywords: article.tags || [],
  };
};

// BreadcrumbList Schema Generator
export const createBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => {
  const itemList = breadcrumbs.map((breadcrumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: breadcrumb.name,
    item: breadcrumb.url,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemList,
  };
};

// FAQPage Schema Generator
export const createFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>) => {
  const mainEntity = faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity,
  };
};

// Review Schema Generator for Testimonials
export const createReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  datePublished?: string;
}>) => {
  const schemas = reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    itemReviewed: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.text,
    datePublished: review.datePublished || new Date().toISOString(),
  }));

  return schemas;
};

// Person Schema Generator for Team Members
export const createPersonSchema = (person: {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
    },
    image: person.image,
    description: person.bio,
    sameAs: Object.values(person.socials || {}).filter(Boolean),
  };
};

// PriceRange Schema Generator for Pricing Page
export const createPriceRangeSchema = (services: Array<{
  name: string;
  minPrice: number;
  maxPrice: number;
  currency: string;
  description?: string;
}>) => {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: service.name,
    description: service.description,
    price: service.maxPrice,
    minPrice: service.minPrice,
    maxPrice: service.maxPrice,
    priceCurrency: service.currency,
    validFrom: new Date().toISOString(),
  }));
};

// VideoObject Schema Generator for Video Content
export const createVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
      },
    },
  };
};

// Event Schema Generator for Webinars/Events
export const createEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  isOnline?: boolean;
  url?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.isOnline
      ? {
          '@type': 'VirtualLocation',
          url: event.url,
        }
      : {
          '@type': 'Place',
          name: event.location,
        },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: event.isOnline
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
    },
  };
};

// HowTo Schema Generator for Tutorials
export const createHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
}) => {
  const steps = howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: steps,
  };
};

// AggregateRating Schema for Services
export const createAggregateRatingSchema = (ratingData: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingData.ratingValue,
    reviewCount: ratingData.reviewCount,
    bestRating: ratingData.bestRating || 5,
    worstRating: ratingData.worstRating || 1,
    itemReviewed: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
  };
};

// Helper to validate JSON-LD schema
export const validateSchema = (schema: any): boolean => {
  if (!schema || typeof schema !== 'object') {
    console.error('Invalid schema: not an object');
    return false;
  }

  if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
    console.error('Invalid schema: missing or incorrect @context');
    return false;
  }

  if (!schema['@type'] || typeof schema['@type'] !== 'string') {
    console.error('Invalid schema: missing or incorrect @type');
    return false;
  }

  return true;
};

// Combine multiple schemas
export const combineSchemas = (...schemas: any[]) => {
  return schemas.filter((schema) => validateSchema(schema));
};