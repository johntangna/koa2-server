const tableName = 'customer'
const utils = require('../koa_utils/utils.js')
module.exports = {
  getAllData: (ctx) => {
    return utils.query(`select * from ${tableName}`)
  },
  getCountByCondition: (ctx, postData) => {
    return utils.query(`select count(1) from ${tableName} where username=? and realname=?`, [postData.username, postData.realname])
  },
  updatedCustomerOpenId: (ctx, postData) => {
    return utils.query(`update ${tableName} set open_id= ? where username= ? and realname= ?`, [postData.openId, postData.username, postData.realname])
  }
}