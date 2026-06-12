import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-west-1.amazonaws.com",
        pathname: "/jadenarceneaux.com/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/link-in-bio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/tesla/callback",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store, max-age=0",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
