const webpack = require("webpack");
const path = require("path");

module.exports = () => {
  return {
    entry: {
      index: ["./index.js"]
    },
    output: {
      path: path.join(process.cwd(), 'dist-side-effect'),
    },
    mode: "production",
    optimization: {
      minimize: false,
      namedModules: true,
      namedChunks: true,
      sideEffects: false,
    },
  };
};
