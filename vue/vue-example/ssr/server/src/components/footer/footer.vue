<template>
    <div class="footer">
        <div class="links global-clearfix">
            <a v-for="item in list" target="_blank" :href="item.link">{{item.text}}</a>
        </div>
        <div class="copyright">©2017 紫睛科技有限公司 版权所有</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list : [
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    },
                    {
                        text: '关于我们',
                        link: '#'
                    }
                ]
            }
        }
    };
</script>
<style lang="less" scoped>
    .footer {
        background: #313131;
        padding: 0 0 50px 0;
        .links {
            width: 100%;
            box-sizing: border-box;
            padding: 100px 160px;
            a {
                display: block;
                width: 25%;
                text-align: center;
                float: left;
                font-size: 30px;
                color: #fff;
                padding: 30px 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        .copyright {
            text-align: center;
            color: #fff;
            font-size: 28px;
        }
    }
</style>