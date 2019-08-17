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
  methods: {
    handleSubmit(event) {
        this.logining = true;
        this.axios.post('/user_login',this.$qs.stringify(this.ruleForm2))
        .then(res=>{
          this.$message({
            message:res.data.msg,
            type:'success'
          })
        })
        .catch(err=>{
          this.logining = false;
          this.$message({
            message:err,
            type:'error'
          })
        })
          sessionStorage.setItem("user", this.ruleForm2.username);
          let token =  'qweqweqwewqe'
          let name = 'lihua' // res.data.data
          this.$store.commit("setToken", token);
          this.$store.commit("setName", name);
          document.cookie = "token=" + token;
          document.cookie = "name=" + name;
          this.$router.push({ path: "/userDes" });
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
