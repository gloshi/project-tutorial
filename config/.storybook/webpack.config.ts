// @ts-nocheck

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
   
    config!.plugins!.map(plugin => {
        if (plugin.constructor.name === 'IgnorePlugin') {
          return new webpack.IgnorePlugin({
              resourceRegExp: plugin.options.resourceRegExp,
              contextRegExp: plugin.options.contextRegExp
          });
        }
        console.log('plugin',plugin)
        return plugin;
      })
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
   
    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules!.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({
        _IS_DEV_: JSON.stringify(true),
        // _API_: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify('storybook'),
    }))
    return config;
};
