const customerDao = require('../koa_dao/Customer')
const utils = require('../koa_utils/utils')

exports.getAllCustomer = async (ctx) => {
  try {
    let result = await customerDao.getAllData(ctx)
    ctx.body = utils.resultSuccessJson(undefined, undefined, result)
  } catch (error) {
    ctx.body = utils.resultErrorJson(undefined, error, {})
  }
}

exports.getCountByCondition = async (ctx) => {
  let username = ctx.request.body.username || ''
  let realname = ctx.request.body.realname || ''
  if (!username || !realname) {
    ctx.body = utils.resultErrorJson(undefined, '账号或公司不能为空', {})
  }
  try {
    let result = await customerDao.getCountByCondition(ctx, { username, realname })
    ctx.body = utils.resultSuccessJson(undefined, undefined, result)
  } catch (error) {
    ctx.body = utils.resultErrorJson(undefined, error, {})
  }
}