import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/content/posts";
import { Calendar, Clock, ArrowRight, Tag, Sparkles } from "lucide-react";

export const metadata = {
  title: "Engineering Blog | Marco Romero",
  description: "Insights, architecture patterns, and Harness Engineering workflows by Marco Romero.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Hero Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING & ARCHITECTURE BLOG</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Insights on AI Systems & Software Architecture
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deep-dives into Harness Engineering, multi-agent workflows, full-stack Next.js patterns, and production-grade developer tooling.
          </p>
        </div>

        {/* Featured Post Card */}
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl border border-border bg-card/80 hover:bg-card p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Tags & Author Info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-mono font-medium"
                  >
                    <Tag className="w-3 h-3 text-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}
