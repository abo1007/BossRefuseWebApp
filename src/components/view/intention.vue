<template>
    <div id="intention-container">
        <bo-navbar :text="getTitle()" @left-fun="goback"/>
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
                selectItemIndex: null,
                changeName:''
            }
        },
        methods: {
            getTitle(){
                return this.changeName + "意向"
            },
            goback() {
                this.$router.back();
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
                return this.changeName+ "意向" + i;
            },
            saveIntentData(){
                if(this.$route.params.from == "user"){
                    localStorage.setItem("workIntent",JSON.stringify(this.workIntent));
                }else {
                    localStorage.setItem("recruitIntent",JSON.stringify(this.workIntent));
                }
                this.$toast("保存成功");
            },
            readIntentData(){
                let data = [];
                if(this.$route.params.from == "user"){
                    data = localStorage.getItem("workIntent");
                    this.changeName = "求职";
                }else {
                    data = localStorage.getItem("recruitIntent");
                    this.changeName = "招聘";

                }
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
