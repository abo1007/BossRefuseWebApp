<template>
    <div id="workManager-container">
        <van-nav-bar
                title="招聘管理"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="work-container">
            <com-work v-for="item in workData"
                       :workmsg="item"
                       :key="item.id"/>
        </div>
    </div>
</template>

<script>
    import com_work from "../child/com_work";

    export default {
        name: "com_workManager",
        data(){
            return{
                workData:[]
            }
        },
        methods:{
            onClickLeft() {
                this.$router.back();
            },
            getWorkData(){
                this.$axios.get(this.$API.API_GET_COM_WORK + "1408").then(res => {
                    if (res.data.code === 200){
                        this.workData = res.data.data;
                    }else{
                        this.$toast.fail("网络开小差了哦");
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了哦");
                    console.log(err)
                })
            }
        },
        created() {
            this.getWorkData();
        },
        components:{
            "com-work":com_work
        }
    }
</script>

<style lang="scss" scoped>
#workManager-container{
    .work-container{
        background-color:#eee;
    }
}
</style>
