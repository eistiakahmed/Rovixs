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
  Sparkles
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

export default function ComponentsSandbox() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoadToggled, setIsLoadToggled] = useState(false);

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
          <Button
            onClick={() => router.push("/")}
            variant="glass"
            size="sm"
          >
            ← Back to Home
          </Button>
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

      </Container>
    </div>
  );
}
