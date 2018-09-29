<template>
  <div class="inquire_page fullcontain" style="height: 100vh;">
    <head-top></head-top>

    <div class="inquire_container">
      <span class="demonstration">{{ date_text }}</span>
      <el-date-picker v-model="dateValue" type="month" :picker-options="pkOption"></el-date-picker>
      <el-button class="inquire_btn" type="primary" @click="onInquire()">{{inquireBtn}}</el-button>
      <el-table :data="tableData" v-loading="loading" style="width: 100%">
        <el-table-column v-for="(col,index) in tableConf.tableCol" :key="col.id"
          :prop="col.id" :label="col.label" :width="col.width" :align="col.align">
          <template slot-scope="scope">
            <span v-if="col.id == 'teamSpirit'">{{ scope.row.value1 }}</span>
            <span v-else-if="col.id == 'attitude'">{{ scope.row.value2 }}</span>
            <span v-else-if="col.id == 'recordScore'">{{ scope.row.value3 }}</span>
            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import headTop from '../../components/headTop.vue'
import { PICKER_OPTION, TABLE_CONF } from '../../config/configure';
import { DATE_MSG, TABLE_INQUIRE_MSG } from '../../content';
import { getUserScore } from '../../service/getData';

@Component({
  components: {
      headTop
  }
})
export default class Inquire extends Vue{
  pkOption = PICKER_OPTION;
  date_text = DATE_MSG;
  dateValue = "";
  loading = false;
  tableConf = TABLE_CONF;
  inquireBtn = TABLE_INQUIRE_MSG;
  tableData: any = [];

  async onInquire(){
    // TODO INQUIRE DATA
    // const res = await getUserScore();
    // if(res) {
    //   this.$message.success("查询成功");
    //   this.tableData = [];
    // }
    this.loading = true;
    setTimeout(() => {
      this.tableData = [{
        name: '111',
        value1: 2,
        value2: 3,
        value3: 90
      }, {
        name: '222',
        value1: 8,
        value2: 6,
        value3: 90
      }];
      this.loading = false;
    },1000);
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/_var';

.inquire_page{
  height: 100vh;
}
.inquire_container{
  background-color: #fff;
}
.el-date-editor, .demonstration, .inquire_btn{
  @include pk-style;
}
.demonstration{
  line-height: 38px;
}
.el-table{
  @include table-style;
}
</style>
