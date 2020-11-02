<template>
    <div id="about-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>关于</p>
        </div>
        <img src="../../assets/user-home-img.png" alt="">
        <div class="content">
            <h1>Boss直拒</h1>
            <p>您身边的求职专家</p>
            <p>版本 0.1.0</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods:{
            goback(){
                this.$router.push("/user/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #about-container{
        .header{
            height:50px;
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
                font-size:20px;
                margin:0;
                color:#fff;
                font-weight:500;
            }
        }
        img{
            width:100%;
        }
        .content{
            text-align: center;
            h1{
                font-weight:100;
                margin:15px 0;
            }
            p{
                font-weight:100;
            }
        }
    }
</style>
