<template>
  <div class="information_page fullcontain" style="height: 100vh;">
    <head-top></head-top>

    <div class="information_container">

      <el-row>
        <el-col :span="8">
          <el-radio v-model="radio" label="测试1"></el-radio>
          <el-radio v-model="radio" label="测试2"></el-radio>
        </el-col>
        <el-col :span="8">
          <el-radio label="1">备选项1</el-radio>
          <el-radio label="2">备选项2</el-radio>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8"><el-checkbox v-model="checked" label="测试ing"></el-checkbox></el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" placeholder="input some thing" @select="handleSelect"></el-autocomplete>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions" filterable change-on-select></el-cascader>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-switch v-model="value_switch" active-text="true" inactive-text="false">
          </el-switch>

        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-slider v-model="value" :step="10"></el-slider>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-upload
            drag
            :action="baseUrl + '/admin/update/avatar/' + adminInfo.id"
            :show-file-list="false"
            :on-success="uploadImg"
            :before-upload="beforeImgUpload">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
            <img v-if="adminInfo.avatar" :src="baseImgPath + adminInfo.avatar" class="avatar">
          </el-upload>

        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';
  import headTop from '../../components/headTop.vue';
  import { baseUrl, baseImgPath } from '../../config/env';
import { getStore } from '../../config/mUtils';

  @Component({
    components: {
      headTop
    }
  })
  export default class Information extends Vue{
    @State adminInfo;
    @Action setUserInfo;
    radio = null;
    checked = true;
    state1 = '';
    restaurants = [];
    selectedOptions = [];
    value_switch = false;
    value = 0;
    baseUrl = baseUrl;
    baseImgPath = baseImgPath;
    options = [{
      value: 'zhinan',
      label: '指南',
      children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
          value: 'yizhi',
          label: '一致'
        }, {
          value: 'fankui',
          label: '反馈'
        }, {
          value: 'xiaolv',
          label: '效率'
        }, {
          value: 'kekong',
          label: '可控'
        }]
      }, {
        value: 'daohang',
        label: '导航',
        children: [{
          value: 'cexiangdaohang',
          label: '侧向导航'
        }, {
          value: 'dingbudaohang',
          label: '顶部导航'
        }]
      }, {
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
        }]
    }];
    foo(){
      console.log(getStore('user_name'));
    }

    querySearch(queryString, cb){
      const restaurants = this.restaurants;
      const res = queryString? restaurants.filter(this.createFilter(queryString)):restaurants;
      cb(res);
    }
    createFilter(queryString){
      return restaurants => {
        return (restaurants.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      }
    }
    handleSelect(item){
      console.log(item);
    }
    loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        ]
    }

    uploadImg(res, file){
      if(res.status == 1) this.adminInfo.avatar = res.image_path;
      else this.$message.error('上传图片失败！');
    }
    beforeImgUpload(file){
      const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
      const isLimit2M = file.size / 1024 / 1024 < 2;
      isRightType? '':this.$message.error('上传头像图片只能是 JPG 格式!');
      isLimit2M? '': this.$message.error('上传头像图片大小不能超过 2MB!');
      return isRightType && isLimit2M;
    }

    created() {
      console.log(this.adminInfo);
    }

    mounted(){
      this.restaurants = this.loadAll();
    }
  }
</script>

<style lang="scss" scoped>
.el-row{
  margin-top: 20px;
}
</style>
