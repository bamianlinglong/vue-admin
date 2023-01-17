const express = require('express')
const router = express.Router()
const DB = require('../query')
const db = new DB()
db.tableName = 'n_user'   // 查询n_user表

// console.log('fsfddsfsdfsd', db)

router.get('/login', function(req, res) {
    console.log(req)
    console.log(res)
    // const ids = { id: 1 }
    // db.insert(ids).then(result => {
    //     // console.log('dasdsadasdad', res)
    //     res.send(result)
    // })
})

module.exports = router