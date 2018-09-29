<template>
  <div class="header_container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage', name: '' }">{{indexMsg}}</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown @command="handleCommand">
      <img :src="baseImgPath + adminInfo.avatar" class="avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in dropownItems"
          :key="item.index" :command="item.command">
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { INFORMATION_MSG, HEADER_QUIT_MSG, SIGN_OUT_SUCCESS, INDEX_MSG } from '../content';
  import { baseImgPath } from '../config/env';
  import { signout } from '../service/getData'
  import { Component, Watch } from 'vue-property-decorator';
  import { State, Getter, Action, Mutation } from 'vuex-class';


  @Component
  export default class HeadTopComponent extends Vue{
    @State adminInfo;
    @Action getAdminData;
    baseImgPath = baseImgPath;
    indexMsg = INDEX_MSG;

    dropownItems=[{
        name: INFORMATION_MSG,
        command: "information"
      }, {
        name: HEADER_QUIT_MSG,
        command:"signout"
    }];

    mounted() {
      if(!this.adminInfo.id) this.getAdminData();
    }

    async handleCommand(command){
      switch(command){
        case 'information':
          this.$router.push('/information');
          break;
        case 'signout':
          const res: any = await signout();
          if(res.status == 1){
            this.$message({
              type: 'success',
              message: SIGN_OUT_SUCCESS
            });
            this.$router.push('/');
          } else {
						this.$message({
              type: 'error',
              message: res.message
            });
					}
          break;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../style/_var.scss";
  .header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
		@include wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-breadcrumb__item{
    text-align: center;
    transition: color .15s linear;
    color: #48576a;
    font-style: normal;
  }
</style>
