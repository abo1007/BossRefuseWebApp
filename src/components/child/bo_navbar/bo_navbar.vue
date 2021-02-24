<template>
    <div class="header">
        <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="leftFun"/>
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "bo_navbar",
        data(){
            return{

            }
        },
        props:['text'],
        methods:{
            leftFun(){
                this.$emit('left-fun');
            }
        }
    }
</script>

<style lang="scss" scoped>
.header{
    height:40px;
    width:100%;
    background-color:#55cac4;
    display:flex;
    align-items:center;
    border-radius:0 0 10px 10px;
    .icon{
        position:absolute;
        left:10px;
    }
    p{
        text-align:center;
        width:100%;
        font-size:18px;
        margin:0;
        color:#fff;
        font-weight:500;
    }
}
</style>
