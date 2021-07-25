<template>
    <div id="com-focus">
        <van-nav-bar
                title="我要招聘"
                right-text="我的发布"
                @click-right="rightClick"
        />
        <van-field
                v-model="cascaderValue"
                is-link
                readonly
                label="岗位类型"
                placeholder="请选择岗位类型"
                @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
            <van-cascader
                    v-model="workData.workcateId"
                    title="请选择岗位类型"
                    :options="options"
                    @close="showPicker = false"
                    @finish="onFinish"
            />
        </van-popup>

        <van-cell-group>
            <van-field v-model="workData.workTitle" label="标题" placeholder="请输入招聘标题" maxlength="30"/>
        </van-cell-group>



        <van-field
                readonly
                clickable
                label="薪资"
                :value="workData.workSalary"
                placeholder="岗位薪资"
                @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="salary"
                    @cancel="showPicker1 = false"
                    @confirm="onConfirm2"
            />
        </van-popup>

        <van-field
                readonly
                clickable
                label="学历"
                :value="workData.workEdu"
                placeholder="学历要求"
                @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="eduData"
                    @cancel="showPicker2 = false"
                    @confirm="onConfirm3"
            />
        </van-popup>

        <van-field
                readonly
                clickable
                label="工作经验"
                :value="workData.workExper"
                placeholder="工作经验要求"
                @click="showPicker3 = true"
        />
        <van-popup v-model="showPicker3" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="experData"
                    @cancel="showPicker3 = false"
                    @confirm="onConfirm4"
            />
        </van-popup>

        <van-field
                v-model="workData.workIntro"
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
                    placeholder="添加标签 2-6位 无符号"
                    maxlength="6"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="addTag">添加标签</van-button>
                </template>
            </van-field>
        </van-cell-group>

        <div id="tag-container">
            <span v-for="item in workData.workTag"
                  class="tag"
                  :key="item.id"
                  @click="delTag(item.id)">{{item.title}}</span>

        </div>
        <p class="tip" v-show="workData.workTag.length">点击标签删除</p>

        <div class="btn-container">
            <van-button color="#55cac4" size="large" plain @click="postWorkInfo">点击发布</van-button>
        </div>

    </div>
</template>

<script>
    import cateData from "../../util/cateData";

    export default {
        name: "com_focus",
        data() {
            return {
                workData: {
                    workTitle:"",
                    workSalary: "",
                    workEdu:"",
                    workExper:"",
                    workcateId:null,
                    workIntro:"",
                    workTag:[],
                },

                cascaderValue: "",

                tagPush: '',
                // 标签列表
                tagList: [],
                tagShow: '',

                // 工作分类
                options: cateData.optionsData,
                showPicker: false,

                // 岗位薪资
                salary: ["2k以下", "2-4k", "4-6k", "6-8k", "8-15k", '15-30k',"30k以上"],
                showPicker1:false,

                // 学历
                eduData: ["初中及以下", "高中/中专/职高", "大专", "本科", "硕士", "博士"],
                showPicker2:false,

                // 工作经验
                experData: ["实习生", "应届生", "1年以内", "1-3年", "3-5年", "5-10年"],
                showPicker3:false,

                comId:null,
                nickname:"",
                ID:null

            }
        },
        methods: {
            rightClick() {
                this.$router.push({name:'com_workmanager'})
            },
            onConfirm(value) {
                this.workData.workcateId = value;
                this.showPicker = false;
            },
            onConfirm2(value) {
                this.workData.workSalary = value;
                this.showPicker1 = false;
            },
            onConfirm3(value) {
                this.workData.workEdu = value;
                this.showPicker2 = false;
            },
            onConfirm4(value) {
                this.workData.workExper = value;
                this.showPicker3 = false;
            },
            publishWork() {
                if(this.testMsg()){
                    this.postWorkInfo();
                }
            },
            onFinish({selectedOptions}) {
                this.showPicker = false;
                this.cascaderValue = selectedOptions.map((option) => option.text).join('/');
            },
            postWorkInfo() {     // 提交招聘信息
                if(!this.comId){
                    this.$toast.fail("请先注册企业");
                    return false;
                }
                let InfoData = {
                    workTitle: this.workData.workTitle,
                    workSalary: this.workData.workSalary,
                    workTag: this.getTags(),
                    workPublisherId: this.ID,
                    workPublisher:this.nickname,
                    workCateId: this.workData.workcateId,
                    workComId: this.comId,
                    workIntro: this.workData.workIntro
                };
                console.log(InfoData);

                this.$axios.post(this.$API.API_POST_WORK_DATA,InfoData).then(res => {
                    console.log(res.data);
                    if(res.data.code == 200){
                        this.$toast("发布成功");
                        location.reload();
                    }else{
                        this.$toast("发布失败")
                    }
                }).catch(err => {
                    console.log(err);
                });

            },
            getTags() {  // 将标签数组转换为数据库存储的字符串
                let tagArr = [];
                if (this.workData.workTag.length == 0) {
                    this.$toast("最少一个标签哦");
                    return false;
                }
                for (let i = 0; i < this.workData.workTag.length; i++){
                    tagArr[i] = this.workData.workTag[i].title;
                }
                // 追加 学历 工作经验信息
                tagArr.unshift(this.workData.workEdu,this.workData.workExper);
                let tagStr = "";
                for (let i = 0; i < tagArr.length; i++) {
                    if (i == tagArr.length - 1) {
                        tagStr += tagArr[i];
                    } else {
                        tagStr += tagArr[i] + "，";
                    }
                }
                console.log(tagStr);
                return tagStr;
            },
            addTag() { // 增加tag

                // let reg = /([，\*\"\'<>\/])+/;
                // 正则验证规范 要求2-6位
                let reg = /^[A-Za-z0-9\u4e00-\u9fa5]{2,6}$/;

                if(!reg.test(this.tagPush)){
                    this.$toast("不符规范");
                    return false;
                }

                if (this.workData.workTag.length === 5) {
                    this.$toast("最多5个哦");
                    return;
                }
                let tid = this.workData.workTag.length;
                this.workData.workTag.push({id: tid, title: this.tagPush});
                this.tagPush = '';

            },
            delTag(id) {    // 删除tag
                for (let i = 0; i < this.workData.workTag.length; i++) {
                    if (this.workData.workTag[i].id === id) {
                        this.workData.workTag.splice(i, 1);
                    }
                }
                for (let i = 0; i < this.workData.workTag.length; i++) {
                    this.workData.workTag[i].id = i;
                }
            },
            testMsg(){  // 验证表单内容
                return true;
            },
        },
        created() {
            this.comId = sessionStorage.getItem("comId");
            this.nickname = sessionStorage.getItem("nickname");
            this.ID = sessionStorage.getItem("ID");
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
            height: 25px;
            position: relative;
            padding: 10px 0;
            display:flex;
            justify-content: center;

            .tag {
                background-color: #4d4d4d;
                color: #fff;
                font-size: 14px;
                padding: 4px 5px;
                margin: 0 2px;
                border-radius: 4px;
            }
        }
        .tip {
            color: #4d4d4d;
            font-size: 12px;
            padding-left: 10px;
            margin: 0;
            top: 50px;
        }
    }

</style>
