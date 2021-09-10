import { createApp } from 'vue'
import App from './App.vue'

import Tree from './Tree.vue'
import Config from './Config.vue'
import Table from './Table.vue'

const app = createApp(App)

app.component('Tree', Tree)
app.component('Config', Config)
app.component('Table', Table)

app.mount('#app')
