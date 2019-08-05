<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <span>
            贺卡名称：
            <el-input style="width: 230px;" size="medium " v-model="input" placeholder="请输入内容"></el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span style="padding-left">
            贺卡类型：
            <el-select v-model="value" size="medium " placeholder="请选择">
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
            抄送对象：
            <el-select v-model="value2" size="medium " placeholder="请选择">
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
            <el-select v-model="value3" size="medium " placeholder="请选择">
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

      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <span>
            定时设置：
            <!-- <el-select size="medium " v-model="value1" placeholder="请输入时间">
          <el-option
            v-for="item in options1"
            :key="item.value1"
            :label="item.label"
            :value="item.value1"
          ></el-option>
            </el-select>-->
            <!-- <div class="block"> -->
             
              <el-date-picker v-model="value4" type="datetime" placeholder="选择日期时间" size="large"></el-date-picker>
            <!-- </div> -->
          </span>
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple"> <div>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div></div>
      </el-col>
    </el-row>

    <div class="box1">
      <div>
        <p style="font-size:15px;color: #808080 ;">温馨提示：员工入职贺卡对象默认为新员工，年限贺卡对象默认全体人员</p>
      </div>
     
    </div>

    <div style="width:400px;height:250px;padding-left:340px;">
      <pdf ref="pdf" src="../../static/first.pdf" style=" width: 500px;"></pdf>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: { pdf },
  data() {
    return {

 pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value4: '',
       

      input: "",
      options: [
        {
          value: "选项1",
          label: "新入职员工贺卡"
        },
        {
          value: "选项2",
          label: "年限贺卡"
        }
      ],
      value: "",

      options1: [
        {
          value1: "选项1",
          label: "天"
        },
        {
          value1: "选项2",
          label: "年"
        }
      ],
      value1: "",

      options2: [
        {
          value2: "选项1",
          label: "新入职员工"
        },
        {
          value2: "选项2",
          label: "所有人"
        }
      ],
      value2: "",

      options3: [
        {
          value3: "选项1",
          label: "1"
        },
        {
          value3: "选项2",
          label: "2"
        },
        {
          value3: "选项3",
          label: "3"
        },
        {
          value3: "选项4",
          label: "4"
        },
        {
          value3: "选项5",
          label: "5"
        }
      ],
      value3: ""
    };
  }
};
</script>
<style >
.box1 {
  display: flex;
  justify-content: space-between;
  /* padding-top: 15px; */
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

