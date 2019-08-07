<template>
  <div>
    <el-row>
      <!-- <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            贺卡名称：
            <el-input style="width: 230px;" size="medium " v-model="input" placeholder="请输入内容"></el-input>
          </span>
        </div>
      </el-col> -->
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span style="padding-left">
            贺卡类型：
            <el-select  v-model="type"  size="medium " placeholder="请选择" @change="selectChange">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            发送对象：
            <el-select v-model="target" size="medium " placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1"
              ></el-option>
            </el-select>
          </span>
        </div>
      </el-col>
        <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            抄送对象：
            <el-select v-model="Cc" size="medium" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label"
                :value="item.value2"
              ></el-option>
            </el-select>
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            重要程度：
            <el-select v-model="importance" size="medium" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value3"
                :label="item.label"
                :value="item.value3"
              ></el-option>
            </el-select>
          </span>
        </div>
      </el-col>
        <div style="text-align:right;padding-right:10px">
       <el-button type="primary" v-on:click="sendemail">设置</el-button>
        </div>
    </el-row>


    <div class="box1">

<a href="http://qcloudoss.xunjiepdf.com/xunjiepdf/temp/20190806/%e6%b5%8b%e8%af%95%e8%b4%ba%e5%8d%a1.docx"><el-button type="primary">下载模板</el-button></a>
    </div>

    <div style="width:400px;height:250px;padding-left:340px;" >
       <pdf  style=" width: 500px;" ref="pdf" :src="pdfurl" ></pdf>
    </div>

  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {

  components: { pdf },

  data() {
    return {
      pdfurl:"../../static/first2-2.pdf",
      pdfurlList:["../../static/first.pdf","../../static/first2-2.pdf"],
      input: "",
      options: [
        {
          value: "newcard",
          label: "新入职员工贺卡"
        },
        {
          value: "oldcard",
          label: "年限贺卡"
        }
      ],
      type: "newcard",


      options1: [

        {
          value1: "new",
          label: "新入职员工"
        },
        {
          value1: "old",
          label: "老员工"
        },
         {
          value1: "all",
          label: "全部"
        },
      ],
      target: "new",
      options2: [
         {
          value2: "all",
          label: "全部"
        }
      ],
      Cc: "all",
      options3: [
        {
          value3: "1",
          label: "1"
        },
        {
          value3: "2",
          label: "2"
        },
        {
          value3: "3",
          label: "3"
        },
        {
          value3: "4",
          label: "4"
        },
        {
          value3: "5",
          label: "5"
        }
      ],
     importance: "3"
    };
  },
   methods:{
    sendemail:function(){
     var postData = this.$qs.stringify({
            level:this.level,
            type:this.type,
            CcEmail:this.CcEmail,
            email:this.email,
            name:this.name
        });

        this.axios.post('mail/send',postData)
          .then(res=>{
            console.log(res.data)
            this.tableData = res.data
          })
          .catch(err=>{
            console.log(err)
          })
      },
      selectChange(val){
       this.pdfurl= val==='newcard'?this.pdfurlList[1]:this.pdfurlList[0]
      },
      download(){
       this.$refs.pdf.print()
      }
}

}
</script>
<style >
.box1 {
  padding-right: 0px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

