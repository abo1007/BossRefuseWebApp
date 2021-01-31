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
                        label="求职意向"
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

            <!--            <van-field-->
            <!--                    v-model="value1"-->
            <!--                    is-link-->
            <!--                    readonly-->
            <!--                    label="求职意向2"-->
            <!--                    placeholder="请选择岗位类型"-->
            <!--                    @click="showPicker1 = true"-->
            <!--            />-->
            <!--            <van-popup v-model="showPicker1" round position="bottom">-->
            <!--                <van-cascader-->
            <!--                        v-model="cascaderValue1"-->
            <!--                        title="请选择岗位类型"-->
            <!--                        :options="workCateData"-->
            <!--                        @close="showPicker1 = false"-->
            <!--                        @finish="onFinish"-->
            <!--                />-->
            <!--            </van-popup>-->
            <!--            <van-field-->
            <!--                    v-model="value1"-->
            <!--                    is-link-->
            <!--                    readonly-->
            <!--                    label="求职意向3"-->
            <!--                    placeholder="请选择岗位类型"-->
            <!--                    @click="showPicker1 = true"-->
            <!--            />-->
            <!--            <van-popup v-model="showPicker1" round position="bottom">-->
            <!--                <van-cascader-->
            <!--                        v-model="cascaderValue1"-->
            <!--                        title="请选择岗位类型"-->
            <!--                        :options="workCateData"-->
            <!--                        @close="showPicker1 = false"-->
            <!--                        @finish="onFinish"-->
            <!--                />-->
            <!--            </van-popup>-->
            <!--            <van-field-->
            <!--                    v-model="value1"-->
            <!--                    is-link-->
            <!--                    readonly-->
            <!--                    label="求职意向4"-->
            <!--                    placeholder="请选择岗位类型"-->
            <!--                    @click="showPicker1 = true"-->
            <!--            />-->
            <!--            <van-popup v-model="showPicker1" round position="bottom">-->
            <!--                <van-cascader-->
            <!--                        v-model="cascaderValue1"-->
            <!--                        title="请选择岗位类型"-->
            <!--                        :options="workCateData"-->
            <!--                        @close="showPicker1 = false"-->
            <!--                        @finish="onFinish"-->
            <!--                />-->
            <!--            </van-popup>-->
            <!--            <van-field-->
            <!--                    v-model="value1"-->
            <!--                    is-link-->
            <!--                    readonly-->
            <!--                    label="求职意向5"-->
            <!--                    placeholder="请选择岗位类型"-->
            <!--                    @click="showPicker1 = true"-->
            <!--            />-->
            <!--            <van-popup v-model="showPicker1" round position="bottom">-->
            <!--                <van-cascader-->
            <!--                        v-model="cascaderValue1"-->
            <!--                        title="请选择岗位类型"-->
            <!--                        :options="workCateData"-->
            <!--                        @close="showPicker1 = false"-->
            <!--                        @finish="onFinish"-->
            <!--                />-->
            <!--            </van-popup>-->
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
                ],
                selectItemIndex:null

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
            saveItem(i){
                this.workIntent[i].show = true;
                this.selectItemIndex = i;
            }
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
    }
</style>
