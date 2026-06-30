# Decisions

Append-only log of IA / product-surface decisions. Newest first.

## 2026-06-28 — IA v0.1 documented

- **Decided:** the site IA, messaging, and routing are now documented under `docs/ia/` rather than living only in `.vitepress/config.ts`.
- **Why:** contributors were reverse-engineering the IA; IA plan §8/§10 calls for these as non-throwaway work.

## 2026-06-28 — Three planes labeled explicitly on the homepage

- **Decided:** the first three homepage feature cards are labeled **Host plane / User plane / Agent plane**.
- **Why:** success criterion #1 — a newcomer must explain Host/User/Agent within 30 seconds.

## Standing decisions (from build state)

- **Static site generator:** VitePress 1.6.4. Supersedes the IA plan's `web/app` + `brand/` tree — flat `docs/` + `.vitepress/` is idiomatic and the nested `web/app` layout is NOT adopted.
- **Hosting:** Firebase Hosting (`firebase.json`, `.firebaserc`).
- **Repo scope:** Linux-stack site + docs only. No umbrella marketing.

## Open / pending

- **Canonical domain:** `socioslinux.org` (IA plan) vs `sourceos.org` (deploy config). UNRESOLVED — see [routing-v0.1](../ia/routing-v0.1.md).
