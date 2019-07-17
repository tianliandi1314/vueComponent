import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VvUI from 'vvui'
import 'vvui/packages/theme-default/lib/index.css'
// import '@/components/style/index.scss'
console.log(VvUI)
Vue.config.productionTip = false
Vue.use(VvUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
