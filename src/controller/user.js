const UserModal = require('../db/mysql')
const { encrpty, decrpty } = require('../utils/crpty')
const {jwtSecret, tokenExpiresTime} = require('../config')
const jwt = require('jsonwebtoken')

/* 获取用户信息 */
exports.getUserInfo = async (ctx, next) => {
    const data = []
    ctx.body = {
        code: 0,
        data: data
    }

    await next()
}

/* 用户注册 */
exports.register = async (ctx, next) => {
    const create_at = new Date()
    let { username, password } = ctx.request.body;
    // 写入数据库用户名密码不能为空
    if ((username && newPassword) !== null) {
        await UserModal.insterUserData([username, password, create_at])
            .then(res => {
                ctx.body = {
                    code: 1,
                    data: '注册成功'
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    data: err
                }
            })
    } else {
        ctx.body = '请填写正确的用户名密码'
    }

    await next()
}

/* 用户登录 */
exports.login = async (ctx, next) => {
    let {username, password} = ctx.request.body
    let payload = {
        exp:Date.now() + tokenExpiresTime,
        name: username
    }
    if ((username && password) !== null) {
        await UserModal.findUserLogin(username, password)
            .then(res => {
                // 用户登录成功，返回token
                let token = jwt.sign(payload, jwtSecret)
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    token: token
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    message: 'err',
                    data: err
                }
            })
    } else {
        ctx.body = {
            code: -1,
            data: '用户名密码不能为空'
        }
    }
   
    await next()
}
