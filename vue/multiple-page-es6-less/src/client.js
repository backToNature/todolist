import Vue from 'vue';
import App from './components/client/client.vue';
import './style/reset.less';
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});