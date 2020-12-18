<template>
    <div id="option">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>设置</p>
        </div>
        <van-cell-group>
            <van-cell center title="深色模式">
                <template #right-icon>
                    <van-switch v-model="blackmode" size="24" active-color="#55cac4" inactive-color="#ffffff"/>
                </template>
            </van-cell>
        </van-cell-group>

    </div>
</template>

<script>
    export default {
        name: "user_option",
        data(){
          return{
              blackmode:false
          }
        },
        methods:{
            goback(){
                this.$router.push("/user/my");
            },
            gofunc(Routername){
                this.$router.push({ name:Routername });
            }
        }
    }
</script>

<style lang="scss" scoped>
#option{
    /*background-color: #55cac4;*/
    .header{
        height:40px;
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
            font-size:18px;
            margin:0;
            color:#fff;
            font-weight:500;
        }
    }
    .content1{
        border-bottom:1px solid #808080;
        margin:0 15px;
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
