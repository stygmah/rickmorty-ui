/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  compiler: {
    styledComponents: true
  },
  serverRuntimeConfig: {
    secret: 'supersecretstring_2023'
},
}

module.exports = nextConfig
