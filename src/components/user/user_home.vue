<template>
    <div id="user-home">
        <van-search
                v-model="SearchValue"
                shape="round"
                show-action
                background="#55cac4"
                placeholder="Java工程师"
        >
            <template #action>
                <div class="icon1">
                    <van-icon name="search" @click="onSearch" size="34" color="#fff"/>
                </div>
            </template>
        </van-search>
        <img src="../../../public/user-home-img.png" alt="">
        <van-notice-bar
                left-icon="volume-o"
                text="巴里阿阿集团的宗旨是让世界没有好做的生意"
        />
        <van-grid :column-num="3">
            <van-grid-item icon="fire-o" text="技术" />
            <van-grid-item icon="gift-o" text="产品" />
            <van-grid-item icon="eye-o" text="设计" />
            <van-grid-item icon="chart-trending-o" text="运营" />
            <van-grid-item icon="photo-o" text="市场" />
            <van-grid-item icon="more-o" text="更多" />
        </van-grid>
        <p class="focus">
            您可能感兴趣的岗位
            <van-tag type="success" style="margin:0 6px;">前端</van-tag>
        </p>

    </div>
</template>

<script>
    export default {
        name: "login-home",
        data(){
            return{
                SearchValue:''
            }
        },
        methods:{
            onSearch(){
                this.$toast('诶呀，没写！')
            }
        }
    }
</script>

<style lang="scss" scoped>

#user-home{
    .icon1{
        height:34px;
    }
    img{
        width:100%;
    }
    .focus{
        margin:10px 0;
        font-size:14px;
        padding-left:16px;
    }
}
</style>
