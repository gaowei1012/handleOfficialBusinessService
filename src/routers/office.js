const router = require('koa-router')()
const controller = require('../controller/office')

router.post('/api/office/getAllEvent', controller.getAllEvent)
router.post('/api/office/insterClockIn', controller.insterClockIn)
router.post('/api/office/askLeave', controller.askLeave)

module.exports = router
