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
        <van-grid>
            <van-grid-item icon="notes-o" text="简历处理" badge="2" @click="gofunc('com_handler')"/>
            <van-grid-item icon="coupon-o" text="招聘管理" @click="gofunc('com_workmanager')"/>
            <van-grid-item icon="fire-o" text="热门" @click="gofunc('com_hotwork')"/>
            <van-grid-item icon="points" text="薪资计算" />
        </van-grid>
        <van-grid>
            <van-grid-item icon="friends-o" text="企业信息" badge="2"/>
            <van-grid-item icon="manager-o" text="个人信息" />
            <van-grid-item icon="aim" text="招聘意向" />
            <van-grid-item icon="thumb-circle-o" text="为您推荐" />
        </van-grid>
        <div id="reg-container">
            <div class="img">
                <p>在这里注册企业信息 ></p>
            </div>
        </div>
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

            },
            gofunc(Routername){
                this.$router.push({ name:Routername, params:{from:'com'}  });
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
    #reg-container{
        display: flex;
        justify-content: center;
        width:100%;
        padding:5px 0;
        .img{
            height:70px;
            width:96%;
            /*background-color:#55cac4;*/
            background-image: linear-gradient(to right,#55cac4,#008B8B);
            border-radius:20px;
            display: flex;
            align-items: center;
            box-shadow:0px 0px 10px #808080;
            p{
                color:#fff;
                font-weight:bold;
                font-size:20px;
                padding-left:20px;
            }
        }
    }
}
</style>
