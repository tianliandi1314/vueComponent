<template>
  <div id="app">
    <router-view/>
    <foot-bar></foot-bar>
  </div>
</template>
<script>
  import footBar from '_vc/btmBar'
  export default  {
    data(){
      return {

      }
    },
    components:{
      footBar
    }
  }
</script>
<style>
  @import "./assets/css/base-min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
