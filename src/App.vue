<template>
  <div id="app">
    <el-container style=" border: 1px solid #eee">
      <el-aside width="200px" >

        <el-header style="height:39px;" >
         <div class="po"><img src="../src/assets/log.png" alt="" style="width:147px;height:39px;"></div>
        </el-header>
        <el-menu :default-active="$route.path" router style="border-right:1px solid white">
          <el-menu-item index="rule">
            <i ></i>规则管理
          </el-menu-item>
          <el-menu-item index="tempmanage">
            <i></i>模板管理
          </el-menu-item> 
       <el-menu-item index="send">
            <i></i>发送管理
          </el-menu-item> 
        </el-menu>
      </el-aside>

      <el-container style="height:600px" >


        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.el-aside {
  border-right:1px solid #eee;
}
.po{
  position: absolute;
  left: 25px;
}
/* .el-menu-item{
  color:#409EFF;
} */
</style>
