<template>
    <div id="privacy-container">
        <bo-navbar text="隐私" @left-fun="goback"/>

        <h1>隐私</h1>
    </div>
</template>

<script>
    export default {
        name: "privacy",
        data(){
            return{
                from:this.$store.state.currentPosition
            }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my")
            }
        }
    }
</script>

<style lang="scss" scoped>
#privacy-container{
    h1{
        font-weight:100;
    }
}
</style>
