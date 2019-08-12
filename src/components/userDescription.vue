<template>
  <div>
    <el-row>
      <el-col :span="16">
        <div class="header-div1">应用说明</div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
   <div style="display:flex;"><span>仅需三步，即可完成应用配置</span></div>
   <div style="padding-top:10px;">
  <el-steps  :active="3" align-center>
  <el-step  title="上传模板" description="1.进入模板管理
  2.为不同贺卡类型上传模板
  3.保存模板"></el-step>
  <el-step title="确认发送规则" description="1.进入发送规则页
  2.设置相关贺卡发送参数
  3.保存"></el-step>
  <el-step title="启用模板" description="1.为不同的类型启用一个模板
  2.注意：一个类型仅有一个模板生效
  3.完成配置"></el-step>
</el-steps>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.header-div1 {
  font-size: 25px;
  float: left;
}
</style>
