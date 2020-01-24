const webpack = require("webpack");
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = () => {
  return {
    entry: {
      index: ["./index.js"]
    },
    mode: "production",
    optimization: {
      minimize: false,
      namedModules: true,
      namedChunks: true,
    },
  };
};
