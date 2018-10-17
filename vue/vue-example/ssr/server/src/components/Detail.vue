<template>
  <div class="detail">
    <h1>{{title}}</h1>
    <p>{{detail}}</p>
    {{newTitle}}
  </div>
</template>
<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getDetail')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    newTitle () {
      console.log(4, this.$store.state.content);
      return this.$store.state.content.title
    }
  },
  data() {
    return {
      title: '007是否可以抄底了？',
      detail: '抄底要接飞刀'
    }
  },
}
</script>
