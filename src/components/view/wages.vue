<template>
    <div id="wages">
        <bo-navbar text="薪酬查询" @left-fun="goback"/>
        <h1>薪酬查询</h1>
    </div>
</template>

<script>
    export default {
        name: "wages",
        data(){
            return{
                from:this.$store.state.currentPosition
            }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
#wages{

}
</style>
