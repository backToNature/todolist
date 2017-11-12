<template>
    <div class="join">
        <headerNav :index="4"></headerNav>
        <div class="join-w">
          <img src="../../static/join_top.jpg" alt="" class="join-pic">
        </div>
        <div class="join-tech">
            <div class="join-tech-title">
                <p class="join-tech-title-a">T E C H N O L O G Y</p>
                <p class="join-tech-title-b">校 园 招 聘</p>
            </div>
            <div class="join-tech-list">
              <div class="join-tech-content" v-for="(item,index) in tech">
                  <div class="tech-inner">
                    <div class="join-line" v-if="index != 0">
                      <div class="join-line-img"></div>
                    </div>
                 
                    <div class="tech-title">
                      <div class="tech-title-img"></div>
                      <div class="tech-title-word2">
                        <p class="tech-title-word" v-html="item.title"></p>
                      </div>
                    </div>
                    <p class="tect-example">岗位职责</p>
                    <p class="tect-example2" v-html="item.response"></p>
                    <p class="tect-example3">任职要求</p>
                    <p class="tect-example2" v-html="item.require"></p>
                  </div>
              </div>
            </div>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<script>
    import headerNav from '../header/header.vue';
    import footerNav from '../footer/footer.vue';
    export default {
        data() {
            return {
                tech:[
                  {
                    title:'资深视觉工程师',
                    response:'研发高质量计算机视觉算法和产品',
                    require:'有扎实的图像分析埃里克多饥渴发酵素看的就发卡量讲的放抗裂砂浆啊妖孽啊哦IE欧萨大姐夫卡拉胶啥都我监控橘黄色的按付款链接哦我金刚萨埵科技感俊美的惊愕ID抗裂砂浆'
                  },
                  {
                    title:'资深嵌入式软件工程师',
                    response:'研发高质量计算机视觉算法和产品',
                    require:'有扎实的图像分析埃里克多饥渴发酵素看的就发卡量讲的放抗裂砂浆啊妖孽啊哦IE欧萨大姐夫卡拉胶啥都我监控橘黄色的按付款链接哦我金刚萨埵科技感俊美的惊愕ID抗裂砂浆'
                  }
                ]
            }
        },
        components: {
            headerNav,
            footerNav
        }
    };
</script>
<style lang="less" src="./join.less"></style>