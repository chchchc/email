<template>
  <div id="model" class="model">
    <div id="model-header" class="model-header">
      <el-row>
        <el-col :span="24">
          <el-row>
            <el-col :span="12">
              <div class="header-div1">模板中心</div>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="upModuel">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
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
            <el-menu-item index="3-1">新人入职</el-menu-item>
            <el-menu-item index="3-2">老员工入职</el-menu-item>
          </el-submenu>
        </el-menu>

        <el-col>
          <el-table
            ref="multipleTable"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="模板名称" prop="name"></el-table-column>
            <el-table-column label="状态" prop="state"></el-table-column>
            <el-table-column label="创建时间" prop="date"></el-table-column>
            <el-table-column align="center">
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入模板名称搜索" />
              </template>

              <el-button-group>
                <el-button type="primary" icon="el-icon-edit" size="mini" @click="modify()">编辑</el-button>
                <el-button type="success" icon="el-icon-open" size="mini">启用</el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
              </el-button-group>
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
export default {
  data() {
    return {
      activeIndex: "1",
      tableData: [
        {
          state: "已启用",
          name: "新入职贺卡",
          date: "2018-08-09"
        }
      ],
      search: "",
      multipleSelection: [],
      fileList: []
    };
  },
  methods: {
    modify() {
      this.$router.push({ path: "/module" });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
