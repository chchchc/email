<template>
    <div id = "model" class="model">
        <div id="model-header" class="model-header">
            <el-row>
                <el-col :span="24">
                    <el-row>
                        <el-col :span="12">
                            <div class="header-div1">模板中心</div>
                        </el-col>
                        <el-col :span="12">
                           <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :limit="3"
                            :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                          </el-upload>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <el-divider></el-divider>
        <div id="model-container" class="model-container">
            <el-row>
              <div class="model-container-1">
                <el-col :span="4">
                    <el-row class="tac">
                      <el-col :span="24">
                          <el-row class="tac">
                              <el-col :span="24">
                              <h5>类型</h5>
                                <el-menu
                                  default-active="2"
                                  class="el-menu-vertical-demo">
                                  <el-submenu index="1">
                                    <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>年限</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="1-1">满一年</el-menu-item>
                                      <el-menu-item index="1-2">满两年</el-menu-item>
                                    </el-menu-item-group>
                                  </el-submenu>
                                  <el-submenu index="2">
                                    <template slot="title">
                                      <i class="el-icon-location"></i>
                                      <span>入职</span>
                                    </template>
                                    <el-menu-item-group>
                                      <el-menu-item index="2-1">新人入职</el-menu-item>
                                      <el-menu-item index="2-2">老员工入职</el-menu-item>
                                    </el-menu-item-group>
                                  </el-submenu>
                                </el-menu>
                              </el-col>
                          </el-row>
                      </el-col>
                  </el-row>
                </el-col>
              </div>

                <el-col :span="18">
                      <el-table
                        ref="multipleTable"
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        tooltip-effect="dark"
                        style="width: 100%">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>
                        <el-table-column
                          label="模板名称"
                          prop="name">
                        </el-table-column>
                        <el-table-column
                          label="状态"
                          prop="state">
                        </el-table-column>
                        <el-table-column
                          label="创建时间"
                          prop="date">
                        </el-table-column>
                        <el-table-column
                          align="right">
                          <template slot="header" >
                            <el-input
                              v-model="search"
                              size="mini"
                              placeholder="输入模板名称搜索"/>
                          </template>
                          <template slot-scope="scope" id="a"> 
                            <el-button
                              size="mini" 
                              style="display:inline-block"
                              >启用</el-button>
                            <el-button
                              size="mini"
                              @click="modify()"
                              style="display:inline-block">编辑</el-button>
                              
                          </template>
                        </el-table-column>
                      </el-table>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style>
  .header-div1{
    font-size:25px;
    float:left;
  }

  .model-header{
    margin-bottom:-13px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          state: '已启用',
          name: '新入职贺卡',
          date:'2018-08-09'
        }],
        search: '',
        multipleSelection: [],
        fileList: [],
      }
    },
    methods:{
      modify(){
         this.$router.push({ path:'/module'})
      }
    }
  }
</script>