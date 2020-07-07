import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//* Element UI
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/reset.css'

//* Font-Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubSquare, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub,
  faGithubSquare,
  faLinkedin,
  faLinkedinIn
)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
