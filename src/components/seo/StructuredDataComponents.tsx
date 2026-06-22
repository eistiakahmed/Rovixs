import React from 'react';
import {
  createOrganizationSchema,
  createWebSiteSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createServiceSchema,
  createLocalBusinessSchema,
} from '@/lib/seo/structured-data';

// Organization Schema Component
export const OrganizationSchema = () => {
  const schema = createOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// WebSite Schema Component
export const WebSiteSchema = () => {
  const schema = createWebSiteSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// LocalBusiness Schema Component for Multiple Locations
export const LocalBusinessSchema = ({
  locations,
}: {
  locations: Array<{
    city: string;
    state: string;
    country: string;
    address?: string;
    phone?: string;
  }>;
}) => {
  const schemas = createLocalBusinessSchema(locations);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

// Breadcrumb Schema Component
export const BreadcrumbSchema = ({
  breadcrumbs,
}: {
  breadcrumbs: Array<{ name: string; url: string }>;
}) => {
  const schema = createBreadcrumbSchema(breadcrumbs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ Schema Component
export const FAQSchema = ({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) => {
  const schema = createFAQSchema(faqs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Service Schema Component
export const ServiceSchema = ({
  service,
}: {
  service: {
    name: string;
    description: string;
    category?: string;
    keywords?: string[];
  };
}) => {
  const schema = createServiceSchema(service);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Article Schema Component for Blog Posts
export const ArticleSchema = ({
  article,
}: {
  article: {
    title: string;
    description: string;
    author: string;
    publishDate: string;
    modifiedDate?: string;
    url: string;
    imageUrl?: string;
    category?: string;
    tags?: string[];
  };
}) => {
  const schema = {
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
      name: 'Rovixs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rovixs.com/logo.png',
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Person Schema Component for Team Members
export const PersonSchema = ({
  person,
}: {
  person: {
    name: string;
    role: string;
    image?: string;
    bio?: string;
    socials?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Rovixs',
      url: 'https://rovixs.com',
    },
    image: person.image,
    description: person.bio,
    sameAs: Object.values(person.socials || {}).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// AggregateRating Schema for Services/Testimonials
export const AggregateRatingSchema = ({
  rating,
}: {
  rating: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
  };
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating || 5,
    itemReviewed: {
      '@type': 'Organization',
      name: 'Rovixs',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ContactPoint Schema for contact information
export const ContactPointSchema = ({
  contact,
}: {
  contact: {
    type: string;
    email: string;
    phone?: string;
    availableLanguage?: string[];
  };
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: contact.type,
    email: contact.email,
    telephone: contact.phone,
    availableLanguage: contact.availableLanguage || ['English'],
    areaServed: 'Worldwide',
    contactOption: 'TollFree',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};