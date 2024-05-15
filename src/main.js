import './assets/scss/all.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap 5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min';

const app = createApp(App)
app.use(router)
app.mount('#app')
