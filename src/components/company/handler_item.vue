<template>
    <div id="handler-item-container">
        <p class="title">
            <span class="title">{{offermsg.name}}</span>
            <span class="money">{{offermsg.workId}}</span>
        </p>
        <p class="cla">
            <van-tag>{{offermsg.edu}}</van-tag>
            <van-tag>{{offermsg.workExper}}年</van-tag>
            <van-tag>{{offermsg.school}}</van-tag>
            <van-tag>{{offermsg.age}}岁</van-tag>
        </p>
        <p class="hr">
            <span class="left">{{offermsg.workTitle}}</span>
            <span class="right">{{offermsg.workSalary}}</span>
        </p>
        <van-steps :active="offermsg.workOfferType" :active-color="activeColor">
            <van-step>投递简历</van-step>
            <van-step>沟通审核</van-step>
            <van-step>待面试</van-step>
            <van-step>{{offerResult}}</van-step>
        </van-steps>
        <p class="action" v-show="isShow">
            <button class="btn_send" @click="updateOfferType(4)">拒绝</button>
            <button class="btn_say" @click="updateOfferType(offermsg.workOfferType + 1)">{{nextbtn}}</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "handler_item",
        data() {
            return {
                offermsg: {},
                offerResult: "发放Offer",
                activeColor: "#38f",
                nextbtn: "",
                isShow: true,
            }
        },
        props: ['offerdata'],
        methods: {
            tagToArr() {
                // console.log(this.offerdata);
                this.offermsg = this.offerdata;
                if (this.offermsg.workOfferType === 4) {
                    this.offerResult = "已拒绝";
                    this.activeColor = "#ff0000";
                    this.isShow = false;
                }
                this.updateBtn();
            },
            updateBtn() {
                switch (this.offermsg.workOfferType) {
                    case 1:
                        this.nextbtn = "邀请面试";
                        break;
                    case 2:
                        this.nextbtn = "发放offer";
                        break;
                    case 3:
                        this.isShow = false;
                        break;
                    case 4:
                        this.offerResult = "已拒绝";
                        this.activeColor = "#ff0000";
                        this.isShow = false;
                        break;
                }
            },
            updateOfferType(status) {

                // console.log(status);
                this.$axios.post(this.$API.API_POST_UPDATE_OFFER_TYPE, {
                    id:1408,workOfferId:this.offermsg.workOfferId,typeId:status
                }).then(res => {
                    console.log(res.data)
                    if(res.data.code === 200){
                        this.$toast("操作成功");
                        location.reload();
                    }else{
                        this.$toast("修改无效")
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        created() {
            this.tagToArr();
        }
    }
</script>

<style lang="scss" scoped>
    #handler-item-container {
        margin-bottom: 5px;
        padding: 10px 15px;
        background-color: #fff;

        .title {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            line-height: 12px;

            .name {
            }

            .money {
                color: #55cac4;
            }
        }

        .cla {
            font-size: 12px;
            position: relative;

            span {
                height: 14px;
                margin: 0 2px;
                position: relative;
                top: 0;
            }
        }

        .com {
            font-size: 13px;
            line-height: 14px;
            font-weight: 300;
        }

        .hr {
            display: flex;
            justify-content: space-between;
            font-size: 12px;

            .left {
            }

            .right {
                color: #808080;
            }
        }

        .action {
            display: flex;
            justify-content: center;

            button {
                height: 45px;
                display: block;
                width: 45%;
                margin: 0 auto;
                border: none;
                color: #fff;
                font-size: 17px;
                border-radius: 4px;
            }

            .btn_send {
                background-color: #CD5C5C;
            }

            .btn_say {
                background-color: #55cac4;
            }
        }
    }
</style>
