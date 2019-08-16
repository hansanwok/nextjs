const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const progressBar = require('next-progressbar')
const path = require('path')

const nextConfig = {
  webpack: (config) => {
    // here for absolute import path
    config.resolve.modules.push(path.resolve('./'))

    return config
  },
}

module.exports = withPlugins([
  sass,
  progressBar,
  optimizedImages
], nextConfig)
