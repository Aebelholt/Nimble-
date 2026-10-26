# Sejr rule book

`python3 rulebook/build_rulebook.py` writes `sejr_rulebook.html` and prints `sejr_rulebook.pdf` (A4, 49 pages) with Chromium through Playwright.

Every table is read from the repo, so a change to the generator lists, the deck, the guilds or the monster book shows up on the next build:

- `arcana/data/sejr_generator_lists.txt`: episode, room, NPC, rival crew, chargen and forge tables
- `arcana/data/sejr_arcana.json`: the deck, in full (cut cards left out)
- `arcana/data/sejr_guilds.json` and `arcana/data/sejr_table_rules.md`
- `monster_book/entries` and `monster_book/member_meta.js`: the Stage index in *Who's out there*

Rules that live only in `reference/setting/sejr_campaign_overview.md` (the session loop, patrons, trackers, Bia, the key-making front) are written into the builder as prose. Edit them there.

The look follows the Winter Burrow sheets: IM Fell English for headings, Alegreya Sans for text (both SIL Open Font License, in `fonts/`), warm ink on paper colour. Print margins come out white from Chromium, so the builder lays each page on a full sheet of paper colour.

Book defaults where the campaign hasn't decided: Neglect clocks have six steps; gifts and traits are invoked once per hero per episode; rolling ancestry is d6 (1-5 common, 6 rare), which is not the generator's exact weighting.
