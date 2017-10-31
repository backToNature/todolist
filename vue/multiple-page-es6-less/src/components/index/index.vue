<template>
    <div class="index">
        <headerNav></headerNav>
        <div class="banner">
            <img src="../../static/banner.jpg" alt="" class="banner-pic">
        </div>
        <div class="tech">
            <div class="global-tech-title">
                <p class="global-tech-title-a">T E C H N O L O G Y</p>
                <p class="global-tech-title-b">核 心 技 术</p>
            </div>
            <div class="tech-list global-clearfix">
                <div class="tech-item" v-for="item in tech">
                    <div class="tech-inner">
                        <a href="#"><img class="tech-item-img" src="../../static/tech-list1.png" alt=""></a>
                        <p class="tech-title">人脸识别</p>
                        <div class="char-line"></div>
                        <p class="tech-example one"><a href="#">[行业案例] 铁路闸机人脸验证</a></p>
                        <p class="tech-example"><a href="#">[行业案例] 铁路闸机人脸验证</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="client">
            <div class="global-tech-title">
                <p class="global-tech-title-a">C L I E N T & P A R T N E R</p>
                <p class="global-tech-title-b">客 户 和 伙 伴</p>
            </div>
            <div class="client-logo">
                <img src="../../static/client.png" alt="" class="client-logo-img">
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
            headerNav,
            footerNav
        }
    };
</script>
<style lang="less" src="./index.less"></style>