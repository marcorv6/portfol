# Portfolio & Blog Multi-Agent Development Harness

Welcome to **Marco Romero's Portfolio & Engineering Blog** repository. This document serves as the master operating manual and coordination harness for AI agents collaborating on the project.

---

## 🏗️ 5-Agent Team Architecture

Our development and publishing workflow is divided into five explicit, specialized agent roles:

```
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
```

---

### 1. 🎯 Orchestrator Agent (`.agent/roles/orchestrator.md`)
- **Primary Responsibility**: Project planning, architectural governance, content roadmap, and task delegation.
- **Key Artifacts**: `.agent/feature_list.json`, `.agent/progress/current.md`.

### 2. ⚡ Builder Agent (`.agent/roles/builder.md`)
- **Primary Responsibility**: Full-stack Next.js component creation, Tailwind CSS glassmorphic styling, animation hooks (`framer-motion`), and route handlers.
- **Key Directories**: `app/`, `components/`, `content/`, `lib/`.

### 3. 🧪 Tester Agent (`.agent/roles/tester.md`)
- **Primary Responsibility**: Component rendering integrity, route response checks, link verification, and build validation.

### 4. ✍️ Editorial Reviewer Agent (`.agent/roles/editorial_reviewer.md`)
- **Primary Responsibility**: **Blog Writing Quality & Prose Auditing**.
- **Specialized Directives**:
  - Reviews every blog entry under `content/` before publication.
  - Audits technical accuracy, clarity, narrative flow, structural organization, grammar, and readability.
  - Verifies code snippets, callouts, diagram representations, and key takeaways for readers.

### 5. 🚀 Committer Agent (`.agent/roles/committer.md`)
- **Primary Responsibility**: Master verification gate execution (`npm run verify`), git diff auditing, conventional commit formatting, and remote repository pushes.

---

## 🛠️ Verification & Pipeline Commands

```bash
# Run ESLint check
npm run lint

# Run Next.js production build
npm run build

# Master Verification Gate (MANDATORY BEFORE PUSH)
npm run verify
```
