<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">模板管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>新入职贺卡</el-breadcrumb-item>
      <el-breadcrumb-item>贺卡详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-col :span="15">

    <div class="box">
      <span>
        贺卡名称：
        <el-input style="width: 230px;" size="medium" v-model="input" placeholder="请输入内容"></el-input>
      </span>

      <span style="padding-left:30px;">
        贺卡类型：
        <el-select v-model="value" size="medium" placeholder="请选择" @change="selectChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </span>
    </div>
      </el-col>
      <el-col :span="9">
    <div class="box1">
      <span style="padding-left:15px;">
        <el-button size="small">下载模板</el-button>
      </span>
      <span style="padding-left:15px;">
        <el-button size="small" type="primary">上传更新模板</el-button>
      </span>
      <span style="padding-left:15px;">
        <el-button size="small">保存</el-button>
      </span>
    </div></el-col>
    </el-row>

<div style="width:400px;height:250px;padding-left:246px;" >
       <pdf  style=" width: 500px;" ref="pdf" :src="pdfurl" ></pdf>
    </div>

  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: { pdf },

  data() {
    return {
       pdfurl:"../../static/first2-2.pdf",
      pdfurlList:["../../static/first.pdf","../../static/first2-2.pdf"],
      input: "",
      options: [
        {
          value: "选项1",
          label: "员工入职贺卡"
        },
        {
          value: "选项2",
          label: "年限贺卡"
        },
        {
          value: "选项3",
          label: "所有类型"
        }
      ],
      value: "员工入职贺卡"
    };
  },
  mounted(){
    console.log('this.$route.params.modelName',this.$route.params.modelName);
    this.input=this.$route.params.modelName?this.$route.params.modelName:''
  },
  methods:{
    selectChange(val){
      this.pdfurl= val==='newcard'?this.pdfurlList[1]:this.pdfurlList[0]
    },
  }
};
</script>
<style>
.box {
  display: flex;
  /* justify-content: space-between; */
  padding-top: 20px;
}
.box1 {
  display: flex;

  padding-top: 20px;
}
</style>

