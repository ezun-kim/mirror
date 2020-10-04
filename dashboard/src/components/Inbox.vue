<template>
    <div class='container'>
        <h2>신규수신메세지</h2>
        <div class="date">
            <p>수신일 : {{currentTime}}</p>
            <p>발신자 : 아담스 컴퍼니 본부</p>
        </div>

        <div class="messages">
            <p style="font-weight: bold;">내용</p>
            <p>{{animatedMessage}}</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/ko'

export default {
  name: 'inbox',
  props: {
      message: String,
  },
  data() {
    return {
        count: 0,
        currentTime: '',
        timer: null,
    }
  },
  watch: {
      message() {
        this.count = 0
        this.updateMessage()
      }
  },
  created() {
    this.updateMessage()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  mounted() {
  },
  computed: {
    animatedMessage() {
        return this.message.substring(0, this.count) + (Date.now() % 2 && this.count != this.message.length? '■' : '')
    }
  },
  methods: {
      updateMessage() {
        this.currentTime = moment().format('YYYY년 MMMM Do, a h:mm:ss')

        clearInterval(this.timer)
        this.count = 0
        this.timer = setInterval(()=>{
            this.count++
            if (this.message.length <= this.count) {
                clearInterval(this.timer)
            }
        }, 30)
      }
  }
}
</script>

<style scoped lang="scss">
.container {
    margin: 0;
    padding: 0;

    h2 {
        padding-top: 20px;
    }
}
.messages {
    // border: 1px solid black;

    border-radius: 2px;

    margin: 0px 10px 10px 10px;

    padding: 20px;
    // padding-top: 30px;
    text-align: left;

    p {
        font-size: 20px;
    }
}
.date {
    text-align: left;
    padding-left: 30px;
    font-weight: bold;
}

</style>