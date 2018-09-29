<template>
  <div class="manage_page fullcontain">
    <el-row style="height:100vh">
      <el-col :span="4" style="height: 100vh; min-height: 800px; background-color: #324057;">
        <el-menu :mode="configure.mode" :default-active="defaultActive()" router
        :background-color="configure.bgColor" :text-color="configure.tColor" :active-text-color="configure.atColor">
            <template v-for="(menu, index) in navItemList">
              <el-menu-item v-if="menu.children.length == 0" :index="menu.index"><i :class="menu.icon"></i>{{menu.name}}</el-menu-item>
              <el-submenu v-else :index="menu.index">
                <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
                <el-menu-item v-for="(item,index) in menu.children" :key="index" :index="item.index">
                  {{item.name}}
                </el-menu-item>
              </el-submenu>
            </template>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100vh;">
        <keep-alive>
				    <router-view></router-view>
				</keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';
  import { NAV_ITEM_LIST, MENU_STYLE } from '../../config/configure'

  @Component
  export default class Manage extends Vue{
    navItemList = NAV_ITEM_LIST;
    configure = MENU_STYLE;

    defaultActive() {
      return this.$route.path.replace('/', '');
    }
  }
</script>

<style lang="scss" scoped>
@import '../../style/_var';
.el-submenu, .el-menu-item {
    min-width: 0;
}
.el-menu{
  @include menu-style
}
</style>
