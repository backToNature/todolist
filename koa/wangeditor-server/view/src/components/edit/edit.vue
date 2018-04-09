<template>
  <div class="edit">
    <div id="content">
        <div class="edit-wrapper">
          <h1>主题征文投稿</h1>
          <Breif></Breif>
          <ArticleEditor></ArticleEditor>
        </div>
    </div>
  </div>
</template>
<script>
import Breif from './breif.vue';
import ArticleEditor from './article-editor.vue'
export default {
  components: {
    Breif,
    ArticleEditor
  }
}
</script>
<style lang="less" scoped>
  .edit {
    .edit-wrapper {
      width: 600px;
      margin: 0 auto;
    }
  }
</style>

