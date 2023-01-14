const express = require('express')
const router = express.Router()
const DB = require('../query')
const db = new DB()
db.tableName = 'n_user'   // 查询n_user表

// console.log('fsfddsfsdfsd', db)

router.get('/login', function(req, res) {
    // console.log()
    // res.send('房间开始减肥老师讲故事就搞定了发')
    // console.log(req)
    const data = { 
        // id: 1,
        username: 'lj',
        // password: 123456
    }
    const ids = { id: 1 }
    db.count(ids).then(result => {
        // console.log('dasdsadasdad', res)
        res.send(result)
    })
    // res.send({ code: 5, message: '请求成功' })
})

module.exports = router