<template>
    <div id="User-container">
        <transition>
            <router-view></router-view>
        </transition>
        <van-tabbar v-model="active" route id="bar" active-color="#55cac4">
            <van-tabbar-item replace to="/user/home" name="home" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item replace to="/user/focus" name="search" icon="eye-o">关注</van-tabbar-item>
            <van-tabbar-item replace to="/user/msg" name="friends" icon="chat-o" badge="20">消息</van-tabbar-item>
            <van-tabbar-item replace to="/user/my" name="setting" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                active:'home'
            }
        }
    }
</script>

<style scoped>
*{margin:0;padding:0;}

#bar{
    position:absolute;
    bottom:0;
}
</style>
