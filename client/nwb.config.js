module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      // Example of adding an extra loader which isn't managed by nwb,
      // assuming you've installed html-loader in your project.
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
          modules: __dirname + '/node_modules'
        }
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
      // Example of adding an extra plugin which isn't managed by nwb
      plugins: [

      ]
    }
  }
}
