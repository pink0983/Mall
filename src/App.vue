<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      res:{}
 
    }
  },
  mounted(){
    // storage.serItem('a',1 ) 
    console.log(this.$axios);
    this.$axios.get('/user/login').then((res)=>{
      console.log(res)
      this.res = res;
    });
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
