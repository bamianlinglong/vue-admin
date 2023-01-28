const express = require('express')
const router = express.Router()
const DB = require('../query')
const db = new DB()
db.tableName = 'n_user'   // 查询n_user表

// console.log('fsfddsfsdfsd', db)

router.get('/login', function(req, res) {
    console.log(req.query.username)
    db.fetchRow({username: req.query.username}).then(result => {
        if (result == undefined) {
            res.send({ code: 400, msg: '该用户不存在' }).end()
        } else {
            if (result.password == req.query.password) {
                res.send({ code: 0, msg: '请求成功' }).end()
            } else {
                res.send({ code: 400, msg: '密码不正确' }).end()
            }
        }
    }).catch(err => {
        console.log(err)
        res.send({ code: 500, msg: '请求失败', error: err }).end()
    })
})

module.exports = router