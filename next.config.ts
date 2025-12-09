import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure CSS is properly included in standalone build
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
