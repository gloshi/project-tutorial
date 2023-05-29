import HTMLWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        _IS_DEV_: JSON.stringify(isDev),
    }),
];
plugins.push(new BundleAnalyzerPlugin({
  openAnalyzer: false,
}));

if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    
}

return plugins;

}
