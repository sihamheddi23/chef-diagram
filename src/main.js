import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store/index'
import cytoscape from 'cytoscape';
import klay from 'cytoscape-klay';

const app=createApp(App)
app.use(store)
app.mount('#app')

cytoscape.use( klay );