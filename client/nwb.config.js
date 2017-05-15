const webpack = require('webpack');
module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      modules: __dirname + '/node_modules',
      jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
      },
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ]
    }
  }
}
