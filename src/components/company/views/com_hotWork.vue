<template>
    <div id="hotwork">
        <van-nav-bar
                title="热门"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <h1>热门</h1>
    </div>
</template>

<script>
    export default {
        name: "com_hotWork",
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
#hotwork{

}
</style>
