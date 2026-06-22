import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/StructuredDataComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Sample blog posts data (in production, this would come from a CMS or database)
const blogPosts: Record<string, {
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  readTime: string;
  featuredImage?: string;
}> = {
  "building-scalable-saas-platform-nextjs": {
    title: "Building Scalable SaaS Platforms with Next.js",
    description: "Learn how to architect and develop multi-tenant SaaS applications using Next.js, PostgreSQL, and Stripe billing for optimal performance and scalability.",
    content: `# Building Scalable SaaS Platforms with Next.js

## Introduction

Software as a Service (SaaS) has revolutionized how businesses deliver software solutions. With Next.js, building scalable, performant SaaS platforms has never been more accessible.

## Key Architecture Components

### 1. Multi-Tenant Database Design
- Schema isolation strategies
- Row-level security implementation
- Performance optimization techniques

### 2. Authentication & Authorization
- NextAuth.js integration
- Role-based access control (RBAC)
- Session management best practices

### 3. Subscription Management
- Stripe billing integration
- Usage-based pricing models
- Subscription lifecycle management

## Performance Optimization

### Server-Side Rendering (SSR)
Next.js App Router provides powerful SSR capabilities:

\`\`\`typescript
// app/dashboard/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const tenant = await getTenant(params.tenantId);
  return {
    title: \`\${tenant.name} Dashboard\`,
  };
}
\`\`\`

### Database Connection Pooling
- Connection management with pgBouncer
- Query optimization strategies
- Caching layer implementation

## Deployment & Scaling

### Infrastructure as Code
- Docker containerization
- Kubernetes orchestration
- CI/CD pipeline setup

### Monitoring & Analytics
- Application performance monitoring
- User analytics integration
- Error tracking and logging

## Conclusion

Building scalable SaaS platforms requires careful planning and execution. With Next.js and modern tooling, you can create robust, performant applications that scale with your business needs.`,
    author: "Rovixs Team",
    publishDate: "2024-12-15",
    modifiedDate: "2024-12-18",
    category: "SaaS Insights",
    tags: ["Next.js", "SaaS", "PostgreSQL", "Stripe", "Multi-tenant"],
    readTime: "8 min read",
    featuredImage: "/blog/saas-platform.jpg",
  },
};

// Generate static params for blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for blog posts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Blog Post Not Found | Rovixs",
    };
  }

  const url = `https://rovixs.com/blog/${slug}`;

  return {
    title: `${post.title} | Rovixs Blog`,
    description: post.description,
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      ...post.tags,
      "software development",
      "programming tutorial",
      "tech blog",
    ],
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: "Rovixs",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: post.featuredImage || "/blog-default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.featuredImage || "/twitter-blog-default.jpg"],
      creator: "@rovixs",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "Blog", url: "https://rovixs.com/blog" },
          { name: post.title, url: `https://rovixs.com/blog/${slug}` },
        ]}
      />

      <ArticleSchema
        article={{
          title: post.title,
          description: post.description,
          author: post.author,
          publishDate: post.publishDate,
          modifiedDate: post.modifiedDate,
          url: `https://rovixs.com/blog/${slug}`,
          imageUrl: post.featuredImage,
          category: post.category,
          tags: post.tags,
        }}
      />

      <div className="min-h-screen bg-background text-purple-100">
        {/* Article Header */}
        <article className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="text-purple-400 hover:text-purple-300 transition-colors mb-8 inline-block"
            >
              ← Back to Blog
            </Link>

            <header className="mb-12">
              <div className="text-purple-400 text-sm mb-4">{post.category}</div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{post.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">👤</span>
                  <span>{post.author}</span>
                </div>
                <div>•</div>
                <div>{post.publishDate}</div>
                <div>•</div>
                <div>{post.readTime}</div>
              </div>
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-12 rounded-lg overflow-hidden border border-purple-500/30">
                <div
                  className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl"
                >
                  📄
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-purple-200 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-purple-300 mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-purple-200 mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('```')) {
                    return null; // Skip code blocks for this demo
                  }
                  if (paragraph.trim() === '') {
                    return <div key={index} className="h-4" />;
                  }
                  if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                    return (
                      <li key={index} className="text-gray-300 ml-4">
                        {paragraph.replace(/^[-*] /, '')}
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">About {post.author}</h3>
                  <p className="text-gray-400 text-sm">
                    Expert software developer and tech enthusiast. Passionate about building
                    scalable applications and sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-purple-200 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(blogPosts)
                  .filter(([slug]) => slug !== params)
                  .slice(0, 2)
                  .map(([relatedSlug, relatedPost]) => (
                    <Link
                      key={relatedSlug}
                      href={`/blog/${relatedSlug}`}
                      className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors"
                    >
                      <div className="text-sm text-purple-400 mb-2">{relatedPost.category}</div>
                      <h3 className="text-lg font-semibold text-purple-200 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Need Expert Development Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can help bring your software project to life with modern technologies and
              best practices.
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