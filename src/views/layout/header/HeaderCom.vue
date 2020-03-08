<template>
  <div class="header">
    <el-col :span="5" class="el-header-content-col" >
        <div class="grid-content bg-purple link-content-out" >
          <a @click="imgClick" href="#" class="link-content">
            <img :src="this.$Images.logUrl" alt="">
          </a>
        </div>
        <div class="title" @click="imgClick">运维管理系统</div>
    </el-col>

    <el-col :span="14" class="el-header-content-col" >
      <div class="grid-content bg-purple-light"></div>
    </el-col>

    <el-col :span="5" class="el-header-content-col">
      <div class="grid-content bg-purple-light drop-menu-content" >
<!--        <span class="avator"><a href="#"><img :src="this.$Images.logUrl" alt=""></a></span>-->
        <drop-menu @DropDownClick="linkClick" :title="this.title" :content="this.content" class="drop-menu-text"></drop-menu>
      </div>
    </el-col>
  </div>
</template>

<script>
  import DropMenu from "../../../components/dropmenu/DropMenu";
  export default {
    name: "HeaderCom",
    components: {
      DropMenu
    },
    methods: {
      imgClick(){
        this.$router.push('/app')
      },
      linkClick(obj){
        // console.log(obj)
        if (obj) {
          this.$router.push(obj.link)
        }
      }
    },
    data() {
      return {
        title: "个人中心",
        content: [
          {
            name: "我的资料",
            link: "/profile"
          }, {
            name: "更改密码",
            link: "/changepass"
          },{
            name: "退出",
            link: "/logout"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .header{
    position: fixed;
    /*top:0;*/
    /*right: -0px;*/
    /*left: 0;*/
    height: 60px ;
    /*line-height: 45px ;*/
    border-bottom: 1px solid rgba(55,55,55,.08);
    width: 100%;
    background-color: #eee;
  }
  .header .link-content-out{
    position: fixed;
    /*border: 1px solid yellow;*/
    vertical-align: middle;
  }
  .header .title{
    float: left;
    margin-left: 80px;
    margin-top: 18px;
    /*margin: auto 80px;*/
    cursor: pointer;
    /*line-height: 100%;*/
    /*border: 1px solid red;*/
  }
  .header .link-content{
    display: block;
    width: 40px;
    height: 40px;
    margin: 10px 40px;
    /*border: 1px solid blue;*/
  }
  .header .link-content:hover{
    /*cursor: pointer;*/
  }
  .header .link-content img{
    width: 40px ;
    height: 40px ;

  }
  .header .el-header-content{
    width: 100%;
  }
  .header .el-header-content-row{
    height: 100%;
    width: 100%;
  }
  .header .el-header-content-col{
    flex: 1;
    height: 100%;
  }
  .header .drop-menu-content{
    width: 100%;
    height: 100%;
  }
  .header .drop-menu-content img{
    float: left;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-left: 60px;
    /*border-radius: 100px;*/
  }
  .header .drop-menu-content .drop-menu-text {
    /*margin: 20px;*/
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*vertical-align: middle;*/
    padding-top: 18px;
    padding-left: 100px;
  }

</style>