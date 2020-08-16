
const ResinModal = require('../db/mysql')

/* 添加离职信息 */
exports.insertResign = async (ctx, next) => {
    let {username,start_time,end_time,reason,remarks} = ctx.request.body
    let create_at = new Date()
    if ((username && start_time && end_time && reason && remarks) !== null) {
        await ResinModal.insertResign([username, start_time, end_time, reason, remarks, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: err
                }
            })
    } else {
        ctx.body = '字段非法'
    }

    await next()
}
