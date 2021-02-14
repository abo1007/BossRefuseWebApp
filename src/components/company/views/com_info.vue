<template>
    <div id="info-container">
        <van-nav-bar
                title="企业信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        name: "com_info",
        data(){
            return{


            }
        },
        methods:{
            onClickLeft(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
