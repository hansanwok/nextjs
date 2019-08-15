const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images');
const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    // here for absolute import path
    config.resolve.modules.push(path.resolve('./'))

    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 100000
    //     }
    //   }
    // })

    return config;
  },
}

module.exports = withPlugins([
  sass,
  optimizedImages
], nextConfig)
