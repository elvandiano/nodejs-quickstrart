/**
 * Created by f.putra on 19/05/18.
 * It is recommended to use the official vue-router for this purpose.
 */
let Vue = require('vue')
let Router = require('vue-router')

Vue.use(Router)

module.exports = createRouter = () =>{
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', component: () => import('./../components/Home.vue')},
        ]
    })
}