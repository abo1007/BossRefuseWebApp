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
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/slide1.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/slide2.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/slide3.png" alt="">
            </van-swipe-item>
        </van-swipe>

<!--        <div class="s-banner">-->
<!--            <img src="../../assets/slide3.png" alt="">-->
<!--        </div>-->
        <van-notice-bar
                left-icon="volume-o"
                text="巴里阿阿集团的宗旨是让世界没有好做的生意"
        />
        <van-grid :column-num="3">
            <van-grid-item icon="fire-o" text="技术" @click="goTab('technology',1)"/>
            <van-grid-item icon="gift-o" text="产品" @click="goTab('product',2)"/>
            <van-grid-item icon="eye-o" text="设计" @click="goTab('design',3)"/>
            <van-grid-item icon="chart-trending-o" text="运营" @click="goTab('operate',4)"/>
            <van-grid-item icon="photo-o" text="市场" @click="goTab('market',5)"/>
            <van-grid-item icon="more-o" text="更多" @click="goTab('more',6)"/>
        </van-grid>
        <div class="banner">
            <img src="../../assets/fupin.png" alt="">
        </div>
        <p class="focus">
            您可能感兴趣的岗位
            <van-tag type="success" style="margin:0 6px;">前端</van-tag>
        </p>
        <div class="work-container">
            <user-work
                    v-for="(item,index) in testMsgList"
                    :workmsg="item"
                    :key="item.id" />
        </div>
        <div class="statement">
            <p class="title1">Yangbo@2021</p>
        </div>
    </div>
</template>

<script>
import user_work from "./user_work";
    export default {
        name: "user_home",
        data(){
            return{
                SearchValue:'',
                testMsgList:[
                    {
                        workId:0, workTitle:'全栈工程师',workSalary:'1-2k',workTag:['3-5年','硕士研究生','Vue','Java'],
                        workComName:'白嫖科技',workComScale:'0-9',workPublisher:'刘先生·人事',workArea:'南京市 鼓楼区'
                    },
                    {
                        workId:1, workTitle:'富士康普工',workSalary:'4-8K',workTag:['经验不限','学历不限','五险','包食宿'],
                        workComName:'鸿海精密',workComScale:'10000+',workPublisher:'张先生·人事',workArea:'廊坊市 龙河'
                    },
                    {
                        workId:2, workTitle:'PHP工程师',workSalary:'6-10K',workTag:['1年以上','大专','Laravel','双休'],
                        workComName:'智为科技',workComScale:'20-50',workPublisher:'杨先生·人事',workArea:'武汉市 江岸区'
                    },
                    {
                        workId:3, workTitle:'Laravel开发',workSalary:'8-10K',workTag:['2年以上','学历不限','Laravel','双休'],
                        workComName:'云集有赞',workComScale:'1000+',workPublisher:'李先生·人事',workArea:'杭州市 萧山区'
                    }
                ]
            }
        },
        methods:{
            onSearch(){
                this.$router.push({name:'user_searchRes', query:{value:this.SearchValue}})
            },
            goTab(name, cateid){
                this.$router.push({name:'user_category', query:{name:name, cateid:cateid}});
            }
        },
        components:{
            'user-work':user_work
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>

#user-home{
    width:100%;
    .icon1{
        height:34px;
    }
    /*.s-banner{*/
    /*    width:100%;*/
    /*    height:110px;*/
    /*    margin:0;*/
    /*    img{*/
    /*        width:100%;*/
    /*        margin:0;*/
    /*        height:110px;*/
    /*    }*/
    /*}*/
    .my-swipe{
        img{
            width:100%;
            height:110px;
        }
    }
    .banner{
        margin:5px 0;
        display: flex;
        justify-content: center;
        width:100%;
        height:150px;
        img{
            width:96%;
            height:100%;
            border-radius:10px;
            box-shadow:#cccccc 0px 5px 5px,0px -2px 5px #cccccc;
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
        padding-bottom:5px;
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
    .statement{
        p{
            font-weight:100;
            text-align:center;
            margin:5px 0;
        }
        .title1{
            font-size:12px;
            color:#808080;
        }
    }
}
</style>
