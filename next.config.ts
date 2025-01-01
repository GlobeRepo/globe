import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode
  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = false;  // Disable source maps for client-side bundles
    }
    return config;
  },
};

export default nextConfig;
