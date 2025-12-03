/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/blank-project",
  assetPrefix: "/blank-project/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pazilamarket.ir",
        pathname: "/wp-content/uploads/**"
      }
    ]
  }
};

export default nextConfig;