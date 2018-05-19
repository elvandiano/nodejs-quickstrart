/**
 * Created by f.putra on 19/05/18.
 */
import { createApp } from './app'

// client-specific bootstrapping logic...

const { app } = createApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')