const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./build",
    historyApiFallback: {
      // The following line will prevent 404 errors when the URL contains a dot.
      disableDotRule: true,
    },
    // Fixes error in IE11
    disableHostCheck: true,
  },
});
