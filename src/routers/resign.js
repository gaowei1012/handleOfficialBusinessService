const router = require('koa-router')()
const controller = require('../controller/resign')

router.post('/api/resign/insertResign', controller.insertResign)

module.exports = router
