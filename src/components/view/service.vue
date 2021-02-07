<template>
    <div id="service-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>客服</p>
        </div>
        <van-card
                desc="负责线上问题处理"
                title="客服中心"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
            <template #tags>
                <van-tag plain type="success">线上问题</van-tag>
                <van-tag plain type="danger">线上客服</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">400-820-8820</van-button>
            </template>
        </van-card>
        <van-card
                desc="负责诈骗等线下问题处理"
                title="防诈中心"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
            <template #tags>
                <van-tag plain type="danger">公安联合</van-tag>
                <van-tag plain type="primary">欺诈问题</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">010-1234567</van-button>
            </template>
        </van-card>
    </div>
</template>

<script>
    export default {
        name: "service",
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
#service-container{
    .header{
        height:40px;
        width:100%;
        background-color:#55cac4;
        display:flex;
        align-items:center;
        border-radius:0 0 10px 10px;
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
