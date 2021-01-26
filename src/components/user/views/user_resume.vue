<template>
    <div id="resume-container">
        <div class="header">
            <van-icon name="arrow-left" color="#fff" size="30" class="icon" @click="goback"/>
            <p>个人简历</p>
        </div>
        <div class="content">
            <van-cell-group>
                <van-field v-model="resumeData.name" label="姓名" placeholder="请输入姓名" />

            </van-cell-group>
            <van-field name="radio" label="性别">
                <template #input>
                    <van-radio-group v-model="resumeData.sex" direction="horizontal">
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field v-model="resumeData.age" type="digit" label="年龄" placeholder="请输入年龄"/>

            <van-field
                    readonly
                    clickable
                    label="学历"
                    :value="resumeData.edu"
                    placeholder="选择学历水平"
                    @click="showPicker3 = true"
            />
            <van-popup v-model="showPicker3" round position="bottom">
                <van-picker
                        show-toolbar
                        :columns="eduData"
                        @cancel="showPicker3 = false"
                        @confirm="onConfirm2"
                />
            </van-popup>
<!--            <van-field v-model="resumeData.edu" label="学历" />-->

            <van-field v-model="resumeData.school" label="毕业院校" />
            <van-field v-model="resumeData.workExper" type="digit" label="工作经验" placeholder="请输入工作经验/年"/>
            <van-field v-model="resumeData.projectExper" label="项目经验" placeholder="项目经验"/>
            <van-field
                    readonly
                    clickable
                    label="求职期望城市"
                    :value="resumeData.expect[0]"
                    placeholder="选择城市"
                    @click="showPicker = true"
            />
            <van-popup v-model="showPicker" round position="bottom">
                <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>


            <van-field
                    v-model="resumeData.expect[1]"
                    is-link
                    readonly
                    label="求职期望岗位"
                    placeholder="请选择岗位类型"
                    @click="showPicker2 = true"
            />
            <van-popup v-model="showPicker2" round position="bottom">
                <van-cascader
                        v-model="cascaderValue"
                        title="请选择岗位类型"
                        :options="workCateData"
                        @close="showPicker2 = false"
                        @finish="onFinish"
                />
            </van-popup>
<!--            <van-field v-model="resumeData.expect[1]" label="求职期望岗位" placeholder="岗位"/>-->
            <van-field v-model="resumeData.expect[2]" label="求职期望薪资" placeholder="薪资"/>

            <van-field
                    v-model="resumeData.intro"
                    rows="2"
                    autosize
                    label="自我介绍"
                    type="textarea"
                    maxlength="50"
                    placeholder="介绍一下你自己的特长吧"
                    show-word-limit
            />

        </div>
        <div class="bottom">
            <button class="push_btn">点击保存</button>
        </div>
    </div>
</template>

<script>
    import cateData from "../../../util/cateData";
    export default {
        name: "user_resume",
        data(){
            return{
                resumeData:{
                    name:"",
                    sex:"1",
                    age:null,
                    edu:"",
                    school:"",
                    workExper:"",
                    projectExper:"",
                    certificate:"",
                    honor:"",
                    expect:["","",""],
                    intro:"",
                    userId:10001
                },
                showPicker: false,  // 城市
                columns:["北京","天津","沈阳","大连","青岛","郑州",
                    "苏州","南京","武汉","上海","杭州","广州","成都",
                    "重庆","深圳","宁波","西安"],
                workCateData: cateData.optionsData,
                cascaderValue:"",
                showPicker2:false,  // 岗位
                showPicker3:false,  // 学历
                eduData:["初中及以下","高中/中专/职高","大专","本科","硕士","博士"]

            }
        },
        methods:{
            goback(){
                this.$router.push("/user/my");
            },
            onConfirm(value) {  // 城市
                this.resumeData.expect[0] = value;
                this.showPicker = false;
            },
            onConfirm2(value) {  // 学历
                this.resumeData.edu = value;
                this.showPicker3 = false;
            },
            onFinish({selectedOptions}) {
                this.show = false;
                // this.resumeData.expect[1] = selectedOptions.map((option) => option.text).join('/');
                console.log(selectedOptions)
                this.resumeData.expect[1] = selectedOptions[1].text;
            },
            testMsg(){

            },

        }
    }
</script>

<style lang="scss" scoped>
#resume-container{
    .header{
        height:40px;
        width:100%;
        background-color:#55cac4;
        display:flex;
        align-items:center;
        border-radius:0 0 10px 10px;
        .icon{
            position:absolute;
            left:10px;
        }
        p{
            text-align:center;
            width:100%;
            font-size:18px;
            margin:0;
            color:#fff;
            font-weight:500;
        }
    }
    .bottom{
        display: flex;
        justify-content: center;
        padding:20px 0;
        .push_btn{

            background-color:#55cac4;
            border:none;
            color:#fff;
            width:80%;
            padding:10px 0;
            font-size:20px;
            border-radius:10px;
            font-weight: 200;
            box-shadow:0px 0px 5px #808080,0px -2px 5px #808080;
        }
    }
}
</style>
