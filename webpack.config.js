module.exports = {
    entry: ["./app/assets/react/app.jsx"],
    output: {
      path: "./app/assets/javascripts",
      filename: "transpiled_react.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ["babel-loader", 'haml-jsx'],
          presets: ['es2015', 'react']
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  };