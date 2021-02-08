<template>
    <div id="homePage-container">
        <bo-navbar text="主页" @left-fun="goback"/>

        <h1>{{pageName}}主页</h1>
    </div>
</template>

<script>
    export default {
        name: "homePage",
        data() {
            return {
                from: this.$store.state.currentPosition,
                pageName: ''
            }
        },
        methods: {
            goback() {
                this.$router.push("/" + this.from + "/my");
            },
            getName() {
                this.pageName = this.from === "com" ? "公司" : "个人";
            }
        },
        created() {
            this.getName();
        }
    }
</script>

<style lang="scss" scoped>
    #homePage-container {


        h1 {
            font-weight: 100;
        }
    }
</style>
