<template>
    <div id="app">
        <h1 class="header">user</h1>
        <div class="bg"></div>
    </div>
</template>
<script>
module.export = {
    name: 'app',
    data: function () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    beforeMount: function () {

    }
};
</script>
<style>
    .bg {
        width: 400px;
        height: 300px;
        background: url('../static/image/test.jpg');
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
</style>