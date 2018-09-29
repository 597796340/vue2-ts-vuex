<template>
  <div class="select_page fullcontain" style="height: 100vh;">
    <head-top></head-top>
    <div class="select_container">

      <span class="demonstration">{{ date_text }}</span>
      <el-date-picker v-model="dateValue" type="month" :picker-options="pkOption"></el-date-picker>

      <el-table :data="tableData" v-loading="loading" style="width: 100%">
        <el-table-column v-for="(col,index) in tableConf.tableCol" :key="col.id"
          :prop="col.id" :label="col.label" :width="col.width" :align="col.align">
          <template slot-scope="scope">
            <!-- <el-select v-if="col.id == 'teamSpirit'" :placeholder="tableConf.placeholder" v-model="scope.row.value1">
              <el-option v-for="n in 10" :label="n" :value="n" :key="n"></el-option>
            </el-select>
            <el-select v-else-if="col.id == 'attitude'" :placeholder="tableConf.placeholder" v-model="scope.row.value2">
              <el-option v-for="n in 10" :label="n" :value="n" :key="n"></el-option>
            </el-select>
            <el-select v-else-if="col.id == 'recordScore'" :placeholder="tableConf.placeholder" v-model="scope.row.value3">
              <el-option v-for="n in 100" :label="n+'%'" :value="n" :key="n"></el-option>
            </el-select>
            <span v-else>{{ scope.row.name }}</span> -->
            <el-input-number v-if="col.id == 'teamSpirit'" v-model="scope.row.value1" controls-position="right" size="small" :min="1" :max="10"></el-input-number>
            <el-input-number v-else-if="col.id == 'attitude'" v-model="scope.row.value2" controls-position="right" size="small" :min="1" :max="10"></el-input-number>
            <el-input-number v-else-if="col.id == 'recordScore'" v-model="scope.row.value3" controls-position="right" size="small" :min="1" :max="100"></el-input-number>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
      </el-table>

      <el-row class="btn-group">
        <el-button type="primary" @click="onSubmit()">{{submitBtn}}</el-button>
        <el-button @click="onReset()">{{resetBtn}}</el-button>
      </el-row>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import headTop from '../../components/headTop.vue'
import { TABLE_CONF, PICKER_OPTION } from '../../config/configure';
import { DATE_MSG, TABLE_SUBMIT_MSG, TABLE_RESET_MSG, ERROR_TIP_MSG } from '../../content';
import { setUserScore } from '../../service/getData';

@Component({
  components: {
      headTop
  }
})
export default class Select extends Vue{
  dateValue = "";
  tableConf = TABLE_CONF;
  date_text = DATE_MSG;
  submitBtn = TABLE_SUBMIT_MSG;
  resetBtn = TABLE_RESET_MSG;

  // 加载数据动画
  loading = false;
  tableData: any = [{
    name: '111',
    value1: '',
    value2: '',
    value3: 90
  }, {
    name: '222',
    value1: '',
    value2: '',
    value3: 90
  }];

  pkOption = PICKER_OPTION;


  async onSubmit(){
    let finishData = [];
    this.tableData.forEach(item => {
      if(item.value1 && item.value2 && item.value3){
        finishData.push({
          name: item.name,
          value1: item.value1,
          value2: item.value2,
          value3: item.value3
        });
      }
    });
    if(finishData.length === this.tableData.length){
      // TODO SUBMIT DATA
      const res = await setUserScore(finishData);
      if(res) {
        this.$message.success("提交成功");
        this.$router.push("manage"); // link to manage page
      }
    } else {
      this.$message.error(ERROR_TIP_MSG)
    }
  }

  onReset() {
    this.tableData.forEach(item => {
      item.value1 = '', item.value2 = '', item.value3 = '';
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/_var';

.select_page{
  height: 100vh;
}
.select_container{
  background-color: #fff;
}
.el-date-editor, .demonstration{
  @include pk-style;
}
.demonstration{
  line-height: 38px;
}
.el-table{
  @include table-style;
}
.btn-group{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
