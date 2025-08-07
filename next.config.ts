import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '',
  // assetPrefix: '',
  output: 'export',
  trailingSlash: true,
  basePath: '/novaprime-code',
  assetPrefix: '/novaprime-code/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
