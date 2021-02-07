<template>
    <div id="wages">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>薪酬查询</p>
        </div>
        <h1>薪酬查询</h1>
    </div>
</template>

<script>
    export default {
        name: "wages",
        data(){
            return{
                from:this.$store.state.currentPosition
            }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my");
            }
        }
    }
</script>

<style lang="scss" scoped>
#wages{
    .header{
        height:40px;
        width:100%;
        background-color:#55cac4;
        display:flex;
        align-items:center;
        border-radius: 0 0 10px 10px;


        .icon{
            position:absolute;
            left:10px;
        }
        p{
            text-align:center;
            width:100%;
            font-size:18px;
            margin:0;
            color:#fff;
            font-weight:500;
        }
    }
}
</style>
