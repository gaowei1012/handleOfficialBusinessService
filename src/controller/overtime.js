
const OverTimeModal = require('../db/mysql')

/* 加班申请 */
exports.insertOverTime = async (ctx, next) => {
    const { username, date, reason, address, remarks } = ctx.request.body
    const create_at = new Date()
    if ((username && date && reason && address && remarks) !== null) {
        await OverTimeModal.insertOverTime([username, date, address, reason, remarks, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    data: err
                }
            })
    } else {
        ctx.body = '字段非法'
    }

    await next()
}

