const router = require('koa-router')()
const controller = require('../controller/business')

router.post('/api/buiness/insterBusiness', controller.insterBusiness)
router.post('/api/buiness/findBuiness', controller.findBuiness)

module.exports = router
