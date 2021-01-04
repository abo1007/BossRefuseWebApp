<template>
    <div id="work-info-container">
        <van-nav-bar
                :title="getWorkName(this.$route.params.workid)"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="header">
            <p class="top">
                <span class="title">Laravel工程师</span>
                <span class="price">6-10K</span>
            </p>
        </div>
        <div class="content">
            <div class="tag">
                <div class="tag-item" v-for="item in tag">{{item}}</div>
            </div>
            <p class="p1">职位详情</p>

            <div class="text">
                岗位职责 <br/>
                1、能够独立完成需求分析与产品研发工作，按时保质地完成所分配的工作任务；<br/>
                2、 碰见问题主动与需求方或负责人沟通，最好能提出相应解决方案；<br/>
                3、参与高可用、高性能服务架构设计与调优。<br/>
                4、编写开发文档，参与系统需求分析、方案设计、编码等工作。<br/>
                1、本科及以上学历计算机相关专业，丰富的web系统设计开发经验，熟悉常用设计模式；<br/>
                2、精通PHP，熟悉PHP常用框架具备良好的团队合作精神，高度的责任感，善于沟通，为人踏实，抗压能力强，拥有严谨的工作态度；<br/>
                3、优秀的数据库设计优化能力，至少精通一种数据库应用，精通MySql者优先；<br/>
                4、熟悉LINUX操作，熟悉LNMP环境，能熟练应用一门或几门以下语言：shell/python/java/javascript等；<br/>
                5、熟悉socket编程，熟悉网络协议，具有网络问题排查能力；<br/>
                6、具有大规模高并发系统的实战经验，精通分布式、事务、缓存、消息、负载均衡等机制的原理和实现者优先；<br/>
                7、熟悉TP，laravel，yii等开源框架，熟练使用redis、git，了解消息队列;<br/>
                8、较强的逻辑思维能力，较强的产品意识，良好的沟通协调能力，良好的团队合作精神。<br/>
            </div>
        </div>
        <div class="company">
            <div class="hr">
                <img src="../../assets/hr-header.jpg" alt="">
                <div class="right">
                    <p class="hname">张先生</p>
                    <p class="work">人事</p>
                </div>
            </div>
            <div class="comp">
                <img src="../../assets/com-header.jpg" alt="">
                <div class="right">
                    <p>
                        <span class="cname">白嫖科技</span>
                        <span class="person">1-10人</span>
                    </p>
                    <p>
                        <span class="trade">计算机软件</span>
                        <span class="area">南京·玄武区</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="action">
            <button class="btn_send">投递简历</button>
            <button class="btn_say">立即沟通</button>
        </div>
<!--        {{this.$route.params.workid}}-->
    </div>
</template>

<script>
    export default {
        name: "work_info",
        data(){
            return{
                tag:['1-3年','本科','PHP','Laravel','ThinkPHP']
            }
        },
        methods:{
            onClickLeft() {
                this.$router.push({name:'user_home'})
            },
            getWorkName(id){
                return "工作编号" + id;
            }
        }
    }
</script>

<style lang="scss" scoped>
#work-info-container{
    padding-bottom:50px;
    .header{
        .top{
            width:95%;
            margin:10px auto;
            display: flex;
            justify-content:space-between;
            align-items: center;
            .title{
                font-size:26px;
            }
            .price{
                font-size:20px;
                color: #55cac4;
                font-weight:bold;
            }
        }
        box-shadow: #ccc 0 5px 5px;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        >div{
           width:92%;
        }
        .tag{
            margin:10px 0;
            display: flex;
            align-items: center;
            .tag-item{
                display:inline-block;
                height:20px;
                padding:2px 5px;
                line-height:20px;
                background-color:#808080;
                color:#fff;
                margin:0 2px;
                border-radius:5px;
                font-size:14px;
            }
        }
        .p1{
            width:95%;
            font-size:20px;
            margin:10px 0;
        }
        .text{
            font-size:14px;
            font-weight:200;
            line-height:22px;
        }
    }
    .company{
        >p,>div{
            width:94%;
            margin:0 auto;
        }
        .hr{
            height:60px;
            display: flex;
            border-top:1px solid #ccc;
            border-bottom:1px solid #ccc;
            margin:10px auto;
            padding:5px 0;
            display: flex;
            align-items: center;
            img{
                height:50px;
                border-radius:25px;
            }
            .right{
                width:100%;
                padding:0 10px;
                display: flex;
                justify-content:space-between;
            }
        }
        .comp{
            height:60px;
            display: flex;
            align-items: center;
            img{
                height:50px;
            }
            .right{
                height:50px;
                width:100%;
                margin:0 5px;
                p{
                    margin:5px 0;
                    display: flex;
                    justify-content: space-between;
                }
                p:nth-child(2){
                    font-size:14px;
                }
            }
        }
    }
    .action{
        border-top:1px solid #ccc;
        position: fixed;
        height:50px;
        width:100%;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content:space-between;
        background-color:#fff;
        button{
            height:45px;
            display:block;
            width:45%;
            margin:0 auto;
            border:none;
            color:#fff;
            font-size:17px;
            border-radius:4px;
        }
        .btn_send{
            background-color:#CD5C5C;
        }
        .btn_say{
            background-color:#55cac4;
        }
    }
}
</style>
