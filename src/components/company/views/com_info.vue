<template>
    <div id="info-container">
        <van-nav-bar
                title="企业信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="cominfoData.workComId"
                   type="digit"
                   label="企业ID"
                   readonly/>
        <van-field v-model="cominfoData.workComName"
                   label="企业短名"
                   readonly/>
        <van-field v-model="cominfoData.workComPerson"
                   label="企业法人"
                   readonly/>
        <van-field v-model="cominfoData.workComAllName"
                   label="企业全名"
                   readonly/>
        <!--        <van-field v-model="cominfoData.workComScale"-->
        <!--                   label="企业规模"-->
        <!--                   readonly/>-->
        <van-field
                readonly
                clickable
                label="企业规模"
                :value="cominfoData.workComScale"
                placeholder="选择企业规模"
                @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="personData"
                    @cancel="showPicker1 = false"
                    @confirm="onConfirm1"
            />
        </van-popup>

        <van-field v-model="cominfoData.workComDate"
                   label="注册日期"
                   readonly @click="show = true"/>
        <van-calendar v-model="show"
                      :min-date="minDate"
                      :max-date="maxDate"
                      @confirm="onConfirm2"/>

        <van-field v-model="cominfoData.workComCate"
                   label="行业类别"
                   readonly/>

        <van-field v-model="cominfoData.workComTag"
                   label="特点标签"
                   readonly/>

        <van-field v-model="cominfoData.workComCity"
                   label="城市"
                   readonly
                   @click="showPicker2 = true"/>
        <van-popup v-model="showPicker2" round position="bottom">
            <van-picker
                    show-toolbar
                    :columns="cityData"
                    @cancel="showPicker2 = false"
                    @confirm="onConfirm3"
            />
        </van-popup>

        <van-field v-model="cominfoData.workComArea"
                   label="地区"
                   readonly/>
        <van-field v-model="cominfoData.workComIntro"
                   label="公司简介"
                   readonly/>
        <van-field v-model="cominfoData.workComCap"
                   type="digit"
                   label="注册资本(万元)"
                   readonly/>

        <div class="bottom">
            <button class="push_btn" @click="">点击保存</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "com_info",
        data() {
            return {
                cominfoData: {
                    workComId: 1408,
                    workComName: "白嫖科技",
                    workComPerson: "杰克马",
                    workComAllName: "南京市白嫖科技发展有限公司",
                    workComScale: "0-9",
                    workComDate: "2010-01-01",
                    workComCate: "互联网/科技",
                    workComTag: "朝八晚六，收费零食，自费团建",
                    workComCity: "南京市",
                    workComArea: "鼓楼区",
                    workComIntro: "这个公司很懒，什么都没有留下",
                    workComCap: 1

                },
                // 企业规模选择器
                showPicker1: false,
                personData: ["0-9", "10-19", "20-49", "50-99", "100-199", "200-499", "500+"],
                // 日期选择器
                show: false,
                minDate: new Date(2010, 0, 1),
                maxDate: new Date(),
                // 城市选择器
                showPicker2: false,
                cityData: ["北京", "天津", "沈阳", "大连", "青岛", "郑州",
                    "苏州", "南京", "武汉", "上海", "杭州", "广州", "成都",
                    "重庆", "深圳", "宁波", "西安"],
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            onConfirm1(value) {
                this.cominfoData.workComScale = value;
                this.showPicker1 = false;
            },
            onConfirm2(date) {
                this.show = false;
                this.cominfoData.workComDate = this.formatDate(date);
            },
            formatDate(date) {
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            },
            onConfirm3(value) {
                this.cominfoData.workComCity = value + "市";
                this.showPicker2 = false;

            },
        }
    }
</script>

<style lang="scss" scoped>
    #info-container {

        .bottom {
            display: flex;
            justify-content: center;
            padding: 20px 0;

            .push_btn {

                background-color: #55cac4;
                border: none;
                color: #fff;
                width: 80%;
                padding: 10px 0;
                font-size: 20px;
                border-radius: 10px;
                font-weight: 200;
                box-shadow: 0px 0px 5px #808080, 0px -2px 5px #808080;
            }
        }
    }
</style>
