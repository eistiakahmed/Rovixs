"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutGrid,
  TrendingUp,
  Activity,
  Cpu,
  Clock,
  ArrowRight,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  Filter,
  Command,
  HelpCircle,
  FileText,
  Settings
} from "lucide-react";

// Reusable components
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Switch } from "@/components/ui/Switch";
import { useToast } from "@/components/ui/Toast";

// Layout specific overlays & organization controls
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { Pagination } from "@/components/ui/Pagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DatePicker, Calendar } from "@/components/ui/Calendar";
import { MultiSelect, MultiSelectOption } from "@/components/ui/MultiSelect";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { AreaChart, BarChart, PieChart, LineChart } from "@/components/ui/Charts";
import { FileUpload, RichTextEditor } from "@/components/ui/RichComponents";

export default function SaaSClientDashboard() {
  const router = useRouter();
  const { toast } = useToast();

  // 1. Dashboard State Controls
  const [activeTab, setActiveTab] = useState<"analytics" | "team" | "settings">("analytics");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // 2. Interactive Data States
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [teamTablePage, setTeamTablePage] = useState(1);
  const [isDatabaseEmpty, setIsDatabaseEmpty] = useState(false);

  // 3. Productivity Tool States
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedRoles, setSelectedRoles] = useState<string[]>(["dev", "des"]);

  // 4. Mock Datasets
  const dashboardStaffList = [
    { id: "usr-1", name: "Eistiak Meraj", email: "meraj@rovixs.com", role: "Product Architect", status: "Active", joinDate: "June 14, 2026", load: 85 },
    { id: "usr-2", name: "Meraj Ahmed", email: "meraj.ahmed@rovixs.com", role: "Frontend Lead", status: "Active", joinDate: "June 15, 2026", load: 60 },
    { id: "usr-3", name: "Sam Stark", email: "sam@rovixs.com", role: "UI Designer", status: "Away", joinDate: "June 18, 2026", load: 20 },
    { id: "usr-4", name: "Bill Gates", email: "bill@microsoft.com", role: "Investor Advisor", status: "Inactive", joinDate: "Jan 12, 2025", load: 0 },
    { id: "usr-5", name: "Linus Torvalds", email: "linus@linux.org", role: "Kernel Lead", status: "Active", joinDate: "Feb 09, 2026", load: 95 },
    { id: "usr-6", name: "Mark Zuckerberg", email: "zuck@meta.com", role: "Social Advisor", status: "Active", joinDate: "May 20, 2026", load: 45 },
    { id: "usr-7", name: "Jeff Bezos", email: "jeff@amazon.com", role: "Logistics Advisor", status: "Away", joinDate: "April 11, 2026", load: 15 },
  ];

  const roleOptions: MultiSelectOption[] = [
    { value: "arch", label: "Architecture" },
    { value: "dev", label: "Software Development" },
    { value: "des", label: "Interface Design" },
    { value: "qa", label: "Quality Assurance" },
  ];

  // Chart datasets
  const revenueChartData = [
    { label: "Jan", value: 12000 },
    { label: "Feb", value: 18500 },
    { label: "Mar", value: 24000 },
    { label: "Apr", value: 22000 },
    { label: "May", value: 31000 },
    { label: "Jun", value: 48259 },
  ];

  const funnelChartData = [
    { label: "Visitors", value: 10000 },
    { label: "Signups", value: 4500 },
    { label: "Checkouts", value: 1800 },
    { label: "Payments", value: 1280 },
  ];

  const serverLoadData = [
    { label: "Node A (Virginia)", value: 45 },
    { label: "Node B (Frankfurt)", value: 78 },
    { label: "Node C (Singapore)", value: 12 },
    { label: "Node D (Tokyo)", value: 35 },
  ];

  // Filter & Search computation
  const filteredStaff = dashboardStaffList.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || staff.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const staffPerPage = 3;
  const staffTotalPages = Math.ceil(filteredStaff.length / staffPerPage);
  const currentStaffRows = filteredStaff.slice((teamTablePage - 1) * staffPerPage, teamTablePage * staffPerPage);

  const handleLogout = () => {
    toast("Successfully closed session dashboard", { title: "Signed Out" });
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10 top-0 left-0" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none -z-10 bottom-0 right-0" />

      {/* 1. Sidebar Container Layout */}
      <aside
        className={`bg-slate-950/80 border-r border-slate-900/80 backdrop-blur-md flex flex-col flex-shrink-0 transition-all duration-300 relative z-30 h-screen
          ${sidebarCollapsed ? "w-20" : "w-64"}`}
      >
        {/* Sidebar Brand Header */}
        <div className="h-20 flex items-center px-6 border-b border-slate-900/80 gap-3 overflow-hidden whitespace-nowrap">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/10 flex-shrink-0">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          {!sidebarCollapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-sm text-slate-100 tracking-wide">Rovixs SaaS</span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Console Panel</span>
            </div>
          )}
        </div>

        {/* Sidebar Nav Items */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            {!sidebarCollapsed && (
              <span className="text-[9px] uppercase font-bold text-slate-650 tracking-widest pl-3 mb-1">Navigation</span>
            )}
            
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full py-2.5 px-3.5 rounded-xl flex items-center gap-3.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer
                ${
                  activeTab === "analytics"
                    ? "bg-blue-600/10 text-blue-400 border-l-2 border-blue-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
            >
              <TrendingUp className="w-4 h-4" />
              {!sidebarCollapsed && <span>SaaS Analytics</span>}
            </button>

            <button
              onClick={() => setActiveTab("team")}
              className={`w-full py-2.5 px-3.5 rounded-xl flex items-center gap-3.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer
                ${
                  activeTab === "team"
                    ? "bg-blue-600/10 text-blue-400 border-l-2 border-blue-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
            >
              <Activity className="w-4 h-4" />
              {!sidebarCollapsed && <span>Team Workspace</span>}
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full py-2.5 px-3.5 rounded-xl flex items-center gap-3.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer
                ${
                  activeTab === "settings"
                    ? "bg-blue-600/10 text-blue-400 border-l-2 border-blue-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
            >
              <Settings className="w-4 h-4" />
              {!sidebarCollapsed && <span>Productivity Tools</span>}
            </button>
          </div>
        </div>

        {/* Sidebar Footer element */}
        <div className="p-4 border-t border-slate-900 flex-shrink-0">
          <Button
            variant="ghost"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full text-xs font-semibold gap-2 justify-center h-10 border border-slate-900 hover:border-slate-800"
          >
            {sidebarCollapsed ? "→" : "← Collapse"}
          </Button>
        </div>
      </aside>

      {/* 2. Main Page Content Window Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Header Layout */}
        <header className="h-20 border-b border-slate-900/80 bg-slate-950/40 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20 flex-shrink-0">
          
          {/* Header Search Trigger */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 text-xs font-semibold text-slate-500 cursor-pointer transition-all duration-200"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Search console...</span>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] text-slate-550 font-bold uppercase select-none ml-2">
              <Command className="w-2.5 h-2.5" /> + K
            </kbd>
          </button>

          {/* Right Header Navigation Panel */}
          <div className="flex items-center gap-4.5 relative">
            {/* Quick alert notifications trigger */}
            <Button
              variant="ghost"
              size="sm"
              isIconOnly
              className="h-10 w-10 border border-slate-900 rounded-xl relative hover:border-slate-800"
              onClick={() => toast("All microservice nodes are reporting healthy.", { title: "Notifications", type: "success" })}
            >
              <Bell className="w-4 h-4 text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            </Button>

            {/* Profile Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1 px-2.5 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-all duration-200 cursor-pointer"
              >
                <Avatar name="Eistiak Meraj" size="sm" />
                <div className="hidden md:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-200">Eistiak Meraj</span>
                  <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">Owner</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-550 transition-transform duration-200 ${profileDropdownOpen ? "rotate-180 text-blue-450" : ""}`} />
              </button>

              {/* Floating Profile Action Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 top-12.5 z-40 w-56 bg-slate-950/95 border border-slate-850 shadow-2xl rounded-xl p-2.5 flex flex-col gap-1 backdrop-blur-xl animate-slide-down">
                  <div className="px-3 py-2 border-b border-slate-900 flex flex-col text-left gap-0.5">
                    <span className="text-xs font-bold text-slate-200">Eistiak Meraj</span>
                    <span className="text-[10px] text-slate-500 font-semibold">meraj@rovixs.com</span>
                  </div>

                  <button
                    onClick={() => { setProfileDropdownOpen(false); setActiveTab("settings"); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-900 hover:text-slate-100 cursor-pointer transition-colors"
                  >
                    Account Settings
                  </button>

                  <button
                    onClick={() => { setProfileDropdownOpen(false); toast("Copied license token #703", { type: "info" }); }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-900 hover:text-slate-100 cursor-pointer transition-colors"
                  >
                    View Billing Statements
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-red-400 hover:bg-red-950/20 flex items-center justify-between cursor-pointer transition-colors border-t border-slate-900 mt-1.5 pt-2"
                  >
                    <span>Sign Out Session</span>
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Back Sandbox Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/components")}
              className="text-xs border border-slate-900 hover:border-slate-800 rounded-xl"
            >
              Sandbox Sandbox →
            </Button>
          </div>
        </header>

        {/* 3. Dashboard Working Workspace Panels */}
        <main className="flex-1 p-8 md:p-10 flex flex-col gap-10">
          
          {/* A. Dynamic SaaS Metric Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Revenue */}
            <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Monthly Revenue (MRR)</span>
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold text-slate-100">$48,259.00</span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="success" dot pulse>+12.4%</Badge>
                  <span className="text-[9px] text-slate-550 font-bold uppercase">vs last month</span>
                </div>
              </div>
            </div>

            {/* Card 2: Conversion */}
            <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Client Conversion</span>
                <Activity className="w-4 h-4 text-amber-450" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold text-slate-100">3.42%</span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="warning" dot>+0.4%</Badge>
                  <span className="text-[9px] text-slate-550 font-bold uppercase">vs last month</span>
                </div>
              </div>
            </div>

            {/* Card 3: Server Health */}
            <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Cluster Nodes</span>
                <Cpu className="w-4 h-4 text-green-400 animate-pulse" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-extrabold text-slate-100">16 / 16 (Online)</span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="success" dot pulse>All Nodes Healthy</Badge>
                </div>
              </div>
            </div>

            {/* Card 4: Load latency */}
            <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Cluster CPU load</span>
                <Clock className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-extrabold text-slate-100">14.2 ms latency</span>
                <ProgressBar value={45} variant="primary" size="sm" showValue={false} />
              </div>
            </div>

          </section>

          {/* B. Tab Conditional Panes */}
          
          {/* Tab View A: Analytics Charts */}
          {activeTab === "analytics" && (
            <section className="flex flex-col gap-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* 1. Large Area/Line Chart (2/3 width) */}
                <div className="lg:col-span-2 bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-slate-200">Revenue Growth Trend</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">Displays monthly scaling metrics compiled from stripe clearing receipts.</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="glass">6 Months Scale</Badge>
                      <Badge variant="primary" dot pulse>Live Sync</Badge>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-900/60">
                    <AreaChart data={revenueChartData} height={220} />
                  </div>
                </div>

                {/* 2. Pie Chart segments (1/3 width) */}
                <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Server Cluster load</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">CPU load share per geographical active edge node.</p>
                  </div>

                  <div className="pt-4 border-t border-slate-900/60 flex items-center justify-center min-h-[220px]">
                    <PieChart data={serverLoadData} height={200} />
                  </div>
                </div>

              </div>

              {/* Conversion Funnel Bar Chart */}
              <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">User Signup & Purchase Funnel</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tracks user progression stages from initial landing views to payment checkpoints.</p>
                </div>

                <div className="pt-2 border-t border-slate-900/60">
                  <BarChart data={funnelChartData} height={180} />
                </div>
              </div>
            </section>
          )}

          {/* Tab View B: Team Workspace Datatable */}
          {activeTab === "team" && (
            <section className="flex flex-col gap-6 animate-in fade-in duration-300">
              
              {/* Table search filter bar */}
              <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-950/40 border border-slate-900/80 p-4.5 rounded-2xl backdrop-blur-md">
                
                {/* Search */}
                <div className="relative w-full max-w-sm">
                  <input
                    type="text"
                    placeholder="Search staff, roles, emails..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setTeamTablePage(1); }}
                    className="w-full h-10 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50"
                  />
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status:</span>
                  </div>
                  
                  <select
                    value={statusFilter}
                    onChange={(e) => { setStatusFilter(e.target.value); setTeamTablePage(1); }}
                    className="h-10 px-3 bg-slate-950 border border-slate-850 rounded-xl text-xs text-slate-350 focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="active">Active Only</option>
                    <option value="away">Away Only</option>
                    <option value="inactive">Offline Only</option>
                  </select>

                  <div className="flex items-center gap-2 border-l border-slate-900 pl-4">
                    <span className="text-xs text-slate-500 font-semibold">Simulate empty results</span>
                    <Switch checked={isDatabaseEmpty} onChange={(e) => { setIsDatabaseEmpty(e.target.checked); setTeamTablePage(1); }} />
                  </div>
                </div>

              </div>

              {/* Data Table Panel */}
              <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                {isDatabaseEmpty || currentStaffRows.length === 0 ? (
                  <EmptyState
                    icon={<FileText className="w-6 h-6" />}
                    title="No staff members matching filters"
                    description="No profiles match the combined parameters. Reset the simulation toggles or search queries to refresh listings."
                    action={
                      <Button variant="primary" size="sm" onClick={() => { setIsDatabaseEmpty(false); setSearchTerm(""); setStatusFilter("all"); toast("Workspace data reset", { type: "success" }); }}>
                        Reset Directory View
                      </Button>
                    }
                  />
                ) : (
                  <div className="flex flex-col gap-5">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Staff Profile</TableHead>
                          <TableHead>Email Address</TableHead>
                          <TableHead>Job Title</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>System Load</TableHead>
                          <TableHead className="text-right">Allocation Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentStaffRows.map((staff) => (
                          <TableRow key={staff.id}>
                            <TableCell className="font-semibold text-slate-150 flex items-center gap-2.5">
                              <Avatar name={staff.name} size="sm" />
                              {staff.name}
                            </TableCell>
                            <TableCell className="text-slate-400 font-mono">{staff.email}</TableCell>
                            <TableCell className="text-slate-300 font-medium">{staff.role}</TableCell>
                            <TableCell>
                              {staff.status === "Active" && <Badge variant="success" dot pulse>Active</Badge>}
                              {staff.status === "Away" && <Badge variant="warning" dot>Away</Badge>}
                              {staff.status === "Inactive" && <Badge variant="secondary" dot>Offline</Badge>}
                            </TableCell>
                            <TableCell className="w-36">
                              <ProgressBar value={staff.load} variant={staff.load > 80 ? "danger" : staff.load > 50 ? "warning" : "success"} size="sm" />
                            </TableCell>
                            <TableCell className="text-right text-slate-500 font-mono">{staff.joinDate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={5} className="font-bold text-slate-400">Total Filtered Team Members</TableCell>
                          <TableCell className="text-right font-bold text-slate-200">{filteredStaff.length}</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>

                    {/* Pagination */}
                    <div className="flex items-center justify-between border-t border-slate-900 pt-4 flex-wrap gap-4">
                      <span className="text-[10px] text-slate-500">
                        Page <span className="text-slate-300 font-bold">{teamTablePage}</span> of <span className="text-slate-300 font-bold">{staffTotalPages}</span> (Items { (teamTablePage - 1) * staffPerPage + 1 } - { Math.min(teamTablePage * staffPerPage, filteredStaff.length) })
                      </span>
                      <Pagination
                        currentPage={teamTablePage}
                        totalPages={staffTotalPages}
                        onPageChange={(page) => setTeamTablePage(page)}
                      />
                    </div>
                  </div>
                )}
              </div>

            </section>
          )}

          {/* Tab View C: Advanced Productivity Settings */}
          {activeTab === "settings" && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
              
              {/* Left Column: Selector Forms (7 cols wide) */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                
                {/* Selector Options Panel */}
                <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Tag Selector & Date-Picker</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Try multi-select searchable tags and input calendars.</p>
                  </div>

                  <div className="flex flex-col gap-5 border-t border-slate-900/60 pt-5">
                    {/* MultiSelect Options */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Workspace Filter Tags</label>
                      <MultiSelect
                        options={roleOptions}
                        selectedValues={selectedRoles}
                        onSelectedChange={(vals) => setSelectedRoles(vals)}
                        placeholder="Filter by departments..."
                      />
                    </div>

                    {/* DatePicker Options */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Deployment Target Schedule</label>
                      <DatePicker
                        selectedDate={selectedDate}
                        onDateChange={(date) => { setSelectedDate(date); toast(`Date updated to: ${date.toLocaleDateString()}`, { type: "info" }); }}
                      />
                    </div>
                  </div>
                </div>

                {/* Rich text editor preview panel */}
                <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Announcements Composer</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Write release statements with bold alignments and custom codes.</p>
                  </div>

                  <div className="border-t border-slate-900/60 pt-4">
                    <RichTextEditor />
                  </div>
                </div>

              </div>

              {/* Right Column: Calendar grid & Drag files (5 cols wide) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Full Calendar Card Grid */}
                <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-md items-center shadow-lg">
                  <div className="w-full text-left">
                    <h3 className="text-sm font-bold text-slate-200">Interactive Calendar Grid</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Browse months grid, view today markers and selections.</p>
                  </div>

                  <div className="w-full border-t border-slate-900/60 pt-4 flex justify-center">
                    <Calendar
                      selectedDate={selectedDate}
                      onDateChange={(date) => { setSelectedDate(date); toast(`Calendar selected: ${date.toLocaleDateString()}`, { type: "info" }); }}
                      className="border-0 shadow-none bg-transparent w-full"
                    />
                  </div>
                </div>

                {/* Drag Drop File Upload Panel */}
                <div className="bg-slate-950/40 border border-slate-900/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Drag & Drop Asset Upload</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">Simulate client uploads using drag drops and status checkers.</p>
                  </div>

                  <div className="border-t border-slate-900/60 pt-4">
                    <FileUpload
                      onUploadComplete={(file) => toast(`Successfully loaded asset: ${file}`, { type: "success", title: "Asset Uploaded" })}
                    />
                  </div>
                </div>

              </div>

            </section>
          )}

        </main>
      </div>

      {/* 4. Global Command Palette Modal Overlay */}
      <CommandMenu isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
