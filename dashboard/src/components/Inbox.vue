<template>
    <div class='container'>
        <h2>신규수신메세지</h2>
        <div class="date">
            <p>수신일 : 2020/10/03 23:32:23</p>
            <p>발신자 : 아담스 컴퍼니 본부</p>
        </div>

        <div class="messages">
            <p style="font-weight: bold;">내용</p>
            <p>{{message}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'inbox',
  props: {
      message: String,
  },
  data() {
    return {
        count: 0,
    }
  },
  watch: {
      messages() {
        this.count = 0
      }
  },
  created() {
  },
  destroyed() {
  },
  mounted() {
  },
  computed: {

  },
  methods: {

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
    border: 1px solid black;

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