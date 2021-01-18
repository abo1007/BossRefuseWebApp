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
                label="工作种类"
                placeholder="请选择工作种类"
                @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
            <van-cascader
                    v-model="cascaderValue"
                    title="请选择所在地区"
                    :options="options"
                    @close="showPicker = false"
                    @finish="onFinish"
            />
        </van-popup>

        <van-cell-group>
            <van-field v-model="titleValue" label="标题" placeholder="请输入招聘标题" />
        </van-cell-group>
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
            >
                <template #button>
                    <van-button size="small" type="primary" @click="tagPushList">添加标签</van-button>
                </template>
            </van-field>
            <van-field label="标签" :value="tagShow" disabled />
        </van-cell-group>


        <div class="btn-container">
            <van-button type="primary" size="large" plain @click="publishWork">点击发布</van-button>
        </div>



    </div>
</template>

<script>
    const optionsData = [
        {
            text: '技术',
            value: 1,
            children: [
                { text: 'Java工程师', value:101 },
                { text: '前端工程师', value:102 },
                { text: 'PHP工程师', value:103 },
                { text: '算法工程师', value:104 },
                { text: '测试工程师', value:105 },
                { text: '全栈工程师', value:106 }
            ],
        },
        {
            text: '产品',
            value: 2,
            children: [
                { text: '产品经理', value:201 },
                { text: '游戏策划', value:202 },
                { text: '电商产品经理', value:203 },
                { text: '产品专员', value:204 },
                { text: '产品VP', value:205 }
            ],
        },
        {
            text: '设计',
            value: 3,
            children: [
                { text: 'UI设计师', value:301 },
                { text: '平面设计', value:302 },
                { text: '室内设计', value:303 },
                { text: '视觉设计', value:304 },
                { text: '工业设计', value:305 }
            ],
        },
        {
            text: '运营',
            value: 4,
            children: [
                { text: '电商运营', value:401 },
                { text: '新媒体运营', value:402 },
                { text: '客服专员', value:403 },
                { text: '网站编辑', value:404 },
                { text: '产品运营', value:405 }
            ],
        },
        {
            text: '市场',
            value: 5,
            children: [
                { text: '市场营销', value:501 },
                { text: '网络营销', value:502 },
                { text: '品牌公关', value:503 },
                { text: '广告策划', value:504 },
                { text: 'SEO/SEM', value:505 }
            ],
        },
        {
            text: '其他',
            value: 6,
            children: [
                { text: '其他', value:600 }
            ],
        },
    ];
    export default {
        name: "com_focus",
        data(){
            return{
                work_category:["技术","产品","设计","运营","市场","更多"],
                value:'',
                showPicker: false,
                cascaderValue:"",   // 被选择内容的数字编码
                options:optionsData,

                titleValue:'',
                workMsg:'',
                workMoney:'1',
                workMoney_min:'',
                workMoney_max:'',
                tagPush:'',
                tagList:[],
                tagShow:''
            }
        },
        methods:{
            rightClick(){
                this.$toast("这位客官是想切换到哪里呢？");
            },
            onConfirm(value) {
                this.value = value;
                this.showPicker = false;
            },
            tagPushList(){
                this.$toast("暂未制作");
            },
            publishWork(){
                this.$toast("ok");
            },
            onFinish({ selectedOptions }) {
                this.show = false;
                this.value = selectedOptions.map((option) => option.text).join('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #com-focus{

        .btn-container{
            padding:0 10px;
        }
    }

</style>
