/** @type {import('next').NextConfig} */
const path = require('path');

 
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {hostname:'storage.googleapis.com'},
      {hostname:'cdn.wondertravel.co'}
    ],
    minimumCacheTTL: 1500000,
  },
   compress: true,
};

module.exports = nextConfig