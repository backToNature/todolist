import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './page/lazy-load.vue';

import LoginBox from '../../$mount/login-box/login-box.js';

Vue.prototype.$login = LoginBox;

Vue.use(ElementUI);
new Vue({
  el: '#app',
  render(h) {
    return h(App);
  }
});
