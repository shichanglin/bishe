import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Console from './views/Console.vue'
import Users from './views/Users.vue'
import Articles from './views/Articles.vue'
import Echarts from './views/Echarts.vue'
// import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import China from './views/foreEpidemic/china.vue'
import World from './views/foreEpidemic/world.vue'
import School from './views/others/school.vue'
import Owen from './views/others/owen.vue'
import Happy from './views/others/happy.vue'
import Warning from './views/warning.vue'

const Login =()=> import('@/views/Login.vue');
const forUser = ()=> import('@/views/users/forUser.vue');
const userDatas =()=> import('@/views/users/userDatas.vue');
const userComplain =()=>import('@/views/userComplain.vue');
  //路由懒加载

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  components:{
    Login:Login,
    forUser:forUser,
    userDatas:userDatas,
    userComplain:userComplain,
  },
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/console',
          name: 'main',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/warning',
          name: 'warning',
          component: Warning
        },
        {
          path:'/userComplain',
          name:"userComplain",
          component:userComplain
        },
        {
          path: '/forUser',
          name: 'forUser',
          component: forUser
        },
        {
          path:'/userDatas',
          name:'userDatas',
          component:userDatas
        },
        

        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        },
        {
          path:'/china',
          name:"china",
          component:China

        },
        // {
        //   path:'/chinaNow',
        //   name:"chinaNow",
        //   component:chinaNow

        // },
        {
          path:'/world',
          name:'world',
          component:World
        },
        {
          path:'/school',
          name:'school',
          component:School
        },
        {
          path:'/owen',
          name:'owen',
          component:Owen
        },
        {
          path:'/happy',
          name:'happy',
          component:Happy
        },
        {
          path: '/404',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const LOGINURL = '/login'
  let url, user

  url = to.path
  user = sessionStorage.getItem('user')

  if (url === LOGINURL) {
    sessionStorage.removeItem('user')
  }

  // 判断是否登录
  if (!user && url !== LOGINURL) {
    next({ path: LOGINURL })
  } else {
    next()
  }
})

export default router
