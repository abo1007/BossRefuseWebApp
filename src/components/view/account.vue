<template>
    <div id="account-container">

        <bo-navbar text="账号与安全" @left-fun="goback"/>

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
