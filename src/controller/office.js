const OfficeModal = require('../db/mysql')


/**
 * 获取打卡记录
 * 一天中，已经打开为1，未打卡为0
 */
exports.getAllEvent = async (ctx, next) => {
    ctx.body = {
        code: 1,
        data: []
    }
}

/**
 * 打卡记录
 */

exports.insterClockIn = async (ctx, next) => {
    const {username, create_at, update_at, address} = ctx.request.body
    
    if ((username && create_at && update_at && address) !== null) {
        await OfficeModal.insterClockIn([username, create_at, update_at, address])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
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

/**
 * 请假
 */
exports.askLeave = async (ctx, next) => {
    ctx.body = {
        code: 1,
        data: []
    }
}