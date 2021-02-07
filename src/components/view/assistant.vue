<template>
    <div id="assistant-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>求职助手</p>
        </div>
        <h1>求职助手</h1>
    </div>
</template>

<script>
    export default {
        name: "assistant",
        data() {
            return {

            }
        },
        methods: {
            goback() {
                this.$router.push({name: "user_my"});
            }
        }
    }
</script>

<style lang="scss" scoped>
    #assistant-container {
        .header {
            height: 40px;
            width: 100%;
            background-color: #55cac4;
            display: flex;
            align-items: center;
            border-radius: 0 0 10px 10px;

            .icon {
                position: absolute;
                left: 10px;
            }

            p {
                text-align: center;
                width: 100%;
                font-size: 18px;
                margin: 0;
                color: #fff;
                font-weight: 500;
            }
        }

        img {
            width: 100%;
        }
    }
</style>
