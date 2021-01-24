<template>
    <div id="workManager-container">
        <van-nav-bar
                title="招聘管理"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <h1>招聘处理</h1>
    </div>
</template>

<script>
    export default {
        name: "com_workManager",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft() {
                this.$router.push({name:'com_home'})
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
#workManager-container{

}
</style>
