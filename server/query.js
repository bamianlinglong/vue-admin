const Pool = require('./mysql')
const pool = Pool.init()

/**
 * 数据模块
 */
class DB {
    /**
     * 构造方法
     */
    constructor(tableName) {
        this.tableName = tableName
        this.pool = pool
    }

    /**
     * 数据查询接口
     * @param tableName  表名
     * @param idJson     查询条件
     * @return {data<Array>}  // 返回的res.data是数组
     * @return {Promise<any>}
     */
    fetchRow (idJson) {
        const _that = this
        const { tableName, pool } = _that
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${tableName} WHERE ?`
            pool.query(sql, idJson, function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res.pop())
                }
            })
        })
    }

    /**
     * 数据插入接口
     * @param tableName  表名
     * @param rowInfo    插入信息
     * @return {data<Object>}  // 返回的res, 不是res.data
     * @return {Promise<any>}
     * 例子：INSERT INTO n_user SET username='demo',password=654321
     */
    insert(rowInfo) {
        const _that = this
        const { tableName, pool } = _that
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO ${tableName} SET ?`
            pool.query(sql, rowInfo, function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    /**
     * 数据修改接口
     * @param tableName  表名
     * @param idJson     查询条件
     * @param rowInfo    查询信息
     * @return {data<Object>}  // 返回的res, 不是res.data
     * @return {Promise<any>}
     * 例子：UPDATE n_user SET username='admin' WHERE id=1
     */
    update(idJson, rowInfo) {
        const _that = this
        const { tableName, pool } = _that
        return new Promise((resolve, reject) => {
            const sql = `UPDATE ${tableName} SET ? WHERE ?`
            pool.query(sql, [rowInfo, idJson], function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    /**
     * 数据删除接口
     * @param tableName  表名
     * @param idJson     查询条件
     * @return {data<Object>}  // 返回的res, 不是res.data
     * @return {Promise<any>}
     * 例子：DELETE FROM n_user WHERE id=1
     */
    remove(idJson) {
        const _that = this
        const { tableName, pool } = _that
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM ${tableName} WHERE ?`
            pool.query(sql, idJson, function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    /**
     * 统计
     * @param tableName  表名
     * @param idJson     查询条件
     * @return {data<Object>}  // 返回的res, 不是res.data
     * @return {Promise<any>}
     * 例子：SELECT COUNT(*) as count FROM n_user WHERE id=1
     */
    count(idJson) {
        const _that = this
        const { tableName, pool } = _that
        return new Promise((resolve, reject) => {
            const sql = `SELECT COUNT(*) as count FROM ${tableName} WHERE ?`
            pool.query(sql, idJson, function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res.pop())
                }
            })
        })
    }

    /**
     * 自定义查询
     * @param sql
     * @return {Promise<any>}
     */
    queryStr(sql) {
        const _that = this
        const { pool } = _that
        return new Promise((resolve, reject) => {
            pool.query(sql, function(err, res) {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    /**
     * 复合查询
     * @param tableName
     * @param whereJson
     * @param orderByJson
     * @param limitArr
     * @param selectStr
     * @return {Promise<any>}
     */
    fetchAll(sql) {
        const addWhere = whereJson['add']
        const orWhere = whereJson('or')
        const betArr = whereJson('between')
        const addArr = []
        const orArr = []

        for(const key in addWhere) {
            const snap = typeof addWhere[key] === 'string' ? '"' : ''
        }
    }
}


module.exports = DB