import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { DevBanner } from "@/components/ui/DevBanner";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/StructuredDataComponents";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rovixs | Custom Software Development & SaaS Solutions",
    template: "%s | Rovixs",
  },
  description: "Transform your business with Rovixs' expert software development services. Specializing in custom software, SaaS platforms, mobile apps, and enterprise solutions with modern technology stacks.",
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
  ],
  authors: [{ name: "Rovixs Team" }],
  creator: "Rovixs",
  publisher: "Rovixs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com",
    title: "Rovixs | Custom Software Development & SaaS Solutions",
    description: "Transform your business with Rovixs' expert software development services. Building digital products that matter.",
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
    title: "Rovixs | Software Development Company",
    description: "Transform your business with Rovixs' expert software development services. Building digital products that matter.",
    images: ["/twitter-homepage.jpg"],
    creator: "@rovixs",
    site: "@rovixs",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <DevBanner />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
