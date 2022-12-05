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
    historyApiFallback: true,
    open: false,
    port: 4001,
    proxy: {
      '/api': {
        target: process.env.REACT_APP_URL,
        secure: false,
        changeOrigin: true,
        ws: false, // 需要websocket 开启
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
}
