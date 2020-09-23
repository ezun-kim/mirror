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
    <router-view></router-view>
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

body {
  margin: 0;
  padding: 0;
  // border: 0;
  // outline: 0;
  overflow: hidden;

  background: black;

  font-family: 'DOSGothic';
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
  width: 1920px;
  height: 1080px;
  
  // font-smooth: never;
  -webkit-font-smoothing : none;

  text-align: center;
  color: white;

  background: black;
}
</style>
