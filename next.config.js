const withPlugins = require('next-compose-plugins')
const images = require('next-images')
const sass = require('@zeit/next-sass')
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {

    // here for full compilation with scss
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    // here for absolute import path
    config.resolve.modules.push(path.resolve('./'))

    return config;
  },
}

module.exports = withPlugins([
  sass,
  images,
], nextConfig)
