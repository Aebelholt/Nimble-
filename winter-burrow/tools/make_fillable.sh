#!/usr/bin/env bash
# Build the fillable character sheet, blank and for each mouse in characters/.
# Usage: tools/make_fillable.sh [outDir]
set -euo pipefail
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
node tools/measure_sheet.js "$tmp/base.pdf" "$tmp/spots.json"
python3 tools/build_fillable.py "$tmp/base.pdf" "$tmp/spots.json" print/character-sheet-fillable.pdf
for f in characters/*.json; do
  name=$(basename "$f" .json)
  python3 tools/build_fillable.py "$tmp/base.pdf" "$tmp/spots.json" "print/character-sheet-$name.pdf" "$f"
done
if [ $# -gt 0 ]; then
  cp print/character-sheet-fillable.pdf "$1"/
  for f in characters/*.json; do cp "print/character-sheet-$(basename "$f" .json).pdf" "$1"/; done
fi
rm -r "$tmp"
