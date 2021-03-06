import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './page/index.vue';

Vue.use(ElementUI);
new Vue({
  el: '#app',
  render(h) {
    return h(App);
  }
});
