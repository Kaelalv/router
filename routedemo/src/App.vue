<template>
  <div id="app" class="flexColumnBetween">
    <router-view class="mainContainer"></router-view>
    <vue-menu></vue-menu>
  </div>
</template>

<script>
import VueMenu from './components/VueMenu';
export default {
  name: 'App',
  components:{
    VueMenu
  }
}
</script>

<style>
  * { padding:0; margin:0; border:none;}
  #app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .mainContainer{
    width: 100%;
    flex: 1;
    height: 100%;
    overflow-y: scroll;
  }

</style>
