const webpack = require("webpack");

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
