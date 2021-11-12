//配置路由相关信息
import VueRouter from "vue-router";
import Vue from 'vue';
// import Home from "@/components/Home";
// import About from "@/components/About";
// import User from "@/components/User";

//不用import引入，使用路由的懒加载
//路由的懒加载
// const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

//1.通过Vue.use(插件）,安装插件
Vue.use(VueRouter)


//2.创建路由对象
//配置映射关系---注意是routes而不是routers否则router-view不显示
const routes= [
  {
    //打开软件首先打开的是APP.vue这个页面，将首页设置为App.vue打开时渲染出来即设置首页即默认页面
    path: '',
    //redirect:重定向--path缺损时重定向到Home页面，即默认页面为Home页面
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../components/Home'),
    // component: Home
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: () => import('../components/HomeNews')
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage')
      }
    ],
    //meta: 元数据（描述数据的数据）
    meta: {
      title: '首页'
    },
    // 路由独享守卫-----进入该路由之前进行的操作
    beforeEnter: (to , from , next) =>{
      console.log("路由独享守卫");
      next()
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    //动态拼接url
    path: '/user/:userid',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: () => import('../components/Profile'),
    meta: {
      title: '档案'
    }
  }
]
const router =new VueRouter({
//  配置路由和组件之间的应用关系
  routes,
  //将router默认的hash改为history模式-----即网址去掉了#号
  mode: 'history',
  //统一定义router-link被点击时即active状态时的class属性name---即active
  linkActiveClass: 'active'
})

//导航守卫-----前置守卫（guard）全局守卫
//监听全局的router跳转---router跳转一次则调用一次beforeEach
router.beforeEach((to, from, next) => {
//  从from跳转到to
//  页面跳转后页面title随之改变
  document.title = to.meta.title
  // console.log("from:",from)
  // console.log("to:",to);
  //next()是必须调用的
  next()
})

//导航守卫------后置钩子（hook）全局守卫
// router.afterEach((to,from) => {
//   console.log(".......",to,from)
// })

//将router对象传入到实例中----将router挂载到main.js里
export default router

