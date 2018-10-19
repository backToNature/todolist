<template>
    <div class="tech">
        <headerNav :index="1"></headerNav>
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
            document.documentElement.style.overflow = 'hidden';
            let $full = document.querySelector('.full-page');
            this.page = 1;
            let lock = false;
            let fnLock = () => {
                window.setTimeout(() => {
                    lock = false;
                }, 300);
            };
            $full.addEventListener("webkitTransitionEnd", fnLock);  // Safari 3.1 到 6.0 代码
            $full.addEventListener("transitionend", fnLock);
            let lastTime = new Date();
            let moveDown = () => {
                lock = true;
                $full.classList.remove(`step${this.page}`);
                $full.classList.add(`step${this.page + 1}`);
                this.page++;
            };
            let moveUp = () => {
                lock = true;
                $full.classList.remove(`step${this.page}`);
                $full.classList.add(`step${this.page - 1}`);
                this.page--;
            };
            let scrollFunc = (e) => {
                if (lock) {
                    return;
                }
                if (e.deltaY > 0) {
                    //下滚动
                    moveDown();
                } else {
                    //上滚动
                    moveUp();
                }
            };
            document.addEventListener('mousewheel', scrollFunc, false);
        }
    };
</script>
<style lang="less" src="./tech.less" scoped></style>