// Nusantara in Numbers — hand-in program (Node 22, standard library only).
//
// The site itself is the static file tree in app/: plain HTML, CSS and ES
// modules with no build step and no network access. This program delivers
// it: it copies app/ and screenshots/ into the output directory and writes
// dossier.json with buildDossier from the vendored make.fun library, which
// must stay byte-identical to the kit's copy because the scorer rebuilds the
// dossier with its own copy and compares the two.
//
// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Create the output directory itself; never remove it (it may be a mount).
mkdirSync(outDir, { recursive: true });

cpSync(join(repoDir, 'app'), join(outDir, 'app'), { recursive: true });

const shotsDir = join(repoDir, 'screenshots');
if (existsSync(shotsDir)) {
  cpSync(shotsDir, join(outDir, 'screenshots'), { recursive: true });
}

// Caps mirror the gate: at most 4 screenshots of 256 KiB each, app/ within
// 993 entries and 16 MiB, dossier text capped at 160 KiB.
const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
});
writeFileSync(join(outDir, 'dossier.json'), dossier);
