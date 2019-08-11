const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/App.ts",
  // entry: "./src/components/main.ts",
  output: {
    filename: "./bundle.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "inline-source-map",
  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' }
    ]),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 8087
  },
  // Omit "externals" if you don't have any. Just an example because it's
  // common to have them.
  externals: {
    // Don't bundle giant dependencies, instead assume they're available in
    // the html doc as global variables node module name -> JS global
    // through which it is available
    //"pixi.js": "PIXI"
  }
};