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
            <div class="item" @click="gofunc('/updatepass')">
                <span>
                    <van-icon name="user-circle-o" size="26px" class="icon"/>
                    修改密码
                </span>
                <span>
                    <van-icon name="arrow" class="icon2"/>
                </span>
            </div>

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
            },
            gofunc(url){
                this.$router.push(url)
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
    .content{
        .item{
            height:55px;
            margin:0;
            display:flex;
            justify-content:space-between;
            font-size:15px;
            span{
                display:flex;
                align-items:center;
            }
            span:nth-child(2){
                color:#808080;
            }
            .icon,.icon2{
                margin:0 15px;
            }
        }
    }

}
</style>
