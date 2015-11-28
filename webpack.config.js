module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./components/main.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      // loader for React JSX
      {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: "babel",
	query: {
	  presets: ['react']
	}
      },
      // loader for HTML
      {
	test: /\.html$/,
	loader: "file?name=[name].[ext]",
      },
      // loaders for Bootstrap CSS
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ],
  },
}
