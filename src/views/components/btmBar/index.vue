<template>
  <div class="footBar">
    <ul>
      <li @click="getActive()">指南</li>
      <li @click="getActive()">基础组件</li>
      <li @click="getActive()">视图组件</li>
      <li @click="getActive()">其他</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data(){
      return{
        barList:[
          {
            name:'指南',
            value:'0',
            active:true
          },
          {
            name:'基础组件',
            value:'0',
            active:true
          },
          {
            name:'视图组件',
            value:'0',
            active:true
          },
          {
            name:'其他',
            value:'0',
            active:true
          }
        ]
      }
    }
  };
</script>
<style lang="scss">
  .footBar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 12px;
    >ul{
      overflow: hidden;
      height: 44px;
      >li{
        border-top: 1px solid #ddd;
        float: left;
        width: 25%;
        line-height: 44px;
        &:active{
          background-color: #ccc;
          color: blue;
        }
      }
    }
  }
</style>
