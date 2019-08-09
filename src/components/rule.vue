<template>
<div class="table">
            <div class="tablename" >
                <el-breadcrumb >
                    <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 发送设置</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div>
  <el-table
    :data="tableData"
    :header-cell-style="{background:'#f5f7fa'}"
    border
    style="width: 100%">
    <el-table-column 
      prop="rule"
      label="规则名">
    </el-table-column>
    <el-table-column
      prop="user"
      label="对象名">
    </el-table-column>
    <el-table-column
      prop="sendtime"
      label="发送时间(h)" width="100px">
      <template slot-scope="scope">
      <el-input v-model="scope.row.sendtime" type="number"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="type"
      label="贺卡模板类型">
    </el-table-column>
    <el-table-column
      prop="Cc"
      label="抄送对象">
      <template slot-scope="scope">
  <el-select v-model="scope.row.Cc" placeholder="请选择">
    <el-option
      v-for="item in Ccoptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
    </el-table-column>
    <el-table-column 
      prop="reissuetime"
      label="补发时间(d)" width=100px>
      
      <template slot-scope="scope">
      <el-input v-model="scope.row.reissuetime" type="number"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">保存</el-button>
        
      </template>
    </el-table-column>
  </el-table>
  </div>
</div>
</template>
 
<script>
export default {
  methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
      
        tableData: [{
          rule: '新入职贺卡规则',
          user: '新入职员工',
          sendtime: '16',
          type: '新入职员工贺卡',
          Cc: '1',
          reissuetime:'1'
        }, {
          rule: '老员工入职贺卡规则',
          user: '老员工',
          sendtime: '16',
          type: '老员工贺卡',
          Cc: '1',
          reissuetime: 1
        }, {
          rule: '年限贺卡规则',
          user: '全体员工',
          sendtime: '16',
          type: '年限贺卡',
          Cc: '1',
          reissuetime: 1
        }],
        Ccoptions: [{
          value: '1',
          label: '全部'
        }]

      }
    }
};
</script>
<style >
.el-table,.el-table td,.el-table th {
  text-align: center;
}
.el-input__inner {
  text-align: center;
}

.tablename{
  height:30px;
}
.el-breadcrumb-item{
  font-weight: 700px;
  color: #ebe6e6;
}

</style>

