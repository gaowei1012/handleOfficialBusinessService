const OfficeModal = require('../db/mysql')


/**
 * 获取打卡记录
 * 查询条件: 时间的起末
 * 一天中，已经打开为1，未打卡为0
 */
exports.getAllEvent = async (ctx, next) => {
    const {id} = ctx.request.body
    if (id !== null) {
        await OfficeModal.getAllClockIn(id)
            .then(ret => {
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
        ctx.body = '用户查询id不能为空'
    }
    
    await next()
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
 * 请假申请
 */
exports.insterAskLeave = async (ctx, next) => {
    const {username, date, reason, address, remarks} = ctx.request.body
    const create_at = new Date()
    if ((username && date && reason && address && remarks) !== null) {
        await OfficeModal.insertLeave([username, date, address, reason, remarks, create_at])
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
        ctx.body = '请填写正确的字段'
    }
    
    await next()
}

/* 查询当前用户请假 */
exports.getAskLeaveById = async (ctx, next) => {
    const { id } = ctx.request.body
    console.log('id', id)
    if (id !== null) {
        await OfficeModal.findLeaveById(id)
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
        ctx.body = '请输入正确的查询参数'
    }

    await next()
}