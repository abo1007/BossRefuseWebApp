<template>
    <div id="activity1">
        <bo-navbar text="活动页面1" @left-fun="goback"/>

    </div>
</template>

<script>
    export default {
        name: "activity1",
        data() {
            return {}
        },
        methods: {
            goback() {
                this.$router.push("/user/home");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #activity1 {

    }
</style>
