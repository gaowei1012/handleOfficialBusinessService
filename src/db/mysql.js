const mysql = require('mysql')
const { database } = require('../config')
const { users, clock, askleave, buiness, overtime } = require('./init')

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.PORT
})

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

const createTable = (sql) => {
    return query(sql, [])
}

createTable(users)
createTable(clock)
createTable(askleave)
createTable(buiness)
createTable(overtime)

// 用户注册
exports.insterUserData = (val) => {
    const _sql = "insert into users set username=?,password=?,create_at=?;";
    return query(_sql, val)
}

// 获取用户信息
exports.getUserInfo = (id) => {
    const _sql = `select * from users where id=${id};`;
    return (_sql)
}

// 用户登录
exports.getUserLogin = (username, password) => {
    const _sql = `select * from users where username=${username},password=${password};`;
    return query(_sql)
}

// 用户打卡
exports.insterClockIn = (val) => {
    const _sql = 'inster into office set username=?, create_at=?, update_at=?, address=?;';
    return query(_sql, val)
}

// 获取当前用户所有打卡信息
exports.getAllClockIn = (id) => {
    const _sql = `select * from office where id=${id};`;
    return query(_sql)
}

// 插入请假
exports.insertLeave = (val) => {
    const _sql = 'insert into askleave set username=?, date=?, address=?, reason=?, remarks=?, create_at=?;';
    return query(_sql, val)
}


// 查询请假
exports.findLeaveById = (id) => {
    const _sql = `select * from askleave where id=${id};`
    return query(_sql)
}

// 插入出差
exports.insterBusiness = (val) => {
    const _sql = 'insert into buiness set username=?, date=?, address=?, reason=?, remarks=?, create_at=?;';
    return query(_sql, val)
}

// 查询出差
exports.findBusinessById = (id) => {
    const _sql = `select * from buiness where id=${id};`
    return query(_sql)
}

// 加班申请
exports.insertOverTime = (val) => {
    const _sql = 'insert into overtime set username=?, date=?, address=?, reason=?, remarks=?, create_at=?;';
    return query(_sql, val)
}
