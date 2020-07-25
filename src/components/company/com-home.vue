<template>
    <div id="com-user">
        <van-search
                v-model="SearchValue"
                shape="round"
                show-action
                background="#55cac4"
                placeholder="Java工程师"
        />
    </div>
</template>

<script>
    export default {
        name: "com-home",
        data(){
            return{
                SearchValue:""
            }
        }
    }
</script>

<style scoped>

</style>
