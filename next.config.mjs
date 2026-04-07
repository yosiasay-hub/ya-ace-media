import createNextIntlPlugin from 'next-intl/plugin';

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
  }
};

export default withNextIntl(nextConfig);
