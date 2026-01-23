import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We run this app as a Node server inside Docker (next start / standalone).
  // "export" would generate static files and break the reverse_proxy to a server.
  output: "standalone",

  // If you don't need Next Image optimization, keep this true (works well for static assets).
  images: {
    unoptimized: true,
  },

  eslint: {
    // Prevent build failures if ESLint isn't installed/configured
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
