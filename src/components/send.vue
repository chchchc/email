<template>
  <div>
    <div>
        <el-row>
      <el-col :span="16">
        <div class="header-div1">发送管理</div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
      <el-row class="own_container">
        <el-col :span="10">
            <div class="grid-content bg-purple-dark">
                <el-button size="medium" class="own-button" @click="tabChange(child1)">全部</el-button>
                <el-button size="medium" class="own-button" @click="tabChange(child2)">发送成功</el-button>
                <el-button size="medium" class="own-button" @click="tabChange(child3)" v-on:click="a=flase" style="position:relative;">发送失败</el-button>
                <el-button size="medium" class="own-button" @click="tabChange(child4)">未发送</el-button>
                <div v-show="a" class="own-radius"></div>
            </div>
        </el-col>

    </el-row>
    </div>
    <!--
      动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。
    -->
    <div :is="currentView"></div>
  </div>
</template>

<style>
  .el-button+.el-button {
    margin-left: 0px;
  }
  .own_container{
    padding-bottom:10px;
  }
  .own-radius{
    width: 13px;
    height: 13px;
    background: red;
    float: right;
    border: -2px solid red;/*设置红色*/
    border-radius:6px;/*设置圆角*/
    left: 303px;
    top: 1px;
    position:absolute;
  }
</style>

<script>

 //导入子组件
 import child1 from '@/components/all';
 import child2 from '@/components/success';
 import child3 from '@/components/faile';
 import child4 from '@/components/unsent';

 export default {
   data () {
     return {
       child1: 'child1',
       child2: 'child2',
       child3: 'child3',
       child4: 'child4',
       currentView: 'child1', // 默认选中第一项
       a:true,
     };
   },
   methods: {
     tabChange(tabItem) {
       this.currentView = tabItem;
     }
   },
   components: {
     child1,
     child2,
     child3,
     child4,
   }
 };
</script>
