<template>
<div>
    <el-tag
    v-for="(item,index) in tags"
    :key="item.path"
    :closable="item.name !== 'home'"  
    :effect="$route.name === item.name ? 'dark' : 'plain'"
    @click="changeMenu(item)"
    @close="hangleClose(item,index)"
    >
    {{ item.label }}
 
</el-tag>
</div>
</template>

<script>
//
import {mapState,mapMutations} from 'vuex'
export default{
    data(){
       return{

       }
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabsList
        }),
 
    },
  
    methods:{
        ...mapMutations(['closeTag']),
        // 点击tag跳转的功能
        changeMenu(item){
            // console.log(item);
            // this.$router.push(item.path)
            this.$router.push({name:item.name})
        },
        // 点击tag删除的功能
        hangleClose(item,index){
            // 调用store中的 mutation 
            this.closeTag(item)  // console.log(item);
            const length = this.tags.length
            // 删除之后的逻辑
            if(item.name !== this.$route.name){
                return 
            }
            // 表示的是删除的最后一行
            if(index === length){
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }else{
                this.$router.push({
                    name:this.tags[index].name
                })
            }
            
        } ,
        
    }
}

</script>