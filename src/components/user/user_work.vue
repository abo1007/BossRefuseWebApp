<template>
    <div class="work-item" @click="goWorkInfo(workmsg.workId)">
        <p class="title">
            <span class="title">{{workmsg.workTitle}}</span>
            <span class="money">{{workmsg.workSalary}}</span>
        </p>
        <p class="cla">
            <van-tag v-for="item in workTag">{{item}}</van-tag>
        </p>
        <p class="com">
            <span>{{workmsg.workComName}} </span>
            <span>{{workmsg.workComScale}}</span>人
        </p>
        <p class="hr">
            <span class="left">{{workmsg.workPublisher}}</span>
            <span class="right">{{workmsg.workComCity}} {{workmsg.workComArea}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "user_work",
        data(){
            return{
                workTag:[]
            }
        },
        props:['workmsg'],
        methods:{
            goWorkInfo(id){
                this.$router.push({ name:'work_info', params:{workid:id}});
            },
            getTags(){
                if(typeof(this.workmsg.workTag) === 'string'){
                    this.workTag = this.workmsg.workTag.split("，");
                }else{
                    this.workTag = this.workmsg.workTag;
                }
            }
        },
        created() {
            this.getTags();
        }
    }
</script>

<style lang="scss" scoped>
    .work-item{
        margin-bottom:8px;
        padding:10px 15px;
        background-color:#fff;
        box-shadow:0px 3px 10px 0px #808080;
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
