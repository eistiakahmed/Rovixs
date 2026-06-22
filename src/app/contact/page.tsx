import type { Metadata } from "next";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  ContactPointSchema,
} from "@/components/seo/StructuredDataComponents";

export const metadata: Metadata = {
  title: "Contact Us | Rovixs Software Development - Get Started Today",
  description: "Get in touch with Rovixs for your software development project. Free consultation, quick response, and expert guidance. Multiple office locations worldwide.",
  keywords: [
    "contact Rovixs",
    "software development company contact",
    "software consultation",
    "custom software quote",
    "software development inquiry",
    "software company near me",
    "software developers contact",
    "software development services contact",
    "get software development quote",
    "software project consultation",
    "Rovixs office locations",
    "software development company address",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rovixs",
    url: "https://rovixs.com/contact",
    title: "Contact Rovixs | Start Your Software Development Project",
    description: "Reach out to our expert team for custom software development inquiries. Free consultation and quick response guaranteed.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rovixs Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rovixs | Start Your Project",
    description: "Reach out to our expert team for custom software development inquiries.",
    images: ["/twitter-contact.jpg"],
    creator: "@rovixs",
  },
  alternates: {
    canonical: "https://rovixs.com/contact",
  },
};

export default function ContactPage() {
  // Multiple office locations for local SEO
  const officeLocations = [
    {
      city: "San Francisco",
      state: "CA",
      country: "USA",
      address: "123 Tech Street, San Francisco, CA 94105",
      phone: "+1-415-555-0123",
    },
    {
      city: "New York",
      state: "NY",
      country: "USA",
      address: "456 Innovation Ave, New York, NY 10001",
      phone: "+1-212-555-0456",
    },
    {
      city: "London",
      state: "England",
      country: "UK",
      address: "789 Digital Road, London EC1A 1BB",
      phone: "+44-20-7123-4567",
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        breadcrumbs={[
          { name: "Home", url: "https://rovixs.com" },
          { name: "Contact", url: "https://rovixs.com/contact" },
        ]}
      />

      <LocalBusinessSchema locations={officeLocations} />

      <ContactPointSchema
        contact={{
          type: "sales",
          email: "contact@rovixs.com",
          phone: "+1-555-123-4567",
          availableLanguage: ["English", "Spanish", "French"],
        }}
      />

      <div className="min-h-screen bg-background text-purple-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with custom software solutions? Get in touch with our
              expert team for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-500/30">
                <h2 className="text-3xl font-bold mb-6 text-purple-200">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest *
                    </label>
                    <select className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white">
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="saas">SaaS Platform Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="web">Web Application Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-purple-950/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-purple-200">Contact Information</h2>
                  <p className="text-gray-300 mb-6">
                    Have questions? We're here to help. Reach out through any of these channels:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-200 mb-1">Email</h3>
                      <a
                        href="mailto:contact@rovixs.com"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        contact@rovixs.com
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-200 mb-1">Phone</h3>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        +1-555-123-4567
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-200 mb-1">Live Chat</h3>
                      <button className="text-gray-300 hover:text-purple-400 transition-colors">
                        Start Chat
                      </button>
                      <p className="text-sm text-gray-400 mt-1">Available during business hours</p>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-200 mb-4">Our Offices</h3>
                  <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-b border-purple-500/20 pb-4 last:border-0">
                        <h4 className="font-semibold text-purple-300">{office.city}, {office.state}</h4>
                        <p className="text-sm text-gray-400">{office.address}</p>
                        <p className="text-sm text-gray-400">{office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-purple-200 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: "LinkedIn", url: "https://linkedin.com/company/rovixs" },
                      { name: "Twitter", url: "https://twitter.com/rovixs" },
                      { name: "GitHub", url: "https://github.com/rovixs" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-800/50 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">
              Prefer to Schedule a Call?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free 30-minute consultation with our team to discuss your project needs.
            </p>
            <a
              href="#"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}