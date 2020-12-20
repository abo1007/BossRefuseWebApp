<template>
    <div id="overview-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>{{pageTitle}}</p>
        </div>
        {{this.$route.params.type}}
    </div>
</template>

<script>
    export default {
        name: "com_overview",
        data() {
            return {
                pageTitle: ''
            }
        },
        methods: {
            selectTitle() {
                switch (this.$route.params.type) {
                    case "chat":
                        this.pageTitle = "沟通中";
                        break;
                    case "interview":
                        this.pageTitle = "待面试";
                        break;
                    case "offer":
                        this.pageTitle = "录用";
                        break;
                    case "star":
                        this.pageTitle = "收藏";
                        break;
                }
            },
            goback() {
                this.$router.push("/com/my");
            }
        },
        created() {
            this.selectTitle();
        }
    }
</script>

<style lang="scss" scoped>
    #overview-container {
        .header {
            height: 40px;
            width: 100%;
            background-color: #55cac4;
            display: flex;
            align-items: center;

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
    }
</style>
