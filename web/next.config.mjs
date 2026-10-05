const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/uk-cafe',
        assetPrefix: '/uk-cafe/',
        images: {
          unoptimized: true
        }
      }
    : {})
};

export default nextConfig;
