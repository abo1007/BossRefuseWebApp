<template>
    <div id="Com-container">
        <transition>
            <router-view></router-view>
        </transition>
        <van-tabbar v-model="active" route id="bar" active-color="#55cac4">
            <van-tabbar-item replace to="/com/home" name="home" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item replace to="/com/focus" name="search" icon="eye-o">发布</van-tabbar-item>
            <van-tabbar-item replace to="/com/msg" name="friends" icon="chat-o" badge="20">消息</van-tabbar-item>
            <van-tabbar-item replace to="/com/my" name="setting" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "com",
        data(){
            return{
                active:'home'
            }
        }
    }
</script>

<style scoped>
*{margin:0;padding:0;}
#Com-container{margin-bottom:50px;overflow-x:hidden;}
#bar{
    bottom:0;
}
</style>
