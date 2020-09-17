<template>
  <div class="container">
    <div class="inner">
      <h1>{{warningTitle}}</h1>
      <p>{{warningText}}</p>

      <div class="guage">
        <div class="progress">
          <p>{{~~(progress*100)}}%</p>
        </div>
      </div>
    </div>
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
      timerTextType: null,

      warningTitles : ["!발아위험!", "!긴급사태발령!", "!WARNING!"],
      warningTitleIndex: 0,

      warningTexts : ["수분을 제거하십시오!", "습도를 낮추십시오!", "발아를 방지하십시오!", "DO NOT LET THE SEED GROW!"],
      warningTextIndex: 0,
      warningTextTypeIndex: 0,

      progress: 0,
    }
  },
  created() {
    this.timer = setInterval(this.changeTitle, 1000)

    this.startTypeText()
  },
  computed: {
    warningTitle() {
      return this.warningTitles[this.warningTitleIndex]
    },
    currentWarningText() {
      return this.warningTexts[this.warningTextIndex]
    },
    warningText() {
      return this.currentWarningText.substr(0, this.warningTextTypeIndex)
    }
  },
  methods: {
    changeTitle() {
      this.warningTitleIndex = (this.warningTitleIndex + 1) % this.warningTitles.length

      this.progress = Math.random()
    },
    startTypeText() {
      if (this.timerTextType != null) {
        clearInterval(this.timerTextType)
      }

      this.timerTextType = setInterval(()=>{
        this.warningTextTypeIndex++

        if (this.warningTextTypeIndex == this.currentWarningText.length) {
          clearInterval(this.timerTextType)
          setTimeout(()=>{
            this.warningTextTypeIndex = 0
            this.warningTextIndex = (this.warningTextIndex + 1) % this.warningTexts.length
            this.startTypeText()
          }, 1500)
        }
      }, 30)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes blink {
  0% {
    // background-color: rgba(255,0,0,1)
    opacity: 0;
  }
  50% {
    // background-color: rgba(255,0,0,0)
    opacity: 1;
  }
  100% {
    // background-color: rgba(255,0,0,1)
    opacity: 0;
  }
}
@keyframes animate-bg {
  from { background-position: 0 0; }
  to { background-position: -200px 0; }
}

.container {
  padding: 0px;
  margin: 0px;

  width: 100%;
  height: 100%;

  background-size: 100px 100px;
  background-image: linear-gradient(135deg, 
                    rgba(255, 0, 0, 1) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 0, 0, 1) 50%, 
                    rgba(255, 0, 0, 1) 75%,
                    transparent 75%,
                    transparent);

  animation: animate-bg 0.7s linear infinite;

  display: flex;
  justify-content: center;

  .inner {
    background: black;

    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 95%;
    height: 90%;

    border: 15px solid red;

    // display: flex;
    justify-content: center;

    h1 {
      // position: absolute;
      height: 550px;
      line-height: 800px;

      color: red;
      font-size: 200px;

      padding: 0px;
      margin: 0px;
      animation: blink normal 0.5s infinite ease-in-out;
    } 

    p {
      color: red;
      font-size: 50px;
      font-weight: bold;
    }
  }

  .guage {
    background: black;
    border: 9px solid red;

    width: 80%;
    height: 60px;

    position: absolute;
    top: 780px;
    left: 50%;
    transform: translate(-50%, 0%);

    .progress {
      border-right: 5px solid red;
      background-size: 10px 10px;
      background-image: linear-gradient(270deg, 
                        rgba(255, 0, 0, 1) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 0, 0, 1) 50%, 
                        rgba(255, 0, 0, 1) 75%,
                        transparent 75%,
                        transparent);

      animation: animate-bg 2.7s linear infinite;
      width: 10%;
      height: 100%;

      p {
        color: red;
      }
    }
  }
}


</style>
