const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  let modifiedConfig = getConfig()

  modifiedConfig = merge(modifiedConfig, {
    entry: {
      frame: path.resolve("./src/frame.js"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Component Preview",
        chunks: ["frame"],
        filename: "frame.html",
      }),
    ],
  })

  actions.replaceWebpackConfig(modifiedConfig)
}
