<template>
    <div id="login-container">
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
            <van-button type="primary" round size="large" color="linear-gradient(to right, #40E0D0, #7FFFAA)" @click="goUser">用户登录</van-button>
            <van-button type="info" round size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="goCom">企业登录</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                uname:"",
                upass:""
            }
        },
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
    .cen{
        position:absolute;
        bottom:150px;
        width:100%;
        height:110px;
        display:flex;
        justify-content: center;
        filter:grayscale(100%);
        div{
            width:80%;
            line-height:46px;
            display:flex;
            flex-wrap: wrap;
            justify-content:center;
            background-color:rgba(0,0,0,.1);
            border-radius:10px;
            padding:5px;
            input{
                width:95%;
                background-color:rgba(255,255,255,0) !important;
                border:none;
                border-bottom:1px solid #808080;
                font-size:16px;
                text-align: center;
            }

        }


    }
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
    input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
        -webkit-text-fill-color: #ededed !important;
        -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
        background-color:transparent;
        background-image: none;
        transition: background-color 50000s ease-in-out 0s;
    }
    input {
        background-color:transparent;
    }
}
</style>
