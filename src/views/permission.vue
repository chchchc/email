<template>
<div class="table">
    <div>
<el-row>
        <el-col :span="16">
          <div class="header-div1">权限配置</div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
      <el-table
    :data="tableData"
    :header-cell-style="{background:'#f5f7fa'}"
    border
    style="width: 100%">
    <el-table-column
      prop="number"
      label="序号" width="80px">
    </el-table-column >
    <el-table-column
      prop="user"
      label="用户名" >
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态" >
    </el-table-column>
    <el-table-column
      prop="lasttime"
      label="最后修改时间">
    </el-table-column>
    <el-table-column
      prop="modifyuser"
      label="修改人">
    </el-table-column>


    <el-table-column
      fixed="right"
      label="操作"
      width="200px">
      <template slot-scope="scope">
       <el-button type="primary" @click="Enable(scope.row)" >启用</el-button>
       <el-button type="danger"  @click="Disable(scope.row)" >禁用</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
    data(){
        return {
            tableData:[{
                number:1,
                user:"心怡",
                status:"启用",
                lasttime:"2019-8-17",
                modifyuser:"修改人"
            }]
        }
    },
    method:{
        Enable(row) {
      this.$confirm('确认启用嘛？')
      .then(_ => {
          this.axios({
          methos:"GET",
          url:'/model/enablepre',
          params:{
            preState:row.status,
            preId:row.user,

          }
        })
        .then(res=>{


        })

        })
},
   Disable(row) {
      this.$confirm('确认禁嘛？')
      .then(_ => {
          this.axios({
          methos:"GET",
          url:'/model/disablepre',
          params:{
            preStatus:row.status,
            preId:row.user,

          }
        })
        .then(res=>{


        })

        })
}


}
}
</script>
