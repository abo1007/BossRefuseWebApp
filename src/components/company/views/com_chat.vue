<template>
    <div id="com-chat">
        <bo-navbar :text="msgid" @left-fun="goback"/>
        <h1>聊天界面</h1>
        信息ID：{{msgid}}
    </div>
</template>

<script>
    export default {
        name: "com_chat",
        data(){
            return{
                msgid:this.$route.params.msgid
            }
        },
        methods:{
            goback(){
                this.$router.push({name:'user_msg'});
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>

</style>
