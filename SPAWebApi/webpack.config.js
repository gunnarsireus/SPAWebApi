var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
    entry: "./Scripts/src/index.tsx",
    output: {
        filename: "./Scripts/dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [
  new WebpackNotifierPlugin(),
  new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
  }),
  new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('production')
      }
  }),
   new webpack.optimize.UglifyJsPlugin({
       compress: { warnings: false }
   })
    ],
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}