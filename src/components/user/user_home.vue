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
        <div class="banner">
            <img src="../../assets/user-home-img.png" alt="">
        </div>
        <van-notice-bar
                left-icon="volume-o"
                text="巴里阿阿集团的宗旨是让世界没有好做的生意"
        />
        <van-grid :column-num="3">
            <van-grid-item icon="fire-o" text="技术" @click="goTab('technology')"/>
            <van-grid-item icon="gift-o" text="产品" @click="goTab('product')"/>
            <van-grid-item icon="eye-o" text="设计" @click="goTab('design')"/>
            <van-grid-item icon="chart-trending-o" text="运营" @click="goTab('operate')"/>
            <van-grid-item icon="photo-o" text="市场" @click="goTab('market')"/>
            <van-grid-item icon="more-o" text="更多" @click="goTab('more')"/>
        </van-grid>
        <p class="focus">
            您可能感兴趣的岗位
            <van-tag type="success" style="margin:0 6px;">前端</van-tag>
        </p>
        <div class="work-container">
            <user-work
                    v-for="(item,index) in testMsgList"
                    :workmsg="testMsgList[index]"
                    :key="item.id" />

<!--            <div class="work-info">-->
<!--                <p class="title">-->
<!--                    <span class="title">全栈工程师</span>-->
<!--                    <span class="money">1-2K</span>-->
<!--                </p>-->
<!--                <p class="cla">-->
<!--                    <van-tag>3-5年</van-tag>-->
<!--                    <van-tag>本科</van-tag>-->
<!--                    <van-tag>Vue</van-tag>-->
<!--                    <van-tag>Java</van-tag>-->
<!--                </p>-->
<!--                <p class="com">-->
<!--                    <span>白嫖浮云 </span>-->
<!--                    <span>0-9</span>人-->
<!--                </p>-->
<!--                <p class="hr">-->
<!--                    <span class="left">李先生·人事</span>-->
<!--                    <span class="right">北京市 海淀区</span>-->
<!--                </p>-->
<!--            </div>-->

<!--            <div class="work-info">-->
<!--                <p class="title">-->
<!--                    <span class="name">富士康普工</span>-->
<!--                    <span class="money">4-8K</span>-->
<!--                </p>-->
<!--                <p class="cla">-->
<!--                    <van-tag>经验不限</van-tag>-->
<!--                    <van-tag>学历不限</van-tag>-->
<!--                    <van-tag>五险</van-tag>-->
<!--                    <van-tag>包食宿</van-tag>-->
<!--                </p>-->
<!--                <p class="com">-->
<!--                    <span>鸿海精密 </span>-->
<!--                    <span>10000+</span>人-->
<!--                </p>-->
<!--                <p class="hr">-->
<!--                    <span class="left">张先生·人事</span>-->
<!--                    <span class="right">廊坊市 龙河</span>-->
<!--                </p>-->
<!--            </div>-->
<!--            <div class="work-info">-->
<!--                <p class="title">-->
<!--                    <span class="name">富士康普工</span>-->
<!--                    <span class="money">4-8K</span>-->
<!--                </p>-->
<!--                <p class="cla">-->
<!--                    <van-tag>经验不限</van-tag>-->
<!--                    <van-tag>学历不限</van-tag>-->
<!--                    <van-tag>五险</van-tag>-->
<!--                    <van-tag>包食宿</van-tag>-->
<!--                </p>-->
<!--                <p class="com">-->
<!--                    <span>鸿海精密 </span>-->
<!--                    <span>10000+</span>人-->
<!--                </p>-->
<!--                <p class="hr">-->
<!--                    <span class="left">张先生·人事</span>-->
<!--                    <span class="right">廊坊市 龙河</span>-->
<!--                </p>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import user_work from "./user_work";
    export default {
        name: "login-home",
        data(){
            return{
                SearchValue:'',
                testMsgList:[
                    {
                        id:0, name:'全栈工程师',money:'1-2k',tag:['3-5年','硕士研究生','Vue','Java'],
                        com:'白嫖科技',person:'0-9',hr:'刘先生·人事',adr:'南京市 鼓楼区'
                    },
                    {
                        id:1, name:'富士康普工',money:'4-8K',tag:['经验不限','学历不限','五险','包食宿'],
                        com:'鸿海精密',person:'10000+',hr:'张先生·人事',adr:'廊坊市 龙河'
                    },
                    {
                        id:2, name:'富士康普工',money:'4-8K',tag:['经验不限','学历不限','五险','包食宿'],
                        com:'鸿海精密',person:'10000+',hr:'张先生·人事',adr:'廊坊市 龙河'
                    },
                    {
                        id:3, name:'PHP工程师',money:'6-10K',tag:['1年以上','大专','Laravel','双休'],
                        com:'智为科技',person:'20-50',hr:'杨先生·人事',adr:'武汉市 江岸区'
                    }
                ]
            }
        },
        methods:{
            onSearch(){
                this.$toast('诶呀，没写！')
            },
            goTab(name){
                this.$router.push({name:'user_category', params:{name:name}});
            }
        },
        components:{
            'user-work':user_work
        }
    }
</script>

<style lang="scss" scoped>

#user-home{
    width:100%;
    .icon1{
        height:34px;
    }
    .banner{
        width:100%;
        height:110px;
        margin:0;
        img{
            width:100%;
            margin:0;
            height:110px;
        }
    }
    .focus{
        color:#808080;
        margin:10px 0;
        font-size:14px;
        padding-left:16px;
    }
    .work-container{
        background-color:#F5F5F5;
        /*.work-info{*/
        /*    margin-bottom:5px;*/
        /*    padding:10px 15px;*/
        /*    background-color:#fff;*/
        /*    .title{*/
        /*        display:flex;*/
        /*        justify-content:space-between;*/
        /*        font-weight:600;*/
        /*        line-height:12px;*/
        /*        .name{*/

        /*        }*/
        /*        .money{*/
        /*            color:#55cac4;*/
        /*        }*/
        /*    }*/
        /*    .cla{*/
        /*        font-size:12px;*/
        /*        position:relative;*/
        /*        span{*/
        /*            height:14px;*/
        /*            margin:0 2px;*/
        /*            position:relative;*/
        /*            top:0;*/
        /*        }*/
        /*    }*/
        /*    .com{*/
        /*        font-size:13px;*/
        /*        line-height:14px;*/
        /*        font-weight:300;*/
        /*    }*/
        /*    .hr{*/
        /*        display:flex;*/
        /*        justify-content:space-between;*/
        /*        font-size:12px;*/
        /*        .left{*/

        /*        }*/
        /*        .right{*/
        /*            color:#808080;*/
        /*        }*/
        /*    }*/
        /*}*/
    }
}
</style>
