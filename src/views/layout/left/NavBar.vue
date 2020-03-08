<template>
    <div class="side-nav" :class="layout">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
            :collapse="isCollapse"
            router
            ref="navbar"
            :default-active="defActive"
            :mode="navMode"
            menu-trigger="click"
            @select="selectMenu"
            @open="openMenu"
            @close="closeMenu"
            :unique-opened="false"
            :default-openeds="openeds"
            >
            <nav-bar-item v-for="(item, n) in navList" :item="item" :navIndex="String(n)" :key="n"></nav-bar-item>
        </el-menu>
        <div v-if="this.navMode == 'horizontal'" v-show="navBgShow" class="full-screen-navBg" @click.self="closeAll"></div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import NavBarItem from './NavBarItem'

export default {
    data() {
        return {
            navBgShow: false,
            openeds: [],
            isCollapse: true
        }
    },
    props: ['layout'],
    computed:{
        // ...mapState({
        //     navList: state => state.auth.navList
        // }),
        navList() {
          return this.$store.state.navList;
        },
        defActive(){
            return this.$route.path
        },
        navMode(){
            if(this.layout == "left"){
                return "vertical"
            }
            if(this.layout == "top"){
                return "horizontal"
            }
        },
        // isDark(){
        //     return this.$store.state.theme.indexOf("dark") >= 0 ? 'dark' : 'light'
        // }
    },
    mounted() {
        console.log("mouted")
    },
    activated() {
        console.log("activated ..")
    },
    watch: {
        // 当通过TagNav来激活页面时也执行一次selectMenu
        $route(){
            let path = this.$route.path
            console.log("route path:", path, ", indexPath: ", indexPath)
            let indexPath = this.$refs.navbar.items[path].indexPath
            this.selectMenu(path, indexPath)
            console.log("openeds:", this.openeds)
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },


        // eslint-disable-next-line
        selectMenu(index, indexPath){
            /**
             * 在选择父级菜单时自动关闭其下所有子菜单
             * 选择时获取点击菜单的父级index，并计算得到该index在已打开菜单中的索引值，
             * 关闭位于当前打开菜单中该索引值之后的全部菜单
             */
            console.log("index: ", index, "  indexPath:", indexPath)
            let openedMenus = this.$refs.navbar.openedMenus
            console.log("openedMenus: ", openedMenus)
            let openMenuList
            // 如果点击的是二级菜单，则获取其后已经打开的菜单
            if(indexPath.length > 1){
                let parentPath = indexPath[indexPath.length-2]
                openMenuList = openedMenus.slice(openedMenus.indexOf(parentPath)+1)
            } else{
                openMenuList = openedMenus
            }

            // 关闭菜单
            openMenuList = openMenuList.reverse()
            openMenuList.forEach((ele) => {
                this.$refs.navbar.closeMenu(ele)
            })
            if(this.navMode == 'horizontal'){
                this.navBgShow = false
            }
        },
        openMenu(){
            if(this.navMode == 'horizontal'){
                this.navBgShow = true
            }
        },
        closeMenu(){
            if(this.navMode == 'horizontal'){
                this.navBgShow = false
            }
        },
        closeAll(){
            console.log("背景遮罩图")
            let openMenu = this.$refs.navbar.openedMenus.concat([])
            openMenu = openMenu.reverse()
            openMenu.forEach((ele) => {
                this.$refs.navbar.closeMenu(ele)
            })
            if(this.navMode == 'horizontal'){
                this.navBgShow = false
            }
        }
    },
    components: { NavBarItem }
}
</script>
