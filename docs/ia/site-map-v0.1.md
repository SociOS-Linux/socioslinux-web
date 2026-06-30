# Site Map — v0.1

Canonical inventory of the Socios Linux web surface. This documents the IA **as built**, so newcomers and contributors do not have to reverse-engineer it from `.vitepress/config.ts`.

## Route tree

| Route | Page | Purpose | Status |
|-------|------|---------|--------|
| `/` | `index.md` | Hero + three-plane strip + reading paths | Live |
| `/architecture` | `architecture.md` | Three-plane model, trust boundaries, why OSTree/immutability | Live |
| `/sourceos` | `sourceos.md` | Immutable host story, customization model, atomic update/rollback | Live |
| `/agent-plane` | `agent-plane.md` | Agent isolation, capability gating, local execution posture | Live |
| `/commons` | `commons.md` | Community / mesh / commons lane; relationship to Socios | Live (expand) |
| `/organizations` | `organizations.md` | Fleet / managed deployment entry; policy & compliance posture | Live (expand) |
| `/governments` | `governments.md` | Sovereign / public-sector deployment framing | Live (expand) |
| `/download` | `download.md` | Installers, images, docs, release channels | Live |
| `/ecosystem` | `ecosystem.md` | Product pillars / wider stack map | Live |
| `/connected-stack` | `connected-stack.md` | Quiet relationship to the umbrella stack | Live |
| `/faq` | `faq.md` | Q&A | Live (expand) |

## Planned (not yet built)

| Route | Purpose | Tracked in |
|-------|---------|-----------|
| `/security-model` | Single source of truth: what agents can do and how to audit it | [open-questions](../backlog/open-questions.md) |
| `/user-workspace` | How to use/customize the user plane | [open-questions](../backlog/open-questions.md) |
| `/docs/getting-started` | First-run orientation / quick start | [open-questions](../backlog/open-questions.md) |

## Surface separation (umbrella ↔ Linux)

Per IA plan §4, the umbrella site (`socioprophet.com`) owns the four-target selector — **Commons / Organizations / Governments / Linux Stack** — and routes "Linux Stack" here. This site owns only the Linux-stack surface and quiet cross-links back. See [routing-v0.1](routing-v0.1.md).
