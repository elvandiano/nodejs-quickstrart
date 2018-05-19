let express = require('express');
let userRouter = express.Router();
let User = require('../core/schema/user_schema')

/* GET users listing. */
userRouter.get('/',  (req, res, next) => {
    User.find((err, result) => {
        res.send(result);
    })
});

userRouter.post('/save', (req, res, next) => {
    let params = new User({
        name: req.body.name,
        password: req.body.password
    })
    params.save((err, params) => {
        res.send(params);
    })
});

userRouter.patch('/update', function (req, res, next) {
    User.updateOne({
        _id: req.body.id
    }, req.body.update, (err, result) => {
        res.send(result);
    })

});

userRouter.delete('/delete', function (req, res, next) {
    User.deleteOne({_id: req.query.id}, (err, result) => {
        if (result.ok === 1) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
});

module.exports = userRouter;