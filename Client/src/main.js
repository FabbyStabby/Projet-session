import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

import './assets/main.css'
library.add(faTwitter, faFacebook, faInstagram)

const app = createApp(App)
app.component('Fa', FontAwesomeIcon)
app.use(router)

app.mount('#app')
