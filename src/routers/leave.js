const router = require('koa-router')()
const controller = require('../controller/office')

router.post('/api/leave/insterLeave', controller.insterAskLeave)
router.post('/api/leave/getAllLeaveById', controller.getAskLeaveById)

module.exports = router