<template>
  <div id="app">
            <router-view></router-view>
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
  border-right: 1px solid #eee;
}
.po {
  display: flex;
  justify-content: left;
  padding-left: 30px;
}
/* .el-menu-item{
  color:#409EFF;
} */
</style>
