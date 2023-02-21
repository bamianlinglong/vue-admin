const jwt = require('jsonwebtoken')
const jwtSecret = 'add token'

const setToken = (id, username) => {
    return new Promise((resolve, reject) => {
        const rule = { id: id, username: username }
        const token = jwt.sign(rule, jwtSecret, { expiresIn: '2h' })
        resolve(token)
    })
}

const getToken = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject('token 空')
        } else {
            const info = jwt.verify(token, jwtSecret)
            resolve(info)
        }
    })
}

module.exports = {
    setToken,
    getToken
}