<template>
    <div id="service-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>客服中心</p>
        </div>
        <h1>客服中心</h1>
    </div>
</template>

<script>
    export default {
        name: "service",
        data(){
            return{

            }
        },
        methods:{
            goback(){
                this.$router.push("/user/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
#service-container{
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
}
</style>
