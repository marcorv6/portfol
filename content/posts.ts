export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "harness-engineering-ai-autonomous-workflows",
    title: "Harness Engineering: Building Autonomous Multi-Agent Workflows for Production Software",
    excerpt: "Why prompt engineering alone fails in non-trivial codebases, and how structured multi-agent harnesses with deterministic verification gates enable production-grade AI pair programming.",
    date: "2026-08-28",
    readTime: "8 min read",
    author: {
      name: "Marco Romero",
      role: "Frontend Architect & AI Systems Developer",
      avatar: "/avatar.jpg",
    },
    tags: ["AI Engineering", "Agentic Workflows", "Software Architecture", "DevOps"],
    content: `
# Harness Engineering: Building Autonomous Multi-Agent Workflows for Production Software

In the rapid evolution of AI-assisted software development, a fundamental shift is taking place. The era of simple single-prompt completions and unstructured conversational LLM chat is giving way to **Harness Engineering**—the practice of surrounding generative models with deterministic scaffolding, specialized agent role definitions, persistent state tracking, and strict verification gates.

Without a structured harness, large language models (LLMs) editing multi-file production codebases inevitably suffer from context degradation, snippet tunnel vision, unverified assumption traps, and breaking syntax regressions.

By introducing a formal **Multi-Agent Development Harness**, software teams can turn unpredictable AI assistants into reliable, autonomous pair-programming partners.

---

## 🏛️ The 5-Agent Harness Architecture

Rather than assigning every task to a single monolithic prompt, Harness Engineering breaks down complex software development into a specialized multi-agent assembly line:

\`\`\`
                      +-------------------+
                      |   ORCHESTRATOR    |
                      | (Planner & Lead)  |
                      +---------+---------+
                                |
        +-----------------------+-----------------------+
        |                       |                       |
        v                       v                       v
+---------------+       +---------------+       +------------------+
|    BUILDER    |       |    TESTER     |       |EDITORIAL REVIEWER|
| (Code & UI)   |       | (QA & Build)  |       | (Writing Quality)|
+-------+-------+       +-------+-------+       +--------+---------+
        |                       |                        |
        +-----------------------+------------------------+
                                |
                                v
                      +-------------------+
                      |    COMMITTER      |
                      | (Verify & Push)   |
                      +-------------------+
\`\`\`

### 1. 🎯 Orchestrator Agent (\`.agent/roles/orchestrator.md\`)
Acts as technical lead and project planner. Receives user directives, inspects dependency trees, outlines clear step-by-step implementation plans (\`implementation_plan.md\`), and tracks task backlogs in \`.agent/feature_list.json\`.

### 2. ⚡ Builder Agent (\`.agent/roles/builder.md\`)
Focuses purely on clean code execution. Implements React components, API routes, database schemas, and state management hooks while strictly adhering to framework purity rules (e.g. React 19 compiler guidelines).

### 3. 🧪 Tester Agent (\`.agent/roles/tester.md\`)
Maintains automated unit testing suites (e.g. Vitest + React Testing Library) and enforces coverage thresholds across statements, lines, functions, and branches.

### 4. ✍️ Editorial Reviewer Agent (\`.agent/roles/editorial_reviewer.md\`)
A specialized content quality auditor that evaluates technical blog posts, documentation, and architecture decision records against a strict 6-point clarity and tone rubric.

### 5. 🚀 Committer Agent (\`.agent/roles/committer.md\`)
The final gatekeeper. Executes automated verification scripts (\`./.agent/init.sh\`), audits git diffs, formats conventional commit messages, and pushes verified code to remote repositories.

---

## 🚦 The Deterministic Verification Gate

A core pillar of Harness Engineering is that **AI agents must NEVER declare success based on code edits alone**. Editing a file is merely a hypothesis; empirical runtime verification is the only proof of correctness.

Every agent harness implements an executable validation gate (\`.agent/init.sh\` / \`npm run verify\`) that enforces three sequential checks:

1. **Unit Test Suite**: Runs Vitest test suites to ensure 100% of assertions pass.
2. **Static Analysis**: Executes ESLint to catch hook dependency gaps, unused imports, or purity violations.
3. **Production Compilation**: Executes Next.js \`next build\` to guarantee TypeScript type safety and zero SSR/hydration mismatches.

> [!IMPORTANT]
> If any step in the verification gate fails, the Committer Agent halts the pipeline immediately and routes the traceback back to the Builder or Tester Agent.

---

## 📊 Real-World Case Study: SpendFlow & TodoList

In our production web applications (**SpendFlow Fintech** and **TodoList App**), implementing the 4-Agent Harness delivered immediate, tangible results:

- **Zero Regression Pushes**: 100% of git commits pushed to \`origin main\` passed full automated test suites (38+ Vitest tests) and production builds.
- **Form State Persistence**: Automated unit tests verified that complex modal dialogs automatically cleared inputs on submit and close.
- **Purity Rule Compliance**: ESLint React Compiler rules eliminated silent re-render bugs across Next.js 16 App Router components.

---

## 💡 Key Takeaways for AI Software Engineers

1. **Scaffold First, Code Second**: Always generate an explicit harness (\`.agent/\` directory, role specs, and navigation maps) before prompting AI agents to modify production codebases.
2. **Separate Planning from Execution**: Use an Orchestrator agent to establish requirements before calling Builder agents to write code.
3. **Automate Quality Verification**: Never rely on manual sanity checks. Make \`npm run verify\` mandatory before git commits.
4. **Audit Editorial Content**: Use specialized Editorial Reviewer agents to enforce prose elegance and technical accuracy for documentation and blog entries.

Harness Engineering transforms AI development from unpredictable magic into repeatable, deterministic software engineering.
`
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
