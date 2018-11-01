import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/index/index.vue';
import Tech from './components/tech/tech.vue';
import About from './components/about/about.vue';
import Join from './components/join/join.vue';
import Client from './components/client/client.vue';

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      { path: '/', component: Home },
      { path: '/index', component: Home },
      { path: '/tech', component: Tech },
      { path: '/about', component: About },
      { path: '/join', component: Join },
      { path: '/client', component: Client },
    ]
  })
}