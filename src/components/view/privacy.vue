<template>
    <div id="privacy-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>隐私</p>
        </div>
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
    .header{
        height:50px;
        width:100%;
        background-color:#55cac4;
        display:flex;
        align-items:center;
        .icon{
            position:absolute;
            left:10px;
        }
        p{
            text-align:center;
            width:100%;
            font-size:20px;
            margin:0;
            color:#fff;
            font-weight:500;
        }
    }
    h1{
        font-weight:100;
    }
}
</style>
