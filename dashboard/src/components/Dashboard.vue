<template>
  <div class="container">    
    <div class="glitch">
    <div class="header">
      <div class="hydra_rebooting">
        <h1>SCREEN 00{{this.$route.params.id}}</h1>
        <p>SCREEN 00{{this.$route.params.id}}</p>
      </div>
    </div>

      <div class="hydra">
        -SLOTZ-
      </div>
          <div class="hydra">
        -THE LUST-
      </div>
          <div class="hydra">
        -CAFE SLOTH-
      </div>
    </div>
  <div class="scanline"></div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
    window.removeEventListener("keydown", this.keyEvent);
    window.addEventListener("keydown", this.keyEvent);
  },
  computed: {
  },
  methods: {
    keyEvent(e) {
      console.log(e.key);
      switch (e.key) {
        case "1":
        break
        case "2":
        break
        case "3":
        break
        case "4":
        break
        case "5":
        break

        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
        case "Enter":
        case " ":
        case "Delete": 
        case "Escape":
        break
      }
    }
  }
}
</script>

<style scoped lang="scss">

@import "@/assets/css/terminal.scss";
@import "@/assets/css/animation.scss";

$keycolor: #66ffff;

.container {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier;
    
  position: relative;
  width: 100%;
  height: 100%;

  background-color: #00050f;
	background-image: url(http://api.thumbr.it/whitenoise-200x200.png?background=00000000&noise=626262&density=15&opacity=15);
	background-size: 100px;
	color: $keycolor;
  text-shadow: 0 0 5px rgba($keycolor, 0.6);
}

.header {
  box-shadow: 0 0 2px $keycolor, inset 0 0 2px $keycolor;
  background: $keycolor;
  color: black;

  padding: 2vw;
  border: 0.2vw solid $keycolor;
  
  height: 500px;

  float: left;
}

.hydra {
  box-shadow: 0 0 2px $keycolor, inset 0 0 2px $keycolor;
  padding: 2vw;
  border: 0.2vw solid $keycolor;

  height: 500px;
  width: 15%;
  float: left;
}

.scanline {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.03);
  animation: scanline 6s linear infinite;
}

</style>
