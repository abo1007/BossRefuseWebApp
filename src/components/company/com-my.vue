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
        <div class="userinfo" @click="InfoMore">
            <van-icon name="ellipsis" color="#fff" size="30" />
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
    }
</style>
