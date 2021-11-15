<template>
  <div id="register-container">
    <bo-navbar text="注册用户" @left-fun="goLogin"/>
    <div class="top">
      <div class="left">
        <p>注册类型</p>
      </div>
      <div class="right">
        <div class="user" @click="selType(0)" :style="btn_style1">
          <p>找工作</p>
        </div>
        <div class="com" @click="selType(1)" :style="btn_style2">
          <p>我要招聘</p>
        </div>
      </div>
    </div>
    <div class="cen">
      <van-field v-model="regData.username"
                 label="用户名"
                 placeholder="请输入用户名 6-12位"
                 maxlength="11"/>
      <van-field v-model="regData.password"
                 type="password"
                 label="密码"
                 placeholder="请输入密码 8-26位"
                 maxlength="26"/>
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="regData.sex" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="regData.phonenum"
                 type="digit"
                 label="手机号码"
                 placeholder="请输入11位手机号码"
                 maxlength="11"/>
      <van-field v-model="regData.nickname"
                 label="昵称"
                 placeholder="请输入昵称 2-8位"
                 maxlength="11"/>
    </div>
    <div class="bottom">
      <button class="push_btn" @click="registerUser">注 册</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "register",
    data() {
      return {
        regData: {
          username: "",
          password: "",
          sex: "0",
          phonenum: "",
          nickname: "",
          isCom: 0
        },
        btn_style1: "border: 6px #FF6347 solid;",
        btn_style2: "",
      }
    },
    methods: {
      selType(num) {
        if (num === 0) {
          this.btn_style1 = "border: 6px #FF6347 solid;";
          this.btn_style2 = "";
          this.regData.isCom = 0;
        } else {
          this.btn_style1 = "";
          this.btn_style2 = "border: 6px #00BFFF solid;";
          this.regData.isCom = 1;
        }
      },
      goLogin() {
        this.$router.push({name: "login"});
      },
      registerUser() {
        if (!this.checkInfo()) {
          return false;
        }
        this.$apiList.regUser(this.regData).then(res => {
          if (res.code === 200) {
            this.$toast.success("注册成功");
            this.$router.back();
          } else if (res.code === 208) {
            this.$toast.fail("用户名重复！");
          }
        }).catch(err => {
          this.$toast.fail("网络开小差了。");
          console.log(err);
        });
      },
      checkInfo() {
        if (this.regData.username.length < 6 || this.regData.username.length > 12) {
          this.$toast.fail("用户名不符合规范！");
          return false;
        }
        if (this.regData.password.length < 8 || this.regData.password.length > 26) {
          this.$toast.fail("密码格式不符合8-26位规范！");
          return false;
        }
        if (!this.regData.phonenum.length === 11) {
          this.$toast.fail("手机号必须11位！");
          return false;
        }
        if (this.regData.nickname.length < 2 || this.regData.nickname.length > 8) {
          this.$toast.fail("昵称2-8位 不得含敏感字符！");
          return false;
        }
        return true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #register-container {
    .top {
      padding: 10px;
      height: 120px;
      display: flex;
      border-bottom: 1px #cccccc solid;

      .left {
        flex: 1;
        position: relative;

        p {
          position: absolute;
          bottom: 0;
          color: #646566;
          font-size: 14px;
          line-height: 24px;
          padding-left: 15px;
        }
      }

      .right {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
          position: relative;
          padding: 5px;

          p {
            position: absolute;
            font-weight: bold;
            font-size: 22px;
            color: #ffffff;
            bottom: 0;
          }
        }

        .user, .com {
          height: 100px;
          width: 100px;
          margin: 10px;
          border-radius: 10px;
          flex-wrap: nowrap;
          background-color: #808080;
        }

        .user {
          background-color: #55cac4;
        }

        .com {
          background-color: #CD5C5C;
        }
      }
    }

    .cen {
      padding: 10px;
    }

    .bottom {
      display: flex;
      justify-content: center;
      padding: 20px 0;

      .push_btn {

        background-color: #55cac4;
        border: none;
        color: #fff;
        width: 80%;
        padding: 10px 0;
        font-size: 20px;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: 0px 0px 5px #808080, 0px -2px 5px #808080;
      }
    }
  }
</style>
