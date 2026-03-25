#!/usr/bin/env bash
set -euo pipefail

OWNER="${1:-socios-linux}"
REPO_NAME="${2:-socioslinux-web}"
TARGET_DIR="${HOME}/dev/${REPO_NAME}"
SOURCE_DIR="$(cd "$(dirname "$0")/.." && pwd)"

mkdir -p "${HOME}/dev"
rm -rf "${TARGET_DIR}"
cp -R "${SOURCE_DIR}" "${TARGET_DIR}"
cd "${TARGET_DIR}"

npm install
npm run docs:build

git init
git add .
git commit -m "Initialize socioslinux-web starter"

gh repo create "${OWNER}/${REPO_NAME}" --public --source=. --remote=origin --push --homepage "https://socioslinux.org"

echo
echo "Created and pushed ${OWNER}/${REPO_NAME}"
echo "Local path: ${TARGET_DIR}"
