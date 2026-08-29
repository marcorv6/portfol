export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
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
    slug: "harness-engineering-agentic-patterns-top-tech",
    title: "Harness Engineering: Lessons, Tips & Tricks from Anthropic, OpenAI, Cursor, and Cognition",
    excerpt: "How top AI engineering teams build deterministic harnesses around LLMs. Insights on evals-driven agent loops, AST context windowing, sandboxed verification gates, and human-in-the-loop checkpoints.",
    date: "2026-08-28",
    readTime: "9 min read",
    featured: true,
    author: {
      name: "Marco Romero",
      role: "Frontend Architect & AI Systems Developer",
      avatar: "/avatar.jpg",
    },
    tags: ["AI Engineering", "Agentic Workflows", "Anthropic", "OpenAI", "DevOps"],
    content: `
In the rapid evolution of AI-assisted software development, a fundamental industry consensus has emerged among top tech sector leaders like **Anthropic**, **OpenAI**, **Cursor**, **Cognition (Devin)**, and **Google DeepMind**: *unstructured chat prompts do not scale to production software*.

To build reliable autonomous coding agents, leading teams do not rely on bigger prompt windows alone. Instead, they invest heavily in **Harness Engineering**—surrounding generative models with deterministic execution sandboxes, AST-aware file navigation, specialized multi-agent role division, and strict verification gates.

Below is an in-depth synthesis of the core principles, tips, and tricks used by top companies in the AI sector to build production-grade agentic workflows.

---

## 🏛️ 1. Beyond Single Prompts: The Rise of Harness Engineering

When raw LLMs edit multi-file repositories without a harness, they frequently encounter four classic failure modes:
1. **Context Degradation**: Flooding context windows with irrelevant files leads to snippet tunnel vision.
2. **Hallucinated Dependencies**: Calling non-existent APIs or mutating private state without verifying exports.
3. **Silent Regressions**: Editing a component that compiles locally but breaks adjacent routes or unit tests.
4. **Premature Completion**: Declaring a task "fixed" based purely on text output without running tests.

Harness Engineering solves these issues by shifting the AI's environment from a passive text box into a structured execution loop governed by automated rules and multi-agent specialization.

---

## 💡 2. Architectural Tips & Tricks from Top AI Companies

### 🎯 Tip 1: Role Specialization & Multi-Agent Division (Google DeepMind & Anthropic)
Rather than prompting a single LLM to act as architect, coder, tester, and release manager simultaneously, industry leaders break down complex workflows into specialized agent roles:

\`\`\`ascii
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

- **Orchestrator**: Inspects requirements, drafts detailed implementation plans, and maintains active task backlogs.
- **Builder**: Focuses strictly on feature code, UI styling, and API integration.
- **Tester**: Authors Vitest/PyTest suites and enforces code coverage targets.
- **Editorial Reviewer**: Audits technical accuracy, tone, clarity, and formatting of blog entries and documentation.
- **Committer**: Runs automated verification pipeline gates before committing or pushing code.

---

### 🔍 Tip 2: AST File Navigation & Scoped Context Windowing (Cursor & Cognition)
Top AI developer tools like Cursor and Devin avoid dumping raw files into context. Instead:
- **AST Symbol Indexing**: Parse TypeScript/Python files into Abstract Syntax Trees to identify exact type exports and function signatures.
- **Scoped Viewports**: Limit file reading to precise line ranges (e.g. \`L40-L100\`) rather than loading 5,000-line files.
- **Tool-Based Grep & Find**: Equip agents with targeted search tools (\`grep_search\`, \`find_by_name\`) to discover files dynamically.

---

### 🚦 Tip 3: Deterministic Verification Gates (Anthropic & Thoughtworks)
Anthropic's research on agent evaluation emphasizes that **agents must never trust their own unverified edits**.

Top teams enforce a mandatory verification pipeline script (\`./.agent/init.sh\` or \`npm run verify\`) that runs three automated quality checks:
1. **Unit & Integration Tests**: Runs test runners (\`vitest\`, \`pytest\`) to verify 100% of assertions pass.
2. **Static Analysis & Linting**: Runs ESLint to enforce hook purity rules (e.g. React 19 \`set-state-in-effect\` rules) and type safety.
3. **Production Compilation**: Executes production build bundlers (\`next build\`, \`tsc\`) to catch SSR and type mismatches.

> [!IMPORTANT]
> If any step in the verification gate fails, the Committer Agent halts the release pipeline immediately and feeds the exact error traceback back into the debugging loop.

---

### ✍️ Tip 4: Editorial Reviewers for Content Quality
In content-rich applications, top publishing platforms use specialized **Editorial Reviewer Agents** to grade articles against a strict 6-point rubric:
- Technical accuracy and depth
- Narrative structure and executive summary flow
- Tone elegance and clarity
- Code snippet correctness
- Visual alert formatting (\`> [!NOTE]\`, \`> [!TIP]\`)
- SEO metadata and reading time validation

---

## 📋 3. Harness Engineering Implementation Checklist

To scaffold an enterprise-grade agent harness in any project:
- [x] Create a root \`AGENT.md\` instruction manual mapping team workflows.
- [x] Scaffold \`.agent/roles/\` containing explicit role descriptions (\`orchestrator.md\`, \`builder.md\`, \`tester.md\`, \`editorial_reviewer.md\`, \`committer.md\`).
- [x] Implement executable verification gates (\`./.agent/init.sh\` / \`npm run verify\`).
- [x] Maintain persistent backlog tracking in \`.agent/feature_list.json\` and \`.agent/progress/current.md\`.
- [x] Create repository navigation maps (\`.agent/navigation.md\`) to guide file discovery.

Harness Engineering transforms non-deterministic generative models into reliable, high-output software engineering teams.
`
  },
  {
    slug: "evals-driven-ai-development-best-practices",
    title: "Evals-Driven AI Development: How Top Tech Companies Benchmark & Safeguard Autonomous Agents",
    excerpt: "A practical guide to building evaluation harnesses, synthetic benchmark suites, and automated verification loops for production AI agents based on patterns from leading sector teams.",
    date: "2026-08-28",
    readTime: "7 min read",
    featured: false,
    author: {
      name: "Marco Romero",
      role: "Frontend Architect & AI Systems Developer",
      avatar: "/avatar.jpg",
    },
    tags: ["Evals", "AI Quality Assurance", "Testing", "Next.js"],
    content: `
As AI coding agents become core contributors to production codebases, traditional software testing is undergoing a transformation. While unit tests verify code logic, **Evals-Driven Development (EDD)** evaluates the performance, accuracy, and reliability of the AI agent itself.

Leading AI organizations—including **OpenAI**, **Anthropic**, **Thoughtworks**, and **Martin Fowler's engineering network**—increasingly treat evaluation suites ("Evals") as mandatory infrastructure for AI software development.

Below is an overview of how top tech companies build evaluation harnesses to benchmark agentic workflows.

---

## 📊 1. The 3 Tiers of AI Agent Evals

\`\`\`ascii
+-------------------------------------------------------+
| TIER 3: LLM-as-a-Judge & Editorial Reviewer Audits     |
+-------------------------------------------------------+
| TIER 2: Behavioral Unit & Integration Evals (Vitest)  |
+-------------------------------------------------------+
| TIER 1: Deterministic Static Analysis & Build Gates   |
+-------------------------------------------------------+
\`\`\`

### 🔹 Tier 1: Deterministic Static Analysis & Compiler Gates
The baseline tier ensures generated code compiles and adheres to syntax rules.
- **TypeScript Compilation**: Ensures zero type errors or missing prop signatures.
- **ESLint & Purity Rules**: Verifies React 19 compiler compliance and catches unused variables.

### 🔹 Tier 2: Behavioral Unit & Integration Evals
Verifies that functional contracts remain intact after AI modifications.
- **Automated Test Runners**: Executes Vitest or PyTest suites.
- **Regression Assertion Suites**: Checks state persistence, form clearing, and API payload contracts.

### 🔹 Tier 3: LLM-as-a-Judge & Editorial Reviewers
Evaluates subjective quality, prose elegance, and architectural alignment.
- **Editorial Reviewers**: Audits technical articles and documentation for tone, structure, and accuracy.
- **Security Scanners**: Scans code diffs for secrets exposure or vulnerability risks.

---

## 💡 2. Best Practices for Implementing Evals in Your Workflow

1. **Isolate Agent Executions**: Run AI agents in isolated git branches or worktrees to prevent unverified code from contaminating main development branches.
2. **Never Auto-Commit Without Verification**: Enforce \`npm run verify\` (\`test:coverage\` + \`lint\` + \`build\`) prior to any git commit.
3. **Log Iteration Artifacts**: Persist task progress in \`.agent/progress/current.md\` and backlog items in \`.agent/feature_list.json\` so agents can resume work seamlessly.

By embedding evaluation harnesses into your continuous integration pipeline, engineering teams can safely harness autonomous AI agents at scale.
`
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
