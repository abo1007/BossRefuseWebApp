<template>
    <div id="vip-container">
        <bo-navbar text="急速招聘" @left-fun="goback"/>

    </div>
</template>

<script>
    export default {
        name: "com_vip",
        methods:{
            goback(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

</style>
