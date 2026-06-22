import React from "react";
import { notFound } from "next/navigation";
import { servicesDetailsMap } from "../servicesData";
import { ServiceClientPage } from "./ServiceClientPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for Next.js compilation/pre-rendering
export async function generateStaticParams() {
  return Object.keys(servicesDetailsMap).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesDetailsMap[slug];

  if (!service) {
    notFound();
  }

  return <ServiceClientPage service={service} />;
}
