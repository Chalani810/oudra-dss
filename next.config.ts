/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // REPLACE 'your-repo-name' with your actual GitHub repository name!
  // It must start with a forward slash.
  basePath: "/oudra-dss",

  // This ensures CSS and JS files load correctly too
  assetPrefix: "/oudra-dss/",

  // Allows Next.js Image component to work with static exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
