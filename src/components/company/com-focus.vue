<template>
    <div id="com-focus">
        <van-nav-bar
                title="发布信息"
                right-text="切换"
                @click-right="rightClick"
        />
        <van-field
                readonly
                clickable
                label="城市"
                :value="value"
                placeholder="选择城市"
                @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="work_category"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "com-focus",
        data(){
            return{
                work_category:["技术","产品","设计","运营","市场","更多"],
                value: '',
                showPicker: false
            }
        },
        methods:{
            rightClick(){

            },
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            }
        }
    }
</script>

<style scoped>

</style>
