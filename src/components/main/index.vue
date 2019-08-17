<template>
  <div>
    <el-container style=" border: 1px solid #eee">
      <el-header style="height:39px; background-color:#66b1ff">
        <div class="po">
          <img src="../../assets/logo3.png" alt style="width:74px;height:42px;" />
        </div>
      </el-header>
      <el-container style="height:100vh">
        <el-aside style="width:180px; background-color:#eee">
          <el-menu
            default-active="tempmanage"
            router
            style="border-right:1px solid white"
            background-color="#eee"
            text-color="blue"
            active-text-color="red"
          >

            <el-menu-item index="tempmanage">
              <i class="el-icon-menu"></i>模板管理
            </el-menu-item>
            <el-menu-item index="rule">
              <i class="el-icon-document"></i>规则管理
            </el-menu-item>
            <el-menu-item index="/send">
              <i class="el-icon-s-promotion"></i>发送管理
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
 //
};
</script>

<style>

.el-aside {
  border-right: 1px solid #eee;
}
.po {
  display: flex;
  justify-content: left;
  padding-left: 30px;
}

</style>
