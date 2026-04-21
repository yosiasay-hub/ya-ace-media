import createNextIntlPlugin from 'next-intl/plugin';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const emptyPolyfill = resolve(__dirname, 'scripts/empty-polyfill.js');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Unified deploy: HE at root (/), EN under /en/* — one Cloudflare Pages project.
// Build HE with no basePath, EN with basePath='/en'. Merge outputs in scripts/build-unified.mjs.
const isEnglishBuild = process.env.NEXT_PUBLIC_SITE_LOCALE === 'en';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  ...(isEnglishBuild ? { basePath: '/en', assetPrefix: '/en' } : {}),
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion'],
    // Inline critical CSS via Critters/Beasties → removes render-blocking stylesheet link.
    optimizeCss: true,
    // Inline <link rel="stylesheet"> into <style> tag in <head>, eliminating the
    // HTML → CSS → Font dependency chain that was costing ~617ms LCP.
    inlineCss: true
  },
  // Turbopack (Next 16 default) — alias Next's polyfill-module to an empty stub.
  // Our browserslist targets ES2022+ browsers that already support all of these
  // (Array.prototype.at/flat/flatMap, Object.fromEntries/hasOwn, String trimStart/trimEnd).
  turbopack: {
    root: __dirname,
    resolveAlias: {
      'next/dist/build/polyfills/polyfill-module': emptyPolyfill,
      'next/dist/build/polyfills/polyfill-module.js': emptyPolyfill
    }
  },
  images: {
    unoptimized: true
  },
  // Strip Next.js's modern-bundle polyfills (Array.prototype.at, Object.fromEntries, etc.)
  // — our browserslist targets ES2022+ browsers that already support all of these.
  // The nomodule polyfills file still ships for legacy browsers via the noModule script tag.
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Neutralize ALL of Next.js's polyfills (polyfill-module and anything else
      // under the polyfills/ directory) for client bundles. Our browserslist targets
      // ES2022+ browsers that already support Array.prototype.at/flat/flatMap,
      // Object.fromEntries/hasOwn, String.prototype.trimStart/trimEnd, etc.
      // The legacy polyfill-nomodule script still ships via the noModule tag for
      // browsers that actually need it.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]next[\\/]dist[\\/]build[\\/]polyfills[\\/](polyfill-module|polyfill-nomodule|object-assign|process)(\.js)?$/,
          emptyPolyfill
        )
      );
      // Also replace any bare request for "next/dist/build/polyfills/polyfill-module".
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /^next[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
          emptyPolyfill
        )
      );
    }
    return config;
  }
};

export default withNextIntl(nextConfig);
