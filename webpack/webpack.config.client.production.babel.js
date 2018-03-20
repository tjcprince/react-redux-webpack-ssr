import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';
import getBaseConfig from './webpack.config.client';

const baseConfig = getBaseConfig({ development: false });
const vendor = ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-dom'];

const config = {
  devtool: 'source-map',
  entry: { vendor },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    }),

    new CleanPlugin([path.relative(baseConfig.context, baseConfig.output.path)], {
      root: baseConfig.context
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

export default merge(baseConfig, config);
