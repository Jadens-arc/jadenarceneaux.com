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
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
