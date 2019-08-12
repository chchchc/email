<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/#/tempmanage">模板管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>新入职贺卡</el-breadcrumb-item>
      <el-breadcrumb-item>贺卡详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-col :span="20">
        <div class="box">
          <span>
            贺卡名称：
            <el-select v-model="input" size="medium" placeholder="请选择" @change="selectChange">
              <el-option
                v-for="item in optionInput"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
    <el-col :span="4">
        <div class="box1">
          <span style="padding-left:15px;">
             <el-button type="primary" icon="el-icon-download"  @click="download">下载模板</el-button>
          </span>
        </div>
    </el-col>
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
      pdfurl:"",
      pdfurlList:[],
      options: [
        {
          value: "新入职员工贺卡",
          label: "新入职员工贺卡"
        },
        {
          value: "老员工贺卡",
          label: "老员工贺卡"
        },
        {
          value: "满一年",
          label: "满一年"
        },{
          value: "满两年",
          label: "满两年"
        }
      ],
      value: "",
      optionInput:[],
      input: "",
      uploadData:{},
    };
  },
  mounted(){
    this.input=this.$route.params.modelName?this.$route.params.modelName:''
    this.value=this.$route.params.modelType?this.$route.params.modelType:''
    this.pdfurl = "../../static/" + this.input.substring(0,this.input.indexOf(".")) + ".pdf";
    this.getType();
  },
  methods:{
    download:function(){
      window.open(this.pdfurl)
    },
    getType:function(){
      this.axios({
          url:'/model/type',
          method:'GET',
          params:{
            modelType:this.value
          }
        })
        .then(res=>{
          var data = res.data.data;
          var dataArray = [];
          for(var i =0;i<data.length;i++){
              dataArray.push({value:data[i].modelName,label:data[i].modelName});
              this.pdfurlList.push("../../static/"+data[i].modelName.substring(0,data[i].modelName.indexOf("."))+".pdf");
          }
          this.optionInput= dataArray;
        })
        .catch(err=>{
          this.$message({
            message:err,
            type:"error"
          })
        })
    },
    selectChange(val){
      if(val==='新入职贺卡1.docx'){
        this.pdfurl = this.pdfurlList[0];
      }
      if(val === '新入职贺卡2.docx'){
         this.pdfurl = this.pdfurlList[2];
      }
      if(val === '新入职贺卡3.docx'){
         this.pdfurl = this.pdfurlList[1];
      }
      if(val === '新入职贺卡4.docx'){
         this.pdfurl = this.pdfurlList[3];
      }
      if(val === '老员工入职1.docx'){
         this.pdfurl = this.pdfurlList[4];
      }
      console.log(this.pdfurl)
      this.getType();
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

