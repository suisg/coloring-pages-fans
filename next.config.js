/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 静态导出配置
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 