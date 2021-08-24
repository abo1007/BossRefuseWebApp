<template>
    <div id="user-home">
        <van-search
                v-model="SearchValue"
                shape="round"
                show-action
                background="#55cac4"
                placeholder="Java工程师">
            <template #action>
                <div class="icon1">
                    <van-icon name="search" @click="onSearch" size="34" color="#fff"/>
                </div>
            </template>
        </van-search>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                <img :src="baseURL + item.imgUrl" alt="加载失败">
            </van-swipe-item>
        </van-swipe>

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
            <img src="../../assets/fupin.png" alt="" @click="goFunc('activity1')">
        </div>
        <p class="focus">
            您可能感兴趣的岗位
            <span @click="tagToSearch('前端')">前端</span>
            <span @click="tagToSearch('Java')">Java</span>

        </p>
        <div class="work-container">
            <user-work
                    v-for="(item,index) in workfaceData"
                    :workmsg="item"
                    :key="item.id"/>
            <p class="loader" @click="continueGetWorkFaceData">加载更多</p>
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
        data() {
            return {
                baseURL:"http://api.abo.com:8090/public",
                SearchValue: '',
                workfaceData: [
                    {
                        workId: 0,
                        workTitle: '全栈工程师',
                        workSalary: '1-2k',
                        workTag: ['3-5年', '硕士研究生', 'Vue', 'Java'],
                        workComName: '白嫖科技',
                        workComScale: '0-9',
                        workPublisher: '刘先生·人事',
                        workArea: '南京市 鼓楼区'
                    },
                    {
                        workId: 1,
                        workTitle: '富士康普工',
                        workSalary: '4-8K',
                        workTag: ['经验不限', '学历不限', '五险', '包食宿'],
                        workComName: '鸿海精密',
                        workComScale: '10000+',
                        workPublisher: '张先生·人事',
                        workArea: '廊坊市 龙河'
                    },
                    {
                        workId: 2,
                        workTitle: 'PHP工程师',
                        workSalary: '6-10K',
                        workTag: ['1年以上', '大专', 'Laravel', '双休'],
                        workComName: '智为科技',
                        workComScale: '20-50',
                        workPublisher: '杨先生·人事',
                        workArea: '武汉市 江岸区'
                    },
                    {
                        workId: 3,
                        workTitle: 'Laravel开发',
                        workSalary: '8-10K',
                        workTag: ['2年以上', '学历不限', 'Laravel', '双休'],
                        workComName: '云集有赞',
                        workComScale: '1000+',
                        workPublisher: '李先生·人事',
                        workArea: '杭州市 萧山区'
                    }
                ],
                nextUrl: "",
                // 限制快速点击
                clickLimit: true,
                bannerList:[]
            }
        },
        methods: {
            onSearch() {
                if(this.SearchValue === "" || this.SearchValue.length > 10){
                    this.$dialog.alert({
                        message: '非法搜索',
                    }).then(() => {

                    });
                    return false;
                }
                this.$router.push({name: 'user_searchRes', query: {value: this.SearchValue}})
            },
            goTab(name, cateid) {
                this.$router.push({name: 'user_category', query: {name: name, cateid: cateid}});
            },
            goFunc(Routername) {
                this.$router.push({name: Routername});
            },
            getWorkFaceData() {
                this.$axios.get(this.$API.API_GET_WORKFACE).then(res => {
                    if (res.data.code == 200) {
                        this.workfaceData = res.data.data.data;
                        this.nextUrl = res.data.data.next_page_url;
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err);
                })
            },
            // 继续获取数据方法
            continueGetWorkFaceData() {
                // 点击限制器 防止多次快速点击
                if (this.clickLimit) {
                    this.clickLimit = false;
                    // 如果 next_page_url为null 停止
                    if (this.nextUrl == null) {
                        this.$toast("没有更多了。。。");
                        this.clickLimit = true;
                        return false;
                    }
                    this.$axios.get(this.nextUrl).then(res => {
                        if (res.data.code == 200) {
                            for (let i = 0; i < res.data.data.data.length; i++) {
                                this.workfaceData.push(res.data.data.data[i]);
                            }
                            this.nextUrl = res.data.data.next_page_url;
                            this.clickLimit = true;
                        }
                    }).catch(err => {
                        this.$toast.fail("网络开小差了。");
                        this.clickLimit = true;
                        console.log(err);
                    })
                }
            },
            tagToSearch(value){
                this.$router.push({name: 'user_searchRes', query: {value: value}})
            },
            getBanner() {
                this.$axios.get(this.$API.API_GET_BANNER).then(res => {
                    if(res.data.code == 200){
                        this.bannerList = res.data.data;
                    }
                })
            }
        },
        components: {
            'user-work': user_work
        },
        created() {
            this.getWorkFaceData();
            this.getBanner();
        }
    }
</script>

<style lang="scss" scoped>

    #user-home {
        width: 100%;

        .icon1 {
            height: 34px;
        }

        .my-swipe {
            img {
                width: 100%;
                height: 110px;
            }
        }

        .banner {
            margin: 5px 0;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 150px;

            img {
                width: 96%;
                height: 100%;
                border-radius: 10px;
                box-shadow: #cccccc 0px 5px 5px, 0px -2px 5px #cccccc;
            }
        }

        .focus {
            color: #808080;
            margin: 10px 0;
            font-size: 14px;
            padding-left: 16px;
            span{
                background-color: #55cac4;
                padding:4px 6px;
                border-radius: 4px;
                color: #fff;
                margin: 0 6px;
            }
        }

        .work-container {
            background-color: #F5F5F5;
            padding-bottom: 5px;

            .loader {
                text-align: center;
                margin: 5px 0;
                font-size: 14px;
                color: #808080;

            }
        }

        .statement {
            p {
                font-weight: 100;
                text-align: center;
                margin: 5px 0;
            }

            .title1 {
                font-size: 12px;
                color: #808080;
            }
        }
    }
</style>
