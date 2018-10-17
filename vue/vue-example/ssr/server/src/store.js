// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import getArticleDatail from './api.js'

export function createStore () {
  return new Vuex.Store({
    state: {
      content: {
        title: '',
        detail: ''
      }
    },
    actions: {
      getDetail (context) {
        return getArticleDatail().then(res => {
          context.commit('setContent', res.data);
        });
      }
    },
    mutations: {
      setContent (state, data) {
        console.log(1, data);
        this.state.content = data;
        // Vue.set(state, 'content', data);
        console.log(2, state);
      }
    }
  })
}