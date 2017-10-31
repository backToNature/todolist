<template>
    <div class="tech">
        <headerNav></headerNav>
        <div class="full-page">
<!--             <div class="img-wrapper">
                <img src="../../static/big_banner1.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../static/big_banner2.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../static/big_banner3.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../static/big_banner4.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../static/big_banner5.jpg" alt="">
            </div>
            <div class="img-wrapper">
                <img src="../../static/big_banner6.jpg" alt="">
            </div> -->
            <div class="img-wrapper bg1"></div>
            <div class="img-wrapper bg2"></div>
            <div class="img-wrapper bg3"></div>
            <div class="img-wrapper bg4"></div>
            <div class="img-wrapper bg5"></div>
            <div class="img-wrapper bg6"></div>
        </div>
    </div>
</template>
<script>
    import headerNav from '../header/header.vue';
    export default {
        data() {
            return {};
        },
        components: {
            headerNav
        }
    };
</script>
<style lang="less" src="./tech.less" scoped></style>