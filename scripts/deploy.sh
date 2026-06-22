#!/usr/bin/env bash
# Build + deploy the Socios Linux site to Firebase Hosting.
# Usage: bash scripts/deploy.sh [dev|prod]   (default: prod)
# Mirrors socioprophet/scripts/deploy-prod.sh (firebase CLI, not CI).
set -euo pipefail
ENV="${1:-prod}"
npm run docs:build
firebase deploy --project "$ENV" --only hosting:socios-linux
