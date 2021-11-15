<template>
    <div id="myinfo-container">
        <bo-navbar text="个人信息" @left-fun="goback"/>
        <van-field v-model="userData.id"
                   type="digit"
                   label="ID"
                   disabled readonly/>
        <van-field v-model="userData.username"
                   label="用户名"
                   placeholder="请输入用户名 6-11位"
                   maxlength="11" disabled readonly/>
        <van-field v-model="userData.phonenum"
                   type="digit"
                   label="手机号码"
                   placeholder="请输入11位手机号码"
                   maxlength="11"/>
        <van-field name="radio" label="性别">
            <template #input>
                <van-radio-group v-model="userData.sex" direction="horizontal">
                    <van-radio name="0">男</van-radio>
                    <van-radio name="1">女</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <van-field v-model="userData.nickname"
                   label="昵称"
                   placeholder="请输入昵称 2-8位"
                   maxlength="11"/>
        <van-field v-model="userData.type"
                   label="用户类型" disabled/>
        <van-field v-model="userData.regtime"
                   label="注册时间" disabled/>

        <div class="bottom">
            <button class="push_btn" @click="postUserData">点击保存</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myInfo",
        data() {
            return {
                userData: {
                    id: 10001,
                    username: "abo1007",
                    phonenum: "15128659469",
                    sex: "0",
                    nickname: "来去之间",
                    type: "个人",
                    regtime: "2000-10-7 00:00:00"
                },
                ID:null
            }
        },
        methods: {
            goback() {
                this.$router.back();
            },
            getUserData() {
                this.$apiList.getUserInfo(this.ID).then(res => {
                    if (res.code === 200) {
                        this.userData = res.data;
                        this.userData.sex = this.userData.sex.toString();
                        this.userData.type = res.data.isCom == 1 ? "企业" : "个人";
                    }
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err);
                })
                // this.$axios.get(this.$API.API_GET_USER_DATA + ).then(res => {
                //     if (res.data.code == 200) {
                //         this.userData = res.data.data;
                //         this.userData.sex = this.userData.sex.toString();
                //         this.userData.type = res.data.data.isCom == 1 ? "企业" : "个人";
                //     }
                // }).catch(err => {
                //     this.$toast.fail("网络开小差了。");
                //     console.log(err);
                // })
            },
            postUserData(){
                let data = {
                    phonenum:this.userData.phonenum,
                    sex:this.userData.sex,
                    nickname:this.userData.nickname
                };
                this.$apiList.updateUserInfo(this.ID,data).then(res => {
                    if (res.code == 200) {
                        this.$toast.success("修改成功");

                    }else if(res.code == 208){
                        this.$toast.fail("修改失败");
                    }
                    this.getUserData()
                }).catch(err => {
                    this.$toast.fail("网络开小差了。");
                    console.log(err);
                })
                // this.$axios.put(this.$API.API_PUT_USER_DATA + this.ID, data).then(res => {
                //     if (res.data.code == 200) {
                //         this.$toast.success("修改成功");
                //         location.reload();
                //     }else if(res.data.code == 208){
                //         this.$toast.fail("修改失败");
                //     }
                //     location.reload();
                // }).catch(err => {
                //     this.$toast.fail("网络开小差了。");
                //     console.log(err);
                // })
            }
        },
        created() {
            this.ID = sessionStorage.getItem('ID');
            this.getUserData();
        }
    }
</script>

<style lang="scss" scoped>
    #myinfo-container {

        .bottom {
            display: flex;
            justify-content: center;
            padding: 20px 0;

            .push_btn {

                background-color: #55cac4;
                border: none;
                color: #fff;
                width: 80%;
                padding: 10px 0;
                font-size: 20px;
                border-radius: 10px;
                font-weight: bold;
                box-shadow: 0px 0px 5px #808080, 0px -2px 5px #808080;
            }
        }
    }
</style>
