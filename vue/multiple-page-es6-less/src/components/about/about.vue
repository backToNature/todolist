<template>
    <div class="about">
        <headerNav></headerNav>
        <div class="about-w">
            <div class="about-banner">
                <div class="banner-inner">
                    <div class="info">
                        <h1 class="info-title">公司愿景</h1>
                        <p class="info-detail">紫睛科技是一家专注于计算机视觉和深度学习技术的初创公司，目前核心成员全部来自于清华大学</p>
                    </div>
                    <img class="about-banner-img" src="../../static/about_banner.jpg" alt="">
                </div>
            </div>
            <div class="about-person">
                <div class="tech">
                    <div class="global-tech-title">
                        <p class="global-tech-title-a">T E C H N O L O G Y</p>
                        <p class="global-tech-title-b">核 心 成 员</p>
                    </div>
                </div>
                <div class="person-list global-clearfix">
                    <div class="person-item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510164950275&di=7df04a30117668133e40833eca0fea18&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f603fd31c4293312b31bb151eddf.jpg" class="person-item-img" alt="">
                        <p class="person-item-info">周继乐</p>
                    </div>
                    <div class="person-item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510164950275&di=7df04a30117668133e40833eca0fea18&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f603fd31c4293312b31bb151eddf.jpg" class="person-item-img" alt="">
                        <p class="person-item-info">周继乐</p>
                    </div>
                    <div class="person-item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510164950275&di=7df04a30117668133e40833eca0fea18&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f603fd31c4293312b31bb151eddf.jpg" class="person-item-img" alt="">
                        <p class="person-item-info">周继乐</p>
                    </div>
                    <div class="person-item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510164950275&di=7df04a30117668133e40833eca0fea18&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f603fd31c4293312b31bb151eddf.jpg" class="person-item-img" alt="">
                        <p class="person-item-info">周继乐</p>
                    </div>
                    <div class="person-item">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510164950275&di=7df04a30117668133e40833eca0fea18&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f603fd31c4293312b31bb151eddf.jpg" class="person-item-img" alt="">
                        <p class="person-item-info">周继乐</p>
                    </div>
                </div>
            </div>
            <div class="contact">
                <div class="tech">
                    <div class="global-tech-title">
                        <p class="global-tech-title-a">T E C H N O L O G Y</p>
                        <p class="global-tech-title-b">联 系 我 们</p>
                    </div>
                </div>
                <div class="map">
                    <div class="map-w">
                        <div class="map-inner">
                            <img src="../../static/map.jpg" alt="" class="map-img">
                        </div>
                    </div>
                    <p class="map-info">北京市海淀区城府路中关村智造大街G座</p>
                </div>
            </div>
        </div>
        <footerNav></footerNav>
    </div>
</template>
<style lang="less" src="./about.less"></style>
<script>
    import headerNav from '../header/header.vue';
    import footerNav from '../footer/footer.vue';
    export default {
        data() {
            return {};
        },
        components: {
            headerNav,
            footerNav
        }
    };
</script>