<template>
  <div class="index">
      <h1>异步组件引用</h1>
      <el-button type="primary"  @click="tableShow = !tableShow">异步加载表格</el-button>
      <div class="tabler-wrapper" v-if="tableShow">
        <big-table></big-table>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableShow: false
      }
    },
    components: {
      'big-table': () => import('../async-components/big-table.vue')
    }
  }
</script>