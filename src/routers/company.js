
const router = require('koa-router')()
const controller = require('../controller/company')

router.post('/api/company/insertCompany', controller.insertCompany)
router.post('/api/company/findCompanyAll', controller.findCompanyAll)
router.post('/api/company/findCompanyDetail', controller.findCompanyDetail)

module.exports = router
