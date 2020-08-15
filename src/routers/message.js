
const router = require('koa-router')()
const controller = require('../controller/message')

router.post('/api/message/addInfoData', controller.insertMessage)
router.post('/api/message/findInfo', controller.getInfoData)

module.exports = router
