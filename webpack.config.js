const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: ["@babel/polyfill", path.resolve(__dirname, "src","index.js")],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js"
	},
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader', 
				options: {
					presets: ['@babel/env', '@babel/react'],
					plugins: ['@babel/plugin-proposal-class-properties'],
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'url-loader',
				options: {
				  limit: 25000,
				},
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				options: {
				  name: '[path][name].[hash].[ext]',
				},
			},
		]
	},
	plugins: [
		new HTMLWebpackPlugin({template: path.resolve(__dirname, "src","index.html"),}),
		new MiniCssExtractPlugin({

			filename: path.join('style', '[name].css'),
			chunkFilename: '[id].css',
		}),
	],
	resolve: {
        extensions: [".jsx", ".js"],
	},	
	devtool : 'cheap-inline-module-source-map',
	devServer : {	
		historyApiFallback : true,
		writeToDisk: true,
		proxy:{
			'/bot/' : {
				target: 'https://aiproject.ru/api/',
				pathRewrite: { '/bot/': '' },
				secure: false,
				changeOrigin: true
			}
		} 
		} ,
}