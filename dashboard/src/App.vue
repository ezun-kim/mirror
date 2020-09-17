<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Dashboard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
@import "assets/css/fonts.scss";

body {
  margin: 0px;
  padding: 0px;
  // border: 0;
  // outline: 0;
  overflow: hidden;

  background: black;

  font-family: 'DOSGothic';
}

p {
  margin: 0;
}

#app {
  width: 1920px;
  height: 1080px;
  
  // font-smooth: never;
  -webkit-font-smoothing : none;

  text-align: center;
  color: white;
}
</style>
