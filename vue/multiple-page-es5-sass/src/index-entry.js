var Vue = require('vue');
var App = require('./components/index.vue');

console.log(App);
// App.render();
// App.$mount('#app');
new Vue({
    el: '#app',
    render: function (h) {
        return h(App);
    }
});