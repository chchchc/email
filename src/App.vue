<template>
  <div id="app">
    <el-container style=" border: 1px solid #eee">
      <el-aside width="200px" >
        <el-menu :default-active="$route.path" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>贺卡界面
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>HR配置
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="bbb">
            <i class="el-icon-setting"></i>贺卡配置
          </el-menu-item>

          <el-menu-item index="ccc">
            <i class="el-icon-time"></i>漏发提醒
          </el-menu-item>

          <el-menu-item index="aaa">
            <i class="el-icon-position"></i>补发页面
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container style="height:600px" >
        <el-header style="height:30px;" >
         <div class="po"><img src="../src/assets/smybol.jpg" alt="" style="width:147px;height:39px;"></div>
        </el-header>

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
.el-header {

  line-height: 40px;
}

.el-aside {
  color: rgb(169, 209, 60);
}
.po{
  position: absolute;
  right: 15px;
}
</style>
