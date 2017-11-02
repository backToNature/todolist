<template>
    <div class="join">
        <headerNav></headerNav>
        <div class="join-w">
        
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
            }
        },
        components: {
            headerNav,
            footerNav
        }
    };
</script>
<style lang="less" src="./join.less"></style>