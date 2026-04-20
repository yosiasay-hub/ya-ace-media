import createNextIntlPlugin from 'next-intl/plugin';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const emptyPolyfill = resolve(__dirname, 'scripts/empty-polyfill.js');
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion']
  },
  images: {
    unoptimized: true
  },
  // Strip Next.js's modern-bundle polyfills (Array.prototype.at, Object.fromEntries, etc.)
  // — our browserslist targets ES2022+ browsers that already support all of these.
  // The nomodule polyfills file still ships for legacy browsers via the noModule script tag.
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Replace the polyfill-module file at resolve time with our empty stub.
      // We use NormalModuleReplacementPlugin because resolve.alias doesn't catch
      // the relative require inside next/dist/client/app-globals.js.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]next[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module(\.js)?$/,
          emptyPolyfill
        )
      );
    }
    return config;
  }
};

export default withNextIntl(nextConfig);
