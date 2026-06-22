import { NavbarLink } from "@/components/ui/Navbar";

export const navbarLinks: NavbarLink[] = [
  {
    label: "Services",
    megaMenu: {
      type: "tabs" as const,
      title: "Services.",
      description: "Comprehensive software development and staff augmentation services tailored to your business needs.",
      subCategories: [
        { id: "staffing", title: "Staff Augmentation" },
        { id: "mobile", title: "Mobile App" },
        { id: "software", title: "Software Dev" },
        { id: "ecommerce", title: "E-Commerce" },
        { id: "partnerships", title: "Partnerships" }
      ],
      items: {
        staffing: [
          { name: "AI Development", description: "Build and deploy LLMs and machine learning products." },
          { name: "Android Development", description: "Native Android application development." },
          { name: "Back End Dev", description: "Scalable APIs and server architectures." },
          { name: "Cloud Application", description: "Serverless and Kubernetes deployments." },
          { name: "CMS Solutions", description: "Custom headless CMS integrations." },
          { name: "CRM Integration", description: "Salesforce and custom CRM pipelines." },
          { name: "Custom Software", description: "Tailored enterprise solutions." }
        ],
        mobile: [
          { name: "Mobile App", description: "Cross-platform Flutter & React Native." },
          { name: "iOS Development", description: "Native Swift iOS applications." },
          { name: "Android Development", description: "Native Kotlin Android applications." },
          { name: "QA & Testing", description: "Automated mobile app testing." },
          { name: "Database Cache", description: "Local caching and sync solutions." }
        ],
        software: [
          { name: "Web Development", description: "Responsive React, Next.js, Vite applications." },
          { name: "Machine Learning", description: "Computer vision and NLP engines." },
          { name: "DevOps Setup", description: "CI/CD and infrastructure as code." },
          { name: "Digital Transformation", description: "Modernize legacy systems." },
          { name: "SaaS Platforms", description: "Multi-tenant cloud platforms." },
          { name: "Ecommerce Portal", description: "B2B and B2C online shop portals." },
          { name: "ERP Integrations", description: "Custom SAP & Oracle integrations." }
        ],
        ecommerce: [
          { name: "Shopify Customization", description: "Liquid template design and custom app builds." },
          { name: "WooCommerce Dev", description: "WordPress e-commerce development." },
          { name: "Payment Gateways", description: "Stripe, PayPal, and merchant integration." },
          { name: "ERP Catalog Sync", description: "Keep catalog and inventory synced in real-time." }
        ],
        partnerships: [
          { name: "Joint Ventures", description: "Collaborative research and development projects." },
          { name: "Strategic Staffing", description: "Dedicated developer squads on long-term contracts." },
          { name: "Technology Consulting", description: "Architecture audits and feasibility reports." }
        ]
      }
    }
  },
  {
    label: "Technologies",
    megaMenu: {
      type: "grid" as const,
      title: "Technologies.",
      description: "Get experts in 100+ technologies. Cover any tech stack.",
      featured: {
        title: "Top 1% Talent",
        description: "Hire Software Developers",
        linkLabel: "Explore Developers",
        href: "#"
      },
      sections: [
        {
          title: "TECHNOLOGIES WE EXCEL IN",
          gridCols: 4,
          items: [
            { name: ".NET", href: "#" },
            { name: "AI", href: "#" },
            { name: "Angular.js", href: "#" },
            { name: "AWS", href: "#" },
            { name: "Azure", href: "#" },
            { name: "C#", href: "#" },
            { name: "Django", href: "#" },
            { name: "Docker", href: "#" },
            { name: "Flutter", href: "#" },
            { name: "Golang", href: "#" },
            { name: "Google Clouds", href: "#" },
            { name: "Java", href: "#" },
            { name: "JavaScript", href: "#" },
            { name: "Kotlin", href: "#" },
            { name: "Laravel", href: "#" },
            { name: "Next.js", href: "#" },
            { name: "Node.js", href: "#" },
            { name: "PHP", href: "#" },
            { name: "Python", href: "#" },
            { name: "React Native", href: "#" },
            { name: "React.js", href: "#" },
            { name: "Spring boot", href: "#" },
            { name: "TypeScript", href: "#" },
            { name: "Vue.js", href: "#" },
            { name: "Webflow", href: "#" }
          ],
          actionLink: {
            label: "All Technologies →",
            href: "#"
          }
        }
      ]
    }
  },
  {
    label: "Industries",
    megaMenu: {
      type: "grid" as const,
      title: "Industries.",
      description: "Tailored solutions for various industry sectors across the globe.",
      featured: {
        title: "HEALTHCARE PLUS",
        description: "Developing robust EHR systems for modern hospitals.",
        linkLabel: "Read case study",
        href: "#"
      },
      sections: [
        {
          title: "INDUSTRIES WE SERVE",
          gridCols: 4,
          items: [
            { name: "Agriculture", href: "#" },
            { name: "Automotive", href: "#" },
            { name: "Aviation", href: "#" },
            { name: "Banking", href: "#" },
            { name: "Entertainment", href: "#" },
            { name: "Finance", href: "#" },
            { name: "Startups", href: "#" },
            { name: "Healthcare", href: "#" },
            { name: "Retail", href: "#" },
            { name: "Supply-chain", href: "#" },
            { name: "Logistics", href: "#" },
            { name: "Travel", href: "#" }
          ],
          actionLink: {
            label: "All Industries →",
            href: "#"
          }
        }
      ]
    }
  },
  {
    label: "Work",
    megaMenu: {
      type: "grid" as const,
      title: "Our Work.",
      description: "Explore our portfolio of successful digital products and transformations.",
      featured: {
        title: "FINANCE FLOW",
        description: "Revolutionizing digital banking for 2M+ active users.",
        linkLabel: "Read case study",
        href: "#"
      },
      sections: [
        {
          title: "CASE STUDIES",
          gridCols: 2,
          items: [
            { name: "Mahfil", href: "#" },
            { name: "Nivoda Feed Jewelry Website", href: "#" },
            { name: "Babai", href: "#" },
            { name: "Alpha DMS", href: "#" },
            { name: "Ahmed Mashuque & CO.", href: "#" },
            { name: "Odommo Prokash", href: "#" },
            { name: "Where To", href: "#" },
            { name: "DXMart", href: "#" },
            { name: "Stech", href: "#" },
            { name: "SliceGuys", href: "#" },
            { name: "Exclusive Italian Gallery", href: "#" },
            { name: "Creaify", href: "#" },
            { name: "Deshi Krishi", href: "#" },
            { name: "Mental Wellness Website", href: "#" },
            { name: "Brightskills", href: "#" },
            { name: "Wear Soha", href: "#" },
            { name: "Lex Intell", href: "#" },
            { name: "English Therapy", href: "#" }
          ],
          actionLink: {
            label: "All Work →",
            href: "#"
          }
        }
      ]
    }
  },
  {
    label: "Company",
    megaMenu: {
      type: "grid" as const,
      title: "Company.",
      description: "We are a team of dedicated professionals building the future of digital solutions.",
      featured: {
        title: "QTEC AGENCY",
        description: "Learn about our culture, values, and the people behind our success.",
        linkLabel: "More about us",
        href: "#"
      },
      sections: [
        {
          title: "INFORMATION",
          gridCols: 1,
          items: [
            { name: "About Us", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "Our Team", href: "#" },
            { name: "Our CEO", href: "#" }
          ]
        },
        {
          title: "JOIN US",
          gridCols: 1,
          items: [
            { name: "Partnership", href: "#" },
            { name: "Career", href: "#" }
          ]
        }
      ]
    }
  },
  {
    label: "Resources",
    megaMenu: {
      type: "grid" as const,
      title: "Resources.",
      description: "Stay updated with the latest trends, insights, and our open-source contributions.",
      featured: {
        title: "ROVIXS ACADEMY",
        description: "Explore our monthly knowledge-sharing sessions and grow with us.",
        linkLabel: "Visit Academy",
        href: "#"
      },
      sections: [
        {
          title: "LEARNING",
          gridCols: 1,
          items: [
            { name: "Academy", href: "#" },
            { name: "Blog", href: "#" }
          ]
        },
        {
          title: "LATEST BLOG POSTS",
          gridCols: 2,
          items: [
            { name: "10 Reasons to Develop Your Next...", href: "#" },
            { name: "Top 5 Backend Frameworks in...", href: "#" },
            { name: "What is bespoke software...", href: "#" },
            { name: "Avoiding App Disasters: Why...", href: "#" },
            { name: "The Ultimate Checklist We Follo...", href: "#" },
            { name: "The Importance of App Design: How...", href: "#" }
          ],
          actionLink: {
            label: "All Blog →",
            href: "#"
          }
        },
        {
          title: "OPEN SOURCE PROJECTS",
          gridCols: 2,
          items: [
            { name: "Coaching MS – Empowering...", href: "#" },
            { name: "1Commerce SaaS: One-Page Shop...", href: "#" },
            { name: "Smart POS system in Laravel & React", href: "#" },
            { name: "AI Content & Image Generator SaaS", href: "#" },
            { name: "WhatsApp Group Member Scraper...", href: "#" }
          ],
          actionLink: {
            label: "All Projects →",
            href: "#"
          }
        }
      ]
    }
  }
];
