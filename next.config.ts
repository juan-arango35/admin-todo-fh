import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tailus.io",
        protocol: "https", //
      },
    ],
  },
};

export default nextConfig;
