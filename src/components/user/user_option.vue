<template>
    <div id="option">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>设置</p>
        </div>
        <div class="content1">
            <div class="item">
                <span>
                    <van-icon name="home-o" size="26px" class="icon"/>
                    通用
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
                <span>
                    <van-icon name="chart-trending-o" size="26px" class="icon"/>
                    账号与绑定
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
                <span>
                    <van-icon name="question-o" size="26px" class="icon"/>
                    帮助与反馈
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
                <span>
                    <van-icon name="more-o" size="26px" class="icon"/>
                    隐私
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>
            <div class="item">
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
        name: "user_option",
        methods:{
            goback(){
                this.$router.push("/user/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
#option{
    /*background-color: #55cac4;*/
    .header{
        height:40px;
        width:100%;
        background-color:#55cac4;
        display:flex;
        align-items:center;
        .icon{
            position:absolute;
            left:10px;
        }
        p{
            text-align:center;
            width:100%;
            font-size:18px;
            margin:0;
            color:#fff;
            font-weight:500;
        }
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
