import './global.scss'

import { createApp } from 'vue'
import App from './App.vue'

import Tree from './Tree.vue'
import Config from './Config.vue'
import Table from './Table.vue'
import LayoutTree from './LayoutTree.vue'
import LayoutTableFlat from './LayoutTableFlat.vue'
import LayoutTableMerge from './LayoutTableMerge.vue'

const app = createApp(App)

app.component('Tree', Tree)
app.component('Config', Config)
app.component('Table', Table)
app.component('LayoutTree', LayoutTree)
app.component('LayoutTableFlat', LayoutTableFlat)
app.component('LayoutTableMerge', LayoutTableMerge)

app.mount('#app')
