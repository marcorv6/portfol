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
  CheckCircle2,
  Lock,
  Mail,
  Zap,
} from "lucide-react"

export function TaskFlowCaseStudy() {
  const [activeTab, setActiveTab] = useState<"architecture" | "database" | "api">("architecture")

  return (
    <article className="space-y-16 max-w-6xl mx-auto">
      {/* 1. HERO SECTION */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Full-Stack Architecture Spotlight
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/marcorv6/todolist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono transition-all hover:bg-slate-800"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>

            <a
              href="https://todo.marco-romero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-lg shadow-blue-600/20"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Article Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            TaskFlow
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-4xl">
            A high-performance full-stack task management platform built with Next.js 16 App Router, serverless PostgreSQL on Neon, JWT authentication, Resend transactional emails, and formally audited REST API specifications.
          </p>
        </div>

        {/* High-Resolution Dashboard Visual */}
        <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-slate-900/60 shadow-2xl group">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/80 border-b border-white/10 text-xs font-mono text-slate-400">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-slate-400 font-sans">https://todo.marco-romero.com</span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/projects/taskflow-dashboard.png"
              alt="TaskFlow Dashboard Interface"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE METRICS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase">Latency Target</span>
          <p className="text-2xl font-extrabold text-white font-mono">&lt; 100ms</p>
          <span className="text-[11px] text-slate-400 block">Neon Pooled Connections</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase">Architecture</span>
          <p className="text-2xl font-extrabold text-white font-mono">SSR Handlers</p>
          <span className="text-[11px] text-slate-400 block">100% Server-Side Execution</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase">Security</span>
          <p className="text-2xl font-extrabold text-emerald-400 font-mono">IDOR Guarded</p>
          <span className="text-[11px] text-slate-400 block">Parameterized Boundary Checks</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1">
          <span className="text-xs font-mono text-slate-400 uppercase">Database</span>
          <p className="text-2xl font-extrabold text-blue-400 font-mono">6 Tables</p>
          <span className="text-[11px] text-slate-400 block">Foreign Key Cascades</span>
        </div>
      </section>

      {/* 3. INTERACTIVE SYSTEM SPECIFICATION VIEWER */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">System Specifications & Case Study</h2>
            <p className="text-sm text-slate-400 font-light">Explore system diagrams, relational database architecture, and REST API standards.</p>
          </div>

          {/* Specification Tabs */}
          <div className="flex p-1 bg-slate-900/80 rounded-xl border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                activeTab === "architecture"
                  ? "bg-blue-600 text-white font-medium shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Architecture
            </button>

            <button
              onClick={() => setActiveTab("database")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                activeTab === "database"
                  ? "bg-blue-600 text-white font-medium shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Database Schema
            </button>

            <button
              onClick={() => setActiveTab("api")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                activeTab === "api"
                  ? "bg-blue-600 text-white font-medium shadow"
                  : "text-slate-400 hover:text-white"
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
            className="space-y-8"
          >
            {/* System Flow Diagram Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Full-Stack Data Flow Diagram</h3>
              </div>

              {/* ASCII / CSS Visual Diagram Flow */}
              <div className="p-6 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs space-y-6 overflow-x-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 w-full md:w-48 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Client UI
                    </div>
                    <span className="text-[11px] text-slate-400 block">Next.js 16 + React 19</span>
                  </div>

                  <span className="text-slate-500 font-bold hidden md:inline">➔ HTTPS / Bearer ➔</span>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-purple-300 w-full md:w-56 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" /> Route Handlers
                    </div>
                    <span className="text-[11px] text-slate-400 block">JWT Validation & Sanitization</span>
                  </div>

                  <span className="text-slate-500 font-bold hidden md:inline">➔ SQL / Resend ➔</span>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-300 w-full md:w-52 space-y-1">
                    <div className="font-bold flex items-center justify-center md:justify-start gap-1.5">
                      <Database className="w-3.5 h-3.5" /> Neon PostgreSQL
                    </div>
                    <span className="text-[11px] text-slate-400 block">Serverless Pooled Database</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-slate-400 space-y-2 leading-relaxed">
                  <p><span className="text-blue-400 font-bold">1. Authentication Flow:</span> User signs in via 1-Click Recruiter Demo or credentials ➔ Server verifies bcrypt hash ➔ Signs JWT token.</p>
                  <p><span className="text-purple-400 font-bold">2. Request Handling:</span> Route Handlers intercept Bearer header, sanitize payload parameters, and check user boundary scopes.</p>
                  <p><span className="text-emerald-400 font-bold">3. Database Execution:</span> Queries execute over SSL pooled connections against Neon PostgreSQL returning JSON response.</p>
                </div>
              </div>

              {/* Architecture Key Features */}
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Lock className="w-4 h-4 text-blue-400" />
                    Zero-Client Secrets
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Database credentials (`DATABASE_URL`) and JWT secrets remain strictly server-side, preventing token leakage.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Transactional Email
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Automated welcome emails dispatched via Resend API over HTTPS upon user registration.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium text-sm">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Recruiter Demo Mode
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Instant 1-Click authentication bypassing registration friction for immediate portfolio evaluation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: DATABASE SCHEMA & SPECIFICATION */}
        {activeTab === "database" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Relational PostgreSQL DDL Schema</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  database/schema.sql
                </span>
              </div>

              {/* Schema Table Summary */}
              <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="text-blue-400 font-bold block">1. users</span>
                  <p className="text-slate-400 text-[11px]">Primary authentication entity storing UUID, email, password_hash (bcrypt), and avatar_url.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="text-blue-400 font-bold block">2. categories</span>
                  <p className="text-slate-400 text-[11px]">User-scoped task categories with custom color tokens and foreign key constraints.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="text-blue-400 font-bold block">3. todos</span>
                  <p className="text-slate-400 text-[11px]">Core tasks entity with priorities (urgent to low), due dates, and compound indexes on (user_id, completed).</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
                  <span className="text-blue-400 font-bold block">4. subtasks</span>
                  <p className="text-slate-400 text-[11px]">Subtask checklists linked to parent todos via ON DELETE CASCADE foreign key relationship.</p>
                </div>
              </div>

              {/* DDL Code Snippet */}
              <div className="p-5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto space-y-2">
                <div className="text-slate-500">// Automated timestamp trigger snippet</div>
                <pre className="text-emerald-400">
{`CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_todos_timestamp 
BEFORE UPDATE ON todos 
FOR EACH ROW EXECUTE FUNCTION update_timestamp();`}
                </pre>
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
            className="space-y-8"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCode className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">OpenAPI v3.0 REST Specification</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  contracts/openapi.yaml
                </span>
              </div>

              {/* Endpoint Table */}
              <div className="rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-950 text-slate-400 border-b border-white/10">
                    <tr>
                      <th className="p-3">HTTP Method</th>
                      <th className="p-3">Endpoint Path</th>
                      <th className="p-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300 bg-slate-900/40">
                    <tr>
                      <td className="p-3 text-green-400 font-bold">POST</td>
                      <td className="p-3 text-white">/api/v1/auth/register</td>
                      <td className="p-3 text-slate-400">User registration & welcome email trigger</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-green-400 font-bold">POST</td>
                      <td className="p-3 text-white">/api/v1/auth/login</td>
                      <td className="p-3 text-slate-400">Authenticate credentials & return JWT token</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-blue-400 font-bold">GET</td>
                      <td className="p-3 text-white">/api/v1/todos</td>
                      <td className="p-3 text-slate-400">Filtered & sorted user tasks retrieval</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-yellow-400 font-bold">PUT / PATCH</td>
                      <td className="p-3 text-white">/api/v1/todos/[id]</td>
                      <td className="p-3 text-slate-400">Update task details & subtask array</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-red-400 font-bold">DELETE</td>
                      <td className="p-3 text-white">/api/v1/todos/[id]</td>
                      <td className="p-3 text-slate-400">Delete task with cascade subtask cleanup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* 4. SINGLE REDIRECTION / SOURCE CODE FOOTER */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-white">Experience TaskFlow Live</h3>
          <p className="text-sm text-slate-400 font-light">Explore the application directly or review the full source code on GitHub.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/marcorv6/todolist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono transition-all"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>

          <a
            href="https://todo.marco-romero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all shadow-lg shadow-blue-600/20"
          >
            <span>Launch Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </article>
  )
}
