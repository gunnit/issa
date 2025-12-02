/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/issa' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/issa/' : '',
  trailingSlash: true,
};

export default nextConfig;
