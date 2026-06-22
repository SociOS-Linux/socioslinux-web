# SourceOS / Socios Linux — deploy runbook

Target ship date: **2026-06-25**. This covers the public website, the image
builder app, and the customization/lifecycle backend. DNS is entered at Namecheap.

## Surfaces → host → domain

| Surface | Repo / path | Host | Domain (proposed) | Status |
|---|---|---|---|---|
| **Socios Linux site** (download + ecosystem) | `socios-linux/socioslinux-web` → `docs/.vitepress/dist` | GitHub Pages *(or Firebase)* | **sourceos.org**, www | builds ✅ — needs Pages enabled + DNS |
| **Image builder app** | `socioprophet/socioprophet` → `socioprophet-web/app-vue/dist` | Firebase Hosting target `app` (site `socioprophet-builder`) | **app.sourceos.org** | builds ✅ — needs site created + `firebase-config.js` + DNS |
| **Builder API** (customization/lifecycle) | `socioprophet-web/server` (Express) | Cloud Run `builder-api` (us-central1) | (behind `/api` on the app) | code ✅ — needs deploy + `SOURCEOS_GH_TOKEN` + SA IAM |
| **Asahi installer** | `scripts/get-sourceos.sh` | static text host | **get.sourceos.org** | script ✅ — needs a 1-file host (or redirect to raw) |
| **Marketing / umbrella** | `socioprophet/marketing` | Firebase `marketing` | **socioprophet.com** | already live |

## DNS records to enter at Namecheap

### sourceos.org → the public site (GitHub Pages — fastest, stable IPs)
Apex `@` — four A records (GitHub Pages):
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
`www` — CNAME to the Pages host:
```
CNAME  www   socios-linux.github.io.
```
Then in the repo: Settings → Pages → Source = GitHub Actions (the `pages.yml`
workflow deploys `docs/.vitepress/dist`), and set the custom domain to
`sourceos.org` (writes a CNAME file). HTTPS is automatic.

### app.sourceos.org → the builder (Firebase Hosting)
Firebase console → Hosting → site `socioprophet-builder` → **Add custom domain
`app.sourceos.org`** → Firebase shows the exact **A** (or **TXT** verification)
records to paste into Namecheap. (Firebase's IPs are shown per-domain at setup —
don't hardcode them.)

### get.sourceos.org → the Asahi installer one-liner
Serve `scripts/get-sourceos.sh` as `text/plain` so `curl https://get.sourceos.org | sh`
works. Simplest: a dedicated Firebase Hosting site (or Cloudflare Worker) that
returns the script; point its custom domain per the host's instructions. Interim:
the installer already falls back to the raw GitHub URL.

## Deploy steps

### 1. Public site (Pages)
- Repo Settings → Pages → Source: GitHub Actions; custom domain `sourceos.org`.
- Push to `main` → `pages.yml` builds + deploys. Enter the A/CNAME records above.

### 2. Builder app (Firebase)
- `cd socioprophet-web/app-vue && cp public/firebase-config.js …` → fill the
  **prod** Firebase web config (apiKey/authDomain/projectId/appId).
- Create Firebase Hosting sites `socioprophet-builder` (+ `-dev`).
- `npm run build` then `firebase deploy --only hosting:app -P prod`.

### 3. Builder API (Cloud Run)
- Containerize `socioprophet-web/server` (Express) → deploy as Cloud Run service
  `builder-api` in `us-central1` (the `/api/**` rewrite in `firebase.json` targets it).
- Set env: `SOURCEOS_GH_TOKEN` (workflow scope, free-tier dispatch),
  `SOURCEOS_GCP_PROJECT`, `SOURCEOS_GCS_BUCKET`.
- Grant the runtime SA: `roles/compute.instanceAdmin` (paid GCP build lane),
  GCS read on the artifacts bucket, and `iam.serviceAccountTokenCreator` /
  `signBlob` (nlboot signed URLs).

## Pre-push checklist
- [ ] `socioslinux-web`: `npm run docs:build` green (✅), Pages enabled, DNS entered
- [ ] `app-vue`: `npm run build` green (✅), `firebase-config.js` filled, site created, DNS
- [ ] backend: Cloud Run deployed, `SOURCEOS_GH_TOKEN` + SA IAM set
- [ ] `release-images.yml` has produced a public ISO (cut `v26.11`) so the download links resolve
- [ ] PRs merged: socioprophet#395 (spec conformance), sourceos-spec#127
- [ ] `get.sourceos.org` serves the installer script (or document the raw URL)
