import Vue from 'vue';
import App from './components/about/about.vue';
import './style/reset.less';
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});