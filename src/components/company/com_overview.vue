<template>
    <div id="overview-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>{{pageTitle}}</p>
        </div>
<!--        {{this.$route.params.cateid}}-->
        <handler-item v-for="item in offerData"
                    :offerdata="item"
                    :key="item.workOfferId"/>
    </div>
</template>

<script>
    import handler_item from "./handler_item";

    export default {
        name: "com_overview",
        data() {
            return {
                pageTitle: '',
                pageTitles: ["收藏", "沟通中", "待面试", "录用", "拒绝"],
                offerData:[]
            }
        },
        methods: {
            selectTitle(){
                this.pageTitle = this.pageTitles[this.$route.params.cateid]
            },
            goback() {
                this.$router.push("/com/my");
            },
            postOfferCateData() {
                this.$axios.get(this.$API.API_GET_COM_OFFER_CATEDATA + "1408" + "/" + this.$route.params.cateid).then(res => {
                    console.log(res.data);
                    if(res.data.code === 200){
                        this.offerData = res.data.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        created() {
            this.selectTitle();
            this.postOfferCateData();
        },
        components:{
            "handler-item":handler_item
        }
    }
</script>

<style lang="scss" scoped>
    #overview-container {
        .header {
            height: 40px;
            width: 100%;
            background-color: #55cac4;
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
    }
</style>
