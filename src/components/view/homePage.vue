<template>
    <div id="homePage-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>{{pageName}}主页</p>
        </div>
        <h1>{{pageName}}主页</h1>
    </div>
</template>

<script>
    export default {
        name: "homePage",
        data(){
            return{
                from:this.$store.state.currentPosition,
                pageName:''
            }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my");
            },
            getName(){
                this.pageName = this.from==="com"?"公司":"个人";
            }
        },
        created() {
            this.getName();
        }
    }
</script>

<style lang="scss" scoped>
#homePage-container{
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
    h1{
        font-weight:100;
    }
}
</style>
