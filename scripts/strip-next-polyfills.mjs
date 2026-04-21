// Neutralize Next.js's polyfill-module.js in node_modules.
// Our browserslist targets ES2022+ browsers that already support
// Array.prototype.at/flat/flatMap, Object.fromEntries/hasOwn,
// String.prototype.trimStart/trimEnd, and Symbol.prototype.description.
// Turbopack inlines polyfill-module's contents into the main client chunk,
// and neither webpack NormalModuleReplacementPlugin nor turbopack.resolveAlias
// caught it in Next 16.0.11 — so we patch the source file directly.
// Legacy browsers still receive polyfill-nomodule.js via the <script nomodule> tag.

import { writeFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = resolve(
  __dirname,
  '..',
  'node_modules',
  'next',
  'dist',
  'build',
  'polyfills',
  'polyfill-module.js'
);

if (!existsSync(target)) {
  // Not installed yet, or path changed — silently succeed.
  process.exit(0);
}

const size = statSync(target).size;
if (size <= 20) {
  // Already stripped.
  process.exit(0);
}

writeFileSync(target, 'export {};\n');
console.log(`[strip-next-polyfills] Neutralized ${target} (${size} -> 11 bytes)`);
