<template>
    <div id="com-option" :style="color">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>设置</p>
        </div>
        <van-cell-group>
            <van-cell center title="深色模式" :style="color">
                <template #right-icon>
                    <van-switch v-model="blackmode"
                                size="24"
                                active-color="#55cac4"
                                inactive-color="#ffffff"
                                @input="onInput2"/>
                </template>
            </van-cell>
            <van-cell center title="隐私状态" :style="color">
                <template #right-icon>
                    <van-switch :value="privatemode"
                                size="24"
                                active-color="#55cac4"
                                inactive-color="#ffffff"
                                @input="onInput" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-button type="danger" @click="goOut"
                    class="out_btn" block
                    color="linear-gradient(to right,#AFEEEE,#008B8B)"
        >退出登录</van-button>
    </div>
</template>

<script>
    export default {
        name: "com_option",
        data(){
            return{
                blackmode:false,
                privatemode:true,
                color:"background:#ffffff;"
            }
        },
        methods:{
            goback(){
                this.$router.push("/com/my");
            },
            goOut(){
                this.$dialog.confirm({
                    title: '提醒',
                    message: '确定要退出登录吗？',
                }).then(() => {
                    window.sessionStorage.clear();
                    this.$router.push("/");
                });
            },
            onInput(privatemode) {
                let msg = this.privatemode?"确定要关闭吗？关闭后应聘者将无法发现你":"确定要打开吗？大家将能够发现你";
                this.$dialog.confirm({
                    title: '提醒',
                    message: msg,
                }).then(() => {
                    this.privatemode = privatemode;
                });
            },
            onInput2(blackmode,first){
                if(first) {
                    let a = parseInt(localStorage.getItem("theme"));
                    this.blackmode = Boolean(a);
                }else {
                    this.blackmode = blackmode;
                }

                if(this.blackmode){
                    this.color = "background:#303030;color:#ffffff;";
                }else{
                    this.color = "background:#ffffff;color:#323232;";
                }
                localStorage.setItem("theme",Number(this.blackmode));
            }
        },
        created() {
            this.onInput2(true,1);
        }
    }
</script>

<style lang="scss" scoped>
    #com-option {

        width:100%;
        min-height:100vh;

        .header {
            background-image: linear-gradient(to right,#55cac4,#008B8B);
            height: 40px;
            width: 100%;
            /*background-color: #55cac4;*/
            display: flex;
            align-items: center;
            .icon {
                position: absolute;
                left: 10px;
            }
            p {
                text-align: center;
                width: 100%;
                font-size: 18px;
                margin: 0;
                color: #fff;
                font-weight: 500;
            }
        }

        .content1 {
            border-bottom: 1px solid #808080;
            margin: 0 15px;

            .item {
                height: 55px;
                margin: 0;
                display: flex;
                justify-content: space-between;
                font-size: 15px;

                span {
                    display: flex;
                    align-items: center;
                }

                span:nth-child(2) {
                    color: #808080;
                }

                .icon, .icon2 {
                    margin: 0 15px;
                }
            }
        }

        .out_btn{
            border-radius:10px;
            margin:10px auto;
            width:90%;
            font-size:17px;
            box-shadow:0px 0px 10px #4d4d4d;
        }
    }
</style>
