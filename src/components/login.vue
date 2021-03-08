<template>
    <div id="login-container">
        <div class="top">
            <button class="reg_btn" @click="goFunc('register')">注册</button>
        </div>
        <div class="cen">
            <div class="uname">
                <input type="text"
                       name="name"
                       placeholder="Username"
                       v-model="uname"
                />
                <input type="password"
                       name="pass"
                       placeholder="Password"
                       v-model="upass"
                />
            </div>

        </div>
        <div class="bot">
            <van-button type="primary" round size="large" color="linear-gradient(to right, #40E0D0, #7FFFAA)"
                        @click="goLogin(0)">用户登录
            </van-button>
            <van-button type="info" round size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)"
                        @click="goLogin(1)">企业登录
            </van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                uname: "abo1007",
                upass: ""
            }
        },
        methods: {
            goUser() {
                if (this.goLogin(0)) {
                    this.$router.push('/user');
                }
            },
            goCom() {
                if (this.goLogin(1)) {
                    this.$router.push('/com');
                }
            },
            goLogin(mode) {
                if (this.uname && this.uname.length >= 6 && this.uname.length < 18) {
                    if (this.upass && this.upass.length >= 6 && this.upass.length < 26) {
                        this.$axios.post(this.$API.API_POST_LOGIN, {
                            username: this.uname, password: this.upass, mode: mode
                        }).then((res) => {
                            console.log(res);
                            switch (res.data.code) {
                                case 200:
                                    this.$toast.success("登录成功，欢迎 " + this.uname);

                                    if (mode === 0) {

                                        new Promise((resolve, reject) => {
                                            window.sessionStorage.setItem("ID",res.data.data.id);
                                            resolve("");
                                        }).then(value => {
                                            this.$router.push("/user");
                                        });

                                    } else if (mode === 1) {
                                        new Promise((resolve, reject) => {
                                            window.sessionStorage.setItem("ID",res.data.data.id);
                                            resolve("");
                                        }).then(value => {
                                            this.$router.push("/com");
                                        });

                                    }
                                    window.sessionStorage.setItem("login_token", res.data.data.token);
                                    break;
                                case 301:
                                    this.$toast.fail("用户名不存在");
                                    return false;
                                    break;
                                case 302:
                                    this.$toast.fail("密码不正确");
                                    return false;
                                    break;
                            }
                        }).catch(err => {
                            this.$toast.fail("网络开小差了。");
                            console.log(err);
                        });
                    } else {
                        this.$toast.fail("密码校验错误");
                        return false;
                    }
                } else {
                    this.$toast.fail("用户名校验错误");
                    return false;
                }

            },
            goFunc(Routername) {
                this.$router.push({name: Routername});
            },
            setcook() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/bgc.png) no-repeat center;
        background-size: cover;

        .top {
            height: 100px;
            position: relative;

            .reg_btn {
                height: 40px;
                width: 60px;
                color: #808080;
                font-weight: bold;
                background-image: linear-gradient(to right, #fff, #55cac4);
                position: absolute;
                right: 20px;
                top: 20px;
                border-radius: 15px;
                border: none;
                box-shadow: #808080 0px 0px 5px;
            }
        }

        .cen {
            position: absolute;
            bottom: 150px;
            width: 100%;
            height: 110px;
            display: flex;
            justify-content: center;
            filter: grayscale(100%);

            div {
                width: 80%;
                line-height: 46px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                background-color: rgba(0, 0, 0, .1);
                border-radius: 10px;
                padding: 5px;

                input {
                    width: 95%;
                    background-color: rgba(255, 255, 255, 0) !important;
                    border: none;
                    border-bottom: 1px solid #808080;
                    font-size: 16px;
                    text-align: center;
                }

            }


        }

        .bot {
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 20px;
            width: 100%;

            button {
                margin: 0 5px;
            }
        }

        input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
            -webkit-text-fill-color: #ededed !important;
            -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
            background-color: transparent;
            background-image: none;
            transition: background-color 50000s ease-in-out 0s;
        }

        input {
            background-color: transparent;
        }
    }
</style>
