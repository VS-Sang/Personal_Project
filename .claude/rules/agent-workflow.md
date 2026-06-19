# Implementation Notes for Claude/OpenClaude

Before making changes:

1. Read the relevant files first.
2. Check the current project structure and framework before assuming React, Vue, Next.js, or another stack.
3. Follow the existing architecture once the app scaffold exists.
4. If adding a UI feature, compare it against the design references in `design/`.
5. Keep changes scoped to the user's request.

When creating or editing UI:

- Preserve the LedgerFlow visual identity.
- Prefer Tailwind-style semantic utility names if Tailwind is used.
- Use the provided token names where possible.
- Add scroll-triggered animation to every major section.
- Do not replace the design system with unrelated colors or component libraries.
- Keep copy concise and finance-focused.

When reporting completion:

- Mention the files changed.
- Mention any tests or checks run.
- If no test setup exists yet, state that plainly.
