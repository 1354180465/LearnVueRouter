<template>
  <div id="app">
    <h2>我是APP</h2>
    <router-link to="/home" tag="button" replace>首页 </router-link>
<!--    <router-link to="/about" replace active-class="active">关于</router-link>-->
<!--    active-class="active"属性可在创建router时统一定义-->
    <router-link to="/about" replace>关于</router-link>

    <button @click="homeClick">首页-代码跳转</button>
    <button @click="aboutClick">关于-代码跳转</button>

<!--    动态router(同时意味着路由传参userid）-->
    <router-link :to="'/user/'+userid">我的</router-link>
<!--    <button @click="userClick">我的</button>-->

<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{path: './profile', query:{name:'池玮洺',age: 19}}">档案</router-link>-->
    <button @click="profileClick">档案</button>

<!--    keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染-->
<!--    exclude属性将选择的组件排除在外，使其在页面切换时频繁的创建和销毁-->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      userid: 'cwm'
    }
  },
  methods: {
    homeClick() {
    //  通过代码的方式修改路由 vue-router
    //  注意:不可跳转到当前页面
    //   this.$router.push('/home')
    //  跳转时传参
    //   this.$router.push({path:'/home/$userid'})
    //  跳转后不可返回
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    // userClick() {
    //   this.$router.push('/user'+ this.userid)
    // },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: '池玮洺',
          age: 19,
        }
      }).catch(err =>{
        console.log("警告:",err);
      })
    }
  }
}
</script>

<style>
  /*.router-link-active{*/
  /*  color: red;*/
  /*}*/
  .active{
    color: red;
  }
</style>
