<template>
    <div id="work-info-container">
        <van-nav-bar
                :title="workInfoItem.workTitle"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
                @click-right="getWorkName"
        >
            <template #right>
                <van-icon name="warning-o" size="26"/>
            </template>
        </van-nav-bar>
        <div class="header">
            <p class="top">
                <span class="title">{{workInfoItem.workTitle}}</span>
                <span class="price">{{workInfoItem.workSalary}}</span>
            </p>
        </div>
        <div class="content">
            <div class="tag">
                <div class="tag-item" v-for="item in workInfoItem.workTag">{{item}}</div>
            </div>
            <div class="comp">
                <img src="../../assets/com-header.jpg" alt="">
                <div class="right">
                    <p class="com1">
                        <span class="cname">{{workInfoItem.workComName}}</span>

                    </p>
                    <p class="com2">
                        <span class="trade">{{workInfoItem.workComCate}}</span>
                        <span class="person">{{workInfoItem.workComScale}}人</span>
                        <span class="area">{{workInfoItem.workComCity}}·{{workInfoItem.workComArea}}</span>
                    </p>
                </div>
            </div>

            <div class="text" v-html="workInfoItem.workIntro">

                岗位职责<br/>
                1、负责子公司职场系统（HR系统、OA系统、财务系统等）的维护和新功能二次开发；<br/>
                2、负责HR系统和审核业务系统的打通，如打卡和工作量统计等；<br/>
                3、参与团队前端技术栈的建设和更新；<br/>
                岗位要求<br/>
                1、精通Javasript/HTML/CSS等前端开发技术，基础扎实；<br/>
                2、熟悉当下主流的前端框架(React/Vue/Angular等)，有React开发经验优先；<br/>
                3、两年及以上 Node.js 开发工作经验，熟悉 ES6, ES7 语法，有 Express 或 Koa 框架的使用经验；<br/>
                4、熟悉Linux/Unix平台开发，至少熟悉一种脚本语言，具备优秀的代码习惯；<br/>
                5、理解微服务架构，有分布式系统搭建与研发经验；<br/>
                6、熟悉Web应用系统开发，对HTTP、TCP/IP协议及web服务器等有所理解；拥有良好的安全意识，熟悉常见的网络安全攻防策略；<br/>
                7、有Nginx、Elasticsearch、Kafka等开源工具运维开发经验者优先；<br/>
                8、有 MySQL, Redis 或 MongoDB 等相关数据库使用经验；<br/>
                9、有主导开发过中型以上系统经验，有ci/cd等自动化部署经验者优先；<br/>
                10、良好的沟通表能力和团队合作精神，有责任心，抗压能力好；<br/>


            </div>
        </div>
        <div class="company">
            <div class="hr">
                <img src="../../assets/hr-header.jpg" alt="">
                <div class="right">
                    <p class="hname">{{workInfoItem.workPublisher}}</p>
                    <p class="tip">1小时前来过</p>
                </div>
            </div>

        </div>
        <div class="action">
            <button class="btn_send" @click="sendResume">投递简历</button>
            <button class="btn_say" @click="goChat">立即沟通</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "work_info",
        data() {
            return {
                tag: ['本科', '1-3年', 'PHP', 'Laravel', 'ThinkPHP'],
                workInfoItem: {},
                workid: this.$route.params.workid,
                candId:null,
                ID:null
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push({name: 'user_home'})
            },
            getWorkName() {
                this.$toast.success("工作编号" + this.workid);
            },
            getWorkInfo() {
                this.$axios.get(this.$API.API_GET_WORK + this.$route.params.workid).then(res => {
                    if (res.data.code == 200) {
                        // console.log(res.data);
                        this.workInfoItem = res.data.data;
                        console.log(this.workInfoItem);
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err)
                })
            },
            goChat() {
                this.$router.push({
                    name: "user_chat", query: {
                        workid: this.workInfoItem.workId,
                        userid:this.ID,
                        comid:this.workInfoItem.workComId,
                    }
                })
            },
            sendResume() {
                this.$dialog.confirm({
                    title: '客官且慢',
                    message: '确定要直接投递简历吗，建议先与招聘者聊聊，应聘成功率大涨哦！',
                    confirmButtonText: '我要硬刚',
                    confirmButtonColor: '#ff0000',
                    cancelButtonText: '去聊聊看',
                    cancelButtonColor: '#55cac4'
                }).then(() => {

                    if(!this.candId){
                        this.$toast.fail("还没有创建简历！");
                        return false;
                    }
                    let data = {
                        userId: this.ID,
                        workComId: this.workInfoItem.workComId,
                        candId: this.candId,
                        workId: this.workInfoItem.workId,
                        editorId: this.workInfoItem.workPublisherId
                    };
                    console.log(data);
                    this.$axios.post(this.$API.API_POST_OFFER, data).then(res => {
                        // console.log(res);
                        if (res.data.code === 200) {
                            // this.$toast.success("投递成功");
                            this.$toast("你牛逼，简历已投递");

                        } else if (res.data.code === 210) {
                            this.$toast.fail("您已经投递了这份工作");
                            return false;
                        } else {
                            this.$toast.fail("未知错误...");
                            return false;
                        }

                    }).catch(err => {
                        this.$toast.fail("网络开小差了。");
                        console.log(err);
                    })
                }).catch(() => {
                    this.$toast.success("听人劝 吃饱饭")
                });
            }
        },
        created() {
            this.ID = sessionStorage.getItem('ID');
            this.candId = sessionStorage.getItem("candId");
            this.getWorkInfo();
        }
    }
</script>

<style lang="scss" scoped>
    #work-info-container {
        font-family: 微软雅黑;
        padding-bottom: 50px;

        .header {
            .top {
                width: 95%;
                margin: 10px auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    font-size: 26px;
                }

                .price {
                    font-size: 20px;
                    color: #55cac4;
                    font-weight: bold;
                }
            }
        }

        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            > div {
                width: 92%;
            }

            .tag {
                margin: 5px 0;
                display: flex;
                align-items: center;

                .tag-item {
                    display: inline-block;
                    height: 20px;
                    padding: 2px 5px;
                    line-height: 20px;
                    background-color: #808080;
                    color: #fff;
                    margin: 0 2px;
                    border-radius: 5px;
                    font-size: 14px;
                }
            }

            .p1 {
                width: 95%;
                font-size: 20px;
                margin: 10px 0;
            }

            .comp {
                width: 86%;
                color: #FFFAF0;
                height: 60px;
                display: flex;
                align-items: center;
                background-color: rgba(64, 224, 208, .6);
                border-radius: 5px;
                padding: 0 10px;
                margin: 10px 0;

                img {
                    height: 50px;
                    border-radius: 5px;
                }

                .right {
                    height: 50px;
                    width: 100%;
                    margin: 0 5px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;

                    p {
                        width: 100%;
                        margin: 0;
                        display: flex;
                        justify-content: space-between;
                    }

                    .com1 {

                        font-size: 22px;
                        font-weight: bold;
                    }

                    .com2 {
                        font-size: 12px;
                        color: #4d4d4d;
                        font-weight: bold;

                    }
                }
            }

            .text {
                width: 90%;
                font-size: 14px;
                font-weight: 200;
                line-height: 22px;
                padding-bottom: 8px;
                min-height: 320px;
            }
        }

        .company {
            > p, > div {
                width: 94%;
                margin: 0 auto;
            }

            .hr {
                height: 60px;
                display: flex;
                border-top: 1px solid #ccc;
                /*border-bottom:1px solid #ccc;*/
                margin: 0 auto;
                padding: 5px 0;
                display: flex;
                align-items: center;

                img {
                    height: 40px;
                    border-radius: 5px;
                }

                .right {
                    width: 100%;
                    padding: 0 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .hname {
                        font-weight: 600;
                    }

                    .tip {
                        font-size: 12px;
                    }
                }
            }

        }

        .action {
            position: fixed;
            height: 50px;
            width: 100%;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, .1);
            border-radius: 8px 8px 0 0;

            button {
                height: 45px;
                display: block;
                width: 45%;
                margin: 0 auto;
                border: none;
                color: #fff;
                font-size: 17px;
                border-radius: 4px;
            }

            .btn_send {
                background-color: #CD5C5C;
            }

            .btn_say {
                background-color: #55cac4;
            }
        }
    }
</style>
