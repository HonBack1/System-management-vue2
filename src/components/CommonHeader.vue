<template>
   <div class="header-container">
    <div class="l-content">
        <el-button @click="hangleMenu" icon="el-icon-menu" size="mini" style="margin-right: 20px;"></el-button>
        <!-- 面包屑
         -->
        
         <el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="item in tags" :key="item.path"  :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>

</el-breadcrumb>
    </div>
    <div class="r-content">
  
    <el-dropdown :hide-on-click="false"  @command="handleCommand">
    <span class="el-dropdown-link">
        <img src="../assets/images/user.jpg" alt="头像">
    </span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item command="loyout">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </div>

   </div>
</template>

<script>
import { mapState } from 'vuex';
import Cookie from 'js-cookie'
export default{
    data(){
        return{

        }
    },
    methods:{
        hangleMenu(){
            this.$store.commit('collapseMenu')
        },   
        handleCommand(command){
            if(command === 'loyout'){
                console.log("登出");
                // 清除cookie中的token
                Cookie.remove('token')
                 // 清除cookie中的menu
                 Cookie.remove('menu')
                 // 跳转到登录页
                this.$router.push('/login')
            }
        }   
    },
    computed:{
        ...mapState({  ////... es6 用法 扩展运算符
            tags: state =>state.tab.tabsList
        })
    },
    mounted(){
        console.log(this.tags,'tags')
    }
}
</script>

<style lang="less" scoped>
.header-container{
    padding:0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color:#fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .l-content{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item{ // deep 样式穿刺
            .el-breadcrumb__inner{
                font-weight: normal;
                &.is-link{
                    color: #666;
                }
            }
            &:last-child{
                .el-breadcrumb__inner{
                    color: #fff;
                }
            }
        }
    }
}

</style>