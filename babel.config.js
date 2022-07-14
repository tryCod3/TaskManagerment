module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    /**
     * chuyển hóa import -> require
     * load những component theo cách bất đồng bộ
     */
    development: {
      plugins: ['dynamic-import-node'],
    },
  },
};
