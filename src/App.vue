<template>
  <div id="app" class="fillcontain">
     <keep-alive>
        <router-view/>
     </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Element from 'element-ui'
Vue.use(Element)

export default class App extends Vue{}
</script>

<style lang='scss'>
@import './style/_var';
@import './style/reset';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: $body-background;
}
.noscroll {
    overflow: hidden;
}
</style>
