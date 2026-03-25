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
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/link-in-bio',
        destination: '/',
        permanent: true, // 308 redirect (use false for 307 temporary)
      },
    ]
  },
}

export default nextConfig;
