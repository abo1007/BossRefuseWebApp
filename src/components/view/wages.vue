<template>
    <div id="wages">
        <bo-navbar text="薪资计算" @left-fun="goback"/>
        <van-field
                v-model="workName"
                is-link
                readonly
                label="岗位类型"
                placeholder="请选择岗位类型"
                @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
            <van-cascader
                    v-model="cascaderValue"
                    title="请选择岗位类型"
                    :options="options"
                    @close="showPicker = false"
                    @finish="onFinish"
            />
        </van-popup>

        <van-field v-model="workExper"
                   type="digit"
                   label="工作经验"
                   placeholder="整数 单位/年 应届为0"
                   maxlength="2"/>

        <van-field
                readonly
                clickable
                label="城市"
                :value="workCity"
                placeholder="工作城市"
                @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="workCityCate"
                    @cancel="showPicker1 = false"
                    @confirm="onConfirm"
            />
        </van-popup>

        <div class="button-container">
            <button @click="countWorkSalary">点击计算</button>
        </div>

        <div class="content-container">
            <p class="title">您的薪资估值约为<span>{{workSalary}}</span>元</p>

            <p class="msg">薪资计算器仅供参考，具体工资水平取决您的公司有多抠搜</p>
        </div>
    </div>
</template>

<script>
    import cateData from "../../util/cateData";

    export default {
        name: "wages",
        data() {
            return {
                from: this.$store.state.currentPosition,
                options: cateData.optionsData,
                showPicker: false,
                showPicker1: false,
                cascaderValue: '',
                workName: '',
                workExper: null,
                workCity: '',
                workCityCate: ["一线城市 北京深圳等", "二线城市 武汉天津等", "三线城市"],
                workCityIndex: null,
                workSalary: '????'

            }
        },
        methods: {
            goback() {
                this.$router.back();
            },
            onFinish({selectedOptions}) {
                this.showPicker = false;
                this.workName = selectedOptions.map((option) => option.text).join('/');
                // 修改为只显示二级标题
            },
            onConfirm(value, index) {
                this.workCity = value;
                this.workCityIndex = index;
                this.showPicker1 = false;
            },
            countWorkSalary() {  // 计算方法
                let citysData = [1.4, 1, 0.6];  // 城市指数
                let worksData = 0;  // 工资基数
                let expers = 0; // 经验基数
                if (this.checkingField()) {
                    if (this.workExper == 0) {
                        expers = 1;
                    } else {
                        expers = 1 + (this.workExper * 0.3);
                    }
                    for (let i=0;i<cateData.smallData.length;i++){
                        if(cateData.smallData[i].value == this.cascaderValue){
                            worksData = cateData.smallData[i].base;
                        }
                    }
                    this.workSalary = (worksData * citysData[this.workCityIndex] * expers).toFixed(2);
                    this.$toast.success('计算成功');
                }
            },
            checkingField() {    // 验证方法
                if (!this.cascaderValue) {
                    this.$toast.fail('请选择工作类型');
                    return false;
                }
                if (this.workExper >= 20 || !this.workExper) {
                    this.$toast.fail('工作经验在0-20年之间');
                    return false;
                }
                if (!this.workCity) {
                    this.$toast.fail('请选择工作城市');
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #wages {
        .button-container {
            display: flex;
            justify-content: center;
            padding: 20px 0;

            button {
                border-radius: 4px;
                border: none;
                background-color: #55cac4;
                color: #fff;
                width: 85%;
                font-size: 22px;
                padding: 5px 0;
            }
        }

        .content-container {
            padding:0 15px;
            .title{
                font-size:20px;
                text-align: center;
                span{
                    font-weight: bold;
                    color:#55cac4;
                }
            }
            .msg{
                font-size:12px;
            }
        }
    }
</style>
