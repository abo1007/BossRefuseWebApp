<template>
    <div id="help-container">
        <bo-navbar text="帮助" @left-fun="goback"/>
        <div class="content">
            <div class="url-item" @click="goUrl(urls[0])">
                <img src="../../assets/github.png" alt="">
                <div>
                    <p>GitHub</p>
                    <p>abo1007</p>
                </div>
            </div>
            <div class="url-item" @click="goUrl(urls[1])">
                <img src="../../assets/csdn.png" alt="">
                <div>
                    <p>CSDN blog</p>
                    <p>AI Thabo</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "help",
        data(){
            return{
                from:this.$store.state.currentPosition,
                urls:["https://github.com/abo1007","https://blog.csdn.net/m0_46470372?type=blog"]
            }
        },
        methods:{
            goback(){
                // console.log(this.from);  输出页面来自何处
                this.$router.push("/" + this.from + "/my");
            },
            goUrl(url){
                location.href = url;
            }
        }
    }
</script>

<style lang="scss" scoped>
#help-container{
    background-color:#f9f9f9;
    min-height:100vh;
    h1{
        font-weight:100;
        color:rgb(255,0,0);
    }
    .content{

        .url-item{
            height:100px;
            display: flex;
            width:85%;
            margin:15px auto;
            box-shadow: #cccccc 0px 5px 5px, 0px -2px 5px #cccccc;
            border-radius:10px;
            padding:0 10px;
            align-items: center;
            img{
                height:90%;
                border-radius:50px;
                flex: 1;
            }
            div{
                flex: 3;
                padding:0 10px;
                display: flex;
                justify-content: center;
                flex-direction:column;
                flex-wrap: wrap;
                p{
                    color:#161b22;
                    width:100%;
                    font-weight:bold;
                    font-size:24px;
                    margin:0;
                }
                p:last-child{
                    color:#1f6feb;
                    font-size:26px;
                }
            }
        }
    }

}
</style>
