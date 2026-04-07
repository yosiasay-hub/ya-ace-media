#!/usr/bin/env node
/**
 * build-locale.mjs
 *
 * Builds the Next.js static export for a specific locale and renames the
 * output directory so both HE and EN bundles can coexist.
 *
 * Usage:
 *   node scripts/build-locale.mjs he   →  out-he/
 *   node scripts/build-locale.mjs en   →  out-en/
 *
 * Cross-platform (Windows + Linux for CI). No external deps.
 */

import { spawnSync } from 'node:child_process';
import { rmSync, existsSync, renameSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const locale = process.argv[2];
if (!['he', 'en'].includes(locale)) {
  console.error('Usage: node scripts/build-locale.mjs <he|en>');
  process.exit(1);
}

const outDir = resolve(projectRoot, 'out');
const targetDir = resolve(projectRoot, `out-${locale}`);

// Clean any leftover directories so a stale build can't sneak in
for (const dir of [outDir, targetDir]) {
  if (existsSync(dir)) {
    console.log(`[build-locale] removing ${dir}`);
    rmSync(dir, { recursive: true, force: true });
  }
}

console.log(`[build-locale] building locale=${locale}...`);
const result = spawnSync('npx', ['next', 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NEXT_PUBLIC_SITE_LOCALE: locale,
    NEXT_PUBLIC_SITE_URL_HE: 'https://ya-ace-media.co.il',
    NEXT_PUBLIC_SITE_URL_EN: 'https://en.ya-ace-media.co.il'
  }
});

if (result.status !== 0) {
  console.error(`[build-locale] next build failed (exit ${result.status})`);
  process.exit(result.status ?? 1);
}

if (!existsSync(outDir)) {
  console.error(`[build-locale] expected ${outDir} to exist after build`);
  process.exit(1);
}

console.log(`[build-locale] renaming out → out-${locale}`);
renameSync(outDir, targetDir);
console.log(`[build-locale] done. bundle ready at out-${locale}/`);
