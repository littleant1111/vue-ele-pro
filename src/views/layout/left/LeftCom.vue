<template>
  <div class="left" >
    <nav-bar layout="left" ></nav-bar>
  </div>
</template>

<script>
  import NavBar from "./NavBar";
  import NavBarItem from "./NavBarItem";
  export default {
    name: "LeftCom",
    components: {
      NavBarItem,
      NavBar,
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .left {
    width: 30%;
    position: fixed;
    top: 61px;
    left: 0;
    bottom: 0;
    background-color: #eeeeee;
  }

</style>