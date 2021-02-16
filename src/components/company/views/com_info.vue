<template>
    <div id="info-container">
        <van-nav-bar
                title="企业信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="cominfoData.workComId"
                   type="digit"
                   label="企业ID"
                   readonly/>
        <van-field v-model="cominfoData.workComName"
                   label="企业短名"
                   readonly/>
        <van-field v-model="cominfoData.workComPerson"
                   label="企业法人"
                   readonly/>
        <van-field v-model="cominfoData.workComAllName"
                   label="企业全名"
                   readonly/>
        <van-field v-model="cominfoData.workComScale"
                   label="企业规模"
                   readonly/>
        <van-field v-model="cominfoData.workComDate"
                   label="注册日期"
                   readonly/>
        <van-field v-model="cominfoData.workComCate"
                   label="行业类别"
                   readonly/>

        <van-field v-model="cominfoData.workComTag"
                   label="特点标签"
                   readonly/>
        <van-field v-model="cominfoData.workComCity"
                   label="城市"
                   readonly/>
        <van-field v-model="cominfoData.workComArea"
                   label="地区"
                   readonly/>
        <van-field v-model="cominfoData.workComIntro"
                   label="公司简介"
                   readonly/>
        <van-field v-model="cominfoData.workComCap"
                   label="注册资本(万元)"
                   readonly/>
    </div>
</template>

<script>
    export default {
        name: "com_info",
        data(){
            return{
                cominfoData:{
                    workComId:1408,
                    workComName:"白嫖科技",
                    workComPerson:"杰克马",
                    workComAllName:"南京市白嫖科技发展有限公司",
                    workComScale:"0-9",
                    workComDate:"2010-01-01",
                    workComCate:"互联网/科技",
                    workComTag:"朝八晚六，收费零食，自费团建",
                    workComCity:"南京市",
                    workComArea:"鼓楼区",
                    workComIntro:"这个公司很懒，什么都没有留下",
                    workComCap:1

                }

            }
        },
        methods:{
            onClickLeft(){
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
