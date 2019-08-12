<template>
  <div id = "app" class="body">
    <div id = "container" class="container">
        <div id = "header" class="header">
          <div>
            <el-row>
              <el-col :span="2" class="own-span-col">
                <span style="font-size:10px">用户模板:</span>
              </el-col>
              <el-col :span="4">
                <el-select v-model="model" placeholder="请选择" size="medium">
                  <el-option
                    v-for="item in optionsModel"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>

              <el-col :span="2" class="own-span-col">
                <span style="font-size:10px">时间段:</span>
              </el-col>
              <el-col :span="5">
                <div class="block">
                  <el-date-picker
                    v-model="time"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                  </el-date-picker>
                </div>
              </el-col>
              <el-col :span="10">
                <el-button type="primary" size="medium" v-on:click="searchOptions" icon="el-icon-search"></el-button>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="header_1">
          <el-row>
            <el-col :span="3" class="own-span-col_1">
                <span>共搜索{{count}}条数据</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <div>
                <el-button @click='fileSaver()' icon="el-icon-download" type="primary" size="mini">导出Excel</el-button>
              </div>
            </el-col>
             <el-col :span="3">
              <div>
                <el-button  type="primary" size="mini">一键补发</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-divider></el-divider>
        <el-table
           :data="tableData.filter(data => !search || data.sender.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%" id = "table">
          <el-table-column
              prop="sender"
              label="接收人">
            </el-table-column>
            <el-table-column
              prop="joinTime" :formatter="dateFormat"
              width = "95px"
              label="入职时间">
            </el-table-column>
            <el-table-column
              prop="departureTime" :formatter="dateFormat"
              width = "95px"
              label="离职时间">
            </el-table-column>
             <el-table-column
              prop="userModel"
              width = "130px"
              label="用户模板">
            </el-table-column>
            <el-table-column
              prop="recipient"
              label="抄送人">
            </el-table-column>
            <el-table-column
              prop="sendTime" :formatter="dateFormat"
              width = "95px"
              label="发送时间">
            </el-table-column>
             <el-table-column
              prop="way"
              width = "50px"
              label="方式">
            </el-table-column>
            <el-table-column
              prop="state"
              width = "50px"
              label="状态">
            </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" >
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                  v-if="scope.row.state=='失败'"
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">补发</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<style>
  .block{
      margin-top:-1px;
  }

  .own-span-col{
    margin-top:10px;
    font-size: 10px;
  }

  .own-span-col_1{
    font-size: 10px;
    padding-bottom:10px;
  }

  .header{
      padding-top:30px;
      padding-bottom:30px;
      background-color:#EFEFEF;
      margin-bottom:30px;
      border-radius:50px;
      border:solid #EFEFEF 1px;
  }

  .container{
      padding:20px;
      background-color:white;
  }

  .body{
    padding:20px;
    background-color:#EFEFEF;
  }
</style>

<script>
  import axios from 'axios'
  import XLSX from 'xlsx'
  import FileSaver from 'file-saver'
  import fecha from 'fecha'
  export default {
    data() {
      return {
        tableData: [],
        search: '',
        value: '',
        optionsModel: [],
        model: "",
        count:"",
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        time: '',
      }
    },
    mounted:function(){
    this.getRuleList();
    this.getType();
    },
    methods: {
      dateFormat(row, column, cellValue) {
        return cellValue ? fecha.format(new Date(cellValue), 'YYYY-MM-DD') : '';
      },
      searchOptions:function(){
        this.axios({
          method:'GET',
          url:'all/search',
          params:{
            userModel:this.model,
            startTime:this.time[0],
            endTime:this.time[1]
          }
        })
        .then(res=>{
          this.tableData = res.data.data;
          this.$message({
                message: res.data.msg,
                type: 'success'
          });
          this.count = res.data.data.length;
        })
        .catch(err=>{
          console.log(err);
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(row);
        this.$confirm('确认补发？')
        .then(_ => {
          this.axios({
            method:'GET',
            url:'fail/rep',
            params:{
              sendId:row.sendId,
              CcEmail:row.recipient,
              email:row.sender,
              name:row.userModel
            }
          })
          .then(res=>{
            this.$message({
                  message: res.data.msg,
                  type: 'success'
            });
            this.getRuleList();
          })
          .catch(err=>{
            this.$message({
              message:err,
              type:"error"
            })
          })
        })
        .catch(_ => {});
      },
      getType:function(){
          this.axios({
            url:'/all/type',
            method:'GET'
          })
          .then(res=>{
             var data = res.data.data;
            var dataArray = [];
            for(var i =0;i<data.length;i++){
               dataArray.push({value:data[i],label:data[i]})
            }
            this.optionsModel= dataArray;
          })
          .catch(err=>{
            this.$message({
              message:err,
              type:"error"
            })
          })
      },
      getRuleList:function() {
          this.axios.get('all')
          .then(res=>{
            var data = res.data.data;
            this.tableData = res.data.data;
            this.count = res.data.data.length;
          })
          .catch(err=>{
            this.$message({
              message:err,
              type:"error"
            })
          })
      },
      fileSaver()  {
		     this.$nextTick(function () {
              let wb = XLSX.utils.table_to_book(document.getElementById('table'));
              let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
              try {
                FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '已发送.xlsx')
                this.$message({
                  message: '下载成功',
                  type: 'success'
                });
              } catch (e) {
              }
              return wbout;
          });
	    }
    },
  }
</script>
