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
    // this.$axios.get('/user/login').then((res)=>{
    //   console.log(res)
    //   this.res = res;
    // });
  }
  }
</script>

<style>
@import './assets/scss/reset.scss'
</style>
