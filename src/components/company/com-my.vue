<template>
    <div id="com-my">
        <h1>com-my</h1>
        <van-button type="primary" @click="goback">主页</van-button>
    </div>
</template>

<script>
    export default {
        name: "com-my",
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

<style scoped>

</style>
