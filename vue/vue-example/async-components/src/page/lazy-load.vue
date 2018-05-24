<template>
  <div class="lazy-load">
    <div class="first-screen">
      first-screen
    </div>
    <div class="two" ref="two">
      <lazy-two v-if="two"></lazy-two>
    </div>
    <div class="three" ref="three">
      <lazy-three v-if="three"></lazy-three>
    </div>
    <div class="four" ref="four">
      <lazy-four v-if="four"></lazy-four>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import Loading from '../components/loading.vue';

const getAsyncComponent = (name) => {
  return () => ({
    component: import(`../async-components/${name}.vue`),
    delay: 0,
    loading: Loading,
    error: Loading,
    timeout: 300000
  });
}

export default {
  components: {
    'lazy-two': getAsyncComponent('lazy-two'),
    'lazy-three': getAsyncComponent('lazy-three'),
    'lazy-four': getAsyncComponent('lazy-four')
  },
  data() {
    return {
      two: false,
      three: false,
      four: false
    }
  },
  mounted() {
    const $win = $(window);
    const doLoad = (name) => {

    };
    $win.on('scroll', (e) => {
      if ($win.height() + $win.scrollTop() > $(this.$refs.two).offset().top) {
        this.two = true;
      }

      if ($win.height() + $win.scrollTop() > $(this.$refs.three).offset().top) {
        this.three = true;
      }

      if ($win.height() + $win.scrollTop() > $(this.$refs.four).offset().top) {
        this.four = true;
      }
      // if ($win.scrollTop() >=)
    });
    $win
  }
}
</script>
<style lang="less">
  body {
    font-size: 30px;
    color: #fff;
  }
  .first-screen {
    background: red;
    height: 100vh;
  }
  .two {
    min-height: 40vh;
  }
  .three {
    min-height: 40vh;
  }
  .four {
    min-height: 40vh;
  }
</style>