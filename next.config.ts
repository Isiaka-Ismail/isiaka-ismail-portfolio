import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // No basePath needed for IsiakaOladayo.github.io
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
