let express = require('express');
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./../public/src/app')
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // const context = {url: req.url}
    // renderer.renderToString(createApp(context), (err, html) => {
    //     if (err) {
    //         if (err.code === 404) {
    //             res.status(404).end('Page not found')
    //         } else {
    //             res.status(500).end('Internal Server Error')
    //         }
    //     } else {
    //         res.end(html)
    //     }
    // })
    res.send("HELLO")
});

module.exports = router;
