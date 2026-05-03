/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
};

export default nextConfig;
