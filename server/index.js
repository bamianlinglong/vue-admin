const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const mysql = require('mysql')

const app = express()

const userApi = require('./api/user')


// 跨域设置
app.all("*", function (req, res, next) {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*"); // 添加这一行代码，代理配置不成功
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since")
    next();
})

// 下面
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', userApi)

app.use(express.static(path.join(__dirname, './dist')))   // 引入静态文件，运行node index 时可以访问



app.listen(3000, () => { console.log('监听连接....') })