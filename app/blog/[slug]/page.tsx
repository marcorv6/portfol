import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPostBySlug, BLOG_POSTS } from "@/content/posts";
import { Calendar, Clock, ArrowLeft, Tag, User, Sparkles, CheckCircle2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Marco Romero Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-border">
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

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{post.author.name}</div>
                <div className="text-xs font-mono text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

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
          </div>
        </header>

        {/* Article Body Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed font-sans">
          {post.content.split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();

            if (trimmed.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-3xl font-extrabold tracking-tight pt-4 text-foreground">
                  {trimmed.replace("# ", "")}
                </h1>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold tracking-tight pt-6 border-t border-border/40 text-foreground">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold pt-4 text-foreground">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("```")) {
              const codeLines = trimmed.split("\n").slice(1, -1).join("\n");
              return (
                <pre key={idx} className="p-4 rounded-2xl bg-card border border-border overflow-x-auto text-xs font-mono text-foreground leading-relaxed shadow-sm">
                  <code>{codeLines}</code>
                </pre>
              );
            }
            if (trimmed.startsWith("> [!IMPORTANT]")) {
              const alertText = trimmed.replace("> [!IMPORTANT]\n> ", "").replace("> ", "");
              return (
                <div key={idx} className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm font-mono flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>{alertText}</div>
                </div>
              );
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n- ");
              return (
                <ul key={idx} className="space-y-2 py-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                      <span>{item.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="text-base text-muted-foreground leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </article>
      </main>

      <Footer />
    </div>
  );
}
