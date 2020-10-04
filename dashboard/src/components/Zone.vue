<template>
    <div class='zone unlocked-color' @click="showInformation">
        <template v-if="!infoMode"> 
            <p>SECURITY CODE # {{Date.now()}} @ {{info.name}}</p>

            <img :src="info.logo" class="logo">
            <br>

            <div class="lights lights-keycolor">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="4px" viewBox="0 0 24 4" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect x="0" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="7" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="14" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                </svg>
            </div>

            <span>SECURITY MONITORING ACTIVATED</span>


            <div class="lights lights-keycolor">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="4px" viewBox="0 0 24 4" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect x="0" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="7" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="14" y="0" width="4" height="20" fill="#333">
                    <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                </svg>
            </div>

            <div v-if="info.locked" class="status-square locked-color">
                <p><font-awesome-icon icon="lock" /> </p>
                <span>잠겨있음</span>
            </div>
            <div v-else class="status-square unlocked-color">
                <span><font-awesome-icon icon="lock-open" /> </span>
                <p>보안해제</p>
            <!-- <i class="fas fa-backward"></i> -->
            </div>
            
        </template>

        <template v-else>
            <img :src="info.logo" class="logo">
            <div class="description">

            <p>{{this.info.description.substring(0, this.count) + (Date.now() % 2 && this.count != this.info.description.length? '■' : '')}}</p>
            </div>
        </template>

        

    </div>
</template>

<script>

export default {
  name: 'Zone',
  props: {
      info: Object
  },
  data() {
    return {
        infoMode : false,
        timer: null,
        count: 0,
    }
  },
  watch: {
      infoMode() {
        clearInterval(this.timer)
        this.count = 0
        this.timer = setInterval(()=>{
            this.count+=5
            if (this.info.description.length <= this.count) {
                this.count = this.info.description.length
                clearInterval(this.timer)
            }
        }, 30)
      }
  },
  created() {
  },
  destroyed() {
    clearInterval(this.timer)
  },
  mounted() {
    //   console.log("asdasd", this.info)
  },
  computed: {
  },
  methods: {
      showInformation() {
          this.infoMode = !this.infoMode
      }
  }
}
</script>



<style scoped lang="scss">
@import "@/assets/css/animation.scss";

$keycolor: #66ffff;
$locked-color: red;
$unlocked-color: #00ff00;

.zone {
  box-shadow: 0 0 2px $keycolor, inset 0 0 2px $keycolor;
//   padding: 20px;
  padding-top: 50px;
  
  border: 2px solid $keycolor;

  height: 94.1%;
  width: 31.5%;
  margin-top: 10px;
//   margin-bottom: auto;
  margin-right: 10px;
  float: left;

  &:last-child { 
    margin-right: 0px;
  }

    .status-square {
        margin: auto;

        border: 5px solid;

        width: 90%;
        bottom: 0px;

        font-size: 50px;



        margin-top: 670px;
        padding-top: 30px;
        padding-bottom: 30px;

        span {
            margin: auto;
        } 
    }

    .locked-color {
        border-color: $locked-color;
        color: $locked-color;
        background: rgba($locked-color, 0.05);
        text-shadow: 0 0 5px rgba($locked-color, 0.4);

        // filter: invert(100%) contrast(140%) brightness(140%);
    }


    .unlocked-color {
        border-color: $unlocked-color;
        color: $unlocked-color;
        background: rgba($unlocked-color, 0.05);
        text-shadow: 0 0 5px rgba($unlocked-color, 0.4);

    }


}

.logo {
    filter: invert(100%);
    width: 70%;

    margin-top: 10px;
    margin-bottom: 10px;
}


.lights{
  // margin: 0;
//   height: 0px !important;
//   width: 20px;
  display: inline;
  // text-align: center;
  // padding: 1em;
//   margin: 0 auto 1em;
margin: 0px;
padding: 10px;
// line-height: 10px;

transform: translateY(-17px);
  // display: inline-block;
  // vertical-align: top;

  svg path,
  svg rect{
    fill: black;
  }
}

.lights-keycolor {
  svg path,
  svg rect{
    fill: #66ffff;
  }
}


.description {
    padding: 50px;
    font-size: 25px;
}
</style>
