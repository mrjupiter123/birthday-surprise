import type { NextConfig } from "next";

const repo = "birthday-surprise";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

export default config;
