// One Letter for Your Day — a single-letter diary entry.
// The judge reads one bare letter and picks the entry whose hidden word
// feels most vivid, funny or true. "Q" stands for a quirky, quitting kind of day.
// The entry is exactly one character and nothing else: no word, no gloss, no punctuation.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one character: a trailing newline would make the 1-character gate fail.
writeFileSync(`${outDir}/entry.txt`, "Q", "utf8");
