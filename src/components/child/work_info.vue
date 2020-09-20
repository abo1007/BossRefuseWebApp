<template>
    <div id="work-info-container">
        <van-nav-bar
                :title="getWorkName(this.$route.params.workid)"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        {{this.$route.params.workid}}
    </div>
</template>

<script>
    export default {
        name: "work_info",
        methods:{
            onClickLeft() {
                this.$router.push({name:'user_home'})
            },
            getWorkName(id){
                return "工作编号" + id;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #work-info-container{

    }
</style>
