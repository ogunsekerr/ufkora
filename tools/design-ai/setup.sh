#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT"
UI_VERSION=2.15.0
TWENTY_VERSION=1.18.0
MOTION_VERSION=14.2.0
check() {
  local missing=0
  for bin in git node npm npx python3; do
    if command -v "$bin" >/dev/null 2>&1; then
      printf '%s: ' "$bin"
      "$bin" --version
    else
      printf 'Eksik: %s\n' "$bin"
      missing=1
    fi
  done
  if command -v node >/dev/null 2>&1; then
    node -e 'if(Number(process.versions.node.split(".")[0])<20){console.error("Node 20 veya üstü gerekli; güncel LTS önerilir.");process.exit(1)}' || missing=1
  fi
  return "$missing"
}
case "${1:-check}" in
  check) check ;;
  ui)
    check
    npx --yes "ui-ux-pro-max-cli@$UI_VERSION" init --ai universal
    ;;
  21st)
    check
    printf 'Kurucuda proje kapsamını ve Codex seçeneğini kullanın. Sunulmuyorsa durun.\n'
    npx --yes "@21st-dev/cli@$TWENTY_VERSION" install-skill
    ;;
  login)
    check
    npx --yes "@21st-dev/cli@$TWENTY_VERSION" login
    ;;
  motion)
    check
    printf 'Kurucuda Project ve Codex seçin; yalnız ücretsiz motion MCP kullanılacak.\n'
    npx --yes "motion-ai@$MOTION_VERSION"
    ;;
  *) printf 'Kullanım: bash tools/design-ai/setup.sh [check|ui|21st|login|motion]\n' >&2; exit 2 ;;
esac
