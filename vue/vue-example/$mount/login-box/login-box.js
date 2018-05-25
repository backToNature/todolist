/*
 * @Author: backtonature 
 * @Date: 2018-05-25 12:04:16 
 * @Last Modified by: daringuo
 * @Last Modified time: 2018-05-25 13:08:30
 */

import Vue from 'vue';
import Box from './login-box.vue';
const BoxConstructor = Vue.extend(Box);

export default {
  login() {
    const instance = new BoxConstructor();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }
};