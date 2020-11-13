<template>
    <div id="wages">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>帮助</p>
        </div>
        <h1>薪酬查询</h1>
    </div>
</template>

<script>
    export default {
        name: "wages",
        methods:{
            goback(){
                this.$router.push('user/my');
            }
        }
    }
</script>

<style lang="scss" scoped>
#wages{
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
