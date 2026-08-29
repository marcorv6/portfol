"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ExternalLink,
  Github,
  Sparkles,
  Database,
  ShieldCheck,
  Server,
  FileCode,
  Layers,
  Cpu,
  Lock,
  Mail,
  Zap,
  ArrowLeft,
  Search,
  UserCheck,
  CheckCircle2,
} from "lucide-react"

export function TaskFlowCaseStudy() {
  const [activeTab, setActiveTab] = useState<"architecture" | "database" | "api">("architecture")

  return (
    <article className="space-y-12 max-w-5xl mx-auto py-8">
      {/* Navigation Back Link */}
      <div>
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects Overview</span>
        </Link>
      </div>

      {/* 1. HERO SECTION */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Full-Stack Architecture Case Study</span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/marcorv6/todolist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            <a
              href="https://todo.marco-romero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-md shadow-blue-600/20"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Article Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            TaskFlow Platform
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
            A high-performance full-stack task management platform built with Next.js 16 App Router, serverless PostgreSQL on Neon (verify-full SSL), persistent user avatar sessions, Vitest component test harness, and ⌘K quick search shortcuts.
          </p>
        </div>

        {/* Compact Crisp Preview Image Container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl border border-border overflow-hidden bg-card shadow-xl group">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/80 border-b border-border text-[11px] font-mono text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-muted-foreground font-sans font-medium">https://todo.marco-romero.com</span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
              <Image
                src="/projects/taskflow-dashboard.png"
                alt="TaskFlow Dashboard Interface"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE METRICS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Latency Target</span>
          <p className="text-xl font-extrabold text-foreground font-mono">&lt; 100ms</p>
          <span className="text-[10px] text-muted-foreground block">Neon Pooled Queries</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Test Suite</span>
          <p className="text-xl font-extrabold text-blue-700 dark:text-blue-400 font-mono">Vitest Integration</p>
          <span className="text-[10px] text-muted-foreground block">Component Assertions</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">Security</span>
          <p className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">verify-full SSL</p>
          <span className="text-[10px] text-muted-foreground block">IDOR & Node-PG Guarded</span>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border space-y-1 shadow-sm">
          <span className="text-[11px] font-mono text-muted-foreground uppercase font-bold">UI Shortcuts</span>
          <p className="text-xl font-extrabold text-purple-700 dark:text-purple-400 font-mono">⌘K Search</p>
          <span className="text-[10px] text-muted-foreground block">Quick Task Navigation</span>
        </div>
      </section>

      {/* NEW FEATURE HIGHLIGHTS PANEL */}
      <section className="p-6 rounded-2xl bg-card border border-border space-y-4 shadow-sm">
        <h3 className="text-xs font-mono uppercase font-bold text-muted-foreground tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Latest Release Updates (v1.3.0)</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Persistent Avatar Sessions
            </span>
            <p className="text-muted-foreground text-[11px]">User avatarUrl persistence across logins, reloads, and OAuth session tokens.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              ⌘K Quick Search Modal
            </span>
            <p className="text-muted-foreground text-[11px]">Instant command palette for filtering, jumping between task lists, and searching.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-muted border border-border space-y-1">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Vitest Test Harness & verify-full SSL
            </span>
            <p className="text-muted-foreground text-[11px]">Integrated Vitest unit test suite and strict PostgreSQL verify-full connection pool.</p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SYSTEM SPECIFICATION VIEWER */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">System Specifications & Architecture</h2>
            <p className="text-xs text-muted-foreground font-normal">Explore system diagrams, relational database architecture, and REST API standards.</p>
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

        {/* TAB 1: SYSTEM ARCHITECTURE & DIAGRAM */}
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
                <h3 className="text-lg font-bold text-foreground">Full-Stack System Data Flow</h3>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-border font-mono text-xs space-y-6 overflow-x-auto text-slate-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 w-full md:w-48 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Client UI
                    </div>
                    <span className="text-[11px] text-slate-400 block">Next.js 16 + React 19</span>
                  </div>

                  <span className="text-slate-400 font-bold hidden md:inline">➔ HTTPS / Bearer ➔</span>

                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 w-full md:w-56 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Route Handlers
                    </div>
                    <span className="text-[11px] text-slate-400 block">JWT Validation & Sanitization</span>
                  </div>

                  <span className="text-slate-400 font-bold hidden md:inline">➔ SQL / Resend ➔</span>

                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 w-full md:w-52 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Database className="w-3.5 h-3.5" /> Neon PostgreSQL
                    </div>
                    <span className="text-[11px] text-slate-400 block">Serverless Database</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-slate-300 space-y-2 leading-relaxed">
                  <p><span className="text-blue-400 font-bold">1. Auth Flow:</span> User signs in via 1-Click Recruiter Demo ➔ Server verifies bcrypt ➔ Signs JWT token.</p>
                  <p><span className="text-purple-400 font-bold">2. Security:</span> Server-side Route Handlers intercept Bearer header and check user boundary scopes.</p>
                  <p><span className="text-emerald-400 font-bold">3. Database:</span> Queries execute over SSL pooled connections against Neon PostgreSQL.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <Lock className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
                    Zero-Client Secrets
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Database credentials (`DATABASE_URL`) and JWT secrets remain strictly server-side.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <Mail className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
                    Transactional Email
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Automated welcome emails dispatched via Resend API upon registration.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/60 border border-border space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                    <Zap className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    Recruiter Demo Mode
                  </div>
                  <p className="text-[11px] text-muted-foreground font-normal leading-relaxed">
                    Instant 1-Click authentication for immediate portfolio evaluation.
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
                  <p className="text-muted-foreground text-[11px]">Primary auth entity storing UUID, email, password_hash (bcrypt), and avatar_url.</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">2. categories</span>
                  <p className="text-muted-foreground text-[11px]">User-scoped task categories with custom color tokens and foreign key constraints.</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">3. todos</span>
                  <p className="text-muted-foreground text-[11px]">Core tasks entity with priorities, due dates, and compound indexes on (user_id, completed).</p>
                </div>

                <div className="p-4 rounded-xl bg-muted border border-border space-y-1">
                  <span className="text-blue-700 dark:text-blue-400 font-bold block">4. subtasks</span>
                  <p className="text-muted-foreground text-[11px]">Subtask checklists linked to parent todos via ON DELETE CASCADE foreign key relationship.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: REST API CONTRACT SPECIFICATION */}
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
                  <h3 className="text-lg font-bold text-foreground">OpenAPI v3.0 REST Specification</h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400">
                  contracts/openapi.yaml
                </span>
              </div>

              <div className="rounded-xl border border-border overflow-hidden font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-muted text-foreground border-b border-border">
                    <tr>
                      <th className="p-3 font-bold">Method</th>
                      <th className="p-3 font-bold">Endpoint Path</th>
                      <th className="p-3 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-foreground bg-card">
                    <tr>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">POST</td>
                      <td className="p-3 text-foreground font-bold">/api/v1/auth/register</td>
                      <td className="p-3 text-muted-foreground">User registration & welcome email trigger</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">POST</td>
                      <td className="p-3 text-foreground font-bold">/api/v1/auth/login</td>
                      <td className="p-3 text-muted-foreground">Authenticate credentials & return JWT token</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-blue-700 dark:text-blue-400 font-bold">GET</td>
                      <td className="p-3 text-foreground font-bold">/api/v1/todos</td>
                      <td className="p-3 text-muted-foreground">Filtered & sorted user tasks retrieval</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-amber-700 dark:text-amber-400 font-bold">PATCH</td>
                      <td className="p-3 text-foreground font-bold">/api/v1/todos/[id]</td>
                      <td className="p-3 text-muted-foreground">Update task details & subtask array</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-rose-700 dark:text-rose-400 font-bold">DELETE</td>
                      <td className="p-3 text-foreground font-bold">/api/v1/todos/[id]</td>
                      <td className="p-3 text-muted-foreground">Delete task with cascade subtask cleanup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* 4. FOOTER REDIRECTION */}
      <section className="p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-foreground">Experience TaskFlow Live</h3>
          <p className="text-xs text-muted-foreground font-normal">Explore the application directly or review the full source code on GitHub.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/marcorv6/todolist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground text-xs font-mono font-medium transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </a>

          <a
            href="https://todo.marco-romero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-md shadow-blue-600/20"
          >
            <span>Launch Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </article>
  )
}
