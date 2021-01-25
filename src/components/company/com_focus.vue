<template>
    <div id="com-focus">
        <van-nav-bar
                title="发布信息"
                right-text="切换"
                @click-right="rightClick"
        />
        <!--        <van-field-->
        <!--                readonly-->
        <!--                clickable-->
        <!--                label="工作种类"-->
        <!--                :value="value"-->
        <!--                placeholder="工作种类"-->
        <!--                @click="showPicker = true"-->
        <!--        />-->
        <!--        <van-popup v-model="showPicker" round position="bottom">-->
        <!--            <van-picker-->
        <!--                    show-toolbar-->
        <!--                    :columns="work_category"-->
        <!--                    @cancel="showPicker = false"-->
        <!--                    @confirm="onConfirm"-->
        <!--            />-->
        <!--        </van-popup>-->
        <van-field
                v-model="value"
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

        <van-cell-group>
            <van-field v-model="titleValue" label="标题" placeholder="请输入招聘标题"/>
        </van-cell-group>
        <van-field name="radio" label="薪资类型">
            <template #input>
                <van-radio-group v-model="workMoney" direction="horizontal">
                    <van-radio name="1">月薪</van-radio>
                    <van-radio name="2">日薪</van-radio>
                </van-radio-group>
            </template>
        </van-field>

        <van-field v-model="workMoney_min" type="digit" label="最低薪资"/>
        <van-field v-model="workMoney_max" type="digit" label="最高薪资"/>

        <van-field
                v-model="workMsg"
                rows="2"
                autosize
                label="工作描述"
                type="textarea"
                maxlength="300"
                placeholder="请输入工作描述"
                show-word-limit
        />
        <van-cell-group>
            <van-field
                    v-model="tagPush"
                    center
                    clearable
                    label="标签"
                    placeholder="请输入要添加的特点标签"
                    maxlength="8"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="tagPushList">添加标签</van-button>
                </template>
            </van-field>
        </van-cell-group>

        <div id="tag-container">
            <span v-for="item in tagList"
                  class="tag"
                  :key="item.id"
                  @click="delTag(item.id)">{{item.title}}</span>
            <p class="tip" v-show="tagList.length">点击标签删除</p>
        </div>


        <div class="btn-container">
            <van-button color="#55cac4" size="large" plain @click="publishWork">点击发布</van-button>
        </div>


    </div>
</template>

<script>
    import cateData from "../../util/cateData";

    export default {
        name: "com_focus",
        data() {
            return {
                value: '',
                showPicker: false,
                // 被选择工作分类的数字编码
                cascaderValue: "",


                // 招聘信息标题
                titleValue: '',
                // 招聘描述
                workMsg: '',
                // 工资类型 月/日
                workMoney: '1',
                // 工资范围
                workMoney_min: '',
                workMoney_max: '',
                tagPush: '',
                // 标签列表
                tagList: [

                ],
                tagShow: '',
                // 工作分类数据
                options: cateData.optionsData
            }
        },
        methods: {
            rightClick() {
                this.$toast("这位客官是想切换到哪里呢？");
            },
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            tagPushList() { // 增加tag
                if (this.tagList.length === 5) {
                    this.$toast("最多5个哦");
                    return;
                }
                let tid = this.tagList.length;
                this.tagList.push({id: tid, title: this.tagPush});
                this.tagPush = '';

            },
            delTag(id) {    // 删除tag
                for (let i = 0; i < this.tagList.length; i++) {
                    if (this.tagList[i].id === id) {
                        this.tagList.splice(i, 1);
                    }
                }
                for (let i = 0; i < this.tagList.length; i++) {
                    this.tagList[i].id = i;
                }
            },
            publishWork() {
                this.$toast("ok");
                this.getTags();
            },
            onFinish({selectedOptions}) {
                this.show = false;
                this.value = selectedOptions.map((option) => option.text).join('/');
            },
            postWorkInfo(){     // 提交招聘信息
                let InfoData = {
                    workTitle:this.titleValue,
                    workSalary:this.getSalary(),
                    workTag:this.getTags(),
                    workPublisher:"隔壁老王",
                    workCateId:this.cascaderValue
                }
            },
            getSalary(){    // 得到工资字符串
                if(this.workMoney == "1"){
                    return this.workMoney_min + "-" + this.workMoney_max + "k"
                }else{
                    return this.workMoney_min + "-" + this.workMoney_max + "/天"

                }
            },
            getTags(){  // 将标签数组转换为数据库存储的字符串
                if(this.tagList.length==0){
                    this.$toast("最少一个标签哦");
                    return;
                }
                let tagStr = "";
                for (let i = 0; i < this.tagList.length; i++) {
                    if(i == this.tagList.length - 1){
                        tagStr += this.tagList[i].title;
                    }else{
                        tagStr += this.tagList[i].title + "，";
                    }

                }
                console.log(tagStr);
                return tagStr;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #com-focus {

        .btn-container {
            padding: 0 10px;
        }

        #tag-container {
            width: 100%;
            height: 60px;
            position: relative;
            padding:10px 0;
            .tag {
                background-color: #4d4d4d;
                color: #fff;
                font-size: 14px;
                padding: 4px 5px;
                margin: 0 2px;
                border-radius: 4px;
            }

            .tip {
                color: #4d4d4d;
                font-size: 12px;
                padding-left: 10px;
                margin:0;
                position:absolute;
                top:50px;
            }
        }
    }

</style>
