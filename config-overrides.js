const { override, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        //   "actions": path.resolve(__dirname, 'src/actions'),
        //   "api": path.resolve(__dirname, 'src/api'),
        //   "common": path.resolve(__dirname, 'src/common'),
        //   "components": path.resolve(__dirname, 'src/components'),
        //   "containers": path.resolve(__dirname, 'src/containers'),
        //   "helper": path.resolve(__dirname, 'src/helper'),
        //   "icon": path.resolve(__dirname, 'src/icon'),
        //   "reducers": path.resolve(__dirname, 'src/reducers')
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0052cc', '@font-size-base': '16px' },
        localIdentName: '[local]--[hash:base64:5]', // 自定义 CSS Modules 的 localIdentName
    })
);
