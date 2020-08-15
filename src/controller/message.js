const MessageModal = require('../db/mysql')

/* 获取通知信息 */

exports.getInfoData = async (ctx, next) => {

    await MessageModal.findMessage()
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

    await next()
}

/* 插入信息 */
exports.insertMessage = async (ctx, next) => {
    const { title, content, status } = ctx.request.body
    let create_at = new Date()

    if ((title && content && status) !== null) {
        await MessageModal.insertMessage([title, content, status, create_at])
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
