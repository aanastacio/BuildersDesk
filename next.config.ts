import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    // Prevent build failures if ESLint isn't installed/configured
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
