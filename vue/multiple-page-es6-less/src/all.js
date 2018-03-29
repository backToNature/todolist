import Vue from 'vue';
import App from './components/all/all.vue';
import './style/reset.less';
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});