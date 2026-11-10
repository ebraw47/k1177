import type { NextConfig } from "next";

/**
 * K1177 - Next.js Configuration
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  turbopack: {},
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "k1177apk.com.pk",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy SK777 → K1177
      { source: "/download-sk777", destination: "/download-k1177", permanent: true },
      { source: "/deposit-money-in-sk777", destination: "/deposit-money-in-k1177", permanent: true },
      { source: "/withdraw-money-from-sk777", destination: "/withdraw-money-from-k1177", permanent: true },
      { source: "/sk777-for-pc", destination: "/k1177-for-pc", permanent: true },
      { source: "/SK777-Game-Icon.png", destination: "/k1177-game-logo-site.webp", permanent: true },
      { source: "/SK777-Game-Icon.webp", destination: "/k1177-game-logo-site.webp", permanent: true },
      { source: "/blog/sk777-app-review-2026", destination: "/blog/k1177-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-sk777-apk-pakistan", destination: "/blog/how-to-download-install-k1177-apk-pakistan", permanent: true },
      { source: "/blog/create-sk777-account-and-login", destination: "/blog/create-k1177-account-and-login", permanent: true },
      { source: "/blog/sk777-deposit-jazzcash-easypaisa-guide", destination: "/blog/k1177-deposit-jazzcash-easypaisa-guide", permanent: true },
      { source: "/blog/sk777-withdraw-money-guide", destination: "/blog/k1177-withdraw-money-guide", permanent: true },
      { source: "/blog/is-sk777-safe-legal-pakistan", destination: "/blog/is-k1177-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-sk777-app-pakistan-guide", destination: "/blog/how-to-use-k1177-app-pakistan-guide", permanent: true },
      { source: "/blog/sk777-bonus-daily-rewards-guide", destination: "/blog/k1177-bonus-daily-rewards-guide", permanent: true },
      { source: "/blog/how-to-play-sk777-on-pc", destination: "/blog/how-to-play-k1177-on-pc", permanent: true },
      { source: "/blog/sk777-customer-service-account-help", destination: "/blog/k1177-customer-service-account-help", permanent: true },
      { source: "/blog/sk777-games-list-pakistan", destination: "/blog/k1177-games-list-pakistan", permanent: true },
      { source: "/blog/sk777-invite-friends-referral-guide", destination: "/blog/k1177-invite-friends-referral-guide", permanent: true },
      { source: "/blog/sk777-minimum-deposit-pakistan", destination: "/blog/k1177-minimum-deposit-pakistan", permanent: true },
      { source: "/blog/sk777-withdrawal-pin-setup", destination: "/blog/k1177-withdrawal-pin-setup", permanent: true },
      { source: "/blog/sk777-app-not-working-fix", destination: "/blog/k1177-app-not-working-fix", permanent: true },
      // Older brand routes → K1177
      { source: "/download-jz666", destination: "/download-k1177", permanent: true },
      { source: "/deposit-money-in-jz666", destination: "/deposit-money-in-k1177", permanent: true },
      { source: "/withdraw-money-from-jz666", destination: "/withdraw-money-from-k1177", permanent: true },
      { source: "/jz666-for-pc", destination: "/k1177-for-pc", permanent: true },
      { source: "/download-pk365", destination: "/download-k1177", permanent: true },
      { source: "/deposit-money-in-pk365", destination: "/deposit-money-in-k1177", permanent: true },
      { source: "/withdraw-money-from-pk365", destination: "/withdraw-money-from-k1177", permanent: true },
      { source: "/pk365-for-pc", destination: "/k1177-for-pc", permanent: true },
      { source: "/download-bn55", destination: "/download-k1177", permanent: true },
      { source: "/deposit-money-in-bn55", destination: "/deposit-money-in-k1177", permanent: true },
      { source: "/withdraw-money-from-bn55", destination: "/withdraw-money-from-k1177", permanent: true },
      { source: "/bn55-for-pc", destination: "/k1177-for-pc", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/.well-known/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
