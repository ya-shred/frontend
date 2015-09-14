var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {

  contentBase: "./public",
  filename: config.output.filename,
  historyApiFallback: true,
  stats: {
    colors: true
  }


}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
