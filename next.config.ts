import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/oppgave',
  /* config options here */
  output: 'standalone',
  assetPrefix: process.env.ASSET_PREFIX ?? undefined,
};

export default nextConfig;
