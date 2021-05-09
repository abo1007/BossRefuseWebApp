<template>
    <div id="user-msg">
        <van-nav-bar :title="getMsgTitle()"/>
        <van-pull-refresh
                v-model="isLoading"
                success-text="刷新成功"
                @refresh="onRefresh"
                style="text-align:center;"
                class="msg-container"
        >
            <!--                <p>刷新次数: {{ count }}</p>-->
            <msg-item v-for="(item,index) in MsgNum" :key="item.msgId" :info="item"
                      @click.native="goChat(item.userId, item.comId, item.workId)"/>

        </van-pull-refresh>


    </div>
</template>

<script>
    import msg_item from "../child/msg_item";

    export default {
        name: "login-msg",
        data() {
            return {
                msgNum: 0,
                isLoading: false,
                count: 0,
                MsgTest: [
                    {
                        mid: 0, url: "http://127.0.0.1:8090/public/img/boss.png",
                        name: '白嫖科技', time: '23:08',
                        content: '我们这试干一月不收取任何费用', count: 2,
                        userId: "10001", comId: "1408", workId: "10001"
                    },
                    {
                        mid: 1, url: "http://127.0.0.1:8090/public/img/boss.png", name: 'AAA富士康 高薪直招', time: '00:08',
                        content: '我们最高可以给到每月1500 ', count: 0,
                        userId: "10001", comId: "1408", workId: "10002"
                    },
                ],
                MsgNum: [],
                ID: null
            }
        },
        methods: {
            getMsgTitle() {
                return '消息(' + this.msgNum + ')'
            },
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                    this.count++;
                }, 1000);
            },
            goChat(userId, comId, workId) {
                this.$router.push({name: "user_chat", query: {userid: userId, comid: comId, workid: workId}})
            },
            countMsgNum() {
                this.MsgTest.forEach(item => {
                    this.msgNum += item.count;
                })
            },
            getLateMsg() {
                this.$axios.get(this.$API.API_GET_MAX_MSG + this.ID).then(res => {
                    // console.log(res);
                    if (res.data.code === 200) {
                        if(res.data.data instanceof Array){
                            this.handlerToMsg(res.data.data);
                        }else{
                            this.handlerToMsg([res.data.data]);
                        }
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err)
                })
            },
            handlerToMsg(res) {
                // let obj = {
                //     msgId:null, url:"", name:"",
                //     time:"", content:"", count:1,
                //     userId:null, comId:null, workId:null
                // };
                for (let i = 0; i < res.length; i++) {
                    let obj = {
                        msgId: res[i].msgId,
                        url: this.$API.SERVER_URL + "img/boss.png",
                        name: res[i].workComName,
                        time: res[i].msgTime,
                        content: res[i].msgContent,
                        count: 1,
                        userId: res[i].userId,
                        comId: res[i].workComId,
                        workId: res[i].workId};
                    this.MsgNum.push(obj);
                }
            }
        },
        components: {
            'msg-item': msg_item
        },
        created() {
            this.ID = sessionStorage.getItem('ID');
            this.getLateMsg();
        },
        mounted() {
            this.countMsgNum();
        },
        watch: {
            // msgNum: function (val) {
            //     this.$store.commit("updateMsgNum", val);
            // }
        }
    }
</script>

<style lang="scss" scoped>
    #user-msg {

        margin-bottom: 50px;

        .msg-container {

            height: 80vh;
        }
    }

</style>
