<template>
    <div id="com-my">
        <div class="header">
            <span class="logo-com">企业端</span>
            <van-icon name="setting-o" color="#fff" size="30" class="icon" @click="goOption"/>
        </div>
        <div class="user" @click="gofunc('myinfo')">
            <div class="left">
                <div class="img">
                    <img src="http://localhost:8090/public/img/boss.png" alt="">
                </div>
            </div>
            <div class="right">
                <p class="username">{{nickname}}</p>
                <p class="level">招聘旺季，请各位应聘者排队面试</p>
            </div>
        </div>
        <transition name="fade">
            <div class="userdata" v-show="strWindow">
                <div class="view" @click="goOverview(1)">
                    <p class="num">{{comData.chat}}</p>
                    <p class="name">沟通中</p>
                </div>
                <div class="view" @click="goOverview(2)">
                    <p class="num">{{comData.interview}}</p>
                    <p class="name">待面试</p>
                </div>
                <div class="view" @click="goOverview(3)">
                    <p class="num">{{comData.offer}}</p>
                    <p class="name">录用</p>
                </div>
                <div class="view" @click="goOverview(4)">
                    <p class="num">{{comData.refuse}}</p>
                    <p class="name">拒绝</p>
                </div>
            </div>
        </transition>
        <div class="userinfo" @click="InfoMore">
            <van-icon name="ellipsis" color="#fff" size="30" />
        </div>
        <div class="content1">
            <div class="item" @click="gofunc('com_vip')">
                <span>
                    <van-icon name="balance-list-o" size="26px" class="icon"/>
                    急速招聘
                </span>
                <span>
                    VIP
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('com_info')">
                <span>
                    <van-icon name="todo-list-o" size="26px" class="icon"/>
                    公司介绍
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('intention')">
                <span>
                    <van-icon name="add-o" size="26px" class="icon"/>
                    招聘意向
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
        </div>
        <div class="content1">
            <div class="item" @click="gofunc('homepage')">
                <span>
                    <van-icon name="home-o" size="26px" class="icon"/>
                    公司主页
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('wages')">
                <span>
                    <van-icon name="chart-trending-o" size="26px" class="icon"/>
                    薪资计算
                </span>
                <span>
                    NEW
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('help')">
                <span>
                    <van-icon name="question-o" size="26px" class="icon"/>
                    帮助与反馈
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('service')">
                <span>
                    <van-icon name="more-o" size="26px" class="icon"/>
                    客服
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item" @click="gofunc('about')">
                <span>
                    <van-icon name="info-o" size="26px" class="icon"/>
                    关于
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "com_my",
        data() {
            return {
                comData: {
                    chat: 0, interview: 0, offer: 0, refuse: 0, star: 0
                },
                strWindow: true,
                nickname:"",
                comId:null
            }
        },
        methods: {
            goback() {
                this.$router.push('../');
            },
            goOption() {
                this.$router.push({name: "com_option"});
            },
            InfoMore() {
                this.strWindow = !this.strWindow;
            },
            gofunc(Routername) {
                this.$router.push({name: Routername, query: {from: 'com'}});
            },
            goOverview(cateid) {
                this.$router.push({name: 'com_overview', params: {cateid: cateid}});
            },
            postOfferData() {
                if (!this.comId){
                    this.comData.star = 0;
                    this.comData.chat = 0;
                    this.comData.interview = 0;
                    this.comData.offer = 0;
                    this.comData.refuse = 0;
                    return false;
                }
                this.$apiList.getOfferCount({uid: this.comId, type: 1}).then(res => {
                  this.comData.star = res.data[0];
                  this.comData.chat = res.data[1];
                  this.comData.interview = res.data[2];
                  this.comData.offer = res.data[3];
                  this.comData.refuse = res.data[4];
                }).catch(err => {
                  console.log(err);
                })
            },
            getNickname() {
                this.nickname = sessionStorage.getItem("nickname");
                // this.$axios.get(this.$API.API_GET_NICKNAME + this.$ID).then(res => {
                //     // console.log(res)
                //     if (res.data.code == 200) {
                //         this.nickname = res.data.data.nickname;
                //     }
                // }).catch(err => {
                //     this.$toast.fail("网络开小差了。");
                //     console.log(err);
                // })
            }
        },
        created() {
            this.comId = sessionStorage.getItem("comId");
            this.getNickname();
            this.postOfferData();
        }
    }
</script>

<style lang="scss" scoped>
    #com-my{
        .header{
            height:40px;
            width:calc(100% - 20px);
            padding:0 10px;
            background-color:#55cac4;
            display:flex;
            align-items:center;
            justify-content: space-between;
            .logo-com{
                color:#fff;
                border:1px solid #fff;
                border-radius:20px;
                font-size:10px;
                padding:5px;
            }
            .icon{

            }
        }
        .user{
            height:100px;
            background-color:#55cac4;
            display:flex;
            padding:20px;
            z-index:99;
            .left{
                flex:3;
                display:flex;
                align-items:center;
                justify-content:center;
                .img{
                    height:80px;
                    width:80px;
                    background-color: #fff;
                    box-shadow:#fff 0 0 5px;
                    border-radius:8px;
                    overflow: hidden;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            .right{
                flex:7;
                color:#fff;
                .username{
                    margin-top:20px;
                    margin-bottom:0;
                    font-size:1.2em;
                }
                .level{
                    margin:5px 0 0 0;
                }
            }
        }
        .userdata{
            height:80px;
            background-color:#55cac4;
            display:flex;
            padding:0 10px;
            z-index:0;
            .view{
                flex:1;
                display:flex;
                /*text-align:center;*/
                align-items:center;
                flex-direction:column;
                padding:20px 0;
                p{
                    margin:0;
                    font-family: 微软雅黑;
                    color:#fff;
                }
                .num{
                    font-size:18px;
                    font-weight:800;
                }
                .name{
                    font-size:14px;
                }
            }
        }
        .userinfo{
            position: relative;
            height:30px;
            background-color:#55cac4;
            display:flex;
            justify-content:center;
        }
        .content1{
            border-bottom:1px solid #cccccc;
            margin:0 15px;
            .item{
                height:55px;
                margin:0;
                display:flex;
                justify-content:space-between;
                font-size:15px;
                span{
                    display:flex;
                    align-items:center;
                }
                span:nth-child(2){
                    color:#808080;
                }
                .icon,.icon2{
                    margin:0 15px;
                }
            }
        }
        .fade-leave-active ,.fade-enter-active{
            transition:max-height 0.6s;
        }
        .fade-enter, .fade-leave-to {
            max-height:0px;
        }
        .fade-enter-to, .fade-leave{
            max-height:100px;
        }
    }
</style>
