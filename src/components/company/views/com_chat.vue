<template>
  <div id="com-chat">
    <bo-navbar :text="workId" @left-fun="goback"/>
    <div class="com" v-show="comShow">
      <p class="title">
        <span class="name">{{ workInfo.workTitle }}</span>
        <span class="salary">{{ workInfo.workSalary }}</span>
      </p>
      <p class="cominfo">
        <span>{{ workInfo.workComName }}</span>
        <span>{{ workInfo.workPublisher }}</span>
      </p>
    </div>
    <div class="chatinfo" v-show="infoShow">
      <p>UserID {{ userId }}</p>
      <p>ComID {{ comId }}</p>
      <p>workID {{ workId }}</p>
    </div>
    <div class="triangle">
      <ul>
        <template v-for="(item, index) in chat">
          <li class="textRight" v-show="item.sendID == ComId">
            <p>{{ item.msgContent }}</p>
            <img src="../../../assets/boss.png" alt="">
          </li>
          <li class="textLeft" v-show="item.acceptID == ComId">
            <img src="../../../assets/boss.png" alt="">
            <p>{{ item.msgContent }}</p>
          </li>
        </template>

      </ul>
    </div>
    <div class="bottom"></div>
    <div class="action">
      <button class="add" @click="actionShow = true">+</button>
      <input type="text" v-model="msg" class="text" maxlength="100"/>
      <button class="send" @click="sendMsg">发送</button>
    </div>
    <van-action-sheet
        v-model="actionShow"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
        @select="selectAction"
    />
  </div>
</template>

<script>
export default {
  name: "com_chat",
  data() {
    return {
      userId: this.$route.query.userid,
      comId: this.$route.query.comid,
      workId: this.$route.query.workid,
      workInfo: {
        workTitle: "全栈工程师",
        workSalary: "1-2K",
        workPublisher: "人力张",
        workComName: "白嫖科技"
      },
      ComId: null,
      msg: "",
      chat: [],

      actionShow: false,
      actions: [
        {id: 1, name: "显示各类数据ID"},
        {id: 2, name: "隐藏各类数据ID"},
        {id: 3, name: "加入黑名单"}
      ],
      infoShow: false,
      comShow: false
    }
  },
  methods: {
    goback() {
      this.$router.back();
    },
    getUnreadMsg() {
      this.$axios.get().then(res => {
        console.log(res.data);
      }).catch(err => {
        this.$toast.fail("");
        console.log(err)
      })
    },
    sendMsg() {
      if (this.msg == "") {
        this.$toast.fail("发送内容不得为空");
        return;
      }
      let data = {
        userId: this.userId,
        comId: this.comId,
        workId: this.workId,
        mode: 1,
        msgContent: this.msg
      };
      this.$apiList.sendMsg(data).then(res => {
        if (res.code === 200) {
          this.$toast.success("发送成功");
          // window.location.reload();
          this.getMsg()
        } else {
          this.$toast.fail("发送失败");
        }
        this.msg = "";
      }).catch(err => {
        this.$toast.fail("发送失败");
        console.log(err)
      })
      // this.$axios.post(this.$API.API_POST_MSG, data).then(res => {
      //     if (res.data.code === 200) {
      //         this.$toast.success("发送成功");
      //         // window.location.reload();
      //       this.getMsg();
      //     } else {
      //         this.$toast.fail("发送失败");
      //     }
      // }).catch(err => {
      //     this.$toast.fail("发送失败");
      //     console.log(err)
      // })

    },
    getMsg() {
      let data = {
        userId: this.userId,
        comId: this.comId,
        workId: this.workId,
        mode: 1
      };
      this.$apiList.postMsgForId(data).then(res => {
        if (res.code === 200) {
          this.workInfo = res.data.work;
          this.chat = res.data.msg;
          this.scrollToBottom()

        } else {
          this.workInfo = res.data.work;
          this.$toast.fail("无数据");
        }
        this.comShow = true;
      }).catch(err => {
        this.$toast.fail("网络开小差了。");
        console.log(err);
      })
      // this.$axios.post(this.$API.API_POST_MSG_USERID, data).then(res => {
      //     console.log(res.data)
      //     if (res.data.code === 200) {
      //         this.workInfo = res.data.data.work;
      //         this.chat = res.data.data.msg;
      //     } else {
      //         console.log(111)
      //         this.workInfo = res.data.data.work;
      //         this.$toast.fail("无数据");
      //     }
      //     this.comShow = true;
      // }).catch(err => {
      //     this.$toast.fail("网络开小差了。");
      //     console.log(err);
      // })
    },
    onCancel() {

    },
    selectAction(action, index) {
      switch (action.id) {
        case 1:
          this.infoShow = true;
          break;
        case 2:
          this.infoShow = false;
          break;
        case 3:
          this.$toast.fail("拉黑失败，请重试！");
          break;
      }

    },
    goWorkInfo(id) {
      this.$router.push({name: 'work_info', params: {workid: id}});
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector(".bottom");
        // console.log(container.scrollHeight)
        container.scrollTop = container.scrollHeight;
      })
    },
  },
  created() {
    this.ID = sessionStorage.getItem('ID');
    this.ComId = sessionStorage.getItem('comId');
    this.getMsg();
  }
}
</script>

<style lang="scss" scoped>
#com-chat {
  background-color: #ebebe9;
  min-height: 100vh;
  margin-bottom: 40px;

  h2 {
    font-weight: 200;
    margin: 10px 0;

  }

  .com {
    height: 60px;
    width: 90%;
    border-radius: 8px;
    margin: 10px auto;
    background-color: #fff;
    padding: 5px 10px;

    p {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

    }

    .title {
      .name {
        font-size: 24px;
      }

      .salary {
        color: #55cac4;
        font-weight: bold;
        font-size: 20px;
      }
    }

    .cominfo {
      margin-top: 8px;
      color: #808080;
    }

  }

  .chatinfo {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, .6);
    border-radius: 20px;

    p {
      margin: 5px 0;
    }
  }

  .triangle {
    width: 100%;

    ul {
      padding: 10px;
    }

    li {
      list-style: none;
      padding: 5px;
      display: flex;
      position: relative;

      p {
        position: relative;
        border-radius: 7px;
        background-color: #a6e860;
        padding: 6px 10px 8px 10px;
        z-index: 1;
        max-width: 70%;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 18px;
        margin: 15px 0;

      }

      img {
        height: 40px;
        width: 40px;
        /*padding-top: 10px;*/
        margin-top: 10px;
      }
    }

    .textLeft {
      justify-content: flex-start;

      p {
        background-color: white;
      }

      p:before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-right: 8px solid white;
        position: absolute;
        top: 8px;
        left: -16px;
      }

      img {
        margin-right: 15px;
      }
    }

    .textRight {
      margin-left: auto;
      justify-content: flex-end;

      img {
        margin-left: 15px;
      }

      p:after {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-left: 8px solid #a6e860;
        position: absolute;
        top: 8px;
        right: -16px;
      }
    }
  }

  .action {
    width: 100%;
    height: 40px;
    z-index: 99;
    background-color: rgba(235, 235, 233, .9);
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #cfcfcd;

    button {
      border: none;
      background-color: #55cac4;
      color: #fff;
      margin: 0 8px;
    }

    .add {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      font-size: 2em;
    }

    .send {

      padding: 5px 10px;
      border-radius: 5px;
    }

    .text {
      flex: 1;
      height: 32px;
      border: none;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
