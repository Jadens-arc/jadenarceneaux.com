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
        // Blog retired — /posts and every post URL now land on projects
        source: '/posts/:slug*',
        destination: '/projects',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
