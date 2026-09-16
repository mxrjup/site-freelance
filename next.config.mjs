/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Needed because this site has multiple root layouts (app/(fr)/layout.js
    // and app/en/layout.js) with no shared app/layout.js, so there's no
    // single layout to compose a global 404 from — see app/global-not-found.js.
    globalNotFound: true,
  },
};

export default nextConfig;
