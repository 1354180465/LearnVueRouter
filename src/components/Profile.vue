<template>
  <div>
    <h2>我是Profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data () {
    return {
      message: '你好啊！'
    }
  },
  methods: {

  },
  created() {
    console.log("Profile created")
  },
  destroyed() {
    console.log("Profile destroyed")
  }
}
</script>

<style scoped>

</style>