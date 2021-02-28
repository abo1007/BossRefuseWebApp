<template>
    <div id="user-chat">
        <bo-navbar :text="workId" @left-fun="goback"/>
        <h1>聊天界面</h1>
        <h2>UserID {{userId}}</h2>
        <h2>ComID {{comId}}</h2>
        <h2>workID {{workId}}</h2>

        <div class="triangle">
            <p>仿微信聊天界面</p>
            <hr>
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
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "user_chat",
        data(){
          return{
              userId:this.$route.query.userid,
              comId:this.$route.query.comid,
              workId:this.$route.query.workid

          }
        },
        methods:{
            goback(){
                this.$router.back();
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
#user-chat{
    h2{
        font-weight:200;
    }
    .triangle{
        width: 100%;
        background-color: #ebebe9;
        ul{
            padding: 10px;
        }
        li{
            padding: 5px;
            display: flex;
            position: relative;
            p{
                position: relative;
                border-radius: 7px;
                background-color: #a6e860;
                padding: 6px 10px 8px 10px;
                z-index: 1;
                max-width:80%;
                word-wrap: break-word;
                word-break: break-all;

            }
            img{
                height:40px;
                width:40px;

            }
        }
        .textLeft{
            justify-content: flex-start;
            p{
                background-color: white;
            }
            p:before{
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
            img{
                padding-right:10px;
            }
        }
        .textRight{
            margin-left: auto;
            justify-content: flex-end;
            p{

            }
            img{
                padding-left:10px;

            }
        }
    }
    .triangle li.textRight p:after{
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
    li{
        list-style: none;
    }
}
</style>
