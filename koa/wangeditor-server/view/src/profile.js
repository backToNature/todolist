import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/profile/profile.vue';
import './style/reset.less';
import './style/layout.less';

Vue.use(ElementUI);


import PicUploader from './components/pic-uploader/pic-uploader.vue';
Vue.component('pic-uploader', PicUploader);

new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});