<template>
    <div class="header">
        <div class="logo-w">
            <router-link to="/">
                <div class="logo"></div>
            </router-link>
        </div>
        <div class="right-menu">
            <router-link to="/tech" :class="{active: index === 1}">
                核心技术
            </router-link>
            <router-link to="/client" :class="{active: index === 2}">
                典型案例
            </router-link>
            <router-link to="/about" :class="{active: index === 3}">
                关于我们
            </router-link>
            <router-link to="/join" :class="{active: index === 4}">
                加入紫睛
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            index: Number
        }
    };
</script>
<style lang="less" scoped>
    .header {
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 8px 0 60px;
        z-index: 1;
    }
    .logo-w {
        .logo {
            background: url('../../static/logo.png');
            width: 208px;
            height: 60px;
        }
    }
    .right-menu {
        position: absolute;
        right: 0;
        top: 20px;
        margin-top: 26px;
        a {
            color: #fff;
            font-size: 28px;
            margin: 0 0 0 70px;
            border: 1px solid transparent;
            padding: 12px 22px;
            border-radius: 10px;
            &.active {
                border: 1px solid #fff;
            }
            &:hover {
                border: 1px solid #fff;
            }
            &:first-child {
                margin: 0;
            }
        }
    }
</style>