# Routing & Domains — v0.1

## Domain roles (IA plan §3)

| Domain | Role |
|--------|------|
| `socioprophet.com` | Umbrella selector + institutional narrative. Owns the four-target selector. |
| `socioslinux.org` | Canonical public open-source home for the Linux stack. |
| `socioslinux.com` | Product/marketing alias / campaign surface / redirect. |
| `socios.dev` | Developer entry: docs, SDKs, integration notes, agentplane hooks. |

## ⚠️ Open decision — canonical domain drift

The IA plan names **`socioslinux.org`** as canonical. The current deploy config (`.firebaserc` → hosting target `socios-linux` under project `socioprophet-web`, `DEPLOY.md`) points at **`sourceos.org`**. These disagree.

**Decision needed:** is canonical `socioslinux.org` or `sourceos.org`? Until resolved, treat the deployed domain as authoritative and update this table + `DEPLOY.md` once decided. Tracked in [decisions](../backlog/decisions.md).

## Cross-link rules

**On this (Linux) site — quiet cross-links only:**
- "Part of the broader stack"
- "Explore governance and orchestration"
- "See commons and institutional surfaces"

Do not force visitors through umbrella taxonomy on first contact (IA plan §2, §9).

**On the umbrella site — explicit routing:**
- "Linux Stack" → this site.
- Commons / Organizations / Governments → umbrella-native selectors.

## Repo boundary

`socioslinux-web` contains **only** the Linux-stack site and docs. It must not absorb umbrella-selector logic, unrelated SocioProphet marketing, or generic institutional copy (IA plan §8).

## URL normalization (deferred — IA plan §11)

`firebase.json` uses `cleanUrls: true` + `trailingSlash: true`. Reduce churn from generated clean-URL mirrors by moving URL normalization into hosting config rather than committed mirror files.
