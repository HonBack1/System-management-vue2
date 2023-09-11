<template>
   <div>
   <el-container>
      <el-aside width="auto">
         <CommonAside/>
      </el-aside>
      <el-container>
         <el-header>
            <CommonHeader/>
         </el-header>
         <CommonTagVue/>
         <el-main>

            <router-view>1111</router-view>
         </el-main>
   </el-container>`
</el-container>

   </div> 
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTagVue from '../components/CommonTag.vue'
export default{
   data(){
      return{

      }
   },
   components:{
      CommonAside,
      CommonHeader,
      CommonTagVue
   }
}
</script>
<style lang="less">
.el-header{
   padding: 0;
}
</style>
