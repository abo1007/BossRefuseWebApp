<template>
  <div id="service-container">
    <bo-navbar text="客服" @left-fun="goback"/>
    <van-card
        v-for="item in List"
        :key="item.id"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.img"
    >
      <template #tags>
        <van-tag plain type="success">{{item.tag}}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="call(item.phone)">item.phone</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "service",
  data() {
    return {
      from: this.$store.state.currentPosition,
      List:[
        {
          id: 1,
          title: "客服中心",
          desc: "负责线上问题投诉建议等处理",
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tag: "线上问题",
          phone: "400-820-8820"
        },
        {
          id: 2,
          title: "防诈中心",
          desc: "诈骗等违法线下问题处理",
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tag: "欺诈问题",
          phone: "010-1234567"
        }

      ]
    }
  },
  methods: {
    goback() {
      this.$router.push("/" + this.from + "/my");
    },
    call(phone) {
      window.location.href = `tel:${phone}`;
    }
  }
}
</script>

<style lang="scss" scoped>
#service-container {
  h1 {
    font-weight: 100;
  }
}
</style>
