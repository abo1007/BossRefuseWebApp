<template>
    <div id="user-chat">
        <h1>聊天界面</h1>
        信息ID：{{msgid}}
    </div>
</template>

<script>
    export default {
        name: "user_chat",
        data(){
          return{
              msgid:this.$route.params.msgid
          }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>

</style>
