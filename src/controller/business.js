const BusinessModal = require('../db/mysql')


/* 增加出差申请事项 */

exports.insterBusiness = async (ctx, next) => {
    const { username, date, reason, address, remarks } = ctx.request.body
    console.log('ctx', ctx.request.body)
    const create_at = new Date()
    if (username && date && address) {
        await BusinessModal.insterBusiness([username, date, address, reason, remarks, create_at])
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
        ctx.body = '字段非法'
    }

    await next()
}

/* 查找出差申请记录 */
exports.findBuiness = async (ctx, next) => {

    const { id } = ctx.request.body
    if (id !== null) {
        await BusinessModal.findBusinessById(id)
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
        ctx.body = '字段非法'
    }

    await next()
}