<template>
<div>
  <div class="box">
    <span>
      贺卡名称：
      <el-input style="width: 230px;" size="medium" v-model="input" placeholder="请输入内容"></el-input>
    </span>

    <span>
      贺卡类型：
      <el-select v-model="value" size="medium" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </span>

    <span>
      补发时间段：
      <el-select size="medium" v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value1"
          :label="item.label"
          :value="item.value1"
        ></el-option>
      </el-select>
    </span>
  </div>

  <div class="box1">
    <div><p>已延误时长：。。。小时</p></div>
    <div>
      
  <el-button type="primary" @click="gg()">一键补发</el-button>
   <el-button>取消</el-button>
    </div>
    
  </div>

  <div style="width:400px;height:250px;padding-left:340px;">
    <pdf ref="pdf" src="../../static/first.pdf"></pdf>
    </div>
  
  
  
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
   components: {pdf},
  data() {
    return {
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
      value: "",

      options1: [
        {
          value1: "选项1",
          label: "最近三天"
        },
        {
          value1: "选项2",
          label: "最近四天"
        },
        {
          value1: "选项3",
          label: "所有"
        }
      ],
      value1: ""
    };
  },  
  methods:{
     gg:function(){
       alert(提交成功);
     }
  }
};
</script>
<style>
.box {
  display: flex;
  justify-content: space-between;
}
.box1{
  display: flex;
   justify-content: space-between;
   padding-top: 30px;
   border-bottom: 1px solid #eee;
}
</style>

