<template>
    <div id="error-container">
        <img src="../assets/logo.png" alt="">
        <h2>404</h2>
        <h1>瞎跳跳什么 网页都走丢了</h1>
        <span @click="idea">解决办法</span>
    </div>
</template>

<script>
    export default {
        name: "err404",
        methods:{
            idea(){
                this.$toast('暂时没办法');
            }
        }
    }
</script>

<style lang="scss" scoped>
#error-container{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:100%;
    text-align:center;
    h2{
        font-weight:200;
    }
    h1{
        font-weight:200;
        position:relative;
    }
    span{
        font-size:14px;
        color:blue;
    }
}
</style>
