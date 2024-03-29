import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
import permission  from './mockServeData/permission'
//定义mock请求拦截
Mock.mock('http://localhost:8080/#/api/home/getData',homeApi.getStatisticalData)

//用户列表的数据
// Mock.mock('http://localhost:8080/#/api/user/add', 'post',user.createUser)
// Mock.mock('http://localhost:8080/#/api/user/edit','post',user.updateUser)
// Mock.mock('http://localhost:8080/#/api/user/del','post',user.deleteUser)
// Mock.mock('http://localhost:8080/#/api/user/getUser',user.getUserList)

Mock.mock('/api/user/add', 'post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
// Mock.mock('/api/user/getUser',user.getUserList)
Mock.mock(/api\/user\/getUser/, user.getUserList)
Mock.mock(/api\/permission\/getMenu/, 'post',permission.getMenu)



