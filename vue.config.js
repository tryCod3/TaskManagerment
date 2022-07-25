const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const devServerPort = 8080;
const mockServerPort = 5000;

module.exports = defineConfig({
  /**
   * nhận boolean or list module
   * if boolean = true : tất cả các file trong node_modules sẽ được đưa tới babel
   * else if list module : sẽ chỉ định các file đó đưa đến babel
   */
  transpileDependencies: true,
  /**
   * emmit lint trong môi trường dev
   */
  lintOnSave: true,
  /**
   * tăng tốc độ buld trong môi trường production
   */
  productionSourceMap: true,
  /**
   * config webpack
   */
  configureWebpack: {
    // config development server
    devServer: {
      // config port cho development server
      port: devServerPort,
      // mở trình duyệt khi dev ser khi đã được khởi động
      open: true,
      proxy: {
        '/dev_api': {
          target: `http://127.0.0.1:${mockServerPort}/v1`, // add /dev_api
          pathRewrite: {
            ['^/dev_api']: '', // override /dev_api = ''
          },
          ws: true, // web socket mode
          changeOrigin: true, // change origin
        },
      },
    },
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
  /**
   * những plugin được thêm vào chương trình
   */
  pluginOptions: {
    'style-resources-loader': {
      preProcess: 'scss',
    },
  },
});
