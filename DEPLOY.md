# SourceOS / Socios Linux — deploy runbook

Target ship date: **2026-06-25**. This covers the public website, the image
builder app, and the customization/lifecycle backend. DNS is entered at Namecheap.

## Surfaces → host → domain

| Surface | Repo / path | Host | Domain (proposed) | Status |
|---|---|---|---|---|
| **Socios Linux site** (download + ecosystem) | `socios-linux/socioslinux-web` → `docs/.vitepress/dist` | Firebase Hosting (site `socios-linux`) | **sourceos.org**, www | builds ✅ — needs site created + custom domain + DNS |
| **Image builder app** | `socioprophet/socioprophet` → `socioprophet-web/app-vue/dist` | Firebase Hosting target `app` (site `socioprophet-builder`) | **app.sourceos.org** | builds ✅ — needs site created + `firebase-config.js` + DNS |
| **Builder API** (customization/lifecycle) | `socioprophet-web/server` (Express) | Cloud Run `builder-api` (us-central1) | (behind `/api` on the app) | code ✅ — needs deploy + `SOURCEOS_GH_TOKEN` + SA IAM |
| **Asahi installer** | `scripts/get-sourceos.sh` | static text host | **get.sourceos.org** | script ✅ — needs a 1-file host (or redirect to raw) |
| **Marketing / umbrella** | `socioprophet/marketing` | Firebase `marketing` | **socioprophet.com** | already live |

## DNS records to enter at Namecheap

### sourceos.org → the public site (Firebase Hosting)
This repo deploys to the Firebase Hosting site `socios-linux` (under the
`socioprophet-web` project — adjust in `.firebaserc` if it should be its own
project). Custom-domain DNS comes from the Firebase console:

1. `firebase hosting:sites:create socios-linux --project prod` (once).
2. `npm run deploy` (= `firebase deploy --project prod --only hosting:socios-linux`).
3. Firebase console → Hosting → site `socios-linux` → **Add custom domain
   `sourceos.org`** (and `www.sourceos.org`). Firebase shows the exact records:
   - typically an **A** record (Firebase serving IP, shown per-domain) for `@`,
   - and a **TXT** record for ownership verification.
   Paste those exact values into Namecheap. HTTPS is auto-provisioned.

> Do NOT use GitHub Pages A-records (185.199.x) — this is Firebase, not Pages.

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

### 1. Public site (Firebase)
- `firebase hosting:sites:create socios-linux --project prod` (once).
- `npm run deploy` (build + `firebase deploy --only hosting:socios-linux`).
- Add the custom domain `sourceos.org` in the Firebase console; enter the A/TXT
  records it shows into Namecheap.

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
- [ ] `socioslinux-web`: `npm run docs:build` green (✅), Firebase site `socios-linux` created, `npm run deploy`, custom domain + DNS entered
- [ ] `app-vue`: `npm run build` green (✅), `firebase-config.js` filled, site created, DNS
- [ ] backend: Cloud Run deployed, `SOURCEOS_GH_TOKEN` + SA IAM set
- [ ] `release-images.yml` has produced a public ISO (cut `v26.11`) so the download links resolve
- [ ] PRs merged: socioprophet#395 (spec conformance), sourceos-spec#127
- [ ] `get.sourceos.org` serves the installer script (or document the raw URL)
