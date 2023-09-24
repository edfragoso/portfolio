/** @type {import('next').NextConfig} */
const nextConfig = {
    ssr: {
        styleSheets: {
          async: true,
        },
      },
}

module.exports = nextConfig
