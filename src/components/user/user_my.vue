<template>
  <div id="user-my">
    <div class="header">
      <van-icon name="setting-o" color="#fff" size="30" class="icon" @click="goOption"/>
    </div>
    <div class="user" @click="gofunc('myinfo')">
      <div class="left">
        <div class="img">
          <img src="http://localhost:8090/public/img/boss.png" alt="">
        </div>
      </div>
      <div class="right">
        <p class="username">{{ nickname }}</p>
        <p class="level">一切的伟大，源自一个勇敢的开始</p>
      </div>
    </div>
    <transition name="fade">
      <div class="userdata" v-show="strWindow">
        <div class="view" @click="goOverview(1)">
          <p class="num">{{ userData.chat }}</p>
          <p class="name">沟通中</p>
        </div>
        <div class="view" @click="goOverview(2)">
          <p class="num">{{ userData.interview }}</p>
          <p class="name">待面试</p>
        </div>
        <div class="view" @click="goOverview(3)">
          <p class="num">{{ userData.offer }}</p>
          <p class="name">录用</p>
        </div>
        <div class="view" @click="goOverview(4)">
          <p class="num">{{ userData.refuse }}</p>
          <p class="name">拒绝</p>
        </div>
      </div>
    </transition>

    <div class="userinfo" @click="InfoMore">
      <van-icon name="ellipsis" color="#fff" size="30"/>
    </div>
    <div class="content1 content11">
      <div class="item" @click="gofunc('assistant')">
                <span>
                    <van-icon name="balance-list-o" size="26px" class="icon"/>
                    求职助手
                </span>
        <span>VIP<van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('user_resume')">
                <span>
                    <van-icon name="todo-list-o" size="26px" class="icon"/>
                    个人简历
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('intention')">
                <span>
                    <van-icon name="add-o" size="26px" class="icon"/>
                    求职意向
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
    </div>
    <div class="content1 content2">
      <div class="item" @click="gofunc('homepage')">
                <span>
                    <van-icon name="home-o" size="26px" class="icon"/>
                    个人主页
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('wages')">
                <span>
                    <van-icon name="chart-trending-o" size="26px" class="icon"/>
                    薪资查询
                </span>
        <span>NEW<van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('help')">
                <span>
                    <van-icon name="question-o" size="26px" class="icon"/>
                    帮助与反馈
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('service')">
                <span>
                    <van-icon name="more-o" size="26px" class="icon"/>
                    客服
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('account')">
                <span>
                    <van-icon name="user-circle-o" size="26px" class="icon"/>
                    账号与安全
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('privacy')">
                <span>
                    <van-icon name="browsing-history-o" size="26px" class="icon"/>
                    隐私
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
      <div class="item" @click="gofunc('about')">
                <span>
                    <van-icon name="info-o" size="26px" class="icon"/>
                    关于
                </span>
        <span><van-icon name="arrow" class="icon2"/></span>
      </div>
    </div>

  </div>
</template>

<script>
import local from "@/util/local";

export default {
  name: "login-my",
  data() {
    return {
      userData: {
        chat: 0, interview: 0, offer: 0, refuse: 0, stat: 0
      },
      strWindow: true,
      nickname: "****",
      ID: null
    }
  },
  methods: {
    goback() {
      this.$router.push('../')
    },
    goOption() {
      this.$router.push({name: "user_option"})
    },
    getOptions() {
      let opt = local.getObj("options");
      console.log(opt)
      if (opt.tab) {
        this.strWindow = true;
      } else {
        this.strWindow = false;
      }
    },
    InfoMore() {
      this.strWindow = !this.strWindow;
      local.setObj("options","tab",this.strWindow ? 1 : 0);

      // let opt = JSON.parse(localStorage.getItem("options"));
      // if (JSON.stringify(opt) !== "{}") {
      //   opt.tab = this.strWindow ? 1 : 0;
      //   localStorage.setItem("options", JSON.stringify(opt))
      // } else {
      //   localStorage.setItem("options", JSON.stringify({tab: this.strWindow ? 1 : 0}))
      // }
    },
    gofunc(Routername) {
      this.$router.push({name: Routername, params: {from: 'user'}});
    },
    goOverview(cateid) {
      this.$router.push({name: 'user_overview', params: {cateid: cateid}})
    },
    postOfferData() {
      this.$apiList.getOfferCount({uid: this.ID, type: 0}).then(res => {
        this.userData.star = res.data[0];
        this.userData.chat = res.data[1];
        this.userData.interview = res.data[2];
        this.userData.offer = res.data[3];
        this.userData.refuse = res.data[4];
      }).catch(err => {
        this.$toast.fail("网络开小差了。");
        console.log(err);
      })
      // this.$axios.post(this.$API.API_POST_OFFER_COUNT, {
      //     uid: this.ID, type: 0
      // }).then(res => {
      //     // console.log(res)
      //     this.userData.star = res.data.data[0];
      //     this.userData.chat = res.data.data[1];
      //     this.userData.interview = res.data.data[2];
      //     this.userData.offer = res.data.data[3];
      //     this.userData.refuse = res.data.data[4];
      // }).catch(err => {
      //     this.$toast.fail("网络开小差了。");
      //     console.log(err);
      // })
    },
    getNickname() {
      this.nickname = sessionStorage.getItem("nickname");
      this.ID = sessionStorage.getItem('ID');
      // this.$axios.get(this.$API.API_GET_NICKNAME + this.ID).then(res => {
      //     // console.log(res)
      //     if (res.data.code == 200) {
      //         this.nickname1 = res.data.data.nickname;
      //     }
      // }).catch(err => {
      //     this.$toast.fail("网络开小差了。");
      //     console.log(err);
      // })
    }
  },
  created() {
    this.getNickname();
    this.postOfferData();
    this.getOptions();
  },
  beforeDestroy() {

  }
}
</script>

<style lang="scss" scoped>
#user-my {
  .header {
    height: 40px;
    width: 100%;
    background-color: #55cac4;
    display: flex;
    align-items: center;

    .icon {
      position: absolute;
      right: 10px;
    }
  }

  .user {
    height: 100px;
    background-color: #55cac4;
    display: flex;
    padding: 20px;
    z-index: 99;

    .left {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;

      .img {
        height: 80px;
        width: 80px;
        background-color: #fff;
        box-shadow: black 0 0 15px;
        border-radius: 8px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .right {
      flex: 7;
      color: #fff;

      .username {
        margin-top: 20px;
        margin-bottom: 0;
        font-size: 1.2em;
      }

      .level {
        margin: 5px 0 0 0;
      }
    }
  }

  .userdata {
    height: 80px;
    background-color: #55cac4;
    display: flex;
    padding: 0 10px;
    z-index: 0;

    .view {
      flex: 1;
      display: flex;
      /*text-align:center;*/
      align-items: center;
      flex-direction: column;
      padding: 20px 0;

      p {
        margin: 0;
        font-family: 微软雅黑;
        color: #fff;
      }

      .num {
        font-size: 18px;
        font-weight: 800;
      }

      .name {
        font-size: 14px;
      }
    }

  }

  .userinfo {
    position: relative;
    height: 30px;
    background-color: #55cac4;
    display: flex;
    justify-content: center;
    box-shadow: 0px -3px 10px 0px #3d9691;
  }

  .content1 {
    border-bottom: 1px solid #cccccc;
    margin: 0 15px;

    .item {
      height: 55px;
      margin: 0;
      display: flex;
      justify-content: space-between;
      font-size: 15px;

      span {
        display: flex;
        align-items: center;
      }

      span:nth-child(2) {
        color: #808080;
      }

      .icon, .icon2 {
        margin: 0 15px;
      }
    }
  }

  .content11 {
    /*box-shadow :0px -5px 10px 0px #808080;*/
    z-index: 99;
  }

  .content2 {
    border-bottom: 0;
  }

  .fade-leave-active, .fade-enter-active {
    transition: max-height 0.6s;
  }

  .fade-enter, .fade-leave-to {
    max-height: 0px;
  }

  .fade-enter-to, .fade-leave {
    max-height: 100px;
  }

}
</style>
