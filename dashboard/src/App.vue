<template>
  <div id="app">
    <ControlScreen />
  </div>
</template>

<script>
import ControlScreen from './components/ControlScreen.vue'

export default {
  name: 'App',
  components: {
    ControlScreen
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
