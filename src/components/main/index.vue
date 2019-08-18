<template>
  <div class="mainClass">
    <el-container style=" border: 1px solid #eee">
      <el-header class="headerClass" >
          <img src="../../assets/logo2.png" class="imgClass" />

        <div class="nameClass">
          欢迎您： {{name}}
          <span class="tuiClass" @click="logout()">（退出）</span>
        </div>
      </el-header>
      <el-container style="height:100vh">
        <el-aside class="asideClass" >
          <el-menu
            default-active="tempmanage"
            router
            style="border-right:none"
            background-color="rgb(48, 65, 86)"
            text-color="#f4f4f5"
            active-text-color="rgb(64, 158, 255)"
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
            <el-menu-item index="/permission">
              <i class="el-icon-s-promotion"></i>权限配置
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
    let cval=getCookie('name');
    if(cval!=null)  document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    this.$store.commit("setName", '');
     this.$router.push({path:'/login'})
   }
 }
};
</script>

<style>
.mainClass .el-menu-item:hover {

background-color: rgb(67, 74, 80) !important;

}

.mainClass .nameClass {
  position: absolute;
  right: 30px;
  top: 17px;
}
.mainClass .tuiClass {
  font-size: 13px;
  color: rgba(56, 98, 142, 0.82);
}
.mainClass .tuiClass:hover {
  color: #f56c6c;
  cursor: pointer;
  text-decoration: underline;
}
.mainClass .asideClass{
width:178px !important;
background-color:rgb(48, 65, 86);
}
.mainClass .headerClass{
 line-height: 40px;
 text-align: left;
  background: linear-gradient(to right, rgb(184, 193, 196) , rgba(179, 193, 211, 0.808)); /* 标准的语法 */

}
.mainClass .imgClass{
padding-left: 40px;
  height: 60px;
}
</style>
