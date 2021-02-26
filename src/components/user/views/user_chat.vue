<template>
    <div id="user-chat">
        <bo-navbar :text="workId" @left-fun="goback"/>
        <h1>聊天界面</h1>
        <h2>UserID {{userId}}</h2>
        <h2>ComID {{comId}}</h2>
        <h2>workID {{workId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "user_chat",
        data(){
          return{
              userId:this.$route.query.userid,
              comId:this.$route.query.comid,
              workId:this.$route.query.workid

          }
        },
        methods:{
            goback(){
                this.$router.back();
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
#user-chat{
    h2{
        font-weight:200;
    }
}
</style>
