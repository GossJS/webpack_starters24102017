export default {
  "entry": "./index.js",
  "output": {
    "publicPath": "/dist",
    "filename": "bundle.js"
  },
  "devtool": "sourcemap",
  "module": {
    "rules": [{
      "loader": "babel-loader"
    }]
  },
  "devServer": {"port": 1234}
};
