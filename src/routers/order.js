const router = require('koa-router')()
const controller = require('../controller/order')

router.post('/api/order/getAllOrder', controller.getAllOrder)
router.post('/api/order/addOrderOnes', controller.addOrderOnes)
router.post('/api/order/getOrderById', controller.getOrderById)
router.post('/api/order/deleteOrderById', controller.deleteOrderById)

module.exports = router
