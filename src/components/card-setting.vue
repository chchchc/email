<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-edit-outline"></i> 贺卡管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container" style="padding-top:20px;">
      <!-- <div class="handle-box">
             <el-button type="primary" icon="el-icon-delete" class="handle-del mr10">批量删除</el-button>
                <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>-->

      <span style="border-top:1px solid #eee; ">贺卡配置列表</span>
      <el-table :data="tableData" style="width: 100%" size="small">
        <el-table-column label="编号" width="80">
          <template slot-scope="scope">
            <i class="el-icon-pie-chart"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="贺卡类型" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>类型: {{ scope.row.kind }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.kind }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="名称" width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="发送规则" width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.rule }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作人" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.pepole }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后操作日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.Date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              icon="el-icon-delete"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="100"
        ></el-pagination>
      </div>
      <div class="block">
        <span class="demonstration">hover 触发子菜单</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "A1",
          kind: "新员工入职贺卡",
          name: "新入职1号",
          rule: "预设规则1",
          pepole: "杨乐乐",
          state: "已启用",
          Date: "2018-12-16"
        },
        {
          id: "A2",
          kind: "新员工入职贺卡",
          name: "新入职2号",
          rule: "预设规则1",
          pepole: "杨乐乐",
          state: "未启用",
          Date: "2019-07-27"
        },
        {
          id: "B1",
          kind: "老员工回归贺卡",
          name: "老员工1号",
          rule: "预设规则2",
          pepole: "杨乐乐",
          state: "已启用",
          Date: "2019-05-04"
        },
        {
          id: "C",
          kind: "年限贺卡",
          name: "满一年贺卡",
          rule: "预设规则3",
          pepole: "杨乐乐",
          state: "已启用",
          Date: "2019-07-16"
        }
      ],
      value:[],
      options:[
        {
               value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>

