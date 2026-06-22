import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/StructuredDataComponents";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Software Development Insights & Tutorials - Rovixs",
  description: "Stay updated with latest software development trends, tutorials, and insights from Rovixs experts. Expert articles on Next.js, React, SaaS, mobile development, and technology.",
  keywords: [
    "software development blog",
    "programming tutorials",
    "Next.js tutorials",
    "React Native guides",
    "SaaS development insights",
    "web development articles",
    "mobile app development blog",
    "TypeScript tutorials",
    "DevOps best practices",
    "software engineering blog",
    "tech industry insights",
    "programming best practices",
    "software architecture blog",
    "cloud development tutorials",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com/blog",
    title: "Rovixs Blog | Software Development Resources & Tutorials",
    description: "Expert articles on software development, SaaS, mobile apps, and technology trends from the Rovixs team.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Rovixs Software Development Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovixs Blog | Software Development Resources",
    description: "Expert articles on software development, SaaS, mobile apps, and technology trends.",
    images: ["/twitter-blog.jpg"],
    creator: "@rovixs",
  },
  alternates: {
    canonical: "https://rovixs.com/blog",
  },
};

// Blog categories as defined in the plan
const blogCategories = [
  {
    slug: "development-tutorials",
    name: "Development Tutorials",
    description: "Next.js, React, TypeScript guides and best practices",
    postCount: 24,
  },
  {
    slug: "saas-insights",
    name: "SaaS Insights",
    description: "Business models, pricing strategies, and growth tactics",
    postCount: 18,
  },
  {
    slug: "case-studies",
    name: "Case Studies",
    description: "Real projects, success stories, and transformation examples",
    postCount: 12,
  },
  {
    slug: "design-ux",
    name: "Design & UX",
    description: "UI trends, accessibility, and design system implementation",
    postCount: 15,
  },
  {
    slug: "devops",
    name: "DevOps & Infrastructure",
    description: "CI/CD pipelines, cloud architecture, and deployment strategies",
    postCount: 20,
  },
  {
    slug: "industry-insights",
    name: "Industry Insights",
    description: "AI integration, digital transformation, and technology trends",
    postCount: 16,
  },
];

// Sample blog posts for demonstration
const sampleBlogPosts = [
  {
    slug: "building-scalable-saas-platform-nextjs",
    title: "Building Scalable SaaS Platforms with Next.js",
    excerpt:
      "Learn how to architect and develop multi-tenant SaaS applications using Next.js, PostgreSQL, and Stripe billing.",
    category: "SaaS Insights",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    author: "Rovixs Team",
  },
  {
    slug: "react-native-performance-optimization",
    title: "React Native Performance Optimization Guide",
    excerpt:
      "Discover proven techniques to optimize your React Native applications for better performance and user experience.",
    category: "Development Tutorials",
    publishDate: "2024-12-10",
    readTime: "6 min read",
    author: "John Doe",
  },
  {
    slug: "microservices-architecture-patterns",
    title: "Microservices Architecture Patterns for Modern Applications",
    excerpt:
      "Explore essential microservices patterns and learn when to apply them for scalable, maintainable systems.",
    category: "DevOps & Infrastructure",
    publishDate: "2024-12-05",
    readTime: "10 min read",
    author: "Jane Smith",
  },
  {
    slug: "ai-integration-custom-software",
    title: "Integrating AI into Custom Software Solutions",
    excerpt:
      "A comprehensive guide to implementing AI and machine learning features in your custom applications.",
    category: "Industry Insights",
    publishDate: "2024-11-28",
    readTime: "12 min read",
    author: "Rovixs Team",
  },
  {
    slug: "typescript-best-practices-2024",
    title: "TypeScript Best Practices for 2024",
    excerpt:
      "Master modern TypeScript development with these essential practices and patterns for type-safe applications.",
    category: "Development Tutorials",
    publishDate: "2024-11-20",
    readTime: "7 min read",
    author: "Alex Johnson",
  },
  {
    slug: "ecommerce-development-guide",
    title: "Complete Guide to E-commerce Platform Development",
    excerpt:
      "Build successful e-commerce platforms with modern technologies, payment integration, and scalability.",
    category: "Case Studies",
    publishDate: "2024-11-15",
    readTime: "15 min read",
    author: "Rovixs Team",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "Blog", url: "https://rovixs.com/blog" },
        ]}
      />

      <div className="min-h-screen bg-background text-purple-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Software Development Insights & Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert articles, tutorials, and industry insights from the Rovixs team. Stay updated with
              the latest in software development.
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
              Explore by Category
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors group"
                >
                  <h3 className="text-xl font-semibold text-purple-200 mb-2 group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                  <div className="text-purple-400 text-sm">{category.postCount} articles</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-purple-300">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-purple-900/20 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="text-4xl">📄</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-400 mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.publishDate}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, tutorials, and industry insights
              delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Need Expert Development Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can help bring your software project to life with modern technologies and best
              practices.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-900/20 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}