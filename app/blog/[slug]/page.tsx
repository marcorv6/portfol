import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug, BLOG_POSTS } from "@/content/posts";
import { Calendar, Clock, ArrowLeft, Tag, User, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

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
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-blue-600/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl w-full mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-border text-xs font-mono font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-blue-500" />
            <span>Back to Articles</span>
          </Link>

          <span className="text-xs font-mono text-muted-foreground">
            Architecture Blog
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium border border-border">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-border/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 shadow-sm">
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
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-mono font-medium border border-border/60"
                >
                  <Tag className="w-3 h-3 text-blue-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Rich Markdown Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed font-sans">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-extrabold tracking-tight pt-6 pb-2 text-foreground border-b border-border/60 flex items-center gap-2">
                  <span className="w-2 h-6 rounded-full bg-blue-600 inline-block" />
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold tracking-tight pt-8 pb-1 text-foreground border-t border-border/40">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold pt-4 text-foreground text-blue-600 dark:text-blue-400">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base text-muted-foreground leading-relaxed my-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 my-4 pl-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-2 my-4 pl-6 text-muted-foreground">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <div>{children}</div>
                </li>
              ),
              blockquote: ({ children }) => {
                return (
                  <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm font-mono flex items-start gap-3 shadow-sm">
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">{children}</div>
                  </div>
                );
              },
              code: ({ className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || "");
                const isCodeBlock = match || String(children).includes("\n") || className?.includes("ascii");

                if (isCodeBlock) {
                  const languageName = match ? match[1] : (className?.replace("language-", "") || "architecture");

                  return (
                    <div className="my-6 rounded-2xl border border-border bg-card overflow-hidden shadow-md">
                      {/* Code Header Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border text-xs font-mono text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-blue-500" />
                          <span className="uppercase font-semibold tracking-wider">{languageName}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                        </div>
                      </div>

                      {/* Code Content */}
                      <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed bg-slate-950 text-slate-100 dark:bg-slate-950/90">
                        <code>{children}</code>
                      </pre>
                    </div>
                  );
                }

                return (
                  <code
                    className="px-1.5 py-0.5 rounded-md bg-muted text-blue-600 dark:text-blue-300 font-mono text-xs border border-border/60"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              hr: () => <hr className="my-8 border-border" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer Article Navigation */}
        <div className="pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Articles</span>
          </Link>

          <div className="text-xs font-mono text-muted-foreground">
            Written by Marco Romero • Frontend Architect
          </div>
        </div>
      </div>
    </div>
  );
}
