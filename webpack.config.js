const path = require('path')


module.exports  = {
  entry : "./index.js",
  mode  : "development",
  output : {
    filename : "./bundle.js",
    path : path.resolve(__dirname,"public")
  },
  module : {
    rules : [
      {
        test : /\.scss$/i ,
        use  : [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer : {
    static : {
      directory : path.join(__dirname, "public")
    },
    port : 80
  }
}
