/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  output: 'export',     // make Next produce a static export
  trailingSlash: true   // export routes as /path/index.html (better for GitHub Pages)
}

module.exports = nextConfig
