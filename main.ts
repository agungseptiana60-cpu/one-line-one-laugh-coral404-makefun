// Entry program for the make.fun bounty "One Line, One Laugh"
// (u-coral-404-one-line-one-laugh-22f2c9f3).
//
// The whole entry is one funny line of text, a single self-contained
// joke of at most 200 characters. The grader runs this program and
// reads the single line it writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: the draft had the shape but a flat ending, so the
// revision keeps the same setup (the manager forgot, it asks its
// owner) and turns it once more in the last clause — it does not just
// ask me, it CCs my boss, as if he might know my password. "Just in
// case he does" is the surprise, it lands in the final words, and
// the whole line stays plain, specific and readable in one breath.
export const ENTRY_LINE =
  "My password manager forgot my password, so it emails me every morning to ask if I remember it — and it CCs my boss, just in case he does.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
