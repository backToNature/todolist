<template>
    <div class="index">
        <headerNav></headerNav>
        <div class="banner">
            <img src="../../static/banner.jpg" alt="" class="banner-pic">
        </div>
        <div class="tech">
            <div class="tech-title">
                <p class="tech-title-a">T E C H N O L O G Y</p>
                <p class="tech-title-b">核心技术</p>
            </div>
            <div class="tech-list global-clearfix">
                <div class="tech-item" v-for="item in tech">
                    <div class="tech-inner">
                        <img class="tech-item-img" src="../../static/tech-list1.png" alt="">
                        <p class="tech-title">人脸识别</p>
                        <div class="char-line"></div>
                        <p class="tech-example one">[行业案例] 铁路闸机人脸验证</p>
                        <p class="tech-example">[行业案例] 铁路闸机人脸验证</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headerNav from '../header/header.vue'
    export default {
        data() {
            return {
                tech: [
                    {
                        img: '../../static/tech-list1.png'
                    },
                    {
                        img: '../../static/tech-list2.png'
                    },
                    {
                        img: '../../static/tech-list3.png'
                    },
                    {
                        img: '../../static/tech-list4.png'
                    }
                ]
            }
        },
        components: {
            headerNav
        }
    };
</script>
<style lang="less" src="./index.less"></style>