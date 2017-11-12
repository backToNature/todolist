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
                        <a href="#" target="_blank"><img class="tech-item-img" :src="item.img" alt=""></a>
                        <p class="tech-title">{{item.title}}</p>
                        <div class="char-line"></div>
                        <p v-for="(it, index) in item.infoList" :class="{one: index === 1}" class="tech-example"><a target="_blank" :href="it.link">[{{it.title}}] {{it.info}}</a></p>
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
                        title: '人脸识别',
                        img: './static/tech-list1.png',
                        infoList: [
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            },
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            }
                        ]
                    },
                    {
                        title: '人脸识别',
                        img: './static/tech-list2.png',
                        infoList: [
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            },
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            }
                        ]
                    },
                    {
                        title: '人脸识别',
                        img: './static/tech-list3.png',
                        infoList: [
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            },
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            }
                        ]
                    },
                    {
                        title: '人脸识别',
                        img: './static/tech-list4.png',
                        infoList: [
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            },
                            {
                                title: '行业案例',
                                info: '铁路闸机人脸验证',
                                link: '#'
                            }
                        ]
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