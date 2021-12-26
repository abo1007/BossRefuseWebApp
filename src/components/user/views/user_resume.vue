<template>
  <div id="resume-container">
    <bo-navbar text="个人简历" @left-fun="goback"/>
    <div class="content">
      <van-cell-group>
        <van-field v-model="resumeData.name" label="姓名" placeholder="请输入姓名"/>

      </van-cell-group>
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="resumeData.sex" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="resumeData.age" type="digit"
                 label="年龄" placeholder="请输入年龄"
                 maxlength="2"/>

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

      <van-field v-model="resumeData.school"
                 label="毕业院校"/>
      <van-field v-model="resumeData.workExper"
                 type="digit"
                 label="工作经验"
                 placeholder="请输入工作经验/年"/>
      <van-field v-model="resumeData.projectExper"
                 label="项目经验"
                 placeholder="项目经验"/>
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
      <!--            <van-field v-model="resumeData.expect[2]" label="求职期望薪资" placeholder="薪资"/>-->
      <van-field
          readonly
          clickable
          label="求职期望薪资"
          :value="resumeData.expect[2]"
          placeholder="期望薪资"
          @click="showPicker4 = true"
      />
      <van-popup v-model="showPicker4" round position="bottom">
        <van-picker
            show-toolbar
            :columns="salary"
            @cancel="showPicker4 = false"
            @confirm="onConfirm3"
        />
      </van-popup>


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
      <button class="push_btn" @click="postResumeData">点击保存</button>
    </div>
  </div>
</template>

<script>
import cateData from "../../../util/cateData";

let resumeData = {};
export default {
  name: "user_resume",
  data() {
    return {
      resumeData: {
        name: "",
        sex: 0,
        age: null,
        edu: "",
        school: "",
        workExper: "",
        projectExper: "",
        certificate: "",
        honor: "",
        expect: ["", "", ""],
        intro: "",
        userId: 10001
      },
      showPicker: false,  // 城市
      columns: ["北京", "天津", "沈阳", "大连", "青岛", "郑州",
        "苏州", "南京", "武汉", "上海", "杭州", "广州", "成都",
        "重庆", "深圳", "宁波", "西安"],
      workCateData: cateData.optionsData,
      cascaderValue: "",
      showPicker2: false,  // 岗位
      showPicker3: false,  // 学历

      eduData: ["初中及以下", "高中/中专/职高", "大专", "本科", "硕士", "博士"],
      salary: ["2k以下", "2-4k", "4-6k", "6-8k", "8-15k", "15k以上"],
      showPicker4: false,   // 薪资
      isUpdate: 0,

      ID: null

    }
  },
  methods: {
    goback() {
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
    onConfirm3(value) {
      this.resumeData.expect[2] = value;
      this.showPicker4 = false;
    },
    onFinish({selectedOptions}) {
      this.showPicker2 = false;
      // this.resumeData.expect[1] = selectedOptions.map((option) => option.text).join('/');
      this.resumeData.expect[1] = selectedOptions[1].text;
    },
    testMsg() {
      return true;
    },
    postResumeData() {   // 提交简历
      // 拼接 期望 字符串
      let expect = this.resumeData.expect.join("，");
      // console.log(this.resumeData.expect);
      if (this.isUpdate !== 0) {
        this.putResumeData(expect);
      } else {
        this.$toast("保存无效");
        if (this.testMsg()) {
          this.$apiList.postResume({...this.resumeData, userId: this.ID}).then(res => {
            if (res.code === 200) {
              // 应加入简历id的返回
              this.$toast("保存成功");
              this.$router.push({name: "user_my"})
            }
          }).catch(err => {
            this.$toast("保存失败");
            console.log(err)
          })
          // this.$axios.post(this.$API.API_POST_RESUME).then(res => {
          //     if(res.data.code === 200){
          //         // 应加入简历id的返回
          //         this.$toast("保存成功");
          //         this.$router.push({name:"user_my"})
          //     }
          // }).catch(err => {
          //     this.$toast("保存失败");
          //     console.log(err)
          // })
        }
      }
    },
    getResumeData() {    // 获取简历
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      this.$apiList.getResume(this.ID).then(res => {
        this.$toast.clear()
        if (res.code === 200) {
          resumeData = res.data;
          resumeData.expect = resumeData.expect.split("，");
          resumeData.sex = resumeData.sex.toString();
          this.resumeData = this.deepClone(resumeData);
          this.isUpdate++;
        }
      }).catch(err => {
        this.$toast("获取简历数据失败");
        console.log(err)
      })
      // this.$axios.get(this.$API.API_GET_RESUME + this.ID).then(res => {
      //     // console.log(res.data);
      //     if(res.data.code === 200){
      //         resumeData = res.data.data;
      //         resumeData.expect = resumeData.expect.split("，");
      //         resumeData.sex = resumeData.sex.toString();
      //         this.resumeData = this.deepClone(resumeData);
      //         this.isUpdate++;
      //     }
      // }).catch(err => {
      //     this.$toast("获取简历数据失败");
      //     console.log(err)
      // })
    },
    putResumeData(expect) {    // 修改简历
      let updateData = {};

      // 循环检查 是否更改字段
      for (let key in this.resumeData) {
        // console.log(key+":"+this.resumeData[key]);
        if (resumeData[key] != this.resumeData[key]) {
          updateData[key] = this.resumeData[key];
        }
      }
      // 检查是否含特殊字段 需要特殊处理
      if (updateData.expect) {
        updateData.expect = expect;
      }
      this.$apiList.putResume(this.ID, updateData).then(res => {
        if (res.code === 200) {
          this.$toast("保存成功");
          this.$router.push({name: "user_my"})
        } else {
          this.$toast("保存无效");
        }
      }).catch(err => {
        this.$toast("保存无效");
        console.log(err);
      });

      // this.$axios.put(this.$API.API_PUT_RESUME + this.ID,updateData).then(res => {
      //     if(res.data.code === 200){
      //         this.$toast("保存成功");
      //         this.$router.push({name:"user_my"})
      //     }else{
      //         this.$toast("保存无效");
      //     }
      // }).catch(err => {
      //     this.$toast("保存无效");
      //     console.log(err);
      // });
      console.log(updateData);
    },
    deepClone(obj) {   // 深拷贝方法
      let _obj = JSON.stringify(obj), objClone = JSON.parse(_obj);
      return objClone;
    }
  },
  created() {
    this.ID = sessionStorage.getItem('ID');
  },
  mounted() {
    this.getResumeData();
  }
}
</script>

<style lang="scss" scoped>
#resume-container {
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
