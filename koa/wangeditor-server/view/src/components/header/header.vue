<template>
    <div class="header">
        <div class="logo-w">
            <a href="./index.html"><div class="logo"></div></a>
        </div>
        <div class="right-menu">
            <a :class="{active: index === 1}" href="./tech.html">核心技术</a>
            <a :class="{active: index === 2}" href="./client.html">典型案例</a>
            <a :class="{active: index === 3}" href="./about.html">关于我们</a>
            <a :class="{active: index === 4}" href="./join.html">加入紫睛</a>
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