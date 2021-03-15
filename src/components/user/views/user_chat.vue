<template>
    <div id="user-chat">
        <bo-navbar :text="workId" @left-fun="goback"/>
        <h2>UserID {{userId}}</h2>
        <h2>ComID {{comId}}</h2>
        <h2>workID {{workId}}</h2>
        <div class="com">
            <p class="title">
                <span class="name">全栈工程师</span>
                <span class="salary">1-2K</span>
            </p>
            <p class="cominfo">
                <span>白嫖科技</span>
                <span>Mr.李</span>
            </p>
        </div>
        <div class="triangle">
            <ul>
                <li class="textRight">
                    <p>你好xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    <img src="../../../assets/boss.jpg" alt="">
                </li>
                <li class="textLeft">
                    <img src="../../../assets/boss.jpg" alt="">
                    <p>你好，我是AAA廊坊富士康 人事经理xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </li>
                <li class="textRight">
                    <p>没经验可以去吗</p>
                    <img src="../../../assets/boss.jpg" alt="">
                </li>
                <li class="textLeft">
                    <img src="../../../assets/boss.jpg" alt="">
                    <p>我们这试干一月不收取任何费用</p>
                </li>
                <li class="textRight">
                    <p>？？？</p>
                    <img src="../../../assets/boss.jpg" alt="">
                </li>
                <li class="textLeft">
                    <img src="../../../assets/boss.jpg" alt="">
                    <p>我们这试干一月不收取任何费用</p>
                </li>
            </ul>
        </div>
        <div class="action">
            <button class="add">+</button>
            <input type="text" class="text">
            <button class="send">发送</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "user_chat",
        data() {
            return {
                userId: this.$route.query.userid,
                comId: this.$route.query.comid,
                workId: this.$route.query.workid,
                workInfo:{},
                ID:null
            }
        },
        methods: {
            goback() {
                this.$router.back();
            },
            getWorkface() {
                this.$axios.get(this.$API.API_GET_WORK+this.workId).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err);
                })
            }
        },
        created() {
            this.ID = sessionStorage.getItem('ID');

        }
    }
</script>

<style lang="scss" scoped>
    #user-chat {
        background-color: #ebebe9;
        min-height: 100vh;
        margin-bottom: 40px;

        h2 {
            font-weight: 200;
        }

        .com {
            height: 60px;
            width: 90%;
            border-radius: 8px;
            margin: 0 auto;
            background-color: #fff;
            padding: 5px 10px;

            p {
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {

                }
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
                    max-width: 75%;
                    word-wrap: break-word;
                    word-break: break-all;

                }

                img {
                    height: 40px;
                    width: 40px;
                    padding-top: 10px;
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
                    padding-right: 15px;
                }
            }

            .textRight {
                margin-left: auto;
                justify-content: flex-end;

                img {
                    padding-left: 15px;

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
