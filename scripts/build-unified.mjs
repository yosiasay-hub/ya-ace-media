#!/usr/bin/env node
/**
 * Unified build — produces a single Cloudflare Pages bundle where
 *   /          → Hebrew
 *   /en/*      → English (via Next.js basePath='/en')
 *
 * Run: node scripts/build-unified.mjs
 */
import { spawnSync } from 'node:child_process';
import { existsSync, rmSync, renameSync, mkdirSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const distHe = resolve(root, 'dist-he');
const distEn = resolve(root, 'dist-en');
const dist = resolve(root, 'dist');
const out = resolve(root, 'out');

function runNextBuild(locale) {
  console.log(`\n▶ next build (locale=${locale})`);
  const result = spawnSync('npx', ['next', 'build'], {
    stdio: 'inherit',
    env: { ...process.env, NEXT_PUBLIC_SITE_LOCALE: locale },
    cwd: root,
    shell: process.platform === 'win32'
  });
  if (result.status !== 0) {
    throw new Error(`next build failed for locale=${locale} (status ${result.status})`);
  }
}

function rm(p) {
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}

console.log('▶ Unified build starting...');

// 1. Clean
rm(distHe);
rm(distEn);
rm(dist);
rm(out);

// 2. HE build
runNextBuild('he');
renameSync(out, distHe);

// 3. EN build (basePath='/en', next emits under out/en)
runNextBuild('en');
renameSync(out, distEn);

// 4. Merge
// EN build uses basePath='/en' so its HTML references /en/_next/... — files must be placed under dist/en/.
mkdirSync(dist, { recursive: true });
cpSync(distHe, dist, { recursive: true });
cpSync(distEn, resolve(dist, 'en'), { recursive: true });

// Drop duplicate EN-prefixed sitemap/robots — we use HE ones as canonical
rm(resolve(dist, 'en', 'sitemap.xml'));
rm(resolve(dist, 'en', 'robots.txt'));
rm(resolve(dist, 'en', 'llms.txt'));
rm(resolve(dist, 'en', 'favicon.ico'));

// 5. Merge _redirects
const heRedirects = resolve(distHe, '_redirects');
const enRedirects = resolve(distEn, '_redirects');
const finalRedirects = resolve(dist, '_redirects');
let merged = '';
if (existsSync(heRedirects)) merged += readFileSync(heRedirects, 'utf8') + '\n';
if (existsSync(enRedirects)) {
  const en = readFileSync(enRedirects, 'utf8');
  if (!merged.includes(en)) merged += en + '\n';
}
merged += '\n# EN subdomain legacy → canonical /en/ redirect\nhttps://en.ya-ace-media.co.il/*  https://ya-ace-media.co.il/en/:splat  301!\n';
writeFileSync(finalRedirects, merged.trim() + '\n');

// Cleanup
rm(distHe);
rm(distEn);

console.log('\n✅ Unified build complete → dist/');
console.log('   /           → HE');
console.log('   /en/*       → EN');
