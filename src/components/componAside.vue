<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"    
    
  >
  <h3>通用后台管理系统</h3>
    <el-menu-item  @click="hangle(item)"  v-for="item in noChildren" :key="item.name"  :index="item.name" >    
      <el-icon >  <component :is="item.icon"></component></el-icon>
      <template #title> {{ item.label }}</template>
    </el-menu-item>
    <el-sub-menu  v-for="item in hasChildren" :key="item.label"  :index="item.label">
      <template #title>
        <el-icon >  <component :is="item.icon"></component></el-icon>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group  @click="hangle(subitem)" v-for="subitem in item.children" :key="subitem.name">
        
        <el-menu-item :index="subitem.name">{{ subitem.name }}</el-menu-item>
    
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
    <script>
export default {
  data() {
    return {
      // isCollapse: false,
      MenuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "House",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单
    hangle(item){
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
        this.$router.push(item.path)
      }
     
    }
  },
  computed:{
    // 没有子菜单
    noChildren(){
        return this.MenuData.filter(item =>!item.children)
    },
    // 有子菜单
    hasChildren(){
        return this.MenuData.filter(item =>item.children)
    },
    isCollapse(){
      return this.store.state.tab.isCollapse
      // return this.isCollapse
    }
   
  }
};
</script>
    <script setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// const isCollapse = ref(false)
// const handleOpen = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
</script>

    
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 201px;
  min-height: 500px;
  overflow: hidden;
}
.el-menu{

  height: 100vh;
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  };
 
}
</style>
    