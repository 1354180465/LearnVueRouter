<template>
  <div>
    <h2>我是首页</h2>
    <p>我是组件内容:{{message}}</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data (){
    return {
      message: '你好啊！',
      path: '/home/news'
    }
  },
  created() {
    console.log('home create');
  },
  destroyed() {
    console.log('home destroyed');
  },
  activated() {
    this.$router.push(this.path)
  },
  // deactivated() {
  //
  // }
  //组件内导航守卫
  beforeRouteLeave (to, from, next){
    this.path =this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>