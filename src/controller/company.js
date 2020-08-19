const CompanyModal = require('../db/mysql')

/**
 * 插入数据
 * @param {*} ctx 
 * @param {*} next 
 */
exports.insertCompany = async (ctx, next) => {
    let { title, content, detail, url } = ctx.request.body
    let create_at = new Date()
    if ((title && content && detail) !== null) {
        await CompanyModal.insertCompany([title, detail, content, url, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    message: 'ERR',
                    data: err
                }
            })
    } else {
        ctx.body = '非法字段'
    }

    await next()
}


/**
 * 获取所有
 * @param {*} ctx 
 * @param {*} next 
 */
exports.findCompanyAll = async (ctx, next) => {
    await CompanyModal.findCompanyAll()
        .then(ret => {
            ctx.body = {
                code: 1,
                message: 'OK',
                data: ret
            }
        })
        .catch(err => {
            ctx.body = {
                code: -1,
                message: 'ERR',
                data: err
            }
        })

    await next()
}


/**
 * 获取单个详情
 * @param {*} ctx 
 * @param {*} next 
 */
exports.findCompanyDetail = async (ctx, next) => {
    let { id } = ctx.request.body
    console.log('id--', id)
    if (id !== null) {
        await CompanyModal.findCompanyById(id)
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: ret
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    message: 'ERR',
                    data: err
                }
            })

    } else {
        ctx.body = '字段非法'
    }

    await next()
}