const express = require('express')
const router = express.Router()
const DB = require('../query')
const verifyToken = require('../common/verify-token')
const db = new DB()
db.tableName = 'n_navbar'   // 查询n_user表


router.get('/navbarList', function(req, res) {
    db.fetchRow({}).then(result => {
        // if (result == undefined) {
        //     res.send({ code: 400, msg: '该用户不存在' }).end()
        // } else {
        //     if (result.password == req.query.password) {
        //         verifyToken.setToken(result.id, result.username).then(token => {
        //             const data = { ...result, token: token }
        //             res.send({ code: 0, data: data, msg: '请求成功', success: true }).end()
        //         })
        //     } else {
        //         res.send({ code: 400, msg: '密码不正确' }).end()
        //     }
        // }
    }).catch(err => {
        res.send({ code: 500, msg: '请求失败', error: err }).end()
    })
})

module.exports = router