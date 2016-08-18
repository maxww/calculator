module.exports = {
	entry: './browser/main.jsx',
	output: {
		path: './browser/public/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 8080
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
}
