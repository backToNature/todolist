<template>
  <div class="pic-uploader">
    <div v-if="imgUrl" @click="close" class="pic-uploader-close"></div>
    <input ref="pic" type="file" class="file-inner" @change="change($event)">
    <img v-if="imgUrl" class="pic-uploader-img" :src="imgUrl" alt="">
    <p>上传文件</p>
  </div>
</template>
<script>
  export default {
    props: ['imgUrl'],
    data() {
      return {
        
      }
    },
    methods: {
      change(e) {
        this.$emit('change', e);
      },
      close() {
        this.$emit('update:imgUrl', '');
        this.$refs.pic.value = '';
      }
    }
  }
</script>

<style lang="less" scoped>
  @picWidth: 300px;
  @picHeight: 200px;
  .pic-uploader-close {
    width: 40px;
    height: 40px;
    background: #000;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
  }
  .pic-uploader-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .pic-uploader {
    border: 1px dashed #ccc;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: @picWidth;
    height: @picHeight;
  }
  .file-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
</style>

