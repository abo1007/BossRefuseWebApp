<template>
    <div id="option">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>设置</p>
        </div>
        <div class="content">
            <div class="item">
                <p>通用</p>
            </div>
            <div class="item">
                <p>隐私</p>
            </div>
            <div class="item">
                <p>关于</p>
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
    background-color: #55cac4;
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
    .content{
        background-color:#55cac4;
        height:500px;
        .item{
            background-color:#7acfcb;
            height:40px;
            width:90%;
            border-radius:10px;
            margin:10px auto;
            p{
                color:#fff;
                font-size:20px;
                padding-left:30px;
                line-height:40px;
                font-weight:200;
                margin:0;
            }
        }
    }
}
</style>
