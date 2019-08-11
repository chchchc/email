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
      prop="ruleName"
      label="规则名">
    </el-table-column>
    <el-table-column
      prop="ruleSender"
      label="对象名">
    </el-table-column>
    <el-table-column
      prop="sendTime"
      label="发送时间(h)" width="100px">
    </el-table-column>
    <el-table-column
      prop="type"
      label="贺卡模板">
    </el-table-column>
    <el-table-column
      prop="ruleCc"
      label="抄送对象">
    </el-table-column>
    <el-table-column
      prop="repTime"
      label="补发时间(d)" width=100px>
    </el-table-column>
    <el-table-column
      prop="way"
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
       <el-select v-model="form.ruleName" placeholder="请选择对象" style= "width:400px">
        <el-option label="新入职贺卡规则" value="新入职贺卡规则"></el-option>
        <el-option label="老员工入职贺卡规则" value="老员工入职贺卡规则"></el-option>
        <el-option label="年限贺卡规则" value="年限贺卡规则"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发送对象" :label-width="formLabelWidth">
      <el-select v-model="form.ruleSender" placeholder="请选择对象" style= "width:400px">
        <el-option label="新入职员工" value="新入职员工"></el-option>
        <el-option label="老员工入职" value="老员工入职"></el-option>
        <el-option label="全体员工" value="全体员工"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发送时间" :label-width="formLabelWidth">
       <el-time-picker
        v-model="form.sendTime"
        :picker-options="{
          selectableRange: '00:00:00 - 23:59:50'
        }"
        placeholder="任意时间点" width="400px">
      </el-time-picker>
    </el-form-item>

    <el-form-item label="贺卡模板" :label-width="formLabelWidth">
      <el-select v-model="form.type" placeholder="请选择类型" style= "width:400px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
    </el-form-item>

    <el-form-item label="抄送对象" :label-width="formLabelWidth">
     <el-select v-model="form.ruleCc" placeholder="请选择对象" style= "width:400px">
        <el-option label="无" value="无"></el-option>
        <el-option label="部门" value="部门"></el-option>
        <el-option label="全体员工" value="全体员工"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="补发时间" :label-width="formLabelWidth">
       <el-select v-model="form.repTime" placeholder="请选择时间段" style= "width:400px">
        <el-option label="一天内" value="一天内"></el-option>
        <el-option label="两天内" value="两天内"></el-option>
        <el-option label="三天内" value="三天内"></el-option>
        <el-option label="四天内" value="四天内"></el-option>
        <el-option label="五天内" value="五天内"></el-option>
        <el-option label="六天内" value="六天内"></el-option>
        <el-option label="一周内" value="一周内"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="发送方式" :label-width="formLabelWidth">
       <el-select v-model="form.way" placeholder="请选择方式" style= "width:400px">
         <el-option label="聆客" value="聆客"></el-option>
         <el-option label="邮件" value="邮件"></el-option>
         <el-option label="ALL" value="ALL"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible=false">取 消</el-button>
    <el-button type="primary" @click="onSubmit">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import fecha from 'fecha'
export default {
    data() {
      return {
         editType:0,
         dialogFormVisible: false,
         form: {
          ruleName: '',
          ruleSender: '',
          sendTime: '',
          type: '',
          ruleCc: '',
          repTime:'',
          way:'',
        },
        formLabelWidth: '120px',
        tableData: [],
        options:[],
      }
    },
    mounted:function(){
      this.getRule();
      this.getModel();
    },
    methods: {
      onSubmit() {
        this.dialogFormVisible = false,
        this.axios.post('/rule/add',this.$qs.stringify(this.form))
        .then(res=>{
          this.getRule();
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
      getModel:function(){
        this.axios({
          url:'model/no_rule',
          method: 'GET',

        })
        .then(res=>{
          var data = res.data.data;
          var dataArray = [];
          for(var i =0;i<data.length;i++){
              dataArray.push({value:data[i].modelName,label:data[i].modelName})
          }
          this.options= dataArray;
        })
        .catch(err=>{
          this.$message({
            message: err,
            type: 'error'
          });
        })
      },
      getRule:function(){
        this.axios({
          method:"GET",
          url:"/rule/ALL",
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

