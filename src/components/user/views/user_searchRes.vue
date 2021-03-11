<template>
    <div id="user_searchRes">
        <bo-navbar :text="SearchValue" @left-fun="goFunc('user')"/>
        <h1>搜索结果页</h1>
        {{SearchValue}}
    </div>
</template>

<script>
    export default {
        name: "user_searchRes",
        data() {
            return {
                SearchValue: this.$route.query.value
            }
        },
        methods: {
            goFunc(Routername) {
                this.$router.push({name: Routername});
            }
        }

    }
</script>

<style lang="scss" scoped>
    #user_searchRes {

    }
</style>
