<template>
    <div id="intention-container">
        <div class="header">
            <van-icon name="arrow-left"
                      color="#fff"
                      size="30"
                      class="icon"
                      @click="goback"/>
            <p>求职意向</p>
        </div>
        <div class="intention-select">
            <div class="item" v-for="(item, index) in workIntent" :key="item.id">
                <van-field
                        v-model="item.outValue"
                        is-link
                        readonly
                        :label="getItemName(item.id)"
                        placeholder="请选择岗位类型"
                        @click="saveItem(index)"
                />
                <van-popup v-model="item.show" round position="bottom">
                    <van-cascader
                            v-model="item.inValue"
                            title="请选择岗位类型"
                            :options="workCateData"
                            @close="item.show = false"
                            @finish="onFinish"

                    />
                </van-popup>
            </div>

        </div>
        <div class="button-container">
            <button @click="saveIntentData">点击保存</button>
        </div>
    </div>
</template>

<script>
    import cateData from "../../util/cateData";

    export default {
        name: "intention",
        data() {
            return {
                workCateData: cateData.optionsData,
                value: ["", "", "", "", ""],
                cascaderValue: ["", "", "", "", ""],
                workIntent: [
                    {id: 1, outValue: "", inValue: "", show: false},
                    {id: 2, outValue: "", inValue: "", show: false},
                    {id: 3, outValue: "", inValue: "", show: false},
                    {id: 4, outValue: "", inValue: "", show: false},
                    {id: 5, outValue: "", inValue: "", show: false}
                ],
                selectItemIndex: null
            }
        },
        methods: {
            goback() {
                this.$router.push("/user/my");
            },
            onFinish({selectedOptions}) {
                console.log(selectedOptions);
                this.workIntent[this.selectItemIndex].show = false;
                this.workIntent[this.selectItemIndex].outValue = selectedOptions.map((option) => option.text).join('/');
            },
            saveItem(i) {
                this.workIntent[i].show = true;
                this.selectItemIndex = i;
            },
            getItemName(i){
                return "求职意向" + i;
            },
            saveIntentData(){
                localStorage.setItem("workIntent",JSON.stringify(this.workIntent));
                this.$toast("保存成功");
            },
            readIntentData(){
                let data = localStorage.getItem("workIntent");
                if(data){
                    this.workIntent = JSON.parse(data);
                }
            }
        },
        created() {
            this.readIntentData();
        }
    }
</script>

<style lang="scss" scoped>
    #intention-container {
        .header {
            height: 40px;
            width: 100%;
            background-color: #55cac4;
            display: flex;
            align-items: center;
            border-radius: 0 0 10px 10px;

            .icon {
                position: absolute;
                left: 10px;
            }

            p {
                text-align: center;
                width: 100%;
                font-size: 18px;
                margin: 0;
                color: #fff;
                font-weight: 500;
            }
        }

        .button-container {
            display: flex;
            justify-content: center;
            padding:20px 0;
            button {
                border-radius: 4px;
                border: none;
                background-color: #55cac4;
                color:#fff;
                width:85%;
                font-size:22px;
                padding:5px 0;
            }
        }
    }
</style>
