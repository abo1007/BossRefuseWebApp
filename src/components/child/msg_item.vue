<template>
    <div class="msg-item">
        <div class="left">
            <img :src="info.url" alt="" class="img">
        </div>
        <div class="right">
            <div class="title">
                <span class="titleName">{{info.name}}</span>
                <span class="time">{{info.time}}</span>
            </div>
            <div class="content">
                <p>{{info.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "msg_item",
        props:['info']
    }
</script>

<style lang="scss" scoped>
.msg-item{
    margin:0;
    height:60px;
    display:flex;
    padding:0 10px;
    border-top:#eee 1px solid;
    border-bottom:#eee 1px solid;
    .left{
        flex:1;
        display:flex;
        align-items: center;
        .img{
            height:50px;
            width:50px;
            background-color: #ccc;
            margin:0 auto;
            border-radius:4px;
        }
    }
    .right{
        flex:4;
        padding:8px 0;
        display:flex;
        flex-direction:column;
        .title{
            height:22px;
            margin:0;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .titleName{
                font-weight:600;
                font-size:16px;
            }
            .time{
                font-size:13px;
                color:#808080;
            }
        }
        .content{
            height:22px;
            display:flex;
            p{
                margin:0;
                font-size:14px;
                color:#4d4d4d;
            }
        }

    }

}
</style>
