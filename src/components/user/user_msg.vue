<template>
    <div id="user-msg">
        <van-nav-bar :title="getMsgTitle()" />
    </div>
</template>

<script>
    export default {
        name: "login-msg",
        data(){
            return{
                msgNum:10
            }
        },
        methods:{
            getMsgTitle(){
                return '消息('+this.msgNum+')'
            }
        }
    }
</script>

<style scoped>
#user-msg{
    margin-bottom:50px;
}
</style>
