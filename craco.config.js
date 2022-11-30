const path = require('path');
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack:{
    alias: {
      '@': resolve('src')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules[1].oneOf = [
          ...[
              {
                  test: /\.svg$/,
                  include: resolve('./src/static/svg'),
                  use: [
                    { loader: 'svg-sprite-loader', options: {} },
                    { loader: 'svgo-loader', options: {symbolId: "icon-[name]"} },
                  ],
              },
          ],
          ...webpackConfig.module.rules[1].oneOf,
      ];
      return webpackConfig;
    },
  },
  devServer: {
    open: false,
    proxy: {
      '/': {
        target: process.env.REACT_APP_URL,
        changeOrigin:true,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
}
