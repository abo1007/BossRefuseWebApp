<template>
    <div id="handler-container">
        <van-nav-bar
                title="简历处理"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="center-container">
            <handler-item v-for="item in offerData"
                          :key="item.id"
                          :offerdata="item"/>
        </div>

    </div>
</template>

<script>
    import handler_item from "../handler_item";

    export default {
        name: "com_handler",
        data(){
            return{
                offerData:[]
            }
        },
        methods:{
            onClickLeft() {
                this.$router.push({name:'com_home'})
            },
            postOfferCateData() {
                this.$axios.get(this.$API.API_GET_COM_OFFER_CATEDATA + "1408" + "/666" ).then(res => {
                    if(res.data.code === 200){
                        this.offerData = res.data.data;
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了哦");
                    console.log(err);
                })
            }
        },
        created() {
            this.postOfferCateData();
        },
        components:{
            "handler-item":handler_item
        }
    }
</script>

<style lang="scss" scoped>
#handler-container{
    .center-container{
        background-color:#eeeeee;
    }
}
</style>
