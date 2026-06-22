"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { navbarLinks } from "../../navbarLinks";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceDetail } from "../servicesData";
import { ArrowLeft, Check, Sparkles, Send, Loader2 } from "lucide-react";

interface ServiceClientPageProps {
  service: ServiceDetail;
}

export const ServiceClientPage: React.FC<ServiceClientPageProps> = ({ service }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$5k - $20k",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast("Please fill in all required fields.", {
        type: "error",
        title: "Validation Error",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate server API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast("Your inquiry has been submitted successfully!", {
        type: "success",
        title: "Inquiry Sent",
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-purple-100 flex flex-col font-sans selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Top Navbar */}
      <Navbar
        brandName="Rovixs"
        links={navbarLinks}
        contactLabel="Contact Us"
        onContactClick={() => toast("Please use the form below to send an inquiry!", { title: "Contact Us" })}
      />

      {/* Decorative ambient radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] pointer-events-none -z-10" />

      {/* Main Content Area */}
      <main className="flex-1 py-32 sm:py-36 relative z-10">
        <Container size="xl">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-300 hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          {/* Page Header */}
          <div className="max-w-4xl mb-16 flex flex-col gap-4 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider w-max">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Service Page
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-purple-200/80 leading-relaxed font-light">
              {service.headline}
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-10 text-left">
              {/* Description */}
              <div className="flex flex-col gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-white">Service Overview</h2>
                <p className="text-purple-205/70 leading-relaxed text-sm sm:text-base">
                  {service.description} Our systems are optimized to ensure maximum security, responsiveness, and seamless developer onboarding. We follow modern design systems, clean coding configurations, and continuous delivery loops to guarantee stable production releases.
                </p>
              </div>

              {/* Tech Stack Badge List */}
              <div className="flex flex-col gap-4">
                <h2 className="text-base font-bold text-white uppercase tracking-wider">Technologies We Use</h2>
                <div className="flex flex-wrap gap-2.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 border border-purple-900/35 text-purple-200 text-xs font-medium hover:border-primary/45 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features & Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Benefits */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Core Benefits</h3>
                  <ul className="flex flex-col gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-purple-205/70">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Included Deliverables</h3>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-purple-205/70">
                        <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Column: Inquiry Form Card (5 cols) */}
            <div className="lg:col-span-5 relative text-left">
              
              {/* Form border glowing card */}
              <div className="relative bg-background/85 border border-purple-900/35 p-8 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20">
                {isSubmitted ? (
                  /* Success State View */
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 shadow-lg animate-pulse">
                      <Check className="w-8 h-8 animate-bounce" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                      <p className="text-xs sm:text-sm text-purple-200/80 max-w-xs leading-relaxed">
                        Thank you for reaching out, <strong>{formData.name}</strong>. We will review your requirements for <strong>{service.title}</strong> and get back to you within 24 hours.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-purple-900/30 text-purple-100 hover:bg-purple-950/30 hover:border-primary/50 mt-4"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-bold text-white">Request a Consultation</h3>
                      <p className="text-xs text-purple-400 leading-normal">
                        Submit your project guidelines and we will design a customized execution plan.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-background/55 border border-purple-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-650/80 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        Business Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full bg-background/55 border border-purple-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-650/80 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
                      />
                    </div>

                    {/* Project Budget Selection */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        Project Budget Range
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {["< $5k", "$5k - $20k", "$20k+"].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => handleBudgetChange(tier)}
                            className={`py-2 px-1 text-[11px] font-bold rounded-lg border transition-all text-center ${
                              formData.budget === tier
                                ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                                : "bg-background/60 border-purple-900/35 text-purple-400 hover:text-white hover:border-primary/50"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message / Requirements */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        Project Brief & Requirements <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your goals, tech stack preferences, and scaling requirements..."
                        className="w-full bg-background/55 border border-purple-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-650/80 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="animated"
                      disabled={isSubmitting}
                      className="w-full py-3 h-auto text-sm font-bold flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </Container>
      </main>
    </div>
  );
};
