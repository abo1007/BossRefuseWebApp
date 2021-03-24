<template>
    <div id="com-container">
        <transition>
            <router-view></router-view>
        </transition>
        <van-tabbar v-model="active" route id="bar" active-color="#55cac4">
            <van-tabbar-item replace to="/com/home" name="home" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item replace to="/com/focus" name="search" icon="eye-o">发布</van-tabbar-item>
            <van-tabbar-item replace to="/com/msg" name="friends" icon="chat-o" :badge="$store.state.msgNum">消息
            </van-tabbar-item>
            <van-tabbar-item replace to="/com/my" name="setting" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "com",
        data() {
            return {
                active: 'home'
            }
        },
        methods: {
            checkCominfo() {
                let comId = sessionStorage.getItem("comId");
                if (comId == 0) {
                    this.$dialog.confirm({
                        title: '提示',
                        message: '你还没有注册企业信息，无法进入其他功能，点击确认立即注册企业信息',
                    }).then(() => {
                        this.$router.push({name:"com_info"})
                    }).catch(() => {
                        sessionStorage.clear();
                        this.$router.push("/");
                    });
                }
            }
        },
        created() {
            this.checkCominfo();
            this.$store.commit("updatePosition", "com")
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #com-container {
        margin-bottom: 50px;
        overflow-x: hidden;
    }

    #bar {
        bottom: 0;
    }
</style>
