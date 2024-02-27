/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'www.adidas.co.id',
         }
      ]
   }
}

module.exports = nextConfig
