import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We run this app as a Node server inside Docker (next start / standalone).
  // "export" would generate static files and break the reverse_proxy to a server.
  output: "standalone",

  // Force trailing slash consistency to avoid duplicate URLs
  trailingSlash: false,

  // If you don't need Next Image optimization, keep this true (works well for static assets).
  images: {
    unoptimized: true,
  },

  eslint: {
    // Prevent build failures if ESLint isn't installed/configured
    ignoreDuringBuilds: true,
  },

  // Add security and performance headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
