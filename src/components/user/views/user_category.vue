<template>
    <div id="category">
        <van-nav-bar
                :title="this.Cname"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="work-container">
            <user-work v-for="(item, index) in cateData"
                       :key="item.id"
                       :workmsg="item"
                        >
            </user-work>
        </div>
    </div>
</template>

<script>
import user_work from "../user_work";
    export default {
        name: "user_category",
        data(){
            return{
                ComName:[
                    { name:'technology' , Cname:'技术', Nid:1 },
                    { name:'product' , Cname:'产品', Nid:2 },
                    { name:'design' , Cname:'设计', Nid:3 },
                    { name:'operate' , Cname:'运营', Nid:4 },
                    { name:'market' , Cname:'市场', Nid:5 },
                    { name:'more' , Cname:'更多', Nid:6 }
                ],
                Cname:'loading',
                cateData:[]
            }
        },
        methods:{
            getCname(name){
                this.ComName.forEach(item => {
                    if(item.name === name){
                        this.Cname = item.Cname;
                        return;
                    }
                });
            },
            onClickLeft() {
                this.$router.push({name:'user_home'})
            },
            onClickRight() {
                this.$toast('按钮');
            },
            getCateData(cateid){
              this.$apiList.getWorkCate(cateid).then(res => {
                if(res.code == 200){
                  this.cateData = res.data;
                }else if(res.code == 204){
                  this.$toast("这里空空的，什么都没有");
                }
              }).catch(err => {
                this.$toast("网络开小差了。。。");
                console.log(err);
              })
                // this.$axios.get(this.$API.API_GET_WORK_CATE + cateid).then(res => {
                //     if(res.data.code == 200){
                //         this.cateData = res.data.data;
                //     }else if(res.data.code == 204){
                //         this.$toast("这里空空的，什么都没有");
                //     }
                // }).catch(err => {
                //     this.$toast("网络开小差了。。。");
                //     console.log(err);
                // })
            }
        },
        created() {
            this.getCname(this.$route.query.name);
            this.getCateData(this.$route.query.cateid);
        },
        components:{
            "user-work":user_work
        }
    }
</script>

<style lang="scss" scoped>
#category{

    .work-container{

        padding-bottom:5px;
    }
}
</style>
