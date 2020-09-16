<template>
  <div class="container">
    <div class="warning">
      <div class="inner">
        <h1>{{warningTitle}}</h1>
        <p>발아위험! 발아위험!</p>
        <p>수분을 제거하십시오! 습도를 낮추십시오!</p>
      </div>
    </div>
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data() {
    return {
      timer: null,
      warningTitles : ["WARNING", "긴급사태발령"],
      warningTitleIndex: 0,
    }
  },
  created() {
    this.timer = setInterval(this.changeTitle, 1000)
  },
  computed: {
    warningTitle() {
      return this.warningTitles[this.warningTitleIndex]
    }
  },
  methods: {
    changeTitle() {
      console.log(this.warningTitleIndex)
      this.warningTitleIndex = (this.warningTitleIndex + 1) % this.warningTitles.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes blink {
  0% {
    // background-color: rgba(255,0,0,1)
    opacity: 1;
  }
  50% {
    // background-color: rgba(255,0,0,0)
    opacity: 0;
  }
  100% {
    // background-color: rgba(255,0,0,1)
    opacity: 1;
  }
}
@keyframes animate-bg {
  from { background-position: 0 0; }
  to { background-position: -200px 0; }
}

.container {
  width: 100%;
  height: 100%;
}
.warning {
  padding: 0px;
  margin: 0px;

  width: 100%;
  height: 100%;

margin:0 auto;

  h1 {
    // position: absolute;
    color: red;
    font-size: 200px;

    padding: 0px;
    margin: 0px;
    animation:blink normal 1s infinite ease-in-out;
    
  } 

  p {
    color: red;
    font-size: 50px;
    font-weight: bold;
  }

  .inner {
    background: black;
    // padding: 50px;
    height: 90%;
  }

  // background: red;
  background-size: 100px 100px;
  background-image: linear-gradient(135deg, 
                    rgba(255, 0, 0, 1) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 0, 0, 1) 50%, 
                    rgba(255, 0, 0, 1) 75%,
                    transparent 75%,
                    transparent);

  animation: animate-bg 1s linear infinite;

  padding-top: 2px;
  // // padding-bottom: 10px;
  // padding: 2px 2px 2px 2px;
}
</style>
