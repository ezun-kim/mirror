<template>
  <div id="app">
    <div v-if="isMenu">
      <h3>- ADAM COMPANY SECURITY SYSTEM -</h3>
      <h1>SELECT A SCREEN</h1>
      <h3>-</h3>
      <a href="/control"><h3>Control Pannel</h3></a>
      <a href="/dashboard/1"><h3>Dashboard1</h3></a>
      <a href="/dashboard/2"><h3>Dashboard2</h3></a>
      <a href="/dashboard/3"><h3>Dashboard3</h3></a>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  created() {
    // this.$router.push('/control')
    console.log(this.$router.currentRoute)
  },
  mounted() {
    console.log(this.$router.currentRoute)
  },
  computed: {
    isMenu() {
      return this.$router.currentRoute.fullPath == '/'
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/fonts.scss";
@import "assets/css/animation.scss";


body,
html {
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;

  user-select: none;
  overflow: hidden;

  background: black;

  font-family: 'DOSGothic';
}

body::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
  background: rgba(49, 45, 45, .1);
  opacity: 0;
  pointer-events: none;
  animation: flicker .15s infinite, steady 40s infinite;
}

p {
  margin: 0;
}

a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: white;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 100px;
}

h3 {
  font-size: 50px;
  color: white;
}

#app {
  position: absolute;
  top: 0px;
  left: 0px;

  width: 1920px;
  height: 1080px;

  overflow: hidden;
  
  // font-smooth: never;
  -webkit-font-smoothing : none;

  text-align: center;
  color: white;

  background: black;
}
</style>
