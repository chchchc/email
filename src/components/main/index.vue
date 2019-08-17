<template>
  <div>
    <el-container style=" border: 1px solid #eee">
      <el-header style="height:39px; background-color:#66b1ff78">
        <div class="po">
          <img src="../../assets/logo3.png" alt style="width:74px;height:42px;" />
        </div>

        <div class="nameClass">
          欢迎您： {{name}}
          <span class="tuiClass" @click="logout()">（退出）</span>
        </div>
      </el-header>
      <el-container style="height:100vh">
        <el-aside style="width:180px; background-color:#eee">
          <el-menu
            default-active="tempmanage"
            router
            style="border-right:1px solid white"
            background-color="#eee"
            text-color="black"
            active-text-color="blue"
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
import {getCookie} from '@/utils'
export default {
 computed:{
   name(){
     return this.$store.state.name
   }
 },
 methods:{
   logout(){
let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval=getCookie('token');
    if(cval!=null)  document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    this.$store.commit("setToken", '');
     this.$router.push({path:'/login'})
   }
 }
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
.nameClass {
  position: absolute;
  right: 30px;
  top: 17px;
}
.tuiClass {
  font-size: 13px;
  color: rgba(56, 98, 142, 0.82);
}
.tuiClass:hover {
  color: #f56c6c;
  cursor: pointer;
  text-decoration: underline;
}
</style>
