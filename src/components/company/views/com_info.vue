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
               readonly disabled/>
    <van-field v-model="cominfoData.workComName"
               label="企业短名"/>

    <van-field v-model="cominfoData.workComPerson"
               label="企业法人"
               :disabled="Boolean(isUpdate)"/>

    <van-field v-model="cominfoData.workComAllName"
               label="企业全名"
               :disabled="Boolean(isUpdate)"/>

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
               readonly
               :disabled="Boolean(isUpdate)"
               @click="showDate"/>
    <van-calendar v-model="show"
                  :min-date="minDate"
                  :max-date="maxDate"
                  @confirm="onConfirm2"/>

    <van-field v-model="cominfoData.workComCate"
               label="行业类别"
               readonly
               @click="showPicker3 = true"/>
    <van-popup v-model="showPicker3" round position="bottom">
      <van-picker
          show-toolbar
          :columns="comCatedata"
          @cancel="showPicker3 = false"
          @confirm="onConfirm4"
      />
    </van-popup>

    <van-cell-group>
      <van-field
          v-model="tagPush"
          center
          clearable
          label="特点标签"
          placeholder="特点标签 2-6位 无符号"
          maxlength="6"
      >
        <template #button>
          <van-button size="small" type="primary" @click="addTag">添加标签</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div class="tag-container">
            <span v-for="item in cominfoData.workComTag"
                  class="tag"
                  :key="item.id"
                  @click="delTag(item.id)">{{ item.title }}</span>

    </div>

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
    />
    <van-field v-model="cominfoData.workComIntro"
               label="公司简介"
    />
    <van-field v-model="cominfoData.workComCap"
               type="digit"
               label="注册资本(万元)"
               :disabled="Boolean(isUpdate)"
    />

    <div class="bottom">
      <button class="push_btn" @click="selFun">点击保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "com_info",
  data() {
    return {
      cominfoData: {
        workComId: 1401,
        workComName: "",
        workComPerson: "",
        workComAllName: "",
        workComScale: "",
        workComDate: "",
        workComCate: "",
        workComTag: [{id: 1, title: "五险一金"}],
        workComCity: "",
        workComArea: "",
        workComIntro: "",
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
      // 行业选择器
      showPicker3: false,
      comCatedata: ["电子商务", "游戏", "媒体", "广告营销", "数据服务", "医疗健康", "生活服务", "O2O",
        "旅游", "分类信息", "音乐/视频/阅读", "在线教育", "社交网络", "人力资源服务", "企业服务",
        "信息安全", "智能硬件", "移动互联网", "互联网", "计算机软件", "通信/网络设备", "广告/公关/会展",
        "互联网金融", "物流/仓储", "贸易/进出口", "咨询", "工程施工", "汽车生产", "其他行业"],

      tagPush: "",
      // 信息备用变量
      cominfoData2: {},
      // 确定是否为首次
      isUpdate: 0,

      comId: null
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
    onConfirm4(value) {
      this.cominfoData.workComCate = value;
      this.showPicker3 = false;

    },
    getTags() {  // 将标签数组转换为数据库存储的字符串
      let tagArr = [];
      if (this.cominfoData.workComTag.length === 0) {
        this.$toast("最少一个标签哦");
        return false;
      }
      for (let i = 0; i < this.cominfoData.workComTag.length; i++) {
        tagArr[i] = this.cominfoData.workComTag[i].title;
      }
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
      // 正则验证规范 要求2-6位
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]{2,6}$/;
      if (!reg.test(this.tagPush)) {
        this.$toast("不符规范");
        return false;
      }
      if (this.cominfoData.workComTag.length === 5) {
        this.$toast("最多5个哦");
        return;
      }
      let tid = this.cominfoData.workComTag.length + 1;
      this.cominfoData.workComTag.push({id: tid, title: this.tagPush});
      this.tagPush = '';

    },
    delTag(id) {    // 删除tag
      for (let i = 0; i < this.cominfoData.workComTag.length; i++) {
        if (this.cominfoData.workComTag[i].id === id) {
          this.cominfoData.workComTag.splice(i, 1);
        }
      }
      for (let i = 0; i < this.cominfoData.workComTag.length; i++) {
        this.cominfoData.workComTag[i].id = i;
      }
    },
    getComInfo() {
      this.$apiList.getComInfo(this.comId).then(res => {
        if (res.code === 200) {
          this.$toast.success("获取成功");
          this.cominfoData2 = res.data;
          console.log(res);
          this.updatePage();
          this.isUpdate++;
        } else {
          this.$toast.fail("空数据");
        }
      }).catch(err => {
        this.$toast.fail("网络开小差了");
        console.log(err);
      })
      // this.$axios.get(this.$API.API_GET_COM_INFO + this.comId).then(res => {
      //     if (res.data.code === 200) {
      //         this.$toast.success("获取成功");
      //         this.cominfoData2 = res.data.data;
      //         console.log(res.data);
      //         this.updatePage();
      //         this.isUpdate++;
      //     } else {
      //         this.$toast.fail("空数据");
      //     }
      // }).catch(err => {
      //     this.$toast.fail("网络开小差了");
      //     console.log(err);
      // })
    },
    postComInfo() {
      if (!this.getTags()) {
        return false;
      }
      let cominfoData = {
        workComName: this.cominfoData.workComName,
        workComAllName: this.cominfoData.workComAllName,
        workComScale: this.cominfoData.workComScale,
        workComPerson: this.cominfoData.workComPerson,
        workComCate: this.cominfoData.workComCate,
        workComDate: this.cominfoData.workComDate,
        workComTag: this.getTags(),
        workComCity: this.cominfoData.workComCity,
        workComArea: this.cominfoData.workComArea,
        workComIntro: this.cominfoData.workComIntro,
        workComCap: this.cominfoData.workComCap,
        userId: sessionStorage.getItem("ID")
      };
      this.$apiList.postComInfo(cominfoData).then(res => {
        if (res.code === 200) {
          this.$toast.success("注册企业信息成功");
          console.log(res);
          sessionStorage.setItem("comId", res.data);
          location.reload();
        } else {
          this.$toast.fail("网络开小差了");
        }
      }).catch(err => {
        this.$toast.fail("网络开小差了");
        console.log(err);
      })
      // this.$axios.post(this.$API.API_POST_COM_INFO, cominfoData).then(res => {
      //   if (res.data.code === 200) {
      //     this.$toast.success("注册企业信息成功");
      //     console.log(res.data);
      //     sessionStorage.setItem("comId", res.data.data);
      //     location.reload();
      //   } else {
      //     this.$toast.fail("网络开小差了");
      //   }
      // }).catch(err => {
      //   this.$toast.fail("网络开小差了");
      //   console.log(err);
      // })
    },
    putComInfo() {
      if (!this.getTags()) {
        return false;
      }
      let cominfoData = {
        workComName: this.cominfoData.workComName,
        workComScale: this.cominfoData.workComScale,
        workComCate: this.cominfoData.workComCate,
        workComTag: this.getTags(),
        workComCity: this.cominfoData.workComCity,
        workComArea: this.cominfoData.workComArea,
        workComIntro: this.cominfoData.workComIntro,
      };
      this.$apiList.updateComInfo(this.cominfoData.workComId,cominfoData).then(res => {
        console.log(res);
        if (res.code === 200) {
          this.$toast.success("修改成功");
          location.reload();
        } else {
          this.$toast.fail("修改失败");
        }
      }).catch(err => {
        this.$toast.fail("修改失败");
        console.log(err);
      });
      // this.$axios.put(this.$API.API_PUT_COM_INFO + this.cominfoData.workComId, cominfoData).then(res => {
      //   console.log(res.data);
      //   if (res.data.code === 200) {
      //     this.$toast.success("修改成功");
      //     location.reload();
      //   } else {
      //     this.$toast.fail("修改失败");
      //   }
      // }).catch(err => {
      //   this.$toast.fail("修改失败");
      //   console.log(err);
      // });

    },
    updatePage() {
      this.cominfoData2.workComTag = this.cominfoData2.workComTag.split("，");
      let newTags = [];
      for (let i = 0; i < this.cominfoData2.workComTag.length; i++) {
        newTags.push({id: i, title: this.cominfoData2.workComTag[i]});
      }
      console.log(newTags);
      this.cominfoData = this.cominfoData2;
      this.cominfoData.workComTag = newTags;
      // this.cominfoData = {
      //     workComId: this.cominfoData2.workComId,
      //     workComName: this.cominfoData2.workComName,
      //     workComPerson: this.cominfoData2.workComPerson,
      //     workComAllName: this.cominfoData2.workComAllName,
      //     workComScale: this.cominfoData2.workComScale,
      //     workComDate: this.cominfoData2.workComDate,
      //     workComCate: this.cominfoData2.workComCate,
      //     workComTag: newTags,
      //     workComCity: this.cominfoData2.workComCity,
      //     workComArea: this.cominfoData2.workComArea,
      //     workComIntro: this.cominfoData2.workComIntro,
      //     workComCap: this.cominfoData2.workComCap
      // }
    },
    selFun() {
      if (this.isUpdate) {
        this.putComInfo();
      } else {
        this.postComInfo();
      }
    },
    showDate() {
      if (!this.isUpdate) {
        this.show = true;
      }
    }
  },
  created() {
    this.comId = sessionStorage.getItem('comId');
    if (this.comId) this.getComInfo();

  }
}
</script>

<style lang="scss" scoped>
#info-container {


  .tag-container {
    height: 24px;
    max-height: 24px;
    padding: 10px;
    border-bottom: 1px solid #ebedf0;
    overflow-x: scroll;
    overflow-Y: hidden;
    white-space: nowrap;

    span {
      padding: 6px;
      background-color: #4d4d4d;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      margin: 0 5px;
    }
  }

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
