const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sass = require('@zeit/next-sass');
const path = require('path');

const nextConfig = {
  webpack: (config) => {

    // here for absolute import path
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
}

module.exports = withPlugins([
  sass,
  images,
], nextConfig);
