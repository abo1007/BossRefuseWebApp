<template>
    <div id="user_searchRes">
<!--        <bo-navbar :text="SearchValue" @left-fun="goFunc('user')"/>-->
        <div class="topbar">
            <div class="top">
                <van-icon name="arrow-left" size="30px" color="#55cac4" @click="goFunc('user')"/>
            </div>
            <h1>{{SearchValue}}</h1>

        </div>
        <van-tabs v-model="activeName" color="#55cac4" :before-change="beforeChange">
            <van-tab title="职位" name="1">
                <div class="work-container">
                    <user-work v-for="item in searchResult" :workmsg="item" style="margin-top:5px"/>
                </div>
            </van-tab>
            <van-tab title="公司" name="2">

            </van-tab>
            <van-tab title="内容" name="3">

            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import user_work from "../user_work";

    export default {
        name: "user_searchRes",
        data() {
            return {
                SearchValue: this.$route.query.value,
                searchResult:[],
                activeName: '1'
            }
        },
        methods: {
            goFunc(Routername) {
                this.$router.push({name: Routername});
            },
            getSearchRes() {
                this.$axios.get(this.$API.API_GET_SEARCH_WORKFACE + this.SearchValue).then(res => {
                    if (res.data.code == 200) {
                        // console.log(res.data.data);
                        this.searchResult = res.data.data;
                    } else {
                        this.$toast.fail("这里空落落的，什么都没有");
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err)
                })
            },
            beforeChange(index){
                return new Promise((resolve) => {
                    // 在 resolve 函数中返回 true 或 false
                    if(index == "2" || index == "3"){
                        this.tips();
                    }
                    resolve(true);
                });
            },
            tips(){
                this.$toast.fail("这里空空的，什么都没有")
            }
        },
        created() {
            this.getSearchRes();
        },
        components:{
            'user-work':user_work
        }

    }
</script>

<style lang="scss" scoped>
    #user_searchRes {
        .topbar{
            .top{
                height:40px;
                display: flex;
                align-items: center;
            }
        }
        h1{
            color: #55cac4;
            font-weight:200;
            margin:0 0 15px 40px;
        }
    }
</style>
