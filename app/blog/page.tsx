"use client"

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/content/posts";
import { Calendar, Clock, ArrowRight, Tag, Sparkles, Search, SlidersHorizontal, BookOpen, Layers } from "lucide-react";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)));

  // Filter posts based on search query and selected tag
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== (selectedTag || searchQuery ? "" : featuredPost?.slug));

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-radial from-blue-600/10 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto space-y-12">
        {/* Header Hero Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENGINEERING & ARCHITECTURE INSIGHTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
              Software Architecture & AI Systems
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Deep dives into Harness Engineering, autonomous agentic loops, Next.js architecture, and developer tooling.
            </p>
          </div>

          {/* Search & Stats Bar */}
          <div className="w-full md:w-80 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, tags, topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-mono"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} published
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-500" />
                {allTags.length} topics
              </span>
            </div>
          </div>
        </div>

        {/* Category & Topic Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
              selectedTag === null
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            All Articles
          </button>
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(isSelected ? null : tag)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Tag className="w-3 h-3 text-blue-400" />
                <span>{tag}</span>
              </button>
            );
          })}
        </div>

        {/* FEATURED SPOTLIGHT ARTICLE */}
        {!selectedTag && !searchQuery && featuredPost && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>FEATURED SPOTLIGHT</span>
            </div>

            <article className="group relative rounded-3xl border border-blue-500/30 bg-gradient-to-br from-card via-card to-blue-950/20 p-6 sm:p-10 transition-colors duration-300 hover:border-blue-500/50 shadow-lg overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white font-bold shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground group-hover:text-blue-500 transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Tags & Read Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-card border border-border text-muted-foreground text-xs font-mono font-medium"
                      >
                        <Tag className="w-3 h-3 text-blue-500" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold shadow-lg shadow-blue-500/25 transition-all group-hover:translate-x-1"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* ARTICLES GRID SECTION */}
        <div className="space-y-6">
          {(selectedTag || searchQuery) && (
            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-500" />
              <span>Showing results for {selectedTag ? `tag: "${selectedTag}"` : `search: "${searchQuery}"`}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card/90 hover:bg-card p-6 sm:p-8 transition-colors duration-300 shadow-sm hover:border-primary/40"
              >
                <div className="space-y-4">
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

                  <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-[11px] font-mono font-medium"
                      >
                        <Tag className="w-3 h-3 text-blue-500" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center space-y-4 rounded-3xl border border-dashed border-border bg-card/40">
              <p className="text-base text-muted-foreground font-mono">No articles found matching your query.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-mono font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
