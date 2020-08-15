const router = require('koa-router')()
const constroller = require('../controller/overtime')

router.post('/api/overtime/insertOverTime', constroller.insertOverTime)

module.exports = router
