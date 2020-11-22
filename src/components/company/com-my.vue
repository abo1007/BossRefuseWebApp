<template>
    <div id="com-my">
        <div class="header">
            <van-icon name="setting-o" color="#fff" size="30" class="icon" @click="goOption"/>
        </div>
        <div class="user">
            <div class="left">
                <div class="img">
                    <img src="http://localhost/boss.jpg" alt="">
                </div>
            </div>
            <div class="right">
                <p class="username">老杨同志Abo</p>
                <p class="level">一切的伟大，源自一个勇敢的开始</p>
            </div>
        </div>
        <div class="userdata">
            <div class="view">
                <p class="num">{{userdata.chat}}</p>
                <p class="name">沟通中</p>
            </div>
            <div class="view">
                <p class="num">{{userdata.interview}}</p>
                <p class="name">待面试</p>
            </div>
            <div class="view">
                <p class="num">{{userdata.offer}}</p>
                <p class="name">录用</p>
            </div>
            <div class="view">
                <p class="num">{{userdata.star}}</p>
                <p class="name">收藏</p>
            </div>
        </div>
        <div class="userinfo">
            <van-icon name="ellipsis" color="#fff" size="30" />
        </div>
        <div class="content1">
            <div class="item">
                <span>
                    <van-icon name="balance-list-o" size="26px" class="icon"/>
                    急速招聘
                </span>
                <span>
                    VIP
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
                <span>
                    <van-icon name="todo-list-o" size="26px" class="icon"/>
                    公司介绍
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
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
                    薪资查询
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
        <van-button type="primary" @click="goback">主页</van-button>
    </div>
</template>

<script>
    export default {
        name: "com-my",
        data(){
            return{
                userdata:{
                    chat:0,interview:0,offer:0,star:0
                }
            }
        },
        methods:{
            goback(){
                this.$router.push('../')
            },
            goOption(){
                this.$router.push({ name: "user_option" })
            },
            gofunc(Routername){
                this.$router.push({ name:Routername, params:{from:'com'}  });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #com-my{
        .header{
            height:40px;
            width:100%;
            background-color:#55cac4;
            display:flex;
            align-items:center;
            .icon{
                position:absolute;
                right:10px;
            }
        }
        .user{
            height:100px;
            background-color:#55cac4;
            display:flex;
            padding:20px;
            .left{
                flex:3;
                display:flex;
                align-items:center;
                justify-content:center;
                .img{
                    height:80px;
                    width:80px;
                    background-color: #fff;
                    border:1px solid #fff;
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
            padding:10px;
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
            height:30px;
            background-color:#55cac4;
            display:flex;
            justify-content:center;
        }
        .content1{
            border-bottom:1px solid #808080;
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
    }
</style>
