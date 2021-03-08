<template>
    <div id="User-container">
        <transition>
            <router-view style="height:100%;"></router-view>
        </transition>
        <van-tabbar v-model="active" route id="bar" active-color="#55cac4">
            <van-tabbar-item replace to="/user/home" name="home" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item replace to="/user/focus" name="search" icon="eye-o">关注</van-tabbar-item>
            <van-tabbar-item replace to="/user/msg" name="friends" icon="chat-o" :badge="msgNum">消息</van-tabbar-item>
            <van-tabbar-item replace to="/user/my" name="setting" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                active:'home',
                msgNum:this.$store.state.msgNum
            }
        },
        methods:{

        },
        created() {
            this.$store.commit("updatePosition","user");
        }
    }
</script>

<style scoped>
*{margin:0;padding:0;}
#User-container{
    margin-bottom:50px;
    overflow-x:hidden;
}
#bar{
    height:50px;
    z-index:99;
}
</style>
