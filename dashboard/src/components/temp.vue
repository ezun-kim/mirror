<template>
<div class="effect">
  <div :class="classes" :style="`--color: ${success?'rgb(0,255,0)':'rgb(255,0,0)'}`">
      <h3 class="title">
        ADAMS COMPANY SECURITY SYSTEM
      </h3>
    <div class="inner">

      <h1 v-if="success" class="success">{{successTitle}}</h1>
      <h1 v-else class="warning">{{warningTitle}}</h1>
      <p v-if="success" class="success">{{successText}}</p>
      <p v-else class="warning">{{warningText}}</p>

      <div class="guage">
        <div class="progress" :style="progressStyle">
          <p class="flicker">{{~~(progress*100)}}%</p>
        </div>
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


@keyframes turn-on {
  0% {
    -webkit-transform: scale(1, .8) translate3d(0, 0, 0);
    transform: scale(1, .8) translate3d(0, 0, 0);
    opacity: 1
  }
  5% {
    -webkit-transform: scale(1.09139, 1.34235) translate3d(0, 100%, 0);
    transform: scale(1.09139, 1.34235) translate3d(0, 100%, 0)
  }
  10% {
    -webkit-transform: scale(.63084, 1.40698) translate3d(0, -100%, 0);
    transform: scale(.63084, 1.40698) translate3d(0, -100%, 0)
  }
  15% {
    -webkit-transform: scale(.75142, 1.34118) translate3d(0, 100%, 0);
    transform: scale(.75142, 1.34118) translate3d(0, 100%, 0)
  }
  20% {
    -webkit-transform: scale(.96173, 1.36858) translate3d(0, -100%, 0);
    transform: scale(.96173, 1.36858) translate3d(0, -100%, 0)
  }
  25% {
    -webkit-transform: scale(1.1348, 1.02729) translate3d(0, 100%, 0);
    transform: scale(1.1348, 1.02729) translate3d(0, 100%, 0)
  }
  30% {
    -webkit-transform: scale(.97038, .71092) translate3d(0, -100%, 0);
    transform: scale(.97038, .71092) translate3d(0, -100%, 0)
  }
  35% {
    -webkit-transform: scale(.6067, 1.31101) translate3d(0, 100%, 0);
    transform: scale(.6067, 1.31101) translate3d(0, 100%, 0)
  }
  40% {
    -webkit-transform: scale(.786, .9326) translate3d(0, -100%, 0);
    transform: scale(.786, .9326) translate3d(0, -100%, 0)
  }
  45% {
    -webkit-transform: scale(1.38602, 1.14399) translate3d(0, 100%, 0);
    transform: scale(1.38602, 1.14399) translate3d(0, 100%, 0)
  }
  50% {
    -webkit-transform: scale(.69973, .90412) translate3d(0, -100%, 0);
    transform: scale(.69973, .90412) translate3d(0, -100%, 0)
  }
  51% {
    -webkit-transform: scale(1, 1) translate3d(0, 0, 0);
    transform: scale(1, 1) translate3d(0, 0, 0);
    -webkit-filter: brightness(1) saturate(1);
    filter: brightness(1) saturate(1);
    opacity: 0
  }
  100% {
    -webkit-transform: scale(1, 1) translate3d(0, 0, 0);
    transform: scale(1, 1) translate3d(0, 0, 0);
    -webkit-filter: contrast(1) brightness(1.2) saturate(1.3);
    filter: contrast(1) brightness(1.2) saturate(1.3);
    opacity: 1
  }
}

@keyframes turn-off {
  0% {
    -webkit-transform: scale(1, 1.3) translate3d(0, 0, 0);
    transform: scale(1, 1.3) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
    filter: brightness(1);
    opacity: 1
  }
  60% {
    -webkit-transform: scale(1.3, .001) translate3d(0, 0, 0);
    transform: scale(1.3, .001) translate3d(0, 0, 0);
    -webkit-filter: brightness(10);
    filter: brightness(10)
  }
  100% {
    -webkit-animation-timing-function: cubic-bezier(.755, .05, .855, .06);
    animation-timing-function: cubic-bezier(.755, .05, .855, .06);
    -webkit-transform: scale(0, .0001) translate3d(0, 0, 0);
    transform: scale(0, .0001) translate3d(0, 0, 0);
    -webkit-filter: brightness(50);
    filter: brightness(50)
  }
}

@keyframes flashText {
  0% {
    opacity: .3
  }
  100% {
    opacity: 1
  }
}

@keyframes flicker {
  0% {
    opacity: .86139
  }
  5% {
    opacity: .12793
  }
  10% {
    opacity: .36759
  }
  15% {
    opacity: .9766
  }
  20% {
    opacity: .61364
  }
  25% {
    opacity: .94477
  }
  30% {
    opacity: .57811
  }
  35% {
    opacity: .03416
  }
  40% {
    opacity: .21835
  }
  45% {
    opacity: .62054
  }
  50% {
    opacity: .89452
  }
  55% {
    opacity: .89997
  }
  60% {
    opacity: .37872
  }
  65% {
    opacity: .04929
  }
  70% {
    opacity: .14477
  }
  75% {
    opacity: .27512
  }
  80% {
    opacity: .84701
  }
  85% {
    opacity: .85952
  }
  90% {
    opacity: .76553
  }
  95% {
    opacity: .91372
  }
  100% {
    opacity: .05536
  }
}

@keyframes steady {
  from {
    background: rgba(255, 230, 230, .1)
  }
  to {
    background: rgba(49, 45, 45, .1)
  }
}

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

.title {
  text-transform: uppercase;
  text-align: center;
  color: var(--color);
  line-height: 50px;
}

.title::after,
.title::before {
  content: '';
  display: inline-block;
  background: var(--color);
  width: 144px;
  height: 20px;
  margin-bottom: 10px;
  // padding-bottom: 10px;
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

  text-shadow: 0 0 5px var(--color);
        color: var(--color);

  .inner {
    background: url(https://image.ibb.co/h2hLAJ/bg.png) #000;

    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 95%;
    height: 90%;

    border: 15px solid var(--color);

    // display: flex;
    justify-content: center;

    h1 {

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

.flicker {
  animation: flicker .15s infinite, steady 4s
  
}

.effect {
  padding: 0px;
  margin: 0px;

  width: 100%;
  height: 100%;

  animation: turn-on 0.5s linear;
  animation-fill-mode: backwards;
}

</style>
