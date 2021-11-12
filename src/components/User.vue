<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params}}</h2>
    <h2>{{$route.params.userid}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      message: '你好啊！'
    }
  },
  computed: {
    userId() {
      //获取userId类似于路由传参-----userid取决于router的path后面拼接的属性内容
      //this.$route---取得是router对象中routes路由集中活跃的路由
      return this.$route.params.userid
    },
  },
  methods: {
    btnClick() {
      console.log("router:",this.$router);
      console.log("route",this.$route);
    },
  },
  created() {
    console.log("User created")
  },
  destroyed() {
    console.log("User destroyed")
  }
}
</script>

<style scoped>

</style>