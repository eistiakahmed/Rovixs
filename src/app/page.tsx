import type { Metadata } from "next";
import { HomePageClient } from "@/components/sections/HomePageClient";

// Homepage Metadata
export const metadata: Metadata = {
  title: "Rovixs | Custom Software Development & SaaS Solutions - Transform Your Business",
  description: "Transform your business with Rovixs' expert software development services. Specializing in custom software, SaaS platforms, mobile apps, and enterprise solutions with modern technology stacks like Next.js, React Native, and TypeScript.",
  keywords: [
    "software development company",
    "custom software development",
    "SaaS development company",
    "mobile app development services",
    "web development company",
    "React Native development",
    "Next.js development services",
    "TypeScript development company",
    "enterprise software development",
    "software development outsourcing",
    "AI integration solutions",
    "e-commerce development",
    "CMS development",
    "business automation software",
    "microservices architecture",
    "full-stack development",
    "cloud architecture",
    "DevOps services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com",
    title: "Rovixs | Building Digital Products That Matter",
    description: "Transform your business with Rovixs' expert software development services. We build custom software, SaaS platforms, and mobile applications that drive growth and innovation.",
    images: [
      {
        url: "/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Rovixs Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovixs | Building Digital Products That Matter",
    description: "Transform your business with Rovixs' expert software development services. Custom software, SaaS platforms, and mobile applications.",
    images: ["/twitter-homepage.jpg"],
    creator: "@rovixs",
    site: "@rovixs",
  },
  alternates: {
    canonical: "https://rovixs.com",
  },
};

export default function WelcomeHome() {
  return <HomePageClient />;
}
