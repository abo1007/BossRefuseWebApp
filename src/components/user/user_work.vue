<template>
    <div class="work-info">
        <p class="title">
            <span class="title">{{workmsg.name}}</span>
            <span class="money">{{workmsg.money}}</span>
        </p>
        <p class="cla">
            <van-tag v-for="item in workmsg.tag">{{item}}</van-tag>
        </p>
        <p class="com">
            <span>{{workmsg.com}} </span>
            <span>{{workmsg.person}}</span>人
        </p>
        <p class="hr">
            <span class="left">{{workmsg.hr}}</span>
            <span class="right">{{workmsg.adr}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "user_work",
        props:['workmsg']
    }
</script>

<style lang="scss" scoped>
    .work-info{
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
