import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    domains: ['avatars.githubusercontent.com'], 
    remotePatterns: [
      {
        hostname: "tailus.io",
        protocol: "https", //
      },
    ],
  },
};

export default nextConfig;
