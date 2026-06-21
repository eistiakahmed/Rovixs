"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormGroup, FormLabel, FormDescription, FormError } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Radio } from "@/components/ui/Radio";
import { Switch } from "@/components/ui/Switch";
import {
  Search,
  Settings,
  Trash2,
  Mail,
  ArrowRight,
  Download,
  CheckCircle,
  User,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Sparkles,
  Home as HomeIcon,
  BarChart3,
  Users,
  Layers,
  ShieldAlert,
  HelpCircle,
  FolderOpen,
  Inbox
} from "lucide-react";
import { Alert } from "@/components/ui/Alert";
import { Spinner } from "@/components/ui/Spinner";
import { Skeleton } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Navbar } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Modal } from "@/components/ui/Modal";
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter } from "@/components/ui/Dialog";
import { Drawer } from "@/components/ui/Drawer";
import { Collapse } from "@/components/ui/Collapse";
import { Accordion } from "@/components/ui/Accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";

export default function ComponentsSandbox() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoadToggled, setIsLoadToggled] = useState(false);

  // Navigation Mock Data
  const navbarLinks = [
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

  const sidebarCategories = [
    {
      title: "Main",
      items: [
        { label: "Dashboard", icon: <HomeIcon className="w-4 h-4" />, href: "#", active: true },
        {
          label: "Projects",
          icon: <FolderOpen className="w-4 h-4" />,
          badge: "3",
          badgeVariant: "primary" as const,
          subItems: [
            { label: "Active Projects", href: "#", active: true },
            { label: "Archived Projects", href: "#" }
          ]
        },
        { label: "Analytics", icon: <BarChart3 className="w-4 h-4" />, href: "#", badge: "Hot", badgeVariant: "danger" as const }
      ]
    },
    {
      title: "Team Management",
      items: [
        { label: "Members", icon: <Users className="w-4 h-4" />, href: "#" },
        {
          label: "Permissions",
          icon: <ShieldAlert className="w-4 h-4" />,
          subItems: [
            { label: "User Roles", href: "#" },
            { label: "API Keys", href: "#" }
          ]
        }
      ]
    },
    {
      title: "Settings Area",
      items: [
        { label: "Preferences", icon: <Settings className="w-4 h-4" />, href: "#" }
      ]
    }
  ];

  const breadcrumbItems1 = [
    { label: "Home", href: "#" },
    { label: "Dashboard", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Rovixs Web App Suite" }
  ];

  const breadcrumbItems2 = [
    { label: "Home", href: "#" },
    { label: "System Preferences", href: "#" },
    { label: "Security & MFA Configuration", href: "#" },
    { label: "Integrations & Sync Toggles", href: "#" },
    { label: "Setup Wizard UI" }
  ];

  // Async Button State
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const triggerAsyncLoad = () => {
    setAsyncLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setAsyncLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  // Form Demo States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("us");
  const [bio, setBio] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [role, setRole] = useState("developer");
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  // Overlay System States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPlacement, setDrawerPlacement] = useState<"left" | "right" | "top" | "bottom">("right");

  // Data Display System States
  const [isTableEmpty, setIsTableEmpty] = useState(false);
  const [tablePage, setTablePage] = useState(1);

  // Data Display System Mock Data
  const mockTableUsers = [
    { id: "usr-1", name: "Eistiak Meraj", email: "meraj@rovixs.com", role: "Product Architect", status: "Active", date: "June 14, 2026" },
    { id: "usr-2", name: "Meraj Ahmed", email: "meraj.ahmed@rovixs.com", role: "Frontend Lead", status: "Active", date: "June 15, 2026" },
    { id: "usr-3", name: "Sam Stark", email: "sam@rovixs.com", role: "UI Designer", status: "Away", date: "June 18, 2026" },
    { id: "usr-4", name: "Bill Gates", email: "bill@microsoft.com", role: "Investor Advisor", status: "Inactive", date: "Jan 12, 2025" },
    { id: "usr-5", name: "Linus Torvalds", email: "linus@linux.org", role: "Kernel Dev", status: "Active", date: "Feb 09, 2026" },
    { id: "usr-6", name: "Mark Zuckerberg", email: "zuck@meta.com", role: "Social Director", status: "Active", date: "May 20, 2026" },
    { id: "usr-7", name: "Jeff Bezos", email: "jeff@amazon.com", role: "Logistics Advisor", status: "Away", date: "April 11, 2026" },
    { id: "usr-8", name: "Steve Jobs", email: "steve@apple.com", role: "Aesthetics Lead", status: "Inactive", date: "Oct 05, 2024" },
    { id: "usr-9", name: "Tim Cook", email: "tim@apple.com", role: "Supply Chain Lead", status: "Active", date: "Dec 18, 2025" },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(mockTableUsers.length / itemsPerPage);
  const currentTableUsers = mockTableUsers.slice((tablePage - 1) * itemsPerPage, tablePage * itemsPerPage);

  // Organization System Mock Data
  const accordionFaqItems = [
    {
      id: "faq-1",
      title: "What technologies are supported in the core platform?",
      content: (
        <p>
          Rovixs provides full integration suites for React, Next.js, Flutter, Kotlin, and Node.js. 
          Our components are designed to compile under strict TypeScript type-checking environments 
          and support custom styling adaptations with zero setup.
        </p>
      ),
    },
    {
      id: "faq-2",
      title: "Are there any external dependencies required for overlays?",
      content: (
        <p>
          No. All components (including Modals, Dialogs, and Drawers) are completely native and 
          leverage standard React Portals and raw Tailwind classes. This ensures minimal bundle footprint 
          and optimized hardware-accelerated animations.
        </p>
      ),
    },
    {
      id: "faq-3",
      title: "How do I request developer resource allocation?",
      content: (
        <p>
          You can utilize our strategic staffing mega-menu sections or contact our engineering 
          representatives to formulate custom staffing agreements. Typical squads deploy in under 7 days.
        </p>
      ),
    },
  ];

  const accordionMultiItems = [
    {
      id: "report-1",
      title: "System Performance Node A",
      content: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>CPU Utilization:</span>
            <span className="text-green-400 font-bold">12% (Stable)</span>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Active Connections:</span>
            <span className="text-slate-200">1,289</span>
          </div>
        </div>
      ),
    },
    {
      id: "report-2",
      title: "System Performance Node B",
      content: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>CPU Utilization:</span>
            <span className="text-amber-500 font-bold">78% (Spike Warn)</span>
          </div>
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Active Connections:</span>
            <span className="text-slate-200">4,902</span>
          </div>
        </div>
      ),
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!terms) newErrors.terms = "You must accept the terms of service";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsFormSubmitting(true);
      setTimeout(() => {
        setIsFormSubmitting(false);
        setIsFormSuccess(true);
        setTimeout(() => setIsFormSuccess(false), 4000);

        // Clear values
        setUsername("");
        setEmail("");
        setPassword("");
        setBio("");
        setTerms(false);
        setNewsletter(false);
        setRole("developer");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Header Bar */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-40 bg-slate-950/80 px-6 py-4">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Rovixs Components Sandbox
            </h1>
          </div>
          <div className="flex gap-2.5">
            <Button
              onClick={() => router.push("/dashboard")}
              variant="animated"
              size="sm"
            >
              SaaS Dashboard →
            </Button>
            <Button
              onClick={() => router.push("/")}
              variant="glass"
              size="sm"
            >
              ← Back to Home
            </Button>
          </div>
        </Container>
      </header>

      <Container size="lg" as="main" className="flex-1 py-12 md:py-16 relative z-10 flex flex-col gap-16">

        {/* Section A: Buttons */}
        <Section spacing="none" className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Button System</h2>
            <p className="text-sm text-slate-400">Premium states, sizes, icons, and themes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Core Variants */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">1. Core Variants</h3>
                <p className="text-xs text-slate-500 mt-0.5">Primary, Secondary, Outline, and Ghost styles.</p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Card 2: Interactive Loading Button */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">2. Loading Button</h3>
                <p className="text-xs text-slate-500 mt-0.5">Asynchronous loader states with animated spinners.</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  variant="primary"
                  isLoading={asyncLoading}
                  onClick={triggerAsyncLoad}
                  leftIcon={success ? <CheckCircle className="w-4 h-4 text-green-400 animate-bounce" /> : undefined}
                  className={success ? "border-green-500/50 bg-green-950/20 text-green-400" : ""}
                >
                  {success ? "Success!" : "Click to Load"}
                </Button>
                <Button variant="secondary" isLoading={true}>
                  Static Loading
                </Button>
              </div>
            </div>

            {/* Card 3: Icon Button Configurations */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">3. Icon Buttons</h3>
                <p className="text-xs text-slate-500 mt-0.5">Conforms to standard square aspect ratio or icon combinations.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <span className="text-xs text-slate-500 w-20">Icon Only:</span>
                  <Button variant="primary" isIconOnly size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" isIconOnly size="md">
                    <Settings className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" isIconOnly size="lg">
                    <Trash2 className="w-5 h-5 text-red-400" />
                  </Button>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-xs text-slate-500 w-20">With Text:</span>
                  <Button variant="outline" leftIcon={<Mail className="w-4 h-4" />}>
                    Mail Box
                  </Button>
                  <Button variant="primary" rightIcon={<Download className="w-4 h-4" />}>
                    Download Invoice
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 4: Link Button Styles */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">4. Link Buttons</h3>
                <p className="text-xs text-slate-500 mt-0.5">Clean inline hyperlink-style buttons.</p>
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                <Button variant="link" size="sm">
                  Small Link
                </Button>
                <Button variant="link" size="md">
                  Default Link
                </Button>
                <Button variant="link" size="lg">
                  Large Link
                </Button>
              </div>
            </div>

            {/* Card 5: Modern Glass & Gradient Animated Buttons */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md md:col-span-2">
              <div>
                <h3 className="text-base font-bold text-slate-200">5. Modern Glass & Animated Variants</h3>
                <p className="text-xs text-slate-500 mt-0.5">Glassmorphic transparency or fluid shifting-gradient buttons.</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="glass">Glass Button</Button>
                <Button variant="glass" size="lg" leftIcon={<Sparkles className="w-5 h-5 text-blue-400" />}>Premium Glass</Button>
                
                <Button variant="animated">Shifting Gradient</Button>
                <Button variant="animated" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get Started</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Section B: Form Controls */}
        <Divider variant="gradient" className="my-4" />
        
        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Form System</h2>
            <p className="text-sm text-slate-400">Interactive Inputs, Textareas, Selects, Checkboxes, Radios, and Switches.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left side: Individual Control Previews */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                <h3 className="text-base font-bold text-slate-200 border-b border-slate-800 pb-3">Form Component Guide</h3>

                {/* Input Preview */}
                <FormGroup>
                  <FormLabel htmlFor="preview-input">Text Input</FormLabel>
                  <Input id="preview-input" placeholder="Type here..." leftIcon={<User className="w-4 h-4" />} />
                  <FormDescription>Standard input with a left-aligned icon.</FormDescription>
                </FormGroup>

                {/* Textarea Preview */}
                <FormGroup>
                  <FormLabel htmlFor="preview-textarea">Text Area</FormLabel>
                  <Textarea id="preview-textarea" placeholder="Provide details..." rows={3} />
                  <FormDescription>Custom resizable text box for long contents.</FormDescription>
                </FormGroup>

                {/* Select Preview */}
                <FormGroup>
                  <FormLabel htmlFor="preview-select">Dropdown Select</FormLabel>
                  <Select id="preview-select">
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                  </Select>
                  <FormDescription>Accessible styled dropdown element.</FormDescription>
                </FormGroup>

                {/* Inline Toggle Previews */}
                <div className="flex flex-col gap-4 border-t border-slate-800/80 pt-4">
                  <FormLabel>Selection Controls</FormLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Checkbox label="Checkbox Option" defaultChecked />
                    <Radio label="Radio Choice" defaultChecked />
                    <Switch label="Switch Toggle" defaultChecked />
                  </div>
                </div>

              </div>
            </div>

            {/* Right side: Real-time Validated Registration Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleFormSubmit}
                className="bg-slate-950/60 border border-slate-800/85 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md shadow-2xl relative"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Interactive Form Demo</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Test real-time validation and loading states below.</p>
                </div>

                {isFormSuccess && (
                  <div className="flex items-center gap-3 p-4 bg-green-950/20 border border-green-500/30 text-green-400 rounded-xl animate-slide-down">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div className="text-xs">
                      <span className="font-semibold">Success!</span> Registration completed. Values successfully captured.
                    </div>
                  </div>
                )}

                {/* Username */}
                <FormGroup>
                  <FormLabel htmlFor="username">Username *</FormLabel>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errors.username) setErrors((prev) => ({ ...prev, username: "" }));
                    }}
                    error={!!errors.username}
                    placeholder="meraj_ahmed"
                    leftIcon={<User className="w-4 h-4" />}
                  />
                  <FormError>{errors.username}</FormError>
                </FormGroup>

                {/* Email */}
                <FormGroup>
                  <FormLabel htmlFor="email">Email Address *</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    error={!!errors.email}
                    placeholder="meraj@rovixs.com"
                    leftIcon={<Mail className="w-4 h-4" />}
                  />
                  <FormError>{errors.email}</FormError>
                </FormGroup>

                {/* Password */}
                <FormGroup>
                  <FormLabel htmlFor="password">Password *</FormLabel>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
                    }}
                    error={!!errors.password}
                    placeholder="••••••••"
                    leftIcon={<Lock className="w-4 h-4" />}
                    rightIcon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="hover:text-slate-300 focus:outline-none transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    }
                  />
                  <FormError>{errors.password}</FormError>
                  <FormDescription>Must be at least 6 characters.</FormDescription>
                </FormGroup>

                {/* Country */}
                <FormGroup>
                  <FormLabel htmlFor="country">Location Country</FormLabel>
                  <Select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    leftIcon={<Globe className="w-4 h-4" />}
                  >
                    <option value="us">United States</option>
                    <option value="bd">Bangladesh</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                  </Select>
                </FormGroup>

                {/* Bio Description */}
                <FormGroup>
                  <FormLabel htmlFor="bio">Bio Description</FormLabel>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={2}
                  />
                </FormGroup>

                {/* Role (Radio choices) */}
                <FormGroup>
                  <FormLabel>Your Primary Role</FormLabel>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <Radio
                      name="role"
                      label="Developer"
                      checked={role === "developer"}
                      onChange={() => setRole("developer")}
                    />
                    <Radio
                      name="role"
                      label="Designer"
                      checked={role === "designer"}
                      onChange={() => setRole("designer")}
                    />
                    <Radio
                      name="role"
                      label="Manager"
                      checked={role === "manager"}
                      onChange={() => setRole("manager")}
                    />
                  </div>
                </FormGroup>

                {/* Newsletter Subscription */}
                <Checkbox
                  label="Subscribe to weekly technical newsletters"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />

                {/* Switch Terms */}
                <FormGroup>
                  <Switch
                    label="I accept the Terms and Conditions *"
                    checked={terms}
                    onChange={(e) => {
                      setTerms(e.target.checked);
                      if (errors.terms) setErrors((prev) => ({ ...prev, terms: "" }));
                    }}
                    error={!!errors.terms}
                  />
                  <FormError>{errors.terms}</FormError>
                </FormGroup>

                {/* Action Submit */}
                <Button type="submit" variant="primary" size="lg" className="w-full mt-2" isLoading={isFormSubmitting}>
                  Register Account
                </Button>

              </form>
            </div>

          </div>
        </Section>

        {/* Section C: Feedback System */}
        <Divider variant="gradient" className="my-4" />
        
        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Feedback System</h2>
            <p className="text-sm text-slate-400">Interactive Alert banners, pulsing Skeleton placeholders, SVG loaders, and Toast alerts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Alert & Toast Preview */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Alert System Showcase */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
                <div>
                  <h3 className="text-base font-bold text-slate-200">1. Inline Alert Banners</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Dismissible notifications for warnings, errors, success, and information.</p>
                </div>
                <Alert variant="info" title="System Update" onClose={() => {}}>
                  We will be performing a database maintenance tonight at 12:00 PM EST. Expect up to 5 minutes of downtime.
                </Alert>
                <Alert variant="success" title="Payment Succeeded" onClose={() => {}}>
                  Invoice #2089 has been paid successfully. A PDF copy has been emailed to your billing address.
                </Alert>
                <Alert variant="error" title="Critical Connection Failure" onClose={() => {}}>
                  Lost connection with the upstream authentication microservice. Retrying connection in 3 seconds...
                </Alert>
              </div>

              {/* Toast System Showcase */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
                <div>
                  <h3 className="text-base font-bold text-slate-200">2. Toast Notification Trigger</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Reactive, dismissible, self-closing toast cards mimicking SweetAlert notifications.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="glass" onClick={() => toast("Captured profile changes successfully!", { type: "success", title: "Profile Updated" })}>
                    Trigger Success
                  </Button>
                  <Button variant="glass" onClick={() => toast("Invalid billing address detected. Check zip code.", { type: "error", title: "Payment Failed" })}>
                    Trigger Error
                  </Button>
                  <Button variant="glass" onClick={() => toast("Disk space is exceeding 85% utilization threshold.", { type: "warning", title: "Storage Warning" })}>
                    Trigger Warning
                  </Button>
                  <Button variant="glass" onClick={() => toast("Connected to websocket node #04 (Virginia).", { type: "info", title: "Socket Connected" })}>
                    Trigger Info
                  </Button>
                </div>
              </div>

            </div>

            {/* Right side: Skeleton & Spinners Interactive loading card */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-bold text-slate-200">3. Skeleton & Spinners</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Toggle between loaded component and placeholder views.</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setIsLoadToggled(!isLoadToggled)}>
                    {isLoadToggled ? "Load Spinner State" : "Load Content State"}
                  </Button>
                </div>

                {!isLoadToggled ? (
                  /* Loading view showing Skeletons & Spinners */
                  <div className="border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden bg-slate-950/20">
                    <div className="flex items-center gap-4">
                      {/* Avatar Skeleton */}
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="flex flex-col gap-2 flex-1">
                        {/* Title Line Skeleton */}
                        <Skeleton className="h-4 w-1/3" />
                        {/* Subtitle Line Skeleton */}
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                    {/* Media Block Skeleton */}
                    <Skeleton className="h-32 w-full rounded-xl" />
                    
                    {/* Centered Spinner overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Spinner size="lg" />
                        <span className="text-xs text-slate-400 font-semibold animate-pulse">Simulating fetch...</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Loaded full premium profile content view */
                  <div className="border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 bg-slate-950/40 animate-slide-down">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                        EA
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                          Eistiak Meraj
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        </span>
                        <span className="text-xs text-slate-500">Lead Product Architect</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/50">
                      Developing next-generation interface component systems. Specializes in animations, accessible layout patterns, and responsive dashboard infrastructures.
                    </div>
                    <div className="flex gap-2">
                      <Button variant="primary" size="sm" className="flex-1">
                        Send Message
                      </Button>
                      <Button variant="secondary" size="sm" isIconOnly>
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </Section>

        {/* Section D: Layouts System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Layout System</h2>
            <p className="text-sm text-slate-400">Centered Container, spaced Sections, and styled Divider components.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Horizontal Divider Previews */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">1. Horizontal Dividers</h3>
                <p className="text-xs text-slate-500 mt-0.5">Horizontal separators in solid, dashed, gradient, and labeled variants.</p>
              </div>
              <div className="flex flex-col gap-5 justify-center py-2">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Solid Divider</span>
                  <Divider variant="solid" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Dashed Divider</span>
                  <Divider variant="dashed" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Gradient Divider</span>
                  <Divider variant="gradient" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-1">Labeled Divider</span>
                  <Divider variant="solid" label="OR" />
                </div>
              </div>
            </div>

            {/* Card 2: Vertical Divider Previews */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">2. Vertical Dividers</h3>
                <p className="text-xs text-slate-500 mt-0.5">Vertical separators splitting inline items or controls.</p>
              </div>
              <div className="flex items-center justify-around h-36 bg-slate-900/40 border border-slate-800/50 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">Col A</div>
                  <div className="text-xs text-slate-500 mt-1">Left</div>
                </div>

                <Divider orientation="vertical" variant="solid" />

                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">Col B</div>
                  <div className="text-xs text-slate-500 mt-1">Solid</div>
                </div>

                <Divider orientation="vertical" variant="dashed" />

                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">Col C</div>
                  <div className="text-xs text-slate-500 mt-1">Dashed</div>
                </div>

                <Divider orientation="vertical" variant="gradient" />

                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">Col D</div>
                  <div className="text-xs text-slate-500 mt-1">Gradient</div>
                </div>
              </div>
            </div>

          </div>
        </Section>

        {/* Section E: Display System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Display System</h2>
            <p className="text-sm text-slate-400">Translucent glass cards, status Badges, and profile Avatars with fallback initials.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Card 1: Cards Showcase */}
            <div className="flex flex-col gap-6">
              {/* Stat Dashboard Card */}
              <Card>
                <CardHeader>
                  <CardDescription className="uppercase tracking-widest text-[10px]">Monthly Revenue</CardDescription>
                  <CardTitle className="text-3xl font-extrabold mt-1">$48,259.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Badge variant="success" dot pulse>+12.4%</Badge>
                    <span className="text-xs text-slate-500">vs last month</span>
                  </div>
                </CardContent>
              </Card>

              {/* Standard Hoverable Card */}
              <Card hoverable>
                <CardHeader>
                  <CardTitle>Interactive Hover Card</CardTitle>
                  <CardDescription>Hover over this card to preview animations.</CardDescription>
                </CardHeader>
                <CardContent>
                  This card uses backdrop blurring and border transitions on hover. Clicking it scales it down slightly for a native-like response.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-xs">Learn More</Button>
                  <Button variant="link" size="sm">Dismiss</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Card 2: Badge System Showcase */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">Badges & Tags</h3>
                <p className="text-xs text-slate-500 mt-0.5">Status tags with optional pulsing dots.</p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Standard Variants */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest w-full mb-1">Color Variants:</span>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="glass">Glass</Badge>
                </div>

                {/* Status Dot Badges */}
                <div className="flex flex-wrap gap-2.5 items-center border-t border-slate-800/60 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest w-full mb-1">Status Dot Indicator:</span>
                  <Badge variant="success" dot pulse>Online</Badge>
                  <Badge variant="danger" dot pulse>Offline</Badge>
                  <Badge variant="warning" dot>Away</Badge>
                  <Badge variant="secondary" dot>Draft</Badge>
                </div>
              </div>
            </div>

            {/* Card 3: Avatar Showcase */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">Avatars</h3>
                <p className="text-xs text-slate-500 mt-0.5">Circular thumbnails with status tags and fallback gradient initials.</p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Sizing & Status */}
                <div className="flex gap-4 items-center">
                  <Avatar name="Online Meraj" status="online" size="sm" />
                  <Avatar name="Busy Eistiak" status="busy" size="md" />
                  <Avatar name="Away Sam" status="away" size="lg" />
                  <Avatar name="Offline User" status="offline" size="xl" />
                </div>

                {/* Fallback Gradients */}
                <div className="flex flex-wrap gap-3 items-center border-t border-slate-800/60 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest w-full mb-1">Initials Gradient Fallbacks:</span>
                  <Avatar name="Eistiak Meraj" size="md" />
                  <Avatar name="Bill Gates" size="md" />
                  <Avatar name="Mark Zuckerberg" size="md" />
                  <Avatar name="Jeff Bezos" size="md" />
                </div>

                {/* Overlapping Avatar Stack */}
                <div className="flex items-center border-t border-slate-800/60 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest w-24 mr-2">Avatar Group:</span>
                  <div className="flex -space-x-3 overflow-hidden">
                    <Avatar name="Eistiak Meraj" size="md" className="ring-2 ring-slate-950" />
                    <Avatar name="Bill Gates" size="md" className="ring-2 ring-slate-950" />
                    <Avatar name="Mark Zuckerberg" size="md" className="ring-2 ring-slate-950" />
                    <Avatar name="Jeff Bezos" size="md" className="ring-2 ring-slate-950 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>

        {/* Section F: Navigation System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Navigation System</h2>
            <p className="text-sm text-slate-400">Desktop Mega-Menu, responsive Mobile Menu drawer, collapsible Sidebar, and customizable Breadcrumbs.</p>
          </div>

          {/* 1. Header Navbar Demo */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">1. Interactive Header Navbar (Rovixs-style Dropdowns)</span>
            <div className="border border-slate-900 bg-slate-950/20 rounded-2xl overflow-visible p-1 relative z-30">
              <Navbar
                brandName="Rovixs"
                brandLogo={<img src="/asset/logo.png" alt="Rovixs Logo" className="w-8 h-8 object-contain" />}
                links={navbarLinks}
                contactLabel="Contact Us"
                onContactClick={() => toast("Navigated to contact page!", { title: "CTA Clicked" })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* 2. Sidebar Demo */}
            <div className="lg:col-span-1 flex flex-col gap-3">
              <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">2. Collapsible Dashboard Sidebar</span>
              <div className="border border-slate-900/60 rounded-2xl overflow-hidden h-[540px] flex">
                <Sidebar
                  categories={sidebarCategories}
                  brandName="Rovixs Panel"
                  brandSub="Main Console"
                  showLogout={true}
                  onLogoutClick={() => toast("Successfully disconnected session.", { title: "Signed Out" })}
                  className="h-full border-0"
                />
                <div className="flex-1 bg-slate-950/20 p-6 flex flex-col gap-4">
                  <h4 className="text-sm font-bold text-slate-350">Workspace Preview</h4>
                  <div className="h-full border border-dashed border-slate-900 rounded-xl flex items-center justify-center text-center p-4">
                    <p className="text-[10px] text-slate-500">Toggle collapse or select menus in the sidebar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Breadcrumb & Mobile Menu Explanations */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Breadcrumb Demo */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                <div>
                  <h3 className="text-base font-bold text-slate-200">3. Breadcrumb Trails</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Flexible navigation trails with separators and auto-truncation.</p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Standard usage */}
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Standard path:</span>
                    <div className="bg-slate-950 border border-slate-900 rounded-xl p-4">
                      <Breadcrumb items={breadcrumbItems1} />
                    </div>
                  </div>

                  {/* Truncated path */}
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Truncated path (max 3 items):</span>
                    <div className="bg-slate-950 border border-slate-900 rounded-xl p-4">
                      <Breadcrumb
                        items={breadcrumbItems2}
                        maxItems={3}
                        onItemClick={(item) => toast(`Navigating to ${item.label}`, { title: "Breadcrumb Clicked" })}
                      />
                    </div>
                  </div>

                  {/* Custom Separator */}
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Custom Text separator:</span>
                    <div className="bg-slate-950 border border-slate-900 rounded-xl p-4">
                      <Breadcrumb
                        items={breadcrumbItems1.slice(0, 3)}
                        separator={<span className="text-xs text-slate-700 font-bold px-1">/</span>}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Info Card */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
                <div>
                  <h3 className="text-base font-bold text-slate-200">4. Mobile Navigation Menu</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Smooth slide-in panel containing accordions on mobile devices.</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Shrink your browser viewport to mobile width (or toggle responsive inspect tools) to try the mobile hamburger drawer. 
                  It slide-animates from the right with a smooth blur overlay, collapsible subcategories, and structured action items matching the desktop mega-menu layout.
                </p>
              </div>

            </div>
          </div>
        </Section>

        {/* Section G: Overlay System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Overlay System</h2>
            <p className="text-sm text-slate-400">Modal popups, structured semantic Dialog prompts, and slide-out side Drawers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Modal Showcase */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">Modals</h3>
                <p className="text-xs text-slate-500 mt-0.5">Flexible modal windows supporting scroll-locking, and custom sizes.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(true)}>
                  Standard Info Modal
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setIsLargeModalOpen(true)}>
                  Large Form Modal
                </Button>
              </div>
            </div>

            {/* Card 2: Dialog Showcase */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">Dialogs</h3>
                <p className="text-xs text-slate-500 mt-0.5">Semantic alert prompts with action items and top colored borders.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="animated" className="w-full" onClick={() => setIsSuccessDialogOpen(true)}>
                  Success Alert Dialog
                </Button>
                <Button variant="secondary" className="w-full border border-red-500/20 text-red-400 hover:bg-red-950/10 hover:border-red-500/40" onClick={() => setIsConfirmDialogOpen(true)}>
                  Danger Confirm Dialog
                </Button>
              </div>
            </div>

            {/* Card 3: Drawer Showcase */}
            <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
              <div>
                <h3 className="text-base font-bold text-slate-200">Drawers</h3>
                <p className="text-xs text-slate-500 mt-0.5">Slide-out panels from any edge of the viewport (Right, Bottom, Left, Top).</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="glass" className="w-full text-xs" onClick={() => { setDrawerPlacement("right"); setIsDrawerOpen(true); }}>
                  Right Drawer
                </Button>
                <Button variant="glass" className="w-full text-xs" onClick={() => { setDrawerPlacement("left"); setIsDrawerOpen(true); }}>
                  Left Drawer
                </Button>
                <Button variant="glass" className="w-full text-xs" onClick={() => { setDrawerPlacement("bottom"); setIsDrawerOpen(true); }}>
                  Bottom Drawer
                </Button>
                <Button variant="glass" className="w-full text-xs" onClick={() => { setDrawerPlacement("top"); setIsDrawerOpen(true); }}>
                  Top Drawer
                </Button>
              </div>
            </div>

          </div>
        </Section>

        {/* Section H: Organization System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100">Organization System</h2>
            <p className="text-sm text-slate-400">Tabs switcher lists, collapsible disclosure controls, and unified accordion lists.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Tabs Demos (8 columns wide) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Underline Tabs */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">1. Underline Tabs</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Sleek horizontal navigation tabs with modern lower active-line highlight.</p>
                </div>
                
                <Tabs defaultValue="profile" variant="underline">
                  <TabsList>
                    <TabsTrigger value="profile">User Profile</TabsTrigger>
                    <TabsTrigger value="security">Security & MFA</TabsTrigger>
                    <TabsTrigger value="billing">Plan & Billing</TabsTrigger>
                    <TabsTrigger value="api" disabled>Integrations (Locked)</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile" className="flex flex-col gap-3 mt-1">
                    <p className="text-xs text-slate-300">
                      User Profile details are managed by the identity microservice. Any configuration changes will trigger real-time replication to secondary read-nodes within 3 seconds.
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <Avatar name="Eistiak Meraj" size="sm" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-200">Eistiak Meraj</span>
                        <span className="text-[10px] text-slate-500">meraj@rovixs.com</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="flex flex-col gap-3 mt-1">
                    <p className="text-xs text-slate-300">
                      Secure authentication methods are active. Ensure that your TOTP mobile application is configured properly before requesting strict authorization enforcement.
                    </p>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                      <Badge variant="success" dot pulse>MFA Active</Badge>
                      <Badge variant="glass">WebAuthn Keys: 2</Badge>
                    </div>
                  </TabsContent>

                  <TabsContent value="billing" className="flex flex-col gap-3 mt-1">
                    <p className="text-xs text-slate-300">
                      Your current subscription plan is <span className="font-bold text-blue-400">Rovixs Pro Team</span>. 
                      Next invoicing date is configured for July 12, 2026 for a total of $129.00 USD.
                    </p>
                    <Button variant="outline" size="sm" className="w-fit mt-1.5">View Transaction Logs</Button>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Pills & Solid Box Tabs Side-by-Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Pills Tabs */}
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">2. Pills Tabs</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Capsule-style tab triggers suitable for active visual buttons.</p>
                  </div>

                  <Tabs defaultValue="all" variant="pills">
                    <TabsList>
                      <TabsTrigger value="all">Show All</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="text-xs text-slate-300">
                      Renders complete list of project tasks. (12 active elements and 2 pending approval).
                    </TabsContent>
                    
                    <TabsContent value="active" className="text-xs text-slate-300">
                      Renders only running pipeline deployments. Checking clusters node-01... node-03...
                    </TabsContent>
                    
                    <TabsContent value="pending" className="text-xs text-slate-300">
                      There are no pending team invitations at this moment. Everything is fully synchronized.
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Solid Box Tabs */}
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">3. Solid Box Tabs</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Bordered background capsule button switchers for header cards.</p>
                  </div>

                  <Tabs defaultValue="overview" variant="solid">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="metrics">Metrics</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="text-xs text-slate-300">
                      Renders aggregated business summaries, sales conversions, and customer funnel data.
                    </TabsContent>
                    
                    <TabsContent value="metrics" className="text-xs text-slate-300">
                      Renders raw database queries latency (average 14ms) and memory cache hit rates (98.4%).
                    </TabsContent>
                  </Tabs>
                </div>

              </div>

            </div>

            {/* Right Column: Collapse & Accordion Demos (4 columns wide) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Collapse Panel Section */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">4. Collapsible Panels</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Toggle disclosure panel for settings and extra details.</p>
                </div>
                
                <Collapse title="Show Raw System logs">
                  <div className="flex flex-col gap-1.5 font-mono text-[10px] text-slate-405 bg-slate-955 p-3 rounded-lg border border-slate-900 overflow-x-auto max-h-36 scrollbar-thin">
                    <div>[22:01:05] WRN connection retry node-04</div>
                    <div>[22:01:08] INF connected node-04 successfully</div>
                    <div>[22:02:11] INF user EA signed in via key-09</div>
                    <div>[22:04:31] DBG queried invoice transaction cache</div>
                  </div>
                </Collapse>
              </div>

              {/* Accordion Panels Section */}
              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">5. Interactive Accordions</h3>
                  <p className="text-xs text-slate-500 mt-0.5">FAQ-style panel collections (single open or multi-select).</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block mb-2">FAQ Accordion (Single Open):</span>
                    <Accordion items={accordionFaqItems} defaultOpenId="faq-1" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block mb-2">Monitoring Panels (Multi-Select):</span>
                    <Accordion items={accordionMultiItems} allowMultiple defaultOpenId={["report-1", "report-2"]} />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Section>

        {/* Section I: Data Display System */}
        <Divider variant="gradient" className="my-4" />

        <Section spacing="sm" className="flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-100">Data Display System</h2>
              <p className="text-sm text-slate-400">Semantic responsive tables, graphical empty state placeholders, and page controls.</p>
            </div>
            
            {/* Control to toggle empty state mock */}
            <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800/60 py-2.5 px-4 rounded-xl backdrop-blur-md">
              <span className="text-xs text-slate-400 font-semibold">Simulate Empty State</span>
              <Switch checked={isTableEmpty} onChange={(e) => { setIsTableEmpty(e.target.checked); setTablePage(1); }} />
            </div>
          </div>

          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            
            {isTableEmpty ? (
              /* Simulated Empty State View */
              <EmptyState
                icon={<Inbox className="w-6 h-6" />}
                title="No users found in database"
                description="Your query returned zero active matching elements. Try adjusting your parameters or creating a new team user."
                action={
                  <Button variant="primary" size="sm" onClick={() => { setIsTableEmpty(false); toast("Database records refreshed", { type: "success" }); }}>
                    Refresh Database Records
                  </Button>
                }
              />
            ) : (
              /* Paginated Semantic Table View */
              <div className="flex flex-col gap-5">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User Name</TableHead>
                      <TableHead>Email Address</TableHead>
                      <TableHead>Job Title</TableHead>
                      <TableHead>System Status</TableHead>
                      <TableHead className="text-right">Join Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentTableUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-semibold text-slate-205 flex items-center gap-2.5">
                          <Avatar name={user.name} size="sm" />
                          {user.name}
                        </TableCell>
                        <TableCell className="text-slate-400">{user.email}</TableCell>
                        <TableCell className="text-slate-300 font-medium">{user.role}</TableCell>
                        <TableCell>
                          {user.status === "Active" && <Badge variant="success" dot pulse>Active</Badge>}
                          {user.status === "Away" && <Badge variant="warning" dot>Away</Badge>}
                          {user.status === "Inactive" && <Badge variant="secondary" dot>Offline</Badge>}
                        </TableCell>
                        <TableCell className="text-right text-slate-500 font-mono">{user.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4} className="font-bold text-slate-400">Total Active Workspace Staff Members</TableCell>
                      <TableCell className="text-right font-bold text-slate-200">{mockTableUsers.length}</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-slate-900 pt-4 flex-wrap gap-4">
                  <span className="text-[10px] text-slate-500">
                    Showing pages <span className="text-slate-300 font-bold">{tablePage}</span> of <span className="text-slate-300 font-bold">{totalPages}</span> (items { (tablePage - 1) * itemsPerPage + 1 } - { Math.min(tablePage * itemsPerPage, mockTableUsers.length) })
                  </span>
                  <Pagination
                    currentPage={tablePage}
                    totalPages={totalPages}
                    onPageChange={(page) => setTablePage(page)}
                  />
                </div>
              </div>
            )}

          </div>
        </Section>

      </Container>

      {/* Standard Info Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Interactive Component Suite"
        size="md"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-slate-950/40 border border-slate-800/60 p-4 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-450 flex items-center justify-center font-bold text-base flex-shrink-0">
              R
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">Rovixs Core Elements</h4>
              <p className="text-[10px] text-slate-500">Currently executing version 0.1.0 (Beta)</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Welcome to the components modal window. This component mounts directly to the root of the document body using a React portal, meaning it is unaffected by any container clipping or z-index limitations.
          </p>
          <p className="text-xs text-slate-400">
            Pressing the <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-200 rounded text-[10px] border border-slate-700">ESC</kbd> key or clicking on the darkened blurred backdrop will trigger the close animation cleanly.
          </p>
          <div className="flex justify-end gap-2.5 mt-2">
            <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
              Close Panel
            </Button>
            <Button variant="primary" size="sm" onClick={() => { setIsModalOpen(false); toast("Copied token to clipboard!", { type: "success" }); }}>
              Acknowledge
            </Button>
          </div>
        </div>
      </Modal>

      {/* Large Form Modal */}
      <Modal
        isOpen={isLargeModalOpen}
        onClose={() => setIsLargeModalOpen(false)}
        title="Create Team Member Profile"
        size="lg"
      >
        <form onSubmit={(e) => { e.preventDefault(); setIsLargeModalOpen(false); toast("Created profile snapshot successfully!", { type: "success", title: "Success" }); }} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormGroup>
              <FormLabel htmlFor="modal-name">Full Name</FormLabel>
              <Input id="modal-name" placeholder="John Doe" required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="modal-role">Job Title</FormLabel>
              <Input id="modal-role" placeholder="Senior Developer" required />
            </FormGroup>
          </div>
          
          <FormGroup>
            <FormLabel htmlFor="modal-bio">Profile Biography</FormLabel>
            <Textarea id="modal-bio" placeholder="Write a short summary about the team member..." rows={3} />
          </FormGroup>

          <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-2">
            <span className="text-[10px] text-slate-500">All changes will automatically sync.</span>
            <div className="flex gap-2.5">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsLargeModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Save Profile
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* Success Alert Dialog */}
      <Dialog
        isOpen={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
        variant="success"
        title="Transaction Finalized"
        size="sm"
      >
        <DialogHeader>
          <DialogTitle>Billing Success</DialogTitle>
          <DialogDescription>
            Your monthly subscription payment has been captured and routed to the clearing house.
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 flex flex-col gap-2 mt-1">
            <div className="flex justify-between">
              <span className="text-slate-500">Invoice ID:</span>
              <span className="font-mono text-slate-200">#INV-9028-A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Amount Paid:</span>
              <span className="font-semibold text-green-450">$129.00 USD</span>
            </div>
          </div>
        </DialogContent>
        <DialogFooter>
          <Button variant="primary" size="sm" className="w-full sm:w-auto" onClick={() => setIsSuccessDialogOpen(false)}>
            Done
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Danger Confirm Dialog */}
      <Dialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        variant="danger"
        title="Irreversible Action Warning"
        size="sm"
      >
        <DialogHeader>
          <DialogTitle>Delete API Key Cluster?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. All microservices relying on these keys will fail authentications immediately.
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <p className="text-slate-400">
            Please make sure you have fully rotated the keys in your staging environment before purging the production cluster.
          </p>
        </DialogContent>
        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => setIsConfirmDialogOpen(false)}>
            No, Keep Key
          </Button>
          <Button variant="secondary" size="sm" className="bg-red-650 hover:bg-red-700 text-white" onClick={() => { setIsConfirmDialogOpen(false); toast("Purged production key cluster.", { type: "error", title: "Purged" }); }}>
            Yes, Purge
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Slide-out Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement={drawerPlacement}
        size={drawerPlacement === "bottom" || drawerPlacement === "top" ? "sm" : "md"}
        title={`${drawerPlacement.toUpperCase()} PLACEMENT DRAWER`}
      >
        <div className="flex flex-col gap-5 h-full">
          <div>
            <h4 className="text-sm font-bold text-slate-200">Panel Context Information</h4>
            <p className="text-xs text-slate-500 mt-0.5">Quickly adjust layouts and preferences from the sidebar dashboard drawer overlay.</p>
          </div>

          <Divider variant="solid" />

          {/* Dummy settings checklist inside drawer */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Interface Settings</span>
            <div className="flex flex-col gap-3">
              <Switch label="Enable Real-time Webhooks" defaultChecked />
              <Switch label="Hardware Acceleration" defaultChecked />
              <Switch label="Developer Sandbox Insights" />
            </div>
          </div>

          <Divider variant="solid" />

          <p className="text-xs text-slate-400 leading-relaxed">
            Drawers are excellent for responsive navigation, quick setting widgets, filter menus, and action checklists. They can stretch or shrink depending on screen size or orientation.
          </p>

          <div className="mt-auto pt-4 flex gap-2">
            <Button variant="primary" className="flex-1" onClick={() => { setIsDrawerOpen(false); toast("Saved drawer changes", { type: "success" }); }}>
              Save Options
            </Button>
            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
