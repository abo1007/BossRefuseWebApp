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
            <van-field v-model="username"
                       label="用户名"
                       placeholder="请输入用户名 6-11位"
                       maxlength="11"/>
            <van-field v-model="password"
                       type="password"
                       label="密码"
                       placeholder="请输入密码 8-26位"
                       maxlength="26"/>
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="sex" direction="horizontal">
                        <van-radio name="0">男</van-radio>
                        <van-radio name="1">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field v-model="phonenum"
                       type="digit"
                       label="手机号码"
                       placeholder="请输入11位手机号码"
                       maxlength="11"/>
            <van-field v-model="nickname"
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
                username: "",
                password: "",
                sex:"0",
                phonenum:"",
                nickname:"",


                btn_style1: "border: 6px #FF6347 solid;",
                btn_style2: "",
                isCom: 1,

            }
        },
        methods: {
            selType(num) {
                if (num === 1) {
                    this.btn_style1 = "border: 6px #FF6347 solid;";
                    this.btn_style2 = "";
                    this.isCom = 1;
                } else {
                    this.btn_style1 = "";
                    this.btn_style2 = "border: 6px #00BFFF solid;";
                    this.isCom = 2;
                }
            },
            goLogin() {
                this.$router.push({name: "login"});
            },
            registerUser(){
                this.$axios.post().then(res => {
                    console.log(res.data);
                    if(res.data.code == 200){
                        this.$toast.success("注册成功");
                        this.$router.back();
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err);
                })
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
                    padding-left:15px;
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
        .cen{
            padding:10px;
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
