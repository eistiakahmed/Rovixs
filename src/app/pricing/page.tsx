import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/StructuredDataComponents";

export const metadata: Metadata = {
  title: "Pricing Plans | Rovixs Software Development Services - Transparent Costs",
  description: "Explore transparent pricing for custom software development services at Rovixs. Choose from flexible engagement models: fixed-price projects, time & material contracts, or dedicated development teams.",
  keywords: [
    "software development pricing",
    "custom software cost",
    "software development rates",
    "SaaS development pricing",
    "mobile app development cost",
    "web development pricing",
    "software development quote",
    "enterprise software pricing",
    "software outsourcing cost",
    "dedicated development team pricing",
    "fixed price software development",
    "time and material software development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com/pricing",
    title: "Pricing | Transparent Software Development Costs",
    description: "Explore our competitive pricing models for custom software, mobile apps, and SaaS development. Get transparent quotes and flexible engagement options.",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Rovixs Software Development Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Transparent Software Development Costs",
    description: "Explore our competitive pricing models for custom software, mobile apps, and SaaS development.",
    images: ["/twitter-pricing.jpg"],
    creator: "@rovixs",
  },
  alternates: {
    canonical: "https://rovixs.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "Pricing", url: "https://rovixs.com/pricing" },
        ]}
      />

      <div className="min-h-screen bg-background text-purple-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Transparent Pricing for Custom Software Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the engagement model that fits your project needs and budget. No hidden
              costs, clear deliverables, and flexible terms.
            </p>
          </div>
        </section>

        {/* Pricing Models */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Fixed Price Model */}
              <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-200 mb-2">Fixed Price</h3>
                  <p className="text-gray-400">Best for defined projects</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$5K - $50K+</div>
                  <div className="text-sm text-gray-400">per project</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Clear scope & requirements",
                    "Fixed timeline & budget",
                    "Milestone-based payments",
                    "Guaranteed deliverables",
                    "Risk management included",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Quote
                </a>
              </div>

              {/* Time & Material Model */}
              <div className="bg-purple-800/30 p-8 rounded-lg border-2 border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-200 mb-2">Time & Material</h3>
                  <p className="text-gray-400">Best for agile development</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$50 - $150</div>
                  <div className="text-sm text-gray-400">per hour</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Flexible scope changes",
                    "Pay for actual work done",
                    "Adaptive to requirements",
                    "Transparent time tracking",
                    "Monthly billing cycles",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Project
                </a>
              </div>

              {/* Dedicated Team Model */}
              <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-200 mb-2">Dedicated Team</h3>
                  <p className="text-gray-400">Best for long-term projects</p>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$8K - $25K</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full-time dedicated team",
                    "Complete project control",
                    "Scalable team size",
                    "Monthly fixed pricing",
                    "Direct communication",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Hire Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
              Service-Specific Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  service: "Custom Software Development",
                  price: "$10K - $100K+",
                  duration: "2-6 months",
                },
                {
                  service: "SaaS Platform Development",
                  price: "$15K - $150K+",
                  duration: "3-8 months",
                },
                {
                  service: "Mobile App Development",
                  price: "$8K - $50K+",
                  duration: "2-4 months",
                },
                {
                  service: "Web Application Development",
                  price: "$5K - $80K+",
                  duration: "1-5 months",
                },
                {
                  service: "E-Commerce Platform",
                  price: "$12K - $100K+",
                  duration: "2-6 months",
                },
                {
                  service: "CMS Integration",
                  price: "$3K - $25K+",
                  duration: "1-3 months",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30"
                >
                  <h3 className="text-xl font-semibold text-purple-200 mb-3">{item.service}</h3>
                  <div className="flex justify-between items-center text-gray-300">
                    <div>
                      <div className="text-sm text-gray-400">Price Range</div>
                      <div className="font-semibold">{item.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="font-semibold">{item.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factors Influencing Cost */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">
              Factors That Influence Project Cost
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  {
                    factor: "Project Complexity",
                    impact: "More complex features and integrations increase development time",
                  },
                  {
                    factor: "Design Requirements",
                    impact: "Custom UI/UX design vs. template-based design",
                  },
                  {
                    factor: "Technology Stack",
                    impact: "Specialized technologies may require specialized expertise",
                  },
                  {
                    factor: "Team Size",
                    impact: "Larger teams for faster delivery or specialized skills",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-purple-900/20 p-5 rounded-lg border border-purple-500/30"
                  >
                    <h4 className="font-semibold text-purple-200 mb-2">{item.factor}</h4>
                    <p className="text-gray-400 text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  {
                    factor: "Timeline",
                    impact: "Faster delivery may require more resources",
                  },
                  {
                    factor: "Maintenance & Support",
                    impact: "Ongoing support and updates affect long-term costs",
                  },
                  {
                    factor: "Third-Party Integrations",
                    impact: "API integrations and external services",
                  },
                  {
                    factor: "Testing & QA",
                    impact: "Comprehensive testing ensures quality",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-purple-900/20 p-5 rounded-lg border border-purple-500/30"
                  >
                    <h4 className="font-semibold text-purple-200 mb-2">{item.factor}</h4>
                    <p className="text-gray-400 text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Get a Custom Quote for Your Project
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every project is unique. Contact us for a detailed consultation and accurate pricing
              estimate tailored to your specific requirements.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Quote
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-900/20 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}