import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/CodeLeap-FE-prototype',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
