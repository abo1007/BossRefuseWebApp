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
                {{ item }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "login-focus",
        data(){
            return{
                SearchValue:'',
                tabsName:['前端','后端','全栈','Java','Node']
            }
        },
        methods:{
            onSearch(){
                this.$toast('还没做呢亲!')
            }
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
