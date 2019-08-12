<template>
  <div id="app">
    <el-container style=" border: 1px solid #eee">
      <el-aside style="width:180px; background-color:#eee">

        <el-header style="height:39px;" >
         <div class="po"><img src="../src/assets/logo1.png" alt="" style="width:74px;height:42px;"></div>
        </el-header>

        <el-menu :default-active="$route.path" router style="border-right:1px solid white"
         background-color="#eee"
      text-color="black">
           <el-menu-item index="userDes">
             <i class="el-icon-edit-outline"></i>应用说明
          </el-menu-item>
          <el-menu-item index="tempmanage">
            <i class="el-icon-menu"></i>模板管理
          </el-menu-item>
           <el-menu-item index="rule">
           <i class="el-icon-document"></i>规则管理
          </el-menu-item>
       <el-menu-item index="send">
            <i class="el-icon-s-promotion"></i>发送管理
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
   display: flex;
  justify-content: center;
}
/* .el-menu-item{
  color:#409EFF;
} */
</style>
