module.exports = {
    entry: './src/index.js',
    watch: true,
    output: {
      filename: './public/javascripts/bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015' ]
        }
      }, {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      }]
    }
  };
  