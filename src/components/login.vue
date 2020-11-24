<template>
    <div id="login-container">
        <div class="bot">
            <van-button type="primary" round size="large" color="linear-gradient(to right, #40E0D0, #7FFFAA)" @click="goUser">用户登录</van-button>
            <van-button type="info" round size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="goCom">企业登录</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            goUser(){
                this.$router.push('user');
            },
            goCom(){
                this.$router.push('com');
            }
        }
    }
</script>

<style lang="scss" scoped>
*{margin:0;padding:0;}
#login-container{
    position:absolute;
    width:100%;
    height:100%;
    background: url(../assets/bgc.png) no-repeat center;
    background-size:cover;
    .bot{
        display:flex;
        justify-content:space-between;
        position:absolute;
        bottom:20px;
        width:100%;
        button{
            margin:0 5px;
        }
    }
}
</style>
