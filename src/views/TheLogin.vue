<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getCookie} from '@/utils'
export default {
  data() {
    return {
      ruleForm2: {
        username: '',
        password: '',
      },
      logining: false,
      rules2: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, 
            message: "enter your password", 
            trigger: "blur" 
          }
        ]
      },
      checked: false
    };
  },
  mounted:function(){
  },
  methods: {
    handleSubmit(event) {
        // 向sso发送请求
        var form = {
        "grant_type":"password",
        "username":this.ruleForm2.username,
        "password":this.ruleForm2.password,
        "client_id":"clientId",
        "client_secret":"clientSecret",
        }
        this.axios.post('https://link.bingocc.cc:5443/sso/oauth2/token',this.$qs.stringify(form))
        .then(res=>{
          this.$message({
            message:"校验成功",
            type:'success'
          })
          // to do发送求
          this.axios({
          method:'GET',
          url:'http://10.201.61.194:10087/cookie',
         
          })
          .then(res=>{

          })
          .catch(err=>{
            this.$message({
              message:"获取失败",
              type:'error'
            })
          })
          let name = "管理员"; // res.data.data
          this.$store.commit("setName", name);
          document.cookie = "name=" + name;
          this.$router.push({path:"/userDes"});
        })
        .catch(err=>{
          this.$message({
            message:"校验失败",
            type:'error'
          })
        })
      }
    },
  }
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 97vh;
  background:url('../assets/background.jpg') center no-repeat ;
  background-size: 100% 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  position: absolute;
  margin: auto;
  width: 350px;
  left: 0;
  right: 0;
  top: 200px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
