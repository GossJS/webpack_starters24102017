import HtmlWebpackPlugin from 'html-webpack-plugin';
const WDS_PORT = 1234;
const myTitle = 'Demo Webpack !!! 25-10-2017';

export default {
  "entry": "./index.js",
  "output": {
    "publicPath": "/",
    "filename": "./dist/bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
      "rules": [{
 	    "test": /\.js$/,
      "loader": "babel-loader"
    }]
  },
  "plugins": [new HtmlWebpackPlugin({
    "title": myTitle,
    "template": "./my-index.ejs",
    "h2": myTitle
  })],
  "devServer": {
    "port": WDS_PORT
  }

};
// this file: webpack.config.babel.js fork from https://kodaktor.ru/j/min_react_webpack
