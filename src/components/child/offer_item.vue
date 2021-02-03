<template>
    <div class="offer-item">
        <p class="title">
            <span class="title">{{offermsg.workTitle}}</span>
            <span class="money">{{offermsg.workSalary}}</span>
        </p>
        <p class="cla">
            <van-tag v-for="item in offermsg.workTag">{{item}}</van-tag>
        </p>
        <p class="com">
            <span>{{offermsg.workComName}} </span>
            <span>{{offermsg.workComScale}}</span>人
        </p>
        <p class="hr">
            <span class="left">{{offermsg.workPublisher}}</span>
            <span class="right">{{offermsg.workComCity}} {{offermsg.workComArea}}</span>
        </p>
        <van-steps :active="offermsg.workOfferType" :active-color="activeColor">
            <van-step>投递简历</van-step>
            <van-step>HR沟通审核</van-step>
            <van-step>待面试</van-step>
            <van-step>{{offerResult}}</van-step>
        </van-steps>

    </div>
</template>

<script>
    export default {
        name: "offer_item",
        data(){
            return{
                offermsg:{},
                offerResult:"发放Offer",
                activeColor:"#38f"
            }
        },
        props:['offerdata'],
        methods:{
            tagToArr(){
                // console.log(this.offerdata);
                this.offermsg = this.offerdata;
                this.offermsg.workTag = this.offermsg.workTag.split("，");
                // console.log(this.offermsg.workTag);
                if(this.offermsg.workOfferType === 4){
                    this.offerResult = "已拒绝";
                    this.activeColor = "#ff0000";
                }
            }
        },
        created() {
            this.tagToArr();
        }
    }
</script>

<style lang="scss" scoped>
    .offer-item{
        margin-bottom:5px;
        padding:10px 15px;
        background-color:#fff;
        .title{
            display:flex;
            justify-content:space-between;
            font-weight:600;
            line-height:12px;
            .name{}
            .money{
                color:#55cac4;
            }
        }
        .cla{
            font-size:12px;
            position:relative;
            span{
                height:14px;
                margin:0 2px;
                position:relative;
                top:0;
            }
        }
        .com{
            font-size:13px;
            line-height:14px;
            font-weight:300;
        }
        .hr{
            display:flex;
            justify-content:space-between;
            font-size:12px;
            .left{}
            .right{
                color:#808080;
            }
        }
    }
</style>
