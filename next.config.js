/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/page": { page: "/page", fallback: false },
      // other pages
      // ...
    };
  },
};

module.exports = nextConfig;
