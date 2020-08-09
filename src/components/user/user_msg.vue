<template>
    <div id="user-msg">
        <van-nav-bar :title="getMsgTitle()" />
        <van-pull-refresh
                v-model="isLoading"
                success-text="刷新成功"
                @refresh="onRefresh"
                style="text-align:center;"
        >
            <p>刷新次数: {{ count }}</p>
            <msg-item></msg-item>
            <msg-item></msg-item>
        </van-pull-refresh>

    </div>
</template>

<script>
import msg_item from "../child/msg_item";
    export default {
        name: "login-msg",
        data(){
            return{
                msgNum:10,
                isLoading:false,
                count:0
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
        },
        components:{
            'msg-item':msg_item
        }
    }
</script>

<style scoped>
#user-msg{
    margin-bottom:50px;
}
</style>
