const mysql = require('mysql')

const db = require('./db')


class Pool {
    constructor() {
        this.pool = this.init()
    }
    init() {
        return mysql.createPool(db)
    }
}

module.exports = new Pool(db)