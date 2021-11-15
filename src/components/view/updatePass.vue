<template>
    <div id="updatePassword">
        <bo-navbar text="修改密码" @left-fun="goback"/>
        <van-form>
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    disabled
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="getCode" :disabled="codestate">发送验证码</van-button>
                </template>
            </van-field>
            <van-field
                    v-model="password"
                    type="password"
                    name="新密码"
                    label="新密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block
                            @click="submit"
                            style="background-color:#55cac4;color:#fff;font-size:20px">
                    修改
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name: "updatePass",
        data() {
            return {
                username: sessionStorage.getItem("ID"),
                password: "",
                sms: "",
                codestate: false,
                code: ""
            }
        },
        methods: {
            goback() {
                this.$router.back()
            },
            submit() {

                if (this.sms !== this.code) {
                    this.$dialog.alert({
                        title: '验证码',
                        message: '验证码错误',
                    });
                    return
                }
                if(this.password.length < 6){
                    this.$dialog.alert({
                        title: '检查格式',
                        message: '密码不合法',
                    });
                    return
                }

                let data = {
                    id: this.username,
                    password: this.password
                };
                this.$apiList.updatePassword(data).then(res => {
                    if (res.code === 200) {
                        this.$dialog.alert({
                            title: '修改密码',
                            message: '修改成功',
                        }).then(() => {
                            this.$router.back()
                        });
                    } else {
                        this.$dialog.alert({
                            title: '未知错误',
                            message: '修改失败',
                        });
                        return false
                    }
                })


            },
            getCode() {
                this.$apiList.getCode().then(res => {
                    if (res.code === 200) {
                        console.log(res.data)
                        this.code = res.data;
                        this.$Notify({ type: 'primary', message: '验证码已发送' });
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #updatePassword {

    }
</style>