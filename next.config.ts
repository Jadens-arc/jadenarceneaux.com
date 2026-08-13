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
      {
        // Blog retired — /posts and every post URL now land on the portfolio
        source: '/posts/:slug*',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
