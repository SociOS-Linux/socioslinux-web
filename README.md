# socioslinux-web

Public web and docs surface for the Socios Linux stack.

This site is intentionally scoped to the Linux stack and its adjacent operator/developer surfaces. It should explain the system clearly without collapsing back into the full umbrella platform narrative.

## Topology position

- **Role:** Linux public web and docs surface.
- **Connects to:**
  - `SociOS-Linux/SourceOS` — immutable OS substrate explained downstream here
  - `SociOS-Linux/agentos-spine` — current Linux-side integration/workspace spine
  - `SourceOS-Linux/sourceos-spec` — canonical typed contracts, JSON-LD contexts, and shared vocabulary that should inform docs semantics
  - `SociOS-Linux/socios` — opt-in automation commons explained as a separate, non-required layer
  - `SocioProphet/sociosphere` — broader platform workspace controller adjacent to the Linux lane
  - `SocioProphet/socioprophet` — umbrella public surface for the broader platform narrative
- **Not this repo:**
  - workspace controller
  - image builder
  - immutable substrate
  - canonical typed-contract registry
- **Semantic direction:** this repo should eventually publish human-facing JSON-LD / site metadata that references the shared SourceOS/SociOS vocabulary from `sourceos-spec` and the canonical repo identities it documents.

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
