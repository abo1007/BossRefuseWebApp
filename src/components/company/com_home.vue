<template>
    <div id="com-home">
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
        <img src="../../assets/slide1.png" alt="">
        <van-notice-bar
                left-icon="volume-o"
                text="巴里阿阿集团的社会责任是向社会输送大量人才"
        />
    </div>
</template>

<script>
    export default {
        name: "com_home",
        data(){
            return{
                SearchValue:""
            }
        },
        methods:{
            onSearch(){

            }
        }
    }
</script>

<style lang="scss" scoped>
#com-home{
    width:100%;
    .icon1{
        height:34px;
    }
    img{
        width:100%;
    }
    .focus{
        color:#808080;
        margin:10px 0;
        font-size:14px;
        padding-left:16px;
    }
}
</style>
