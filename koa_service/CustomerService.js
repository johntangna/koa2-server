const customerDao = require('../koa_dao/Customer')
const utils = require('../koa_utils/utils')

exports.getAllCustomer = async (ctx) => {
  try {
    let result = await customerDao.getAllData(ctx)
    ctx.body = utils.resultSuccessJson(undefined, undefined, result)
  } catch (error) {
    console.info(error.message)
    ctx.body = utils.resultErrorJson(undefined, error.message, {})
  }
}

exports.getCountByCondition = async (ctx) => {
  let username = ctx.request.body.username || ''
  let realname = ctx.request.body.realname || ''
  let opneId = ctx.request.body.openId || ''
  if (!username || !realname) {
    ctx.body = utils.resultErrorJson(undefined, '账号或公司不能为空', {})
  }
  try {
    let result = await customerDao.getCountByCondition(ctx, { username, realname })
    if (result[0]['count(1)']) {
      //查询到账号后，进行绑定openId
      result = await customerDao.updatedCustomerOpenId(ctx, { opneId, username, realname })
      ctx.body = utils.resultSuccessJson(undefined, "绑定成功", result)
    } else {
      ctx.body = utils.resultErrorJson(undefined, "无此账号，绑定失败!", result)
    }
  } catch (error) {
    console.info(error.message)
    ctx.body = utils.resultErrorJson(undefined, error.message, {})
  }
}