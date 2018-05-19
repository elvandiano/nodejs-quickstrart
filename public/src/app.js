/**
 * Created by f.putra on 19/05/18.
 */
let Vue = require('vue')
const App = () => import('./App')

// export a factory function for creating fresh app, router and store
// instances
let createRouter = require('./router/router')

module.exports = createApp = () => {
    // create router instance
    const router = createRouter()

    const app = new Vue({
        // inject router into root Vue instance
        router,
        components: { App },
        template: h => h(App)
    })

    // return both the app and the router
    return {app, router}
}