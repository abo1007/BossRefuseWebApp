<template>
    <div id="category">
        <van-nav-bar
                :title="this.Cname"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    import { Toast } from 'vant';

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
                Cname:'loading'
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
                Toast('按钮');
            },
        },
        created() {
            this.getCname(this.$route.params.name);
        }
    }
</script>

<style lang="scss" scoped>
#category{

}
</style>
