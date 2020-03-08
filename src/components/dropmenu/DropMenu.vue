<template>
  <div class="drop-menu">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <span class="avator"><a href="#"><img :src="this.$Images.logUrl" alt=""></a></span>
        {{this.title}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item :command="item" v-for="(item, index) in this.content" :key="index">{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "DropMenu",
    props: {
      hasAvator: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: "下拉菜单"
      },
      content: {
        type: Array,
        default() {
          return [
            {
              name: "下拉菜单1",
              link: "/app"
            }, {
              name: "下拉菜单2",
              link: "/test"
            }
          ]
        }
      }
      },
    methods: {
      handleCommand(obj) {
        console.log('zi click..' + obj)
        this.$emit('DropDownClick', obj)
        // this.$message('click on item ' + command);
      },
    }
  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .avator {
    float: left;

    margin-top: -8px;
    /*margin-left: 60px;*/
  }
  .avator img{
    width: 40px;
    height: 40px;
    /*margin-top: 10px;*/
  }
</style>