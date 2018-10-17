// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Index.vue';
import Detail from './components/Detail.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/detail', component: Detail }
    ]
  })
}