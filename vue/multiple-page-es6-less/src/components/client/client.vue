<template>
    <div class="client">
        <headerNav :index="2"></headerNav>
        <div class="client-w">
            <div class="client-banner">
                <img src="../../static/client-banner.jpg" alt="" class="client-banner-img">
            </div>
            <div class="client-list">
                <div v-for="item in list" class="client-item global-clearfix">
                    <div class="client-item-l">
                        <img :src="item.bigImg" alt="" class="client-img">
                    </div>
                    <div class="client-item-r">
                        <h1 class="title">{{item.title}}</h1>
                        <p class="info">{{item.info}}</p>
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
                list: [
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
                    },
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
                    },
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
                    },
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
                    },
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
                    },
                    {
                        bigImg: './static/test.png',
                        title: '人脸闸机',
                        info: '与同方锐安，上海普天合作，开发人脸验证闸机',
                        iconList: ['./static/icon1.jpg', '../../static/icon1.jpg']
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
<style lang="less" src="./client.less"></style>