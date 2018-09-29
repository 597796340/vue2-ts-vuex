<template>
  <div class="home_page fillcontain">
    <head-top></head-top>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Watch } from 'vue-property-decorator';
  import { State, Getter, Action, Mutation } from 'vuex-class';
  import headTop from '../../components/headTop.vue'

  @Component({
    components: {
        headTop
    }
  })
  export default class Home extends Vue{
  }
</script>

<style lang="scss" scoped>
@import "../../style/_var.scss";

</style>
