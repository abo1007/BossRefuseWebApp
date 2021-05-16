<template>
    <div id="homePage-container">
        <bo-navbar :text="pageName" @left-fun="goback"/>

        <div class="top">
            <img src="http://127.0.0.1:8090/public/img/boss.png" alt="用户头像" />
            <p class="username">{{userData.nickname}}</p>
            <p class="desc">2000-10-07 来到Boss直拒</p>
            <p class="content">让我们一起开始新的旅行</p>
        </div>

        <div class="center">
            <button @click="goback">开启旅行</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "homePage",
        data() {
            return {
                from: this.$route.params.from,
                pageName: '',
                userData:{}
            }
        },
        methods: {
            goback() {
                this.$router.push("/" + this.from + "/my");
            },
            getName() {
                this.pageName = this.from === "com" ? "公司主页" : "个人主页";
            },
            getTyoe() {
                if (this.from === "com") {

                }else if(this.from === "user"){
                    this.getUserData();
                }
            },
            getUserData(){
                this.$axios.get(this.$API.API_GET_USER_DATA + sessionStorage.getItem("ID")).then(res => {
                    if (res.data.code === 200){
                        console.log(res.data);
                        this.userData = res.data.data;
                    }
                }).catch(err => {
                    console.log(err);
                    this.$toast.fail("网络开小差了。");
                })
            },
            getComData(){

            }
        },
        created() {
            this.getName();
            this.getTyoe();
        }
    }
</script>

<style lang="scss" scoped>
    #homePage-container {
        background-color: #55cac4;


        h1 {
            font-weight: 100;
        }
        .top{
            height:260px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;


            img{
                display: block;
                height: 100px;
                width: 100px;
                margin-top: 50px;
                border-radius: 50px;
                box-shadow:#fff 0 0 15px;

            }
            p{
                color: #ffffff;
                margin: 8px 0;
            }
            .username{
                font-size:22px;
                font-weight: bold;
                margin-top: 14px;
            }
            .desc{
                font-weight: bold;
            }
        }
        .center{
            height:100px;
            display: flex;
            justify-content: center;
            padding-top: 40px;
            button{
                height:40px;
                width:200px;
                border-radius:10px;
                background-image: linear-gradient(to right,#55cac4,#008B8B);
                box-shadow:#fff 0 0 15px;
                border: none;
                color:#fff;
                font-weight: bold;

            }
        }
    }
</style>
