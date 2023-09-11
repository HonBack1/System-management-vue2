import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router  from './router';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

Vue.use(ElementUI);
Vue.config.productionTip = false

// 添加全局前置导航守卫
router.beforeEach((to,from,next) =>{
  // 需要判断token存不存在
  const token = Cookie.get('token')
  // token不存在，说明当前用户未登录，应该跳转到登录页
  if(!token && to.name!=='login'){
    next({name:'login'})
  }else if(token && to.name ==='login'){ // token存在，说明用户点击登录，此时跳转到首页
    next({name:'home'})
  }else{
    next()
  }


  // if(token){
  //   next({naem:'home'})
  // }
})

new Vue({
  router,
  store,
  render: h => h(App),
  // created(){
  //   store.commit('addMenu',router)
  // }
}).$mount('#app')
