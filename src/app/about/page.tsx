import type { Metadata } from "next";
import { OrganizationSchema, BreadcrumbSchema } from "@/components/seo/StructuredDataComponents";

export const metadata: Metadata = {
  title: "About Us | Rovixs - Leading Software Development Company",
  description: "Learn about Rovixs, our mission, values, and expert team delivering custom software solutions since 2020. We transform businesses through innovative technology.",
  keywords: [
    "about Rovixs",
    "software development company",
    "Rovixs team",
    "custom software company",
    "software development agency",
    "tech company",
    "software company mission",
    "software development values",
    "Rovixs history",
    "software company story",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com/about",
    title: "About Rovixs | Our Story & Mission",
    description: "Discover Rovixs' journey in building exceptional software solutions for global clients. Meet our expert team and learn about our values.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Rovixs Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rovixs | Our Story & Mission",
    description: "Discover Rovixs' journey in building exceptional software solutions for global clients. Meet our expert team and learn about our values.",
    images: ["/twitter-about.jpg"],
    creator: "@rovixs",
  },
  alternates: {
    canonical: "https://rovixs.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "About Us", url: "https://rovixs.com/about" },
        ]}
      />

      <div className="min-h-screen bg-background text-purple-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Building Digital Products That Matter
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Since 2020, Rovixs has been transforming businesses through innovative software
              solutions. We combine technical excellence with strategic thinking to deliver
              products that drive real growth.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-purple-300">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-4">
                  To empower businesses with cutting-edge software solutions that drive innovation,
                  efficiency, and sustainable growth. We believe in building technology that
                  matters - products that solve real problems and create lasting value.
                </p>
                <p className="text-lg text-gray-300">
                  Every line of code we write, every feature we design, and every product we
                  launch is guided by our commitment to excellence and our passion for technology
                  that transforms businesses.
                </p>
              </div>
              <div className="bg-purple-800/20 rounded-lg p-8 border border-purple-500/30">
                <h3 className="text-2xl font-semibold mb-4 text-purple-200">Our Vision</h3>
                <p className="text-gray-300 mb-4">
                  To be the trusted partner for businesses worldwide seeking to leverage
                  technology for competitive advantage. We envision a future where every
                  business, regardless of size, has access to enterprise-grade software
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Excellence",
                  description: "We maintain the highest standards in code quality, architecture,
                    and development practices.",
                },
                {
                  title: "Client-Centric Approach",
                  description: "Your success is our success. We prioritize understanding your
                    business needs and delivering solutions that exceed expectations.",
                },
                {
                  title: "Innovation & Agility",
                  description: "We stay ahead of technology trends and adapt quickly to new
                    challenges, ensuring you always get cutting-edge solutions.",
                },
                {
                  title: "Transparency & Trust",
                  description: "Open communication, honest feedback, and complete transparency
                    in every project we undertake.",
                },
                {
                  title: "Continuous Learning",
                  description: "We invest in our team's growth and stay current with the latest
                    technologies and best practices.",
                },
                {
                  title: "Quality Delivery",
                  description: "We never compromise on quality, delivering robust, scalable,
                    and maintainable software solutions.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-purple-200">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
              Our Impact by the Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Team Members" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
              Meet Our Team
            </h2>
            <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in software
              development, design, and technology consulting. We're passionate about what we do
              and committed to delivering exceptional results.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "CEO & Founder", role: "Vision & Strategy" },
                { name: "CTO", role: "Technical Leadership" },
                { name: "Lead Developers", role: "Full-Stack Excellence" },
                { name: "Project Managers", role: "Client Success" },
                { name: "UI/UX Designers", role: "User Experience" },
                { name: "DevOps Engineers", role: "Infrastructure" },
                { name: "QA Specialists", role: "Quality Assurance" },
                { name: "Support Team", role: "Client Support" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <h3 className="text-lg font-semibold text-purple-200">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Rovixs can help transform your business with innovative software
              solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-900/20 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}