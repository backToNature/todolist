<template>
    <div class="tech">
        <headerNav></headerNav>
        <div class="points">
            <div class="point" @click="stepTo(index)" :class="{active: index === page}" v-for="index in 6">
                <div class="point-inner"></div>
            </div>
        </div>
        <div class="full-page" :class="'step' + page">
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
            return {
                page: 1
            };
        },
        methods: {
            stepTo(index) {
                this.page = index;
            }
        },
        watch: {
            page(val) {
                if (val < 1) {
                    this.page = 6;
                }
                if (this.page > 6) {
                    this.page = 1;
                }
            }
        },
        components: {
            headerNav
        },
        mounted() {
            let $full = document.querySelector('.full-page');
            this.page = 1;
            let moveDown = () => {
                $full.classList.remove(`step${this.page}`);
                $full.classList.add(`step${this.page + 1}`);
                this.page++;
            };
            let moveUp = () => {
                $full.classList.remove(`step${this.page}`);
                $full.classList.add(`step${this.page - 1}`);
                this.page--;
            };
            let scrollFunc = (e) => {
                console.log(e);
                if (e.deltaY > 0) {
                    //下滚动
                    moveDown();
                } else {
                    //上滚动
                    moveUp();
                }
                // e = e || window.event;
                // let t = 0;
                // t = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3;//兼容性处理  
                // if (t > 0 && curIndex > 0) {
                //     //上滚动
                //     console.log(4234234)
                //     moveUp();
                // } else if (t < 0 && curIndex < sumCount - 1) {
                //     //下滚动
                //     moveDown();
                // }
            };
            document.addEventListener('mousewheel', scrollFunc, false);
        }
    };
</script>
<style lang="less">
    html,body {
        overflow: hidden;
    }
</style>
<style lang="less" src="./tech.less" scoped></style>