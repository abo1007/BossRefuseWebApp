<template>
    <div id="assistant-container">
        <bo-navbar text="求职助手" @left-fun="goback"/>
        <h1>求职助手</h1>
    </div>
</template>

<script>
    export default {
        name: "assistant",
        data() {
            return {

            }
        },
        methods: {
            goback() {
                this.$router.push({name: "user_my"});
            }
        }
    }
</script>

<style lang="scss" scoped>
    #assistant-container {



    }
</style>
