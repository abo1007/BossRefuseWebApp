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
                label="工作种类"
                :value="value"
                placeholder="工作种类"
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
        <van-field name="radio" label="薪资类型">
            <template #input>
                <van-radio-group v-model="workMoney" direction="horizontal">
                    <van-radio name="1">月薪</van-radio>
                    <van-radio name="2">日薪</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <van-field v-model="workMoney_min" type="digit" label="最低薪资" />
        <van-field v-model="workMoney_max" type="digit" label="最高薪资" />

        <van-cell-group>
            <van-field v-model="titleValue" label="标题" placeholder="请输入招聘标题" />
        </van-cell-group>
        <van-field
                v-model="workMsg"
                rows="2"
                autosize
                label="工作描述"
                type="textarea"
                maxlength="200"
                placeholder="请输入工作描述"
                show-word-limit
        />
    </div>
</template>

<script>
    export default {
        name: "com-focus",
        data(){
            return{
                work_category:["技术","产品","设计","运营","市场","更多"],
                value: '',
                showPicker: false,
                titleValue:'',
                workMsg:'',
                workMoney:'1',
                workMoney_min:'',
                workMoney_max:''
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
