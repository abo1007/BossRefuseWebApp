<template>
    <div id="user-focus">
        <van-search
                v-model="SearchValue"
                shape="round"
                show-action
                background="#55cac4"
                placeholder="看看大家都在关注些什么"
        >
            <template #action>
                <div class="icon1">
                    <van-icon name="search" @click="onSearch" size="34" color="#fff"/>
                </div>
            </template>
        </van-search>
        <van-tabs color="#55cac4" animated>
            <van-tab v-for="item,index in tabsName" :title="item.title">
                <user-work v-for="item in tabsMsg[index]" :workmsg="item"></user-work>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import user_work from "./user_work";
    export default {
        name: "login-focus",
        data(){
            return{
                SearchValue:'',
                tabsName: [
                    {title: 'Java', cateid: 101}, {title: '前端', cateid: 102},
                    {title: 'PHP', cateid: 103}, {title: '算法', cateid: 104},
                    {title: '测试', cateid: 105}, {title: '全栈', cateid: 106}
                ],
                tabsMsg:[
                    [
                        {
                            id:0, name:'全栈工程师',money:'1-2k',tag:['3-5年','硕士研究生','Vue','Java'],
                            com:'白嫖科技',person:'0-9',hr:'刘先生·人事',adr:'南京市 鼓楼区'
                        }
                    ]

                ]
            }
        },
        methods:{
            onSearch(){
                this.$toast('还没做呢亲!')
            },
            getTabsData(){
                let arr = [];
                let str = "";
                for(let i=0;i<this.tabsName.length;i++){
                    arr.push(this.tabsName[i].cateid);
                }
                str = arr.join();
                console.log(str);
                this.$axios.get(this.$API.API_GET_WORK_SUBCATES+str).then( res =>{
                    console.log(res);
                    if(res.data.code == 200){
                        this.tabsMsg = res.data.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        components:{
            'user-work':user_work
        },
        created() {
            this.getTabsData();
        }
    }
</script>

<style lang="scss" scoped>
#user-focus{
    .icon1{
        height:34px;
    }
}
</style>
