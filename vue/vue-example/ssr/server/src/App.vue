<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    data() {
        return {
            user: 'guohao1'
        }
    },
    // beforeCreate() {
    //     console.log(1);
    // },
    // created() {
    //     console.log(2);
    // },
    // beforeMount() {
    //     console.log(3);
    // },
    // mounted() {
    //     console.log(4);
    // }
}
</script>

