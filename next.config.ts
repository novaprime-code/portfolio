import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '',
  // assetPrefix: '',
  output: 'export',
  trailingSlash: true,
  //base path only if not local development
  basePath: process.env.NODE_ENV !== 'development' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV !== 'development' ? '/portfolio/' : '',
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
