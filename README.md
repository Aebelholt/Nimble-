# Nimble: Sejr

One repo, three folders.

- `reference/`: shared source material. `setting/` (City of Arches books), `rules/` (Nimble core, GM Guide, classes), `sources/` (homebrew and generator originals).
- `arcana/`: the Sejr arcana deck. `data/` (cards, guilds, table rules), `tools/` (audit and build scripts, run from `arcana/`), `spec/`, `analysis/` (arcana audits), `CHANGELOG.md`.
- `monster_book/`: the Sejr Monster Book. Generator, `entries/`, `analysis/` (monster audits), `README.md`.
- `rulebook/`: the Sejr rule book (HTML and PDF), built from the data in the other folders.

Run the monster book with `node monster_book/gen_monster_book.js`; run arcana tools with `cd arcana && python3 tools/<script>.py`.
