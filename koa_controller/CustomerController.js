const router = require('@koa/router')()
const customerService = require('../koa_service/CustomerService.js')
router.post('/getCountByCondition', customerService.getCountByCondition)
router.get('/getAllData', customerService.getAllCustomer)
module.exports = router