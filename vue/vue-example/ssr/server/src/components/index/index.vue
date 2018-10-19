<template>
    <div class="index">
        <headerNav></headerNav>
        <div class="banner">
            <img src="../../static/banner.jpg" alt="" class="banner-pic">
        </div>
        <div class="tech">
            <div class="global-tech-title">
                <p class="global-tech-title-a">T1 E C H N O L O G Y</p>
                <p class="global-tech-title-b">核 心 技 术</p>
            </div>
            <div class="tech-list global-clearfix">
                <div class="tech-item" v-for="item in tech">
                    <div class="tech-inner">
                        <a :href="item.link" target="_blank"><img class="tech-item-img" :src="item.img" alt=""></a>
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
        asyncData ({ store, route }) {
            // 触发 action 后，会返回 Promise
            return store.dispatch('getIndex')
        },
        data() {
            return {
                tech: []
            }
        },
        created() {
            this.tech = this.$store.state.index.tech
        },
        components: {
            headerNav,
            footerNav
        }
    };
</script>
<style lang="less" src="./index.less"></style>