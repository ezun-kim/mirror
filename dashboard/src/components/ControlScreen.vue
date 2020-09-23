<template>
  <div :class="classes" :style="`--color: ${success?'rgb(0,255,0)':'rgb(255,0,0)'}`">
    <div class="inner">
      <h1 v-if="success" class="success">{{successTitle}}</h1>
      <h1 v-else class="warning">{{warningTitle}}</h1>
      <p v-if="success" class="success">{{successText}}</p>
      <p v-else class="warning">{{warningText}}</p>

      <div class="guage">
        <div class="progress" :style="progressStyle">
          <p>{{~~(progress*100)}}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlScreen',
  props: {
    // msg: String
  },
  data() {
    return {
      timer: null,
      timerTextType: null,

      successTitle : "보안해제",
      successText : "보안이 해제되었습니다.",

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
  mounted() {
    window.removeEventListener("keydown", this.keyEvent);
    window.addEventListener("keydown", this.keyEvent);
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
    },
    progressStyle() {
      return {'width' : `${this.progress * 100}%`}
    },
    success() {
      return this.progress >= 1
    },
    tweenedProgress() {
      return this.progress
    },
    classes() {
      return {'container' : true,
              'successBg' : this.success,
              'warningBg' : !this.success,
              }
    }
  },
  methods: {
    changeTitle() {
      this.warningTitleIndex = (this.warningTitleIndex + 1) % this.warningTitles.length

      // let noise = -0.005+Math.random()*0.01
      // this.progress +=  this.progress < 0 ? 0 : noise
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

    },

    keyEvent(e) {
      console.log(e.key);
      switch (e.key) {
        case "1":
          this.progress = 0
        break
        case "2":
          this.progress = 0.25
        break
        case "3":
          this.progress = 0.5
        break
        case "4":
          this.progress = 0.75
        break
        case "5":
          this.progress = 1
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes animate-bg {
  from { background-position: 0 0; }
  to { background-position: -200px 0; }
}

.successBg {
  background-size: 100px 100px;
  background-image: linear-gradient(135deg, 
                    var(--color) 25%,
                    transparent 25%,
                    transparent 50%,
                    var(--color) 50%, 
                    var(--color) 75%,
                    transparent 75%,
                    transparent);

  animation: animate-bg 5.7s linear infinite;
}

.warningBg {
  background-size: 100px 100px;
  background-image: linear-gradient(135deg, 
                    var(--color) 25%,
                    transparent 25%,
                    transparent 50%,
                    var(--color) 50%, 
                    var(--color) 75%,
                    transparent 75%,
                    transparent);

  animation: animate-bg 0.7s linear infinite;
}

.container {
  padding: 0px;
  margin: 0px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  .inner {
    background: black;

    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 95%;
    height: 90%;

    border: 15px solid var(--color);

    // display: flex;
    justify-content: center;

    h1 {
      // position: absolute;
      height: 550px;
      line-height: 800px;

      color: var(--color);
      font-size: 200px;

      padding: 0px;
      margin: 0px;
    } 


      .warning {
        animation: blink normal 0.5s infinite ease-in-out;
      }
      
    p {
      color: var(--color);
      font-size: 50px;
      font-weight: bold;
    }
  }

  .guage {
    background: black;
    border: 9px solid var(--color);

    width: 80%;
    height: 60px;

    position: absolute;
    top: 780px;
    left: 50%;
    transform: translate(-50%, 0%);

    .progress {
      border-right: 5px solid var(--color);
      background-size: 10px 10px;
      background-image: linear-gradient(270deg, 
                        var(--color) 25%,
                        transparent 25%,
                        transparent 50%,
                        var(--color) 50%, 
                        var(--color) 75%,
                        transparent 75%,
                        transparent);

      animation: animate-bg 2.7s linear infinite;
      // width: 10%;
      height: 100%;


      transition: width .5s linear;

      p {
        color: var(--color);
      }
    }
  }
}


</style>
