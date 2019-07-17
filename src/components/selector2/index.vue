<template>
  <div class="selectBox"  >
    <input readonly="readonly" type="text" style="width:100%;height: 100%;position: absolute;left: 0;top: 0;opacity: 0;z-index: 99999" @click="getSex()"  @blur.prevent="test()" >
    <span :class="showSexCheckBox>1 ? 'active': ''">{{itemObj.label}}</span>
    <ul v-show="showSexCheckBox === 2 || showSexCheckBox === 1">
      <li v-for="(item,index) in selectList" :key="index" class="border1pxBg" @click="xzxb(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showSexCheckBox:0,
        itemObj:{
          label:'',
          value:''
        }
      }
    },
    props: {
      selectList:{
        type:Array,
        required:true,
        default: function () {
          return [
            {
              'label':'先生',
              'value':'0',
              // 'defaultSelect':true

            },
            {
              'label':'女士',
              'value':'1',
              'defaultSelect':true
            }
          ]
        }
      },
    },
    watch:{
      selectList:{
        handler(){
          this.selectList.forEach((item,index) =>{
              if(item.defaultSelect){
                this.itemObj = item
              }
            }
          )
        },
        immediate: true,
        deep:true
      }
    },
    mounted() {
    },
    methods: {
      xzxb(item){
        console.log(item)
        this.showSexCheckBox = 2
        this.itemObj = item
        setTimeout(()=>{
          this.showSexCheckBox = 3
        },100)
      },
      test(){
        setTimeout(()=>{
          if(this.showSexCheckBox === 1){
            this.showSexCheckBox = 0
          }else{
            this.showSexCheckBox = 3
          }
        },100)
      },
      getSex(){
        if(this.showSexCheckBox == 0){
          this.showSexCheckBox = 1
        }else{
          this.showSexCheckBox = 2
        }
        return
      }
    }
  }
</script>

<style scoped lang="less" >
  .selectBox > span{
    color: #ccc;
    text-align: left;
    padding-left: 30/75rem;
    &.active{
      color: #333;
    }
  }
  .selectBox{
    //用div的样式代替select的样式
    width: 200/75rem !important;
    height: 82/75rem !important;
    //盒子阴影修饰作用,自己随意
    position: relative;
    float: right;
    margin-right: 30/75rem;
    border-radius: 8/75rem;
    font-size: 32/75rem;
    border: 1px solid #ddd;
  }
  .selectBox > span{
    position: absolute;
    color: #ccc;
    padding-left: 30/75rem;
    line-height: 82/75rem;
    display: block;
    &.active{
      color: #333;
    }
  }
  .selectBox:after{
    content: "";
    width: 25/75rem;
    height: 25/75rem;
    background: url(./images/xjt.png) no-repeat center;
    -webkit-background-size: 25/75rem 25/75rem;
    background-size: 25/75rem 25/75rem;
    //通过定位将图标放在合适的位置
    position: absolute;
    right: 20px;
    top: 30%;
    //给自定义的图标实现点击下来功能
    pointer-events: none;
  }
  .selectBox>{
    >ul{
      color: #333;
      position: absolute;
      top:90/75rem;
      right: 0;
      box-shadow: 1px 1px 1px 1px #ddd;
      background: #fff;
      width: 75%;
      >li{
        height: 78/75rem;
        line-height: 78/75rem;
        z-index: 90;
        text-align: center;
        &:active{
          background-color: #fafafa;
        }
      }
    }
  }
</style>