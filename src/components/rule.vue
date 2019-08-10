<template>
<div class="table">
            <div class="tablename" >
                <el-breadcrumb >
                    <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 发送设置</el-breadcrumb-item>
                </el-breadcrumb>
                 <el-button size="mini" type="primary" @click="editData('',0)"><i class="el-icon-lx-cascades"></i> 新增规则</el-button>
            </div>
    <br>
  <el-table
    :data="tableData"
    :header-cell-style="{background:'#f5f7fa'}"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="规则名">
    </el-table-column>
    <el-table-column
      prop="fsdx"
      label="对象名">
    </el-table-column>
    <el-table-column
      prop="time"
      label="发送时间(h)" width="100px">
    </el-table-column>
    <el-table-column
      prop="type"
      label="贺卡模板类型">
    </el-table-column>
    <el-table-column
      prop="csdx"
      label="抄送对象">
         <template slot-scope="scope">{{scope.row.csdx|csdxfilter}}
      </template>

    </el-table-column>
    <el-table-column
      prop="bftime"
      label="补发时间(d)" width=100px>
    </el-table-column>
    <el-table-column
      prop="sendType"
      label="发送方式" width=100px>
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
       <el-button type="text" @click="editData(scope.row,1)" >修改</el-button>
      </template>



    </el-table-column>
  </el-table>
    <el-dialog :title="editType?'修改规则':'新增规则'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="规则名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style= "width:400px"></el-input>
    </el-form-item>
    <el-form-item label="发送对象" :label-width="formLabelWidth">
      <el-select v-model="form.fsdx" placeholder="请选择对象" style= "width:400px">
        <el-option label="新入职员工" value="shanghai"></el-option>
        <el-option label="老员工入职" value="beijing"></el-option>
        <el-option label="全体员工" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发送时间" :label-width="formLabelWidth">
       <el-time-picker
    v-model="form.time"
    :picker-options="{
      selectableRange: '00:00:00 - 23:59:50'
    }"
    placeholder="任意时间点" width="400px">
  </el-time-picker>
    </el-form-item>

    <el-form-item label="贺卡模板类型" :label-width="formLabelWidth">
     <el-select v-model="form.type" placeholder="请选择类型" style= "width:400px">
        <el-option label="新入职员工贺卡" value="shanghai"></el-option>
        <el-option label="老员工贺卡" value="beijing"></el-option>
        <el-option label="年限贺卡" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="抄送对象" :label-width="formLabelWidth">
     <el-select v-model="form.csdx" placeholder="请选择对象" style= "width:400px">

        <el-option label="全体员工" value="1"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="补发时间" :label-width="formLabelWidth">
      <el-input v-model="form.bftime" autocomplete="off" style= "width:400px"></el-input>
    </el-form-item>

    <el-form-item label="发送方式" :label-width="formLabelWidth">
       <el-select v-model="form.sendType" placeholder="请选择方式" style= "width:400px">
         <el-option label="聆客" value="4"></el-option>
         <el-option label="邮件" value="5"></el-option>
 </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
filters:{csdxfilter(num){
  if(num==1){return '全体人员'}else{
    return '新人'
  }
}},
    data() {
      return {
        editType:0,
         dialogFormVisible: false,
         form: {
          name: '',
          fsdx: '',
          time: 'new Date(2016, 9, 10, 18, 40),',
          type: '',
          csdx: '',
          bftime:'',
          sendType:'',
        },
        formLabelWidth: '120px',
        tableData: [{
          name: '新入职贺卡规则',
          fsdx: '新入职员工',
          time: '16',
          type: '新入职员工贺卡',
          csdx: '1',
          bftime:'1',
          sendType:'聆客'
        }, {
          name: '老员工入职贺卡规则',
          fsdx: '老员工',
          time: '16',
          type: '老员工贺卡',
          csdx: '1',
         bftime:'1',
         sendType:'聆客',
        }, {
          name: '年限贺卡规则',
          fsdx: '全体员工',
          time: '16',
          type: '年限贺卡',
          csdx: '1',
          bftime:'1',
          sendType:'邮件'
        }],
      }
    },
     methods: {
editData(scope,type){
this.dialogFormVisible=true;
this.editType=type;
}
    },

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
  display: flex;
  justify-content: space-between;
}
.el-breadcrumb-item{
  font-weight: 700px;
  color: #ebe6e6;
}

</style>

