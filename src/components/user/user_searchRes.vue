<template>
    <div id="user_searchRes">
        <h1>搜索结果页</h1>
        {{SearchValue}}
    </div>
</template>

<script>
    export default {
        name: "user_searchRes",
        data(){
            return{
                SearchValue:this.$route.query.value
            }
        }

    }
</script>

<style lang="scss" scoped>
#user_searchRes{

}
</style>
