<template>
  <div class="main">
    主页
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: "MainCom"
  }
</script>

<style scoped>
  .main {
    position: fixed;
    top: 61px;
    left: 30%;
    right: 0;
    bottom: 0;
    background-color: azure;
  }
</style>