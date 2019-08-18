<template>
  <div id="model" class="model">
    <div id="model-header" class="model-header">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="16">
              <div class="header-div1">模板中心</div>
            </el-col>
            <el-col :span="8">
            <el-row>
                <el-col :span="12">
                  <el-select v-model="uploadData.type" placeholder="请为模板选择类型">
                    <el-option label="满一年" value="满一年"></el-option>
                    <el-option label="满两年" value="满两年"></el-option>
                    <el-option label="新入职员工贺卡" value="新入职员工贺卡"></el-option>
                    <el-option label="老员工贺卡" value="老员工贺卡"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-upload action="/model/upload" :data="uploadData" :on-success="handleSuccess" :on-error="handleError" :show-file-list="false">
                    <el-button type="primary" icon="el-icon-upload">上传文件</el-button>
                  </el-upload>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    
    <el-divider></el-divider>
    <div id="model-container" class="model-container">
      <el-row>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">所有类型</el-menu-item>
          <el-submenu index="2">
            <template slot="title">年限</template>
            <el-menu-item index="2-1">满一年</el-menu-item>
            <el-menu-item index="2-2">满两年</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">入职</template>
            <el-menu-item index="3-1">新入职员工贺卡</el-menu-item>
            <el-menu-item index="3-2">老员工贺卡</el-menu-item>
          </el-submenu>
        </el-menu>

        <el-col>
          <el-table
            ref="multipleTable"
            :data="tableData.filter(data => !search || data.modelName.toLowerCase().includes(search.toLowerCase()))"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="模板名称" prop="modelName"></el-table-column>
            <el-table-column label="状态" prop="modelState" width="100"></el-table-column>
            <el-table-column label="创建时间" prop="createdTime" :formatter="dateFormat">
            </el-table-column>
            <el-table-column align="center">
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入模板名称搜索" />
              </template>
              <template slot-scope="scope">
                <el-button-group>
                  <el-button type="primary" icon="el-icon-edit" size="mini" @click="modify(scope.row)">编辑</el-button>
                  <el-button type="success" icon="el-icon-open" size="mini" @click="state(scope.row)">启用</el-button>
                  <el-button type="danger" icon="el-icon-lock" size="mini" @click="disableModel(scope.row)">禁用</el-button>
                  <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteModel(scope.row)">删除</el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
.header-div1 {
  font-size: 25px;
  float: left;
}

.model-header {
  margin-bottom: -13px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.upModuel {
  position: absolute;
  width: 80px;
  height: 32px;
  top: 112px;
  z-index: 1000;
  right: 52px;
}
</style>

<script>
import fecha from 'fecha';
export default {
  data() {
    return {
      filename: '',
      disabled: this.isdisabled,
      activeIndex: "1",
      tableData: [],
      search: "",
      uploadData:{}
    };
  },
  mounted:function(){
    this.getModel();
  },
  methods: {
    handleSuccess(response, file, fileList){
      console.log(response);
      this.getModel();
      this.$message({
        message:response.msg,
        type:'success'
      })
    },
    handleError(err, file, fileList){
      this.$message({
        message:err,
        type:'error'
      })
    },
    dateFormat(row, column, cellValue) {
        return cellValue ? fecha.format(new Date(cellValue), 'YYYY-MM-DD') : '';
    },
    getModel:function(){
        this.axios({
          url:'http://10.201.61.194:10087/model/ALL',
          method: 'GET',

        })
        .then(res=>{
          var data = res.data.data;
          this.tableData = res.data.data;
        })
        .catch(err=>{
          this.$message({
            message: err,
            type: 'error'
          });
        })
    },

    modify(row) {
      this.$router.push({ name: "module" ,
      params:{
        modelName:row.modelName,
        modelType:row.modelType
      }});
    },

    state(row) {
      this.$confirm('确认启用嘛？')
      .then(_ => {
          this.axios({
          methos:"GET",
          url:'http://10.201.61.194:10087/model/state',
          params:{
            modelState:row.modelState,
            modelId:row.modelId,
            modelType:row.modelType
          }
        })
        .then(res=>{
          this.getModel();
          if(res.data.code==200){
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          }else{
            this.$message({
              message: res.data.msg,
              type: 'error'
            });
          }
        })
        .catch(res=>{
            this.$message({
              message: res,
              type: 'error'
            });
        })
      })
      .catch(_ => {

      });
      
    },

    disableModel(row){
      this.$confirm('确认禁用嘛？')
      .then(_ => {
        this.axios({
          methos:"GET",
          url:'http://10.201.61.194:10087/model/disable',
          params:{
            modelState:row.modelState,
            modelId:row.modelId
          }
        })
        .then(res=>{
          this.getModel();
          if(res.data.code==200){
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          }else{
            this.$message({
              message: res.data.msg,
              type: 'error'
            });
          }
        })
        .catch(res=>{
          this.$message({
              message: res,
              type: 'error'
            });
        })
      })
      .catch(_ => {

      });
    },

    deleteModel(row) {
      this.$confirm('确认删除嘛？')
      .then(_ => {
        this.axios({
        url:'http://10.201.61.194:10087/model/delete',
        method:'get',
        params:{
          modelId:row.modelId
        }
      })
      .then(res=>{
        this.getModel();
        this.$message({
          message:res.data.msg,
          type:'success'
        })
      })
      .catch(err=>{
        this.$message({
          message:err,
          type:'error'
        })
      })
      })
      .catch(_ => {

      });
    },
    handleSelect(key) {
      var modelType = "";
      if(key=="1"){
        modelType = "all";
      }
      if(key=="2-1"){
        modelType = "满一年";
      }
      if(key=="2-2"){
        modelType = "满两年";
      }
      if(key=="3-1"){
        modelType="新入职员工贺卡";
      }
      if(key=="3-2"){
        modelType = "老员工贺卡";
      }
      // 刷新表格，类似条件搜索
      this.axios({
        url:"http://10.201.61.194:10087/model/search",
        method:'GET',
        params:{
          modelType:modelType
        }
      })
      .then(res=>{
        var data = res.data.data;
        this.tableData = res.data.data;
        this.$message({
          message:res.data.msg,
          type:'success'
        })
      })
      .catch(err=>{
        this.$message({
          message:err,
          type:'error'
        })
      })
    },

  }
};
</script>
