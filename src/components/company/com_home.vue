<template>
  <div id="com-home">
    <van-search
        v-model="SearchValue"
        shape="round"
        show-action
        background="#55cac4"
        placeholder="Java工程师"
    >
      <template #action>
        <div class="icon1">
          <van-icon name="search" @click="onSearch" size="34" color="#fff"/>
        </div>
      </template>
    </van-search>
    <img src="../../assets/slide1.png" alt="">
    <van-notice-bar
        left-icon="volume-o"
        text="巴里阿阿集团的社会责任是向社会输送大量人才"
    />
    <van-grid>
      <van-grid-item icon="notes-o" text="简历处理" :badge="offerNum" @click="gofunc('com_handler')"/>
      <van-grid-item icon="coupon-o" text="招聘管理" @click="gofunc('com_workmanager')"/>
      <van-grid-item icon="fire-o" text="热门" @click="gofunc('com_hotwork')"/>
      <van-grid-item icon="points" text="薪资计算" @click="gofunc('wages')"/>
    </van-grid>
    <van-grid>
      <van-grid-item icon="friends-o" text="企业信息" badge="2" @click="gofunc('com_info')"/>
      <van-grid-item icon="manager-o" text="个人信息" @click="gofunc('myinfo')"/>
      <van-grid-item icon="aim" text="招聘意向"/>
      <van-grid-item icon="thumb-circle-o" text="为您推荐"/>
    </van-grid>
    <div id="reg-container">
      <div class="img img1" @click="gofunc('com_info')">
        <p>在这里注册企业信息 ></p>
      </div>
      <div class="img img2" @click="gofunc('com_handler')">
        <p>在这里处理简历消息 ></p>
      </div>
      <div class="img img3" @click="gofunc('com_workmanager')">
        <p>在这里管理招聘信息 ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com_home",
  data() {
    return {
      SearchValue: "",
      offerNum: 0
    }
  },
  methods: {
    onSearch() {
      if (this.SearchValue === "" || this.SearchValue.length > 10) {
        this.$dialog.alert({
          message: '非法搜索',
        }).then(() => {

        });
        return false;
      }
    },
    gofunc(Routername) {
      this.$router.push({name: Routername, params: {from: 'com'}});
    },
    getOfferNum() {
      let comId = sessionStorage.getItem('comId');
      this.$apiList.getOfferCount({uid: comId, type: 1}).then(res => {
        this.offerNum = res.data[1] + res.data[2];
      }).catch(err => {
        console.log(err);
      })
      // this.$axios.post(this.$API.API_POST_OFFER_COUNT,{
      //     uid: 1408, type: 1
      // }).then(res => {
      //     this.offerNum = res.data.data[1] + res.data.data[2];
      // }).catch(err => {
      //     console.log(err);
      // })
    }
  },
  created() {
    this.getOfferNum();
  }
}
</script>

<style lang="scss" scoped>
#com-home {
  width: 100%;

  .icon1 {
    height: 34px;
  }

  img {
    width: 100%;
  }

  .focus {
    color: #808080;
    margin: 10px 0;
    font-size: 14px;
    padding-left: 16px;
  }

  #reg-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 5px 0;

    .img {
      height: 70px;
      width: 96%;
      /*background-color:#55cac4;*/
      border-radius: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px #808080;

      p {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        padding-left: 20px;
      }
    }

    .img1 {
      background-image: linear-gradient(to right, #55cac4, #008B8B);
    }

    .img2 {
      background-image: linear-gradient(to right, #FF7F50, #A52A2A);
      margin-top: 10px;
    }

    .img3 {
      background-image: linear-gradient(to right, #32CD32, #2E8B57);
      margin-top: 10px;
    }
  }
}
</style>
