<template>
    <div id="handler-container">
        <van-nav-bar
                title="简历处理"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="center-container">

        </div>
        <van-tabs v-model="active">
            <van-tab title="全部">
                <handler-item v-for="item in allOfferData"
                              :key="item.id"
                              :offerdata="item"/>
            </van-tab>
            <van-tab title="待面试">
                <handler-item v-for="item in offerData[0]"
                              :key="item.id"
                              :offerdata="item"/>
            </van-tab>
            <van-tab title="待发放">
                <handler-item v-for="item in offerData[1]"
                              :key="item.id"
                              :offerdata="item"/>
            </van-tab>
            <van-tab title="Offer">
                <handler-item v-for="item in offerData[2]"
                              :key="item.id"
                              :offerdata="item"/>
            </van-tab>
            <van-tab title="已拒绝">
                <handler-item v-for="item in offerData[3]"
                              :key="item.id"
                              :offerdata="item"/>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import handler_item from "../handler_item";

    export default {
        name: "com_handler",
        data(){
            return{
                allOfferData:[],
                active:0,
                offerData:[
                    [],[],[],[]
                ]
            }
        },
        methods:{
            onClickLeft() {
                this.$router.push({name:'com_home'})
            },
            postOfferCateData() {
                this.$axios.get(this.$API.API_GET_COM_OFFER_CATEDATA + "1408" + "/666" ).then(res => {
                    if(res.data.code === 200){
                        console.log(res.data.data);
                        this.allOfferData = res.data.data;
                        this.classifyData();
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了哦");
                    console.log(err);
                })
            },
            classifyData(){
                for (let i=0;i<this.allOfferData.length;i++){
                    switch (this.allOfferData[i].workOfferType) {
                        case 1:
                            this.offerData[0].push(this.allOfferData[i]);
                            break;
                        case 2:
                            this.offerData[1].push(this.allOfferData[i]);
                            break;
                        case 3:
                            this.offerData[2].push(this.allOfferData[i]);
                            break;
                        case 4:
                            this.offerData[3].push(this.allOfferData[i]);
                            break;
                    }


                }
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
