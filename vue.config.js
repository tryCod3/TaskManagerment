const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  /**
   * nhận boolean or list module
   * if boolean = true : tất cả các file trong node_modules sẽ được đưa tới babel
   * else if list module : sẽ chỉ định các file đó đưa đến babel
   */
  transpileDependencies: true,
  /**
   * config webpack
   */
  configureWebpack: {},
});
