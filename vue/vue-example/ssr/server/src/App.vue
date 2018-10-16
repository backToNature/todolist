<template>
    <div id="#app">
        <h1>我就是模板{{user}}</h1>
        <h3>title: {{title}}</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: 'guohao'
        }
    },
    beforeCreate() {
        console.log(111111111111);
    },
    mounted() {
        console.log(2222222222);
    }
}
</script>

