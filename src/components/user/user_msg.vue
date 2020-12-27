<template>
    <div id="user-msg">
        <van-nav-bar :title="getMsgTitle()" />
        <van-pull-refresh
                v-model="isLoading"
                success-text="刷新成功"
                @refresh="onRefresh"
                style="text-align:center;"
                class="msg-container"
        >
<!--                <p>刷新次数: {{ count }}</p>-->
            <msg-item v-for="(item,index) in MsgTest" :info="item" @click.native="goChat(item.mid)"/>

        </van-pull-refresh>

    </div>
</template>

<script>
import msg_item from "../child/msg_item";
    export default {
        name: "login-msg",
        data(){
            return{
                msgNum:3,
                isLoading:false,
                count:0,
                MsgTest:[
                    {
                        mid:0,url:"http://localhost/boss.jpg",name:'AAA廊坊富士康 人事经理',time:'23:08',
                        content:'我们这试学一月不收取任何费用...',count:2
                    },
                    {
                        mid:1,url:"http://localhost/boss.jpg",name:'白嫖科技',time:'00:08',
                        content:'我们这里最高可以给到每月1500',count:1
                    },
                ]
            }
        },
        methods:{
            getMsgTitle(){
                return '消息('+this.msgNum+')'
            },
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                    this.count++;
                }, 1000);
            },
            goChat(msgid){
                this.$router.push({path:`/user/home/chat/${msgid}`});
            }
        },
        components:{
            'msg-item':msg_item
        },
        created() {

        },
        watch:{
            msgNum:function (val) {
                this.$store.commit("updateMsgNum",val);
            }
        }
    }
</script>

<style lang="scss" scoped>
#user-msg{
    margin-bottom:50px;
    .msg-container{

    }
}

</style>
