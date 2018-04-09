import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/edit/edit.vue';
import './style/reset.less';
import './style/layout.less';

Vue.use(ElementUI);
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});