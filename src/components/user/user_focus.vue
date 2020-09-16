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
            <van-tab v-for="item in tabsName" :title="item">
                <user-work :workmsg="testMsg"></user-work>
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
                tabsName:['前端','后端','全栈','Java','Node'],
                testMsg:{
                    id:0, name:'全栈工程师',money:'1-2k',tag:['3-5年','硕士研究生','Vue','Java'],
                    com:'白嫖科技',person:'0-9',hr:'刘先生·人事',adr:'南京市 鼓楼区'
                }
            }
        },
        methods:{
            onSearch(){
                this.$toast('还没做呢亲!')
            }
        },
        components:{
            'user-work':user_work
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
