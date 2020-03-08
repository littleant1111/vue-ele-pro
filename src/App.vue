<template>
  <div id="app">
    <header-com></header-com>
    <left-com ></left-com>
    <main-com></main-com>
  </div>
</template>

<script>
  import HeaderCom from "./views/layout/header/HeaderCom";
  import LeftCom from "./views/layout/left/LeftCom";
  import MainCom from "./views/layout/main/MainCom";
  import { net_getNavList } from './network/remote_data'
  export default {
    name: 'app',
    components: {
      MainCom,
      LeftCom,
      HeaderCom,
    },
    methods: {
      getNavList(){
        net_getNavList().then(res => {
          // console.log(res)
          this.$store.state.navList = res
        })
      }
    },
    created() {
      this.getNavList()
    },
    mounted() {
      // this.getNavList()
    }

  }
</script>

<style>
  @import "assets/css/base.css";
</style>
