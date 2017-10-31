import Vue from 'vue';
import App from './components/tech/tech.vue';
import './style/reset.less';
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});