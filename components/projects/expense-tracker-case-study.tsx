"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Target,
  PieChart,
  Server,
  FileCode,
  Wallet,
  Cpu,
  FileSpreadsheet,
  Smartphone,
  CheckCircle2,
} from "lucide-react"

export function ExpenseTrackerCaseStudy() {
  const [activeTab, setActiveTab] = useState<"architecture" | "database" | "api">("architecture")

  return (
    <article className="w-full max-w-6xl mx-auto space-y-12 py-8">
      {/* 1. HERO HEADER SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/marcorv6/expense-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>

            <a
              href="https://expense.marco-romero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-md shadow-blue-600/20"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Article Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            SpendFlow Platform
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
            A high-performance full-stack personal finance and expense management platform built with Next.js 16 App Router, serverless PostgreSQL on Neon (verify-full SSL), CSV bank statement data import wizard, category budget caps, and audited REST API specifications.
          </p>
        </div>

        {/* Browser Mock Preview Container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl border border-border overflow-hidden bg-card shadow-xl group">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/80 border-b border-border text-[11px] font-mono text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-muted-foreground font-sans font-medium">https://expense.marco-romero.com</span>
            </div>

            <div className="p-8 bg-gradient-to-br from-card via-card to-blue-950/20 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Monthly Income</span>
                  <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400 font-mono">+$7,950.00</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Monthly Expenses</span>
                  <p className="text-lg font-bold text-rose-700 dark:text-rose-400 font-mono">-$2,968.80</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between text-xs font-mono shadow-sm">
                <span className="text-foreground flex items-center gap-2 font-medium">
                  <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Budget Progress (Food & Groceries)
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">23% Used ($184.50 / $800)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE METRICS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Target Latency</span>
          <p className="text-xl font-extrabold text-foreground font-mono">&lt; 90ms</p>
          <span className="text-[10px] text-muted-foreground block">Neon Serverless Pool</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Data Import Wizard</span>
          <p className="text-xl font-extrabold text-blue-700 dark:text-blue-400 font-mono">CSV + JSON</p>
          <span className="text-[10px] text-muted-foreground block">Statement Parser</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Security</span>
          <p className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">verify-full SSL</p>
          <span className="text-[10px] text-muted-foreground block">Encrypted Database Pool</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Lighthouse Score</span>
          <p className="text-xl font-extrabold text-purple-700 dark:text-purple-400 font-mono">100/100 A11y</p>
          <span className="text-[10px] text-muted-foreground block">Mobile FAB & Zero Shifts</span>
        </div>
      </section>

      {/* NEW FEATURE HIGHLIGHTS PANEL */}
      <section className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
        <h3 className="text-xs font-mono uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Latest Release Updates (v1.4.0)</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              CSV & JSON Import Wizard
            </span>
            <p className="text-muted-foreground text-[11px]">Massive statement parser for bank CSV exports & automated JSON backup restoration.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              PostgreSQL verify-full SSL
            </span>
            <p className="text-muted-foreground text-[11px]">Strict SSL certificate verification for Neon database pooling drivers.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Mobile Floating Action Button
            </span>
            <p className="text-muted-foreground text-[11px]">Fixed mobile FAB for instant expense logging & zero lateral overflow on small viewports.</p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SYSTEM SPECIFICATION VIEWER */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">System Specifications & Architecture</h2>
            <p className="text-xs text-muted-foreground font-normal">Explore financial system diagrams, relational PostgreSQL database design, and OpenAPI specs.</p>
          </div>

          {/* Specification Tabs */}
          <div className="flex p-1 bg-muted rounded-xl border border-border font-mono text-xs shadow-sm">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all font-bold ${
                activeTab === "architecture"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Architecture
            </button>

            <button
              onClick={() => setActiveTab("database")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all font-bold ${
                activeTab === "database"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Database
            </button>

            <button
              onClick={() => setActiveTab("api")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all font-bold ${
                activeTab === "api"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              API Specs
            </button>
          </div>
        </div>

        {/* TAB 1: SYSTEM ARCHITECTURE */}
        {activeTab === "architecture" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-foreground">Full-Stack Data Flow & Cashflow Engine</h3>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-border font-mono text-xs space-y-6 overflow-x-auto text-slate-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 w-full md:w-48 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Client Dashboard
                    </div>
                    <span className="text-[11px] text-slate-400 block">Next.js 16 + React 19</span>
                  </div>

                  <span className="text-slate-400 font-bold hidden md:inline">➔ REST API / Bearer ➔</span>

                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 w-full md:w-56 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Route Handlers
                    </div>
                    <span className="text-[11px] text-slate-400 block">JWT Auth & Input Sanitizer</span>
                  </div>

                  <span className="text-slate-400 font-bold hidden md:inline">➔ SQL / Mock ➔</span>

                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 w-full md:w-52 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Database className="w-3.5 h-3.5" /> Neon PostgreSQL
                    </div>
                    <span className="text-[11px] text-slate-400 block">Pooled Database Client</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-slate-300 space-y-2 leading-relaxed">
                  <p><span className="text-blue-400 font-bold">1. Financial Metrics:</span> Server aggregates income vs expense totals and calculates savings rate % dynamically.</p>
                  <p><span className="text-purple-400 font-bold">2. Budget Engine:</span> Real-time budget progress tracking triggers alert indicators when spending caps exceed 80% or 100%.</p>
                  <p><span className="text-emerald-400 font-bold">3. Hybrid Persistence:</span> Operates seamlessly with Neon serverless Postgres DB or in-browser localStorage mock mode.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <Wallet className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                    Transaction Register
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Paginated filtering by category, type, cleared status, search query, and date ranges.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <PieChart className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
                    Custom SVG Charts
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Lightweight zero-dependency SVG charts for monthly cashflow trends and category breakdowns.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <Zap className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    1-Click Recruiter Demo
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Instant demo guest mode pre-loaded with sample financial data for evaluation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: DATABASE SCHEMA */}
        {activeTab === "database" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <h3 className="text-lg font-bold text-foreground">Relational PostgreSQL DDL Schema</h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                  database/schema.sql
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">1. users</span>
                  <p className="text-muted-foreground text-[11px]">Primary auth table storing UUID, email, password_hash, and currency preference.</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">2. categories</span>
                  <p className="text-muted-foreground text-[11px]">Income & expense categories with monthly_budget cap, color codes, and icons.</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">3. transactions</span>
                  <p className="text-muted-foreground text-[11px]">Financial transaction records with amount NUMERIC(12,2), status, and category foreign keys.</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">4. tags & transaction_tags</span>
                  <p className="text-muted-foreground text-[11px]">Relational junction tables supporting multi-tag categorization (#tax, #vacation).</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: API SPECS */}
        {activeTab === "api" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCode className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <h3 className="text-lg font-bold text-foreground">OpenAPI 3.0 REST Specification</h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400">
                  contracts/openapi.yaml
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-border font-mono text-xs space-y-3 text-slate-100">
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="font-bold text-emerald-400">POST /api/v1/auth/login</span>
                  <span className="text-slate-400 text-[11px]">Bearer Auth / Demo Mode</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="font-bold text-blue-400">GET /api/v1/transactions</span>
                  <span className="text-slate-400 text-[11px]">Filtered & Paginated Transactions</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="font-bold text-emerald-400">POST /api/v1/transactions</span>
                  <span className="text-slate-400 text-[11px]">Log New Income / Expense</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-800">
                  <span className="font-bold text-blue-400">GET /api/v1/stats</span>
                  <span className="text-slate-400 text-[11px]">Financial Analytics & Trends</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-bold text-blue-400">GET /api/v1/export</span>
                  <span className="text-slate-400 text-[11px]">Export CSV & JSON Reports</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </article>
  )
}
