import type { NextConfig } from 'next';

const isPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'electricity-cost-compare';
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : '',
  assetPrefix: isPages ? `/${repo}/` : '',
};

export default nextConfig;
