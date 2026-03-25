# socioslinux-web

Public web and docs surface for the Socios Linux stack.

This site is intentionally scoped to the Linux stack and its adjacent operator/developer surfaces. It should explain the system clearly without collapsing back into the full umbrella platform narrative.

## Positioning

Socios Linux is a fully agentic Linux stack built from the ground up.

It is:
- immutable at the host core
- customizable in user space
- local-first by default
- secure by design
- agentic by architecture
- explicit about the separation between user space and agent space

## Current domain model

- `socioslinux.org` — canonical public home for the Linux stack
- `socioslinux.com` — product/marketing alias
- `socios.dev` — developer-facing lane

## Local usage

```bash
npm install && npm run docs:dev
```

## Build

```bash
npm run docs:build
```

## Firebase hosting

This repo includes a starter `firebase.json` that deploys `docs/.vitepress/dist` directly as the hosted site.

## Near-term page set

- Home
- Architecture
- SourceOS
- Agent Plane
- Commons
- Organizations
- Governments
- FAQ
- Connected Stack
