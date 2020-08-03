<template>
    <div id="user-my">
        <div class="header">
            <van-icon name="setting-o" color="#fff" size="30" class="icon"/>
        </div>
        <div class="user">

        </div>
        <van-button type="primary" @click="goback">主页</van-button>
    </div>
</template>

<script>
    export default {
        name: "login-my",
        data(){
            return{

            }
        },
        methods:{
            goback(){
                this.$router.push('../')
            }
        }
    }
</script>

<style lang="scss" scoped>
#user-my{
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
    }
}
</style>
