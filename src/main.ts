import Vue from 'vue';

import 'normalize.css';
import '@/style/index.scss';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang';

import '@/permission';

// element UI
Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value),
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
