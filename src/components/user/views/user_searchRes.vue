<template>
    <div id="user_searchRes">
        <bo-navbar :text="SearchValue" @left-fun="goFunc('user')"/>
        <h1>{{SearchValue}}</h1>

        <div class="work-container">
            <user-work v-for="item in searchResult" :workmsg="item"/>
        </div>
    </div>
</template>

<script>
    import user_work from "../user_work";

    export default {
        name: "user_searchRes",
        data() {
            return {
                SearchValue: this.$route.query.value,
                searchResult:[]
            }
        },
        methods: {
            goFunc(Routername) {
                this.$router.push({name: Routername});
            },
            getSearchRes() {
                this.$axios.get(this.$API.API_GET_SEARCH_WORKFACE + this.SearchValue).then(res => {
                    if (res.data.code == 200) {
                        // console.log(res.data.data);
                        this.searchResult = res.data.data;
                    } else {
                        this.$toast.fail("这里空落落的，什么都没有");
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err)
                })
            }
        },
        created() {
            this.getSearchRes();
        },
        components:{
            'user-work':user_work
        }

    }
</script>

<style lang="scss" scoped>
    #user_searchRes {

    }
</style>
