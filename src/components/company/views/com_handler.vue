<template>
    <div id="handler-container">
        <van-nav-bar
                title="简历处理"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <h1>简历处理</h1>

    </div>
</template>

<script>
    export default {
        name: "com_handler",
        data(){
            return{

            }
        },
        methods:{
            onClickLeft() {
                this.$router.push({name:'com_home'})
            },
            postOfferData(){

            }
        },
        created() {
            this.postOfferData();
        }
    }
</script>

<style lang="scss" scoped>

</style>
