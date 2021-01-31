<template>
    <div id="account-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>账号与安全</p>
        </div>
        <div class="content-container">
            <van-circle v-model="currentRate"
                        :rate="0"
                        :speed="100"
                        :text="circleText"
                        size="140px"
                        class="circle"
                        @click.native.once="addNum"/>
        </div>
        <div class="content">
            <van-cell-group>
                <van-field v-model="fieldText" label="环境监测" readonly/>
                <van-field v-model="fieldText" label="密码检测" readonly/>
                <van-field v-model="fieldText" label="网络检测" readonly/>
                <van-field v-model="fieldText" label="信息检测" readonly/>
            </van-cell-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "account",
        data(){
            return{
                from:this.$store.state.currentPosition,
                currentRate:0,
                circleText:"点击开始体检",
                fieldText:"暂未开始"
            }
        },
        methods:{
            goback(){
                this.$router.push("/" + this.from + "/my");
            },
            addNum(){
                let inter = setInterval(() => {
                    this.currentRate+=2;
                    this.circleText = this.fieldText = this.currentRate + "%";
                    if(this.currentRate === 100){
                        this.circleText = "账号很安全";
                        this.fieldText = "安全";
                        clearInterval(inter);
                    }
                },50)
            }
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
#account-container{
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
    .content-container{
        display: flex;
        justify-content:center;
        padding:15px 0;
        flex-wrap: wrap;
        .circle{
            flex:1;
        }

    }

}
</style>
