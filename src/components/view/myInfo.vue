<template>
    <div id="myinfo-container">
        <bo-navbar text="个人信息" @left-fun="goback"/>

    </div>
</template>

<script>
    export default {
        name: "myInfo",
        data(){
            return{

            }
        },
        methods:{
            goback(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
#myinfo-container{

}
</style>
