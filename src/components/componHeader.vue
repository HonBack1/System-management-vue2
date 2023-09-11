<template>
    <div class="Header">
        <div class="l-content">
            <el-button @click="hangleMenu"> <el-icon><Menu /></el-icon>
            </el-button>
            <span class="text">
                首页
            </span>
        </div>
      <div class="r-content">
        <el-dropdown>
    <span class="el-dropdown-link">
       <img src="../images/images.jpg" alt="" class="user">
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
    </span>
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </template>
  </el-dropdown>
      </div>
    </div>
</template>

<script>
import { useSSRContext } from 'vue'
export default{
    data(){
        return {

        }
    },
    methods:{
        hangleMenu(){
            this.$store.commit('collapseMenu')
        }
    },
    
}
</script>
<style lang="less">
.Header{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    };
    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            outline:none
        }
    }
}

</style>