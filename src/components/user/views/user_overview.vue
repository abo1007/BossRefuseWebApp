<template>
    <div id="overview-container">
        <bo-navbar :text="pageTitle" @left-fun="goback"/>
<!--        {{this.$route.params.cateid}}-->
        <div class="offer-container">
            <offer-item v-for="item in offerData"
                        :offerdata="item"
                        :key="item.workOfferId"/>
        </div>
    </div>
</template>

<script>
    import offer_item from "../../child/offer_item";

    export default {
        name: "user_overview",
        data() {
            return {
                pageTitle: '',
                pageTitles: ["收藏", "沟通中", "待面试", "录用", "拒绝"],
                offerData:[]
            }
        },
        methods: {
            selectTitle() {
                this.pageTitle = this.pageTitles[this.$route.params.cateid]
            },
            goback() {
                this.$router.push("/user/my");
            },
            postOfferCateData() {
                this.$axios.get(this.$API.API_POST_OFFER_CATEDATA + this.$ID + "/" + this.$route.params.cateid).then(res => {
                    // console.log(res.data);
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
            "offer-item":offer_item
        }
    }
</script>

<style lang="scss" scoped>
    #overview-container {

    }
</style>
