import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vueBootstrap from './plugins/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  vueBootstrap,
  render: h => h(App)
}).$mount('#app')
