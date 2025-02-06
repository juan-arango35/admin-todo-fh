import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    domains: ['avatars.githubusercontent.com'], 
    remotePatterns: [
      {
        hostname: "tailus.io",
        protocol: "https", //
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https", //
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https", //
      },
    ],
  },
};



export default nextConfig;
