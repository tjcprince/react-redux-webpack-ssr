import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings.json';
import config from './webpack.config';
// 解决ant-design问题
config.module.rules[0].use[0].options = {
  presets: ['react', 'es2015', 'stage-0'],
  plugins: [
    'transform-runtime',
    ['import', { libraryName: 'antd', style: true }],
    'react-hot-loader/babel',
    'universal-import'
  ]
};
export default function (options) {
  return clientConfiguration(config, settings, options);
}
