<template>
    <div id="help-container">
        <bo-navbar text="帮助" @left-fun="goback"/>
        <h1>帮助</h1>
    </div>
</template>

<script>
    export default {
        name: "help",
        data(){
            return{
                from:this.$store.state.currentPosition
            }
        },
        methods:{
            goback(){
                // console.log(this.from);  输出页面来自何处
                this.$router.push("/" + this.from + "/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
#help-container{
    h1{
        font-weight:100;
        color:rgb(255,0,0);
    }

}
</style>
