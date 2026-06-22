import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesDetailsMap } from "../servicesData";
import { ServiceClientPage } from "./ServiceClientPage";
import { getServiceKeywords } from "@/lib/seo/keywords";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredDataComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for Next.js compilation/pre-rendering
export async function generateStaticParams() {
  return Object.keys(servicesDetailsMap).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetailsMap[slug];

  if (!service) {
    return {
      title: "Service Not Found | Rovixs",
    };
  }

  const serviceKeywords = getServiceKeywords(slug);
  const title = `${service.title} | Rovixs Software Development`;
  const description = service.headline;
  const url = `https://rovixs.com/services/${slug}`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title} services`,
      `${service.title} company`,
      ...serviceKeywords,
      "software development",
      "custom software",
      "enterprise software",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Rovixs",
      url,
      title: service.title,
      description: service.headline,
      images: [
        {
          url: `/og/services/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.headline,
      images: [`/twitter/services/${slug}.jpg`],
      creator: "@rovixs",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesDetailsMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "Services", url: "https://rovixs.com/services" },
          { name: service.title, url: `https://rovixs.com/services/${slug}` },
        ]}
      />
      <ServiceSchema
        service={{
          name: service.title,
          description: service.description,
          category: "Software Development",
          keywords: service.techStack,
        }}
      />
      <ServiceClientPage service={service} />
    </>
  );
}
