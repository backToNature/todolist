<template>
    <div class="header global-clearfix">
        <div class="logo-w">
            <a href="./index.html"><div class="logo"></div></a>
        </div>
        <div class="right-menu">
            <a href="./tech.html">核心技术</a>
            <a href="#">典型案例</a>
            <a href="#">关于我们</a>
            <a href="#">加入紫晴</a>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .header {
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 8px 0 60px;
        z-index: 1;
    }
    .logo-w {
        float: left;
        .logo {
            background: url('../../static/logo.png');
            width: 208px;
            height: 60px;
        }
    }
    .right-menu {
        float: right;
        margin-top: 26px;
        a {
            color: #fff;
            font-size: 28px;
            margin: 0 0 0 70px;
            border: 1px solid transparent;
            padding: 12px 22px;
            border-radius: 10px;
            &:hover {
                border: 1px solid #fff;
            }
            &:first-child {
                margin: 0;
            }
        }
    }
</style>