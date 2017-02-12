var Vue = require('vue');
var App = require('./components/user.vue');

new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});